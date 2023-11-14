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
    
        return response()->json($post, 200);
    }
}