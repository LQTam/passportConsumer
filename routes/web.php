<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

use Illuminate\Http\Request;
use Laravel\Passport\Client;

// Route::get( '/', function( ){
//     return view('welcome');
// });

Route::view('/', 'welcome');

Route::get('/redirect','Api\RegisterController@redirect');
Route::get('/callback','Api\RegisterController@callback');

Route::get('/user',function(){
    $token = session()->get('token');
    $response = (new GuzzleHttp\Client)->get('http://passport.test/api/user', [
        'headers' => [
            'Authorization' => 'Bearer '.$token['access_token']
        ]
    ]);

    return json_decode((string) $response->getBody(), true);
});

Route::get('/greeting',function(){
    
    return "Hi there";
});
// Route::get('/redirect','Api\RegisterController@redirect');
// Route::get('/callback','Api\RegisterController@callback');
Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');


