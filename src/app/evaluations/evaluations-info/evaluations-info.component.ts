import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface EvaluationInfo {
  getEvaluationsInfo: Evaluation[];
}

interface Evaluation {
  id: number;
  name: string;
}

@Component({
  selector: 'app-evaluations-info',
  templateUrl: './evaluations-info.component.html',
  styleUrls: ['./evaluations-info.component.css']
})
export class EvaluationsInfoComponent implements OnInit {
  evaluationsInfo: Evaluation[];
  pag: Number = 1;
  contador: Number = 25;

  constructor(
    private http: HttpClient,
  ) {
    console.log('Aplicação iniciada, Carregando dados...');
  }

  ngOnInit(): void {
    this.http.get('https://simulados.evolucional.com.br/painel/json/get-evaluations-without-questions')
      .toPromise()
      .then((evaluationInfo: EvaluationInfo) => {
        this.evaluationsInfo = evaluationInfo.getEvaluationsInfo;
      })
  }
}
