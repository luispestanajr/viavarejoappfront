import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-lista-localizacoes',
  templateUrl: './lista-localizacoes.component.html',
  styleUrls: ['./lista-localizacoes.component.css']
})
export class ListaLocalizacoesComponent implements OnInit {
  localizacoes: any;

  constructor(private http: Http) { }

  ngOnInit() {
    this
      .http
      .get('http://localhost:5000/api/localizacoes')
      .subscribe(response => {
        this.localizacoes = response.json();
      });
  }
}
