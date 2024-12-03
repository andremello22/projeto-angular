import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppProdutosRoutingModule } from './app-produtos-routing.module';
import { AppProdutosComponent } from './app-produtos.component';
import { DetalhesProdutoComponent } from './detalhes-produto/detalhes-produto.component';


@NgModule({
  declarations: [
    AppProdutosComponent,
    DetalhesProdutoComponent
  ],
  imports: [
    CommonModule,
    AppProdutosRoutingModule
  ]
})
export class AppProdutosModule { }
