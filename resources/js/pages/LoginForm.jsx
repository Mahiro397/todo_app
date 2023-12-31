import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom'; 
import { Link } from "react-router-dom";

function LoginForm({ setLoggedIn }) {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  

  const handleLogin = async (e) => {
    e.preventDefault();

    const credentials = {
      email: email,
      password: password
    };

    try {
      const response = await axios.post('/api/login', credentials, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json'
        }
      });
      //console.log(response);
      //console.log(response.data);
      //console.log(response.data.user);

      if (response.data.error == null) {
        setError(null);
        // ログイン後のアクションをここで実行
        //console.log('Redirecting to /top');
        //console.log(response.data.token);
        //document.cookie = `token=${response.data.token}; path=/`;
        setLoggedIn(true);

        //console.log(response.data);
        history.push('/top'); 
      } else {
        setError(response.data.error);
        
      }
    } catch (error) {
      console.error('ログインエラー:', error);
      setError('ログイン中にエラーが発生しました');
    }
  };

  // ログイン状態を確認する関数
  const checkLoginStatus = async () => {
    try {
      const response = await axios.post('/api/user', {
        withCredentials: true
      });
  
      // '/api/user'というAPIエンドポイントがログインしている場合にユーザーデータを返すことを想定しています
      if (response.data) {
        
       setLoggedIn(true); // ログイン状態をtrueに設定します
        history.push('/top'); 

       // console.log(response.data);
      } else {
        setLoggedIn(false); // ログイン状態をfalseに設定します
      }
    } catch (error) {
      console.error('ログイン状態の確認中にエラーが発生しました:', error);
     setLoggedIn(false); // エラーが発生した場合はログイン状態をfalseに設定します
    }
  };
// コンポーネントのマウント時にログイン状態をチェックあああ
useEffect(() => {
  checkLoginStatus();
}, []);


  return (
    <section className="bg-gray-50 dark:bg-gray-900">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  ログイン
              </h1>
              {error && <p className='text-red-500'>{error}</p>}
              <form className="space-y-4 md:space-y-6" action="#" onSubmit={handleLogin}>
                  <div>
                      <label htmlFor="email"  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">メールアドレス</label>
                      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""/>
                  </div>
                  <div>
                      <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">パスワード</label>
                      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                  <div className="flex items-center justify-between">
                      <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox"className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                          </div>
                          <div className="ml-3 text-sm">
                            <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                          </div>
                      </div>
                      <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                  </div>
                  <button type="submit" className="w-full text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hoverbg-blue-700 dark:focus:ring-blue-800">ログイン</button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      まだアカウントを作っていませんか？? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500"><Link to="/signup"> Sign up</Link></a>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
  )
}

export default LoginForm