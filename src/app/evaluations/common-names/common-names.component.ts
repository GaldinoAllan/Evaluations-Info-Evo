import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface EvaluationInfo {
  getEvaluationsInfo: Evaluation[];
}

interface Evaluation {
  id: number;
  name: string;
}

interface Common {
  id: number;
  name: string;
  count: number;
}

@Component({
  selector: 'app-common-names',
  templateUrl: './common-names.component.html',
  styleUrls: ['./common-names.component.css']
})
export class CommonNamesComponent implements OnInit {
  commonnames: Common[];
  evaluationsData: Evaluation[];

  pag: Number = 1;
  contador: Number = 25;


  countCommonNames: number;

  constructor(
    private http: HttpClient,
  ) {
    console.log('Aplicação iniciada, Carregando dados...');
  }

  ngOnInit(): void {
    this.http.get('https://simulados.evolucional.com.br/painel/json/get-evaluations-without-questions')
      .toPromise()
      .then((evaluationInfo: EvaluationInfo) => {
        this.evaluationsData = evaluationInfo.getEvaluationsInfo;
        this.getCommonEvaluationsData(this.evaluationsData)
      })

  }

  getCommonEvaluationsData(info: Evaluation[]) {
    let res = Object.values(info.reduce((a, { id, name }) => {
      a[name] = a[name] || { id, name, count: 0 };
      a[name].count++;
      return a;
    }, Object.create(null)));

    res = res.filter((response: Common) => {
      return response.count > 1 && response
    })

    this.commonnames = res as Common[];
  }
}
