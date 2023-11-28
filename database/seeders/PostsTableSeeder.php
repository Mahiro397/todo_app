<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PostsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // ダミーデータを挿入
        DB::table('posts')->insert([
            'user_id' => 2,
            'task_name' => 'クロロ=ルシルフル',
            'content' => '強奪',
            'deadline' => now()->addDays(7), 
            'priority' => 1,
            'status' => '作業中',
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        DB::table('posts')->insert([
            'user_id' => 1,
            'task_name' => 'ゾルディック・キルア',
            'content' => '暗殺のあと念の修行',
            'deadline' => now()->addDays(14), 
            'priority' =>2,
            'status' => '完了',
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        DB::table('posts')->insert([
            'user_id' => 1,
            'task_name' => 'ジン・フリークス',
            'content' => 'グリードアイランドのバグ修正',
            'deadline' => now()->addDays(20), 
            'priority' =>2,
            'status' => '作業中',
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        DB::table('posts')->insert([
            'user_id' => 1,
            'task_name' => 'クラピカ',
            'content' => '仲間の目を取り返す',
            'deadline' => now()->addDays(2), 
            'priority' =>2,
            'status' => '未着手',
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        DB::table('posts')->insert([
            'user_id' => 2,
            'task_name' => 'フェイタン＝ポートオ',
            'content' => '日本語の勉強',
            'deadline' => now()->addDays(2), 
            'priority' => 2,
            'status' => '未着手',
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        DB::table('posts')->insert([
            'user_id' => 2,
            'task_name' => 'フィンクス＝マグカブ',
            'content' => '肩まわし30回',
            'deadline' => now()->addDays(2), 
            'priority' => 2,
            'status' => '未着手',
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        DB::table('posts')->insert([
            'user_id' =>2,
            'task_name' => 'ノブナガ＝ハザマ',
            'content' => '刀を研ぐ',
            'deadline' => now()->addDays(2), 
            'priority' => 2,
            'status' => '未着手',
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        DB::table('posts')->insert([
            'user_id' =>2,
            'task_name' => 'マチ＝コマチネ',
            'content' => '新しい裁縫道具を購入',
            'deadline' => now()->addDays(2), 
            'priority' => 2,
            'status' => '未着手',
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        DB::table('posts')->insert([
            'user_id' => 2,
            'task_name' => 'シズク＝ムラサキ',
            'content' => '掃除機のメンテナンス',
            'deadline' => now()->addDays(2), 
            'priority' => 2,
            'status' => '未着手',
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        
    }
}

