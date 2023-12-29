<?php

namespace App\Http\Controllers\Api;//追記

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Post;  //Postをモデルをuseする

class PostController extends Controller
{
    // postの一覧を表示する
    public function index()
    {
        //現在のログイン中のユーザーidに関連するタスクだけ表示
        $posts = Post::where('user_id',\Auth::id())->get();
        return response()->json($posts, 200);
    }

   // public function sortDeadline()
   // {
   //     $posts = Post::orderByDeadline()->get();
   //     return response()->json($posts, 200);
   // }

    public function create(Request $request)

    {
        
        $userId = \Auth::id();
        $post = new Post;
        $post->task_name = $request->task_name;
        $post->content = $request->content;
        $post->deadline = $request->deadline;
        $post->priority = $request->priority;
        $post->status = $request->status;
        $post->user_id = $userId;
        $post->save();

        return response()->json($posts, 200);
    }


    // 編集画面に遷移するためのアクション
    public function edit(Request $request)
    {
        $post = Post::find($request->id);
        return $post;
    }

    

   //データを更新するためのアクション
    public function update(Request $request)

    {
        $userId = \Auth::id();
        $post = Post::find($request->id);
        $post->task_name = $request->task_name;
        $post->content = $request->content;
        $post->deadline = $request->deadline;
        $post->priority = $request->priority;
        $post->status = $request->status;
        $post->save();
        $posts = Post::all();
        return $posts;

    }

    //データを削除するためのアクション
    public function delete($id)
    {
        $post = Post::find($id);
        if (!$post) {
            return response()->json(['message' => 'Post not found'], 404);
        }
    
        $post->delete();
        $posts = Post::all();
        return response()->json($posts, 200);
    }
}