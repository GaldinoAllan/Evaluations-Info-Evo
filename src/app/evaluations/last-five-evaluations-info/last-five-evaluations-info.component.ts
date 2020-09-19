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
  selector: 'app-last-five-evaluations-info',
  templateUrl: './last-five-evaluations-info.component.html',
  styleUrls: ['./last-five-evaluations-info.component.css']
})
export class LastFiveEvaluationsInfoComponent implements OnInit {
  evaluationsInfo: Evaluation[];
  evaluationsLastFive: Evaluation[];
  evaluationsData: Evaluation[];

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
    let count = 0
    const commonNames = info.filter(
      (v, i, a) => a.findIndex(t => (t.name === v.name)) === i
    )

    count = (info.length - commonNames.length);


    this.evaluationsLastFive = commonNames.slice(
      Math.max(commonNames.length - 5, 1)
    )

    this.countCommonNames = count;
  }
}
