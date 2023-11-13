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
            'task_name' => 'クロロ・ルシルフル',
            'content' => '強奪',
            'deadline' => now()->addDays(7), // Set deadline to 7 days from now
            'priority' => 1,
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        DB::table('posts')->insert([
            'task_name' => 'ゾルディック・キルア',
            'content' => '暗殺のあと念の修行',
            'deadline' => now()->addDays(14), // Set deadline to 14 days from now
            'priority' => 2,
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        DB::table('posts')->insert([
            'task_name' => 'ジン・フリークス',
            'content' => 'グリードアイランドのバグ修正',
            'deadline' => now()->addDays(20), // Set deadline to 14 days from now
            'priority' => 2,
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        // 他にも必要なだけデータを挿入できます
    }
}

