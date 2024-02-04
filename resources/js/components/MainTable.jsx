import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StateBtn from './StateBtn';
import Modal from './Modal';
import PostFrom from './PostFrom';

function MainTable() {
  //取得したAPIの状態を管理するuseState
  const [posts, setPosts] = useState([]);
  //編集ボタンをクリックしたときのモーダルの状態を管理useState
  const [modalOpen, setModalOpen] = useState(false);
  //タスクを選択して編集ボタンをクリックし編集ファームを表示した際に、選択したタスクのデータをファームのバリューに設定するためのuseState。
  const [editData, setEditData] = useState({ id: " ", task_name: '', content: '', deadline: '', priority: '', status: "", });
  //削除
  const [deleteData, setdeletData] = useState({ id: " ", task_name: '', content: '', deadline: '', priority: '', status: "", });

  
 
//statusの中身の状態によってボタンの色を変更する処理
  const buttonColor = (status) =>{
    if(status == "説明会"){
      return 'bg-purple-400';
    }else if(status == "ES"){
      return 'bg-yellow-500 ';
    }else if(status == "面接"){
      return 'bg-green-500 ';
    }else{
      return 'bg-blue-500 ';
    }

}


 

  

  // タスク名でソートする関数
  const sortByName = () => {
    const sortedPosts = [...posts].sort((a, b) => a.task_name.localeCompare(b.task_name));
   
  };

  // 期限でソートする関数
  const sortByDeadline = () => {
    const sortedPosts = [...posts].sort((a, b) => new Date(a.deadline) - new Date(b.deadline));
   
  };

  // 優先度でソートする関数
  const sortByPriority = () => {
    const sortedPosts = [...posts].sort((a, b) => a.priority - b.priority);
    setPosts(sortedPosts);
    
  };


  //Laravelの方で飛ばしたAPIを取得する。取得したデータをsetEditDataにセットする。キャッチに失敗したらエラー文。
  const readingApi = () => {
    axios
      .get('/api/posts')
      .then(response => {
        setPosts(response.data);
      })
      .catch(() => {
        console.log('通信に失敗しました');
      });
  };

  //初回読み込み
  useEffect(() => {
    sortByName();
    readingApi();
  }, []);

  //更新ボタンをクリックしたらララベルの側にAPIを送るための処理
  const updatePost = () => {
    axios
      .put(`/api/posts/${editData.id}`, editData)
      .then(response => {
        console.log('編集が成功しました', response.data);
       
      })
      .catch(error => {
        console.error('編集中にエラーが発生しました', error);
        // エラー時の処理を記述
      });
  };

  //削除処理ボタンをクリックしたらララベルの側にAPIを送るための処理。関数delteBtnClickで実行する。
  const deletePost = (postId) => {
    axios
      .delete(`/api/posts/${postId}`)
      .then(response => {
        console.log('削除が成功しました', response.data);
        readingApi();
      })
      .catch(error => {
        console.error('削除中にエラーが発生しました', error);
        // エラー時の処理を記述
      });
  };


  //削除ボタンをクリックしたらララベルで飛ばしたApiから受け取ったタスクのオブジェクトデータpostsを下の行のマップ関数で個別にわけたpostのデータを受け取りupdatedEditDataにいれてsetEditDataにセット。

  const delteBtnClick = (post) => {
    const deleteBtnDate = {
      id: post.id,
      task_name: post.task_name,
      content: post.content,
      deadline: post.deadline,
      priority: post.priority,
      status: post.status,
    }
    setdeletData(deleteBtnDate);
    const postId = post.id;
    deletePost(postId);

  }

  //モーダル開閉
  //編集ボタンをクリックしたらモーダルが開き、ララベルで飛ばしたApiから受け取ったタスクのオブジェクトデータpostsを下の行のマップ関数で個別にわけたpostのデータを受け取りupdatedEditDataにいれてsetEditDataにセット。

  const openModal = (post) => {
    //console.log(post);
    const updatedEditData = {
      id: post.id,
      task_name: post.task_name,
      content: post.content,
      deadline: post.deadline,
      priority: post.priority,
      status: post.status,
    };
    setEditData(updatedEditData);
    //console.log(editData);
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };


  //タスクテーブルのヘッダーの項目を配列に入れてマップ関数で振り分けるための配列。

  const headerList = ['企業名', 'タスク内容', '期限日', '志望度', '編集', '状態', '削除'];

  //Apiから受け取ったタスクのオブジェクトデータpostsをマップ関数でpostに個別に振り分ける。
  const rows = posts.map(post => ({
    name: post.task_name,
    content: post.content,
    date: post.deadline,
    priority: post.priority,
    editBtn: (<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => openModal(post)} >編集</button>),
    stateBtn: (<button className={`text-white font-bold py-2 px-4 rounded ${buttonColor(post.status)}`} >{post.status}</button>),
    deleteBtn: (<button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => delteBtnClick(post)}>削除</button>),
  }));

 

  return (
    <>

      <thead className="bg-green-800 text-white">
        <tr>
          {headerList.map((item, index) => (
            <th key={index} className="py-2 px-4 text-center">
              
              {item === '名前' ? (
                <button onClick={sortByName}>{item}</button>
              ) : item === '期限日' ? (
                <button onClick={sortByDeadline}>{item}</button>
              ) : item === '優先度' ? (
                <button onClick={sortByPriority}>{item}</button>
              ) : (
                item
              )}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {rows.map((row, index) => (
          <tr key={index}>
            {Object.keys(row).map(function (key, i) {
              return (
                <td className="py-2 px-4 text-center" key={i}>
                  {row[key]}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>


      <Modal isOpen={modalOpen} closeModal={closeModal}>

        <form className="flex flex-col space-y-4" >
          <textarea
            id="task_name"
            name="task_name"
            placeholder="タスク名"
            className="border rounded-md p-2 outline-none"
            value={editData.task_name}
            onChange={(e) => setEditData({ ...editData, task_name: e.target.value })}

          ></textarea>
          <textarea
            id="content"
            name="content"
            placeholder="内容"
            className="border rounded-md p-2 outline-none"
            value={editData.content}
            onChange={(e) => setEditData({ ...editData, content: e.target.value })}
          ></textarea>
          
          <input
                id="deadline"
                name="deadline"
                placeholder="期限日"
                type="date"
                className="border rounded-md p-2 outline-none"
                value={editData.deadline}
                onChange={(e) => setEditData({ ...editData, deadline: e.target.value })}
            />


            <select
                id="priority"
                name="priority"
                placeholder="優先度"
                className="border rounded-md p-2 outline-none"
                value={editData.priority}
                onChange={(e) => setEditData({ ...editData, priority: e.target.value })}

            >
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
            value={editData.status}
            onChange={(e) => setEditData({ ...editData, status: e.target.value })}
          >
            <option value="説明会">説明会</option>
            <option value="ES">ES</option>
            <option value="面接">面接</option>
          </select>
          <button type="submit" className="mt-4 bg-gray-300 p-2" onClick={() => { updatePost(); closeModal(); }}>
            更新
          </button>
        </form>

      </Modal>

    </>

  );
}

export default MainTable;
