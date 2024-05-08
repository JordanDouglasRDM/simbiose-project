<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\RouanetResource;
use App\Models\Rouanet;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class RouanetController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): JsonResponse
    {
        try {
            $rouanets = RouanetResource::collection(Rouanet::take(25)->get());

            if (!$rouanets) {
                throw new \Exception('Internal server error');
            }

            return response()->json([
                'data' => $rouanets,
                'status' => 200
            ], 200
            );

        } catch (\Exception $e) {
            return response()->json([
                'error' => $e->getMessage(),
                'status' => 500
            ], 500);
        }

    }
}
