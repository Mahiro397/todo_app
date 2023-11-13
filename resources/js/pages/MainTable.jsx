import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MainTable() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Use axios within the useEffect callback
    axios
      .get('/api/posts')
      .then(response => {
        setPosts(response.data);
       // console.log(response.data);
      })
      .catch(() => {
        console.log('通信に失敗しました');
      });
  }, []); // Empty dependency array means this effect will run once after the initial render

  const headerList = ['名前', 'タスク内容', '期限日', '優先度', '編集', '作業状態', '削除'];

  // Use the 'posts' state instead of the 'rows' constant
  const rows = posts.map(post => ({
    name: post.task_name,
    content: post.content,
    date: post.deadline,
    priority: post.priority,
    editBtn: <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">編集</button>,
    stateBtn: <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">完了</button>,
    deleteBtn: <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">削除</button>,
  }));

  return (
    <>
      <thead className="bg-purple-500 text-white">
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
    </>
  );
}

export default MainTable;
