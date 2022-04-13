import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public nome1 = "";
  public nome2 = "";
  url = "http://lucasreno.kinghost.net/love-calculator/"
  resultado = 0;
  mensagem = "";

  constructor(public http: HttpClient,) {

  }

  enviarDados() {

    this.http.get<any>(this.url + this.nome1 + "/" + this.nome2).subscribe(
      (resposta: any) => {
        this.resultado = resposta;
        if (this.resultado < 20) this.mensagem = "NÃO COMPATIVEIS";
        else if (this.resultado < 20) this.mensagem = "ALGO DE ERRADO NÃO ESTA CERTO";
        else if (this.resultado < 40) this.mensagem = "GADO MEDIANO";
        else if (this.resultado < 60) this.mensagem = "GADO AVANÇADO";
        else if (this.resultado < 80) this.mensagem = "GADÃO GUERREIRO";
        else if (this.resultado == 100) this.mensagem = "SOLDADO PROMOVIDO";
        else this.mensagem = "Almas gêmeas";
      }
    );
  }
}
