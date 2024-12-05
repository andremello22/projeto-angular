
import { ActivatedRoute } from '@angular/router';
import { IProduto } from '../../produtos';
import { ProdutosService } from './../../produtos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalhes-produto',
  templateUrl: './detalhes-produto.component.html',
  styleUrl: './detalhes-produto.component.css'
})
export class DetalhesProdutoComponent implements OnInit {
  produto: IProduto | undefined;
  quantitade = 1
  constructor(private produtoService: ProdutosService,
    private route: ActivatedRoute
  ) { console.log(this.produto) }
  ngOnInit() {
    const routeParans = this.route.snapshot.paramMap;
    const produtoId = Number(routeParans.get("id"));
    this.produto = this.produtoService.getOne(produtoId);
  }

}
