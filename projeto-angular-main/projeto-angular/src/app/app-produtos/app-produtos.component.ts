import { produtos } from './../produtos';
import { Component, OnInit } from '@angular/core';
import { IProduto } from '../produtos';

@Component({
  selector: 'app-app-produtos',
  templateUrl: './app-produtos.component.html',
  styleUrl: './app-produtos.component.css'
})
export class AppProdutosComponent implements OnInit {
  produtos: IProduto[] = produtos;

  constructor() {}
  ngOnInit(): void {}

}
