import { ProdutosService } from './../produtos.service';
import { Component, OnInit } from '@angular/core';
import { IProduto } from '../produtos';

@Component({
  selector: 'app-app-produtos',
  templateUrl: './app-produtos.component.html',
  styleUrl: './app-produtos.component.css'
})
export class AppProdutosComponent implements OnInit {
  produtos: IProduto[] | undefined;

  constructor(private produtosService: ProdutosService) {}
  ngOnInit(): void {
    this.produtos = this.produtosService.getAll();
  }

}
