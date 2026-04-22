<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Container\Attributes\Auth;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function authenticate(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {

            $user = Auth::user();

            if ($user->role == 'admin') {
                $token = $user->createToken('token')->plainTextToken;

                return response()->json([
                    'token' => $token,
                    'user' => $user
                ], 200);

            }else{

                return response()->json([
                    'error' => 'You are not authorized to access admin panel',
                ], 401);

            }
        }

        return response()->json([
            'error' => 'Email or password is incorrect',
        ], 401);
    }
}
