import { IprodutoCarrinho } from './produtos';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  items: IprodutoCarrinho[] = [];
  constructor() { }
  obtemCarrinho(){
    return JSON.parse(localStorage.getItem('carrinho') || "");
     
  }

  aicionarAoCarrinho(produto: IprodutoCarrinho){
    this.items.push(produto);
    localStorage.setItem('carrinho', JSON.stringify(this.items));
  }

  limparCarrinho(){
    this.items = [];
    localStorage.clear();
  }
}
