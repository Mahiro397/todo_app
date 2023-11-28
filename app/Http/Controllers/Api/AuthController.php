<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);
  
        if (Auth::attempt($credentials)) {
            $request->session()->regenerate();

            $token = $request->user()->createToken('token-name')->plainTextToken;


            //return Redirect::to('/top');
            return response()->json([
                //'token' => $token,
               Auth::user(),
               'error' => null,
            ]);
        }

        //\Log::info('Login failed for email: ' . $credentials['email']);
        return response()->json([
            'error' => 'メールアドレス又はパスワードが違います。'
        ]);
    }
  
    public function logout(Request $request)
    {
        $user = Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return response()->json([
            'error' => null,
        ]);
    }

    
    public function getLoginUser(Request $request)
  {
      return response()->json(
          $request->user()
      );
  }

  public function signUp(Request $request)
    {
        
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|unique:users,email|max:255',
            'password' => 'required|string|min:8', 
        ], [
            'name.required' => '名前は必須項目です。',
            'name.max' => '名前は255文字以内で入力してください。',
            'email.required' => 'メールアドレスは必須項目です。',
            'email.email' => '有効なメールアドレスを入力してください。',
            'email.unique' => 'このメールアドレスは既に使用されています。',
            'email.max' => 'メールアドレスは255文字以内で入力してください。',
            'password.required' => 'パスワードは必須項目です。',
            'password.min' => 'パスワードは少なくとも8文字以上で入力してください。',
        ]);

    //    if ($validator->fails()) {
    //        return response()->json(['errors' => $validator->errors()], 422);
    //    }

       
        $user = User::create([
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'password' => Hash::make($request->input('password')), 
        ]);

      
        return response()->json(['message' => 'ユーザー登録が成功しました', 'user' => $user], 201);
    }
}
