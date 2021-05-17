import { Component } from '@angular/core';
import { LazyPerson } from '../models/lazy-person.model';
import { AthleticPerson } from '../models/athletic-person.model';

@Component({
  selector: 'app-template-method',
  templateUrl: './template-method.component.html',
  styleUrls: ['./template-method.component.scss']
})
export class TemplateMethodComponent {

  public listLogs: string[] = [];

  private lazyPerson: LazyPerson;
  private athleticPerson: AthleticPerson;

  public btnGetReportForLazyPerson(): void {
    this.lazyPerson = new LazyPerson();
    this.listLogs = this.lazyPerson.generateReport();
  }

  public btnGetReportForAthleticPerson(): void {
    this.athleticPerson = new AthleticPerson();
    this.listLogs = this.athleticPerson.generateReport();
  }
}
