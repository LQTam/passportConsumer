<?php

namespace App\Http\Controllers\Api;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use GuzzleHttp\Client;

class RegisterController extends BaseController
{
    public function register(Request $req)
    {
        $validator = Validator::make($req->all(),[
            'name' => 'required',
            'email' => 'required',
            'password' => 'required',
            'password_confirmation' => 'required|same:password',
        ]);

        if($validator->fails()){
            return $this->sendError('Validation Error.',$validator->errors());
        }
        $user = User::create($validator);

        $http = new Client();
        $response = $http->post(env('APP_URL').'/oauth/token', [
            'form_params' => [
                'grant_type' => 'password',
                'client_id' => env('PASSWORD_GRANT_CLIENT_ID'),
                'client_secret' => env('PASSWORD_GRANT_CLIENT_SECRET'),
                'username' => $req->get('email'),
                'password' => $req->get('password'),
                'scope' => '',
            ],
        ]);

        return json_decode((string)$response->getBody(), true);
    }

    public function login(Request $req){
        if(Auth::attempt(['email'=>$req->email,'password'=>$req->password])){
            $user = auth()->user();
            $success['token'] = $user->createToken('maimai1A')->accessToken;
            $success['name'] = $user->name;
            return $this->sendResponse($success,'User login successfully.');
        }

        return $this->sendError('Unauthorized.',['error'=>'Unauthorized']);
    }

    public function redirect(Request $request){
        $request->session()->put('state', $state = Str::random(40));

        // dd($request->session('token'));
        $query = http_build_query([
            'client_id' => '3',
            'redirect_uri' => 'http://consumer.test/callback',
            'response_type' => 'code',
            'scope' => '',
            'state' => $state,
        ]);

        return redirect('http://passport.test/oauth/authorize?'.$query);
    }

    public function callback(Request $request) {
        $state = $request->session()->pull('state');

        // throw_unless(
        //     strlen($state) > 0 && $state === $request->state,
        //     InvalidArgumentException::class
        // );


        $response = (new Client)->post('http://passport.test/oauth/token', [
            // 'form_params' => [
            //     'grant_type' => 'authorization_code',
            //     'client_id' => '3',
            //     'client_secret' => 'stGlJ2Rc11lhXUoR76uIiqYt1kH9pI3RdkoHks3R',
            //     'redirect_uri' => 'http://consumer.test/callback',
            //     'code' => $request->code,
            // ],
            'form_params' => [
                'grant_type' => 'password',
                'client_id' => '3',
                'client_secret' => 'stGlJ2Rc11lhXUoR76uIiqYt1kH9pI3RdkoHks3R',
                'username' => "sendlaravel.example@gmail.com",
                'password' => 'sendlaravel.example@gmail.com',
                'scope' => '*',
            ],
        ]);

        session()->put('token',json_decode((string) $response->getBody(), true));
        return redirect('/home');
    }
}
