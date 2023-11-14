import React from 'react';
import MainTable from './MainTable';
import ModalButton from './ModalButton';

function Top() {
   

    return (
        <div className="container mx-auto p-5">
            <div className="flex justify-center">
                <div className="w-10/12">
                    <div className="bg-white p-5">
                        <h1 className="text-3xl mb-5">タスク管理</h1>
                        <ModalButton/>
                        <div className="p-3">
                            <table className="min-w-full bg-white border border-gray-300">
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
