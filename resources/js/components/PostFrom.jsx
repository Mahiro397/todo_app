import React, { useState } from 'react';
import axios from 'axios';

function PostFrom( ) {

  //登録処理
    
  //新規登録用データ配列
  const [formData,setFormData] = useState({task_name:'',content:'',deadline:'',priority:'',});
   

  //入力値を一時保存
  const inputChange = (e) =>{
  const key = e.target.name;
  const value = e.target.value;
  formData[key] = value;
  let datas = Object.assign({},formData);
  setFormData(datas);
  console.log(formData);
  }

  const createPost = async() => {
    //空だと弾く
    if(formData == ''){
        return;
    }
    //入力値を投げる
    await axios
        .post('/api/post/create', {
            task_name: formData.task_name,
            content: formData.content,
            deadline: formData.deadline,
            priority: formData.priority,
           
        })
        .then((res) => {
            //戻り値をtodosにセット
            const tempPosts = posts
            tempPosts.push(res.data);
            setPosts(tempPosts)
            setFormData('');
        })
        .catch(error => {
            console.log(error);
        });      
       
}
  return (
    <form className="flex flex-col space-y-4">
    <textarea
        id="task_name"
        name="task_name"
        placeholder="タスク名"
        className="border rounded-md p-2 outline-none"
        onChange={inputChange}
    ></textarea>
    <textarea
        id="content"
        name="content"
        placeholder="内容"
        className="border rounded-md p-2 outline-none"
        onChange={inputChange}
    ></textarea>
    <textarea
        id="deadline"
        name="deadline"
        placeholder="期限日"
        className="border rounded-md p-2 outline-none"
        onChange={inputChange}
    ></textarea>



    
    <textarea
        id="priority"
        name="priority"
        placeholder="優先度"
        className="border rounded-md p-2 outline-none"
        onChange={inputChange}
    ></textarea>
    
    <button  className="mt-4 bg-gray-300 p-2" onClick={createPost}>
            登録
    </button>
</form>

  )
}

export default PostFrom