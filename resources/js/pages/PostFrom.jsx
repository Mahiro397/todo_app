import React from 'react'

function PostFrom() {
  return (
    <form className="flex flex-col space-y-4">
    <textarea
        id="task_na"
        name="task_name"
        placeholder="タスク名"
        className="border rounded-md p-2 outline-none"
    ></textarea>
    <textarea
        id="content"
        name="content"
        placeholder="内容"
        className="border rounded-md p-2 outline-none"
    ></textarea>
    <textarea
        id="deadline"
        name="deadline"
        placeholder="期限日"
        className="border rounded-md p-2 outline-none"
    ></textarea>
    <textarea
        id="priority"
        name="priority"
        placeholder="優先度"
        className="border rounded-md p-2 outline-none"
    ></textarea>
    
    <button  className="mt-4 bg-gray-300 p-2">
            登録
          </button>
</form>

  )
}

export default PostFrom