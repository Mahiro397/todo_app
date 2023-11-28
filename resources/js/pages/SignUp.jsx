import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function SignUp({setLoggedIn}) {
    const history = useHistory();
  const [signupdate, setsignupdate] = useState({
    name: '',
    email: '',
    password: '',
    confirm_password: '',
  });
  const [posts, setPosts] = useState([]);

  const inputChange = (e) => {
    const { name, value } = e.target;
    setsignupdate({ ...signupdate, [name]: value });
  };

  const createSignUp = async () => {
    const { name, email, password, confirm_password } = signupdate;

    if (!name || !email || !password || password !== confirm_password) {
        return;
      }

    try {
      const res = await axios.post('/api/signUp', {
        name,
        email,
        password,
      });

      setPosts([...posts, res.data]);
      setsignupdate({
        name: '',
        email: '',
        password: '',
        confirm_password: '',
      });

      history.push('/login');
        alert('アカウントが作成されました。ログインしてください。');
      

      

      // Perform necessary actions with the response data
    } catch (error) {
      console.log(error);
    }
  };

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
      //console.error('ログイン状態の確認中にエラーが発生しました:', error);
      setLoggedIn(false); // エラーが発生した場合はログイン状態をfalseに設定します
    }
  };
// コンポーネントのマウント時にログイン状態をチェック
useEffect(() => {
  checkLoginStatus();
}, []);


  return (
    <div className="bg-grey-lighter min-h-screen flex flex-col">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <h1 className="mb-8 text-3xl text-center">Sign up</h1>
          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="name"
            onChange={inputChange}
            placeholder="Full Name"
          />

          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="email"
            onChange={inputChange}
            placeholder="Email"
          />

          <input
            type="password"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="password"
            onChange={inputChange}
            placeholder="Password"
          />
          <input
            type="password"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="confirm_password"
            onChange={inputChange}
            placeholder="Confirm Password"
          />

          <button
            type="submit"
            className="w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-dark focus:outline-none my-1"
            onClick={createSignUp}
          >
            Create Account
          </button>

          <div className="text-center text-sm text-grey-dark mt-4">
            By signing up, you agree to the{' '}
            <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
              Terms of Service
            </a>{' '}
            and{' '}
            <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
              Privacy Policy
            </a>
          </div>
        </div>

        <div className="text-grey-dark mt-6 text-primary-600 dark:text-primary-500">
          Already have an account?{' '}
          <Link to="/login" className="no-underline border-b border-blue text-blue">
            Log in
          </Link>
          .
        </div>
      </div>
    </div>
  );
}

export default SignUp;
