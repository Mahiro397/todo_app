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
        $posts = Post::all();
        return response()->json($posts, 200);
    }

    public function create(Request $request)
    {
        $post = new Post;
        $post->task_name = $request->task_name;
        $post->content = $request->content;
        $post->deadline = $request->deadline;
        $post->priority = $request->priority;
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
        $post = Post::find($request->id);
        $post->task_name = $request->task_name;
        $post->content = $request->content;
        $post->deadline = $request->deadline;
        $post->priority = $request->priority;
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