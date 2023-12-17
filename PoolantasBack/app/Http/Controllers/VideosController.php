<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Video;

class VideosController extends Controller
{
    public function index()
    {
        $videos = Video::all();
        return response()->json($videos, 200);
    }

    public function store(Request $request)
    {
        $video = new Video();
        $video->iframe_code = $request->iframe_code;
        $video->save();
        return response()->json($video, 201);
    }
}
