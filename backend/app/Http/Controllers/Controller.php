<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use OpenApi\Annotations as OA;

/**
 * @OA\Info(
 *     title="Documentation Simbiosi API",
 *     version="0.1",
 *      @OA\Contact(
 *          email="jordandouglas8515@gmail.com"
 *      ),
 * ),
 *  @OA\Server(
 *      description="Server Default",
 *      url="http://localhost:8000/api/"
 *  ),
 */

class Controller extends BaseController
{
    use AuthorizesRequests, ValidatesRequests;
}
