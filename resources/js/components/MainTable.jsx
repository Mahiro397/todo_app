import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StateBtn from './StateBtn';
import DeleteBtn from './DeleteBtn';
import EditBtn from './EditBtn';
import Modal from './Modal';
import PostFrom from './PostFrom';

function MainTable() {
  //取得したAPIの状態を管理するuseState
  const [posts, setPosts] = useState([]);
  //編集ボタンをクリックしたときのモーダルの状態を管理useState
  const [modalOpen, setModalOpen] = useState(false);

  //タスクを選択して編集ボタンをクリックし編集ファームを表示した際に、選択したタスクのデータをファームのバリューに設定するためのuseState。
  const [editData, setEditData] = useState({id:" ",task_name: '',content: '',deadline: '',priority: '',});

  //削除
  const [deleteData, setdeletData] = useState({id:" ",task_name: '',content: '',deadline: '',priority: '',});

  //Laravelの方で飛ばしてAPIを取得する。取得したデータをsetEditDataにセットする。キャッチに失敗したらエラー文。
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

  useEffect(() => {
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
 

  //クリックしたら削除処理

  const delteBtnClick = (post) =>{
    const deleteBtnDate ={
      id:post.id,
      task_name: post.task_name,
      content: post.content,
      deadline: post.deadline,
      priority: post.priority,
    }
    setdeletData(deleteBtnDate);
    const postId = post.id;
    deletePost(postId);

  }

  //モーダル開閉
    //編集ボタンをクリックしたらモーダルが開きApiから受け取ったタスクのオブジェクトデータpostsを下の行のマップ関数で個別にわけたpostのデータを受け取りupdatedEditDataにいれてsetEditDataにセット。

    const openModal = (post) => { 
      //console.log(post);
      const updatedEditData = {
        id:post.id,
        task_name: post.task_name,
        content: post.content,
        deadline: post.deadline,
        priority: post.priority,
      };
      setEditData(updatedEditData);
      //console.log(editData);
      setModalOpen(true);
    };
    const closeModal = () => {
      setModalOpen(false);
    };

  
//タスクテーブルのヘッダーの項目を配列に入れてマップ関数で振り分けるための配列。

  const headerList = ['名前', 'タスク内容', '期限日', '優先度', '編集', '作業状態', '削除'];

//Apiから受け取ったタスクのオブジェクトデータpostsをマップ関数でpostに個別に振り分ける。
  const rows = posts.map(post => ({
    name: post.task_name,
    content: post.content,
    date: post.deadline,
    priority: post.priority,
    editBtn: (<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => openModal(post)} >編集</button> ),
    stateBtn:<StateBtn/> ,
    deleteBtn:( <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"onClick={() => delteBtnClick(post)}>削除</button>),
  }));


  return (
    <>
     
      <thead className="bg-green-800 text-white">
        <tr>
          {headerList.map((item, index) => (
            <th key={index} className="py-2 px-4 text-center">
              {item}
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
            <textarea
                id="deadline"
                name="deadline"
                placeholder="期限日"
                className="border rounded-md p-2 outline-none"
                value={editData.deadline}
                onChange={(e) => setEditData({ ...editData, deadline: e.target.value })}
            ></textarea>
            <textarea
                id="priority"
                name="priority"
                placeholder="優先度"
                className="border rounded-md p-2 outline-none"
                value={editData.priority}
                onChange={(e) => setEditData({ ...editData, priority: e.target.value })}
            ></textarea>
            <button type="submit" className="mt-4 bg-gray-300 p-2" onClick={() => {updatePost();closeModal(); }}>
                更新
            </button>
        </form>
      
      </Modal>

    </>
    
  );
}

export default MainTable;
