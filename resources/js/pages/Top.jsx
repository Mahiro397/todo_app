import React from 'react';
import MainTable from '../components/MainTable';
import ModalButton from '../components/ModalButton';
import { Link } from "react-router-dom";
import PageaaButton from '../components/PageaaButton';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function Top({ setLoggedIn }) {
    const history = useHistory();
  
    const handleLogout = async () => {
        try {
            const response = await axios.post('/api/logout');

            console.log(response.data.error);
      
            if (response.data.error == null) {

                console.log('ログアウトしました');
                //setLoggedIn(false);

                //console.log(response.date);
                history.push('/'); 
                //console.log(setLoggedIn);
               // ログアウトが成功したら追加のアクションを実行
            } else {
                console.error('ログアウトに失敗しました');
              
            }
        } catch (error) {
            console.error('エラーが発生しました', error);
            
        }
    };
  

    return (
        <div className="container mx-auto p-5 ">
            <div className="flex justify-center">
                <div className="w-10/12">
                    <div className="bg-white p-5">
                    
                        <h1 className="text-3xl mb-5">タスク管理</h1>
                        <div className='flex'>
                        <ModalButton/><PageaaButton /><button className='bg-blue-400 hover:bg-blue-300 text-white rounded px-4 py-2 ml-auto' onClick={handleLogout}>ログアウト</button>
                      
                                        
                        </div>
                        
                        <div className="py-5">
                            <table className="min-w-full bg-stone-200 border border-gray-300 rounded-lg overflow-hidden">
                               <MainTable/>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Top;

