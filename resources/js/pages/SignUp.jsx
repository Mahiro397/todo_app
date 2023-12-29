import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function SignUp({ setLoggedIn }) {
    const history = useHistory();
    const [signupdate, setsignupdate] = useState({
        name: '',
        email: '',
        password: '',
        confirm_password: '',
    });
    const [posts, setPosts] = useState([]);

    const [passwordMatchError, setPasswordMatchError] = useState(false);
    const [emptyhError, setemptyError] = useState(false);
    const [apiError, setApiError] = useState(null);

    const inputChange = (e) => {
        const { name, value } = e.target;
        setsignupdate({ ...signupdate, [name]: value });
    };

    const createSignUp = async () => {
        const { name, email, password, confirm_password } = signupdate;

        if (!name || !email || !password) {
            setemptyError(true);

            return;
        } else if (password !== confirm_password) {
            setPasswordMatchError(true);
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

            // 応答データを使用して実行
        } catch (error) {
            console.log(error.response.data.message)                
            if (error.response.status === 422) {
                setApiError(error.response.data.message);
            } else if (error.response && error.response.status === 401) {
                
            } else {
                setApiError("予期せぬエラーが発生しました。");
            }
        }
    };


    const checkLoginStatus = async () => {
        try {
            const response = await axios.post('/api/user', {
                withCredentials: true
            });

            // '/api/user'というAPIエンドポイントがログインしている場合にユーザーデータを返すことを想定
            if (response.data) {

                setLoggedIn(true); // ログイン状態をtrueに設定
                history.push('/top');

                // console.log(response.data);
            } else {
                setLoggedIn(false); // ログイン状態をfalseに設定
            }
        } catch (error) {
            //console.error('ログイン状態の確認中にエラーが発生しました:', error);
           // console.log(error.response)
    
            setLoggedIn(false); // エラーが発生した場合はログイン状態をfalse
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

                    {emptyhError && (
                        <p className="text-red-500 text-xs italic mb-4">フォーム値が空です。全て入力してください</p>
                    )}

                    {passwordMatchError && (
                        <p className="text-red-500 text-xs italic mb-4">パスワードが一致しません。</p>
                    )}
                    {apiError && (
                        <p className="text-red-500 text-xs italic mb-4">{apiError}</p>
                    )}

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
                </div>
            </div>
        </div>
    );
}

export default SignUp;
