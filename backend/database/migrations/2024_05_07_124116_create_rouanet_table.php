<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('tb_projeto_rouanet_teste', function (Blueprint $table) {
            $table->id('id_projeto')->primary();
            $table->string('pronac', 191);
            $table->string('ano_projeto', 191);
            $table->string('nome', 191);
            $table->string('segmento', 191);
            $table->string('area', 191);
            $table->string('uf', 191);
            $table->string('municipio', 191);
            $table->string('data_inicio', 191);
            $table->string('data_termino', 191);
            $table->string('situacao', 191);
            $table->string('mecanismo', 191);
            $table->string('enquadramento', 191);
            $table->string('valor_captado', 191);
            $table->string('valor_aprovado', 191);
            $table->text('acessibilidade');
            $table->text('objetivos')->nullable();
            $table->text('justificativa')->nullable();
            $table->text('etapa')->nullable();
            $table->text('ficha_tecnica');
            $table->text('impacto_ambiental');
            $table->text('especificacao_tecnica');
            $table->text('providencia')->nullable();
            $table->text('democratizacao');
            $table->text('sinopse');
            $table->text('resumo');
            $table->string('valor_projeto', 100);
            $table->string('outras_fontes', 100);
            $table->string('valor_proposta', 100);
            $table->string('valor_solicitado', 100);
            $table->longText('objetivo');
            $table->longText('estrategia_execucao');
            $table->string('link_incentivadores', 255);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('tb_projeto_rouanet_teste', function (Blueprint $table) {
            //
        });
    }
};
