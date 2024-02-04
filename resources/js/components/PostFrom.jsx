import React, { useState } from 'react';
import axios from 'axios';
import { set } from 'immutable';

function PostFrom() {

    //登録処理

    //新規登録用データ配列
    const [formData, setFormData] = useState({ task_name: '', content: '', deadline: '', priority: '1', status: "説明会", });
    
    const [countData, setcountData] = useState(0);



    const increment = () => {
        setcountData(countData + 1);
    }

    const decrement = () => {
        setcountData(countData - 1);
    }

    //入力値を一時保存
    const inputChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;
        formData[key] = value;
        let datas = Object.assign({}, formData);
        setFormData(datas);
        //console.log(formData);
    }

    //登録ボタンクリック時にフォームに入力してた内容をララベルに渡す処理
    const createPost = async () => {
        //空だと弾く
        if (formData == '') {
            return;
        }
        //入力値を投げる
        await axios
            .post('/api/post/create', {
                task_name: formData.task_name,
                content: formData.content,
                deadline: formData.deadline,
                priority: formData.priority,
                status: formData.status,

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
                placeholder="企業名"
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
            <input
                id="deadline"
                name="deadline"
                placeholder="期限日"
                type="date"
                className="border rounded-md p-2 outline-none"
                onChange={inputChange}
            />


            <select
                id="priority"
                name="priority"
                placeholder="志望度"
                className="border rounded-md p-2 outline-none"
                onChange={inputChange}

            >
                <option hidden >志望度を選択してください</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>


            <select
                id="status"
                name="status"
                className="border rounded-md p-2 outline-none"
                onChange={inputChange}

            >
                <option value="説明会">説明会</option>
                <option value="ES">ES</option>
                <option value="面接">面接</option>
            </select>

            <button className="mt-4 bg-gray-300 p-2" onClick={createPost}>
                登録
            </button>
        </form>

    )
}

export default PostFrom