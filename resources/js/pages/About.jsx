import React, { useState, useEffect } from 'react';
import axios from 'axios';

const About = () => {
  const checkLoginStatus = async () => {
    try {
      const response = await axios.post('/api/user', {
        withCredentials: true
      });
  
      // '/api/user'というAPIエンドポイントがログインしている場合にユーザーデータを返すことを想定しています
      if (response.data) {
        //setLoggedIn(true); // ログイン状態をtrueに設定します
        //console.log(response.data);
      } else {
        // ログイン状態をfalseに設定します
        console.log("レスポンスデータはからです");
      }
    } catch (error) {
      console.error('ログイン状態の確認中にエラーが発生しました:', error);
      setLoggedIn(false); // エラーが発生した場合はログイン状態をfalseに設定します
    }
  };
// コンポーネントのマウント時にログイン状態をチェック
useEffect(() => {
  checkLoginStatus();
}, []);


  return (
    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => window.location.href = '/'}>
                                     Home
    </button>
  )
}

export default About