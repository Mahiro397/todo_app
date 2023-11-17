import React, { useState, useEffect } from 'react';
import axios from 'axios'; // axiosをインポート

function EditForm({ editedPost, closeModal }) {
    
    const [editData, setEditData] = useState({id: '',task_name: '',content: '',deadline: '',priority: '',});


    return (
        <form className="flex flex-col space-y-4" onSubmit={handleUpdate}>
            <textarea
                id="task_name"
                name="task_name"
                placeholder="タスク名"
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
            <textarea
                id="deadline"
                name="deadline"
                placeholder="期限日"
                className="border rounded-md p-2 outline-none"
                onChange={inputChange}
            ></textarea>
            <textarea
                id="priority"
                name="priority"
                placeholder="優先度"
                className="border rounded-md p-2 outline-none"
                onChange={inputChange}
            ></textarea>
            <button type="submit" className="mt-4 bg-gray-300 p-2" onClick={closeModal}>
                更新
            </button>
        </form>
    );
}

export default EditForm;
