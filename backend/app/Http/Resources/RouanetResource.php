<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class RouanetResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id_projeto' => $this->id_projeto,
            'nome' => $this->nome,
            'uf' => $this->uf,
            'municipio' => $this->municipio,
            'valor_captado' => 'R$ ' . number_format($this->valor_captado, 2, ',', '.'),
            'valor_aprovado' => 'R$ ' . number_format($this->valor_aprovado, 2, ',', '.'),
            'justificativa' => $this->justificativa
        ];
    }
}
