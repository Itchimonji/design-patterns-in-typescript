import { Component } from '@angular/core';
import {MergeSort, QuickSort, Strategy} from '../models/strategy.model';
import {Algorithm} from '../models/algorithm.model';

@Component({
  selector: 'app-strategy',
  templateUrl: './strategy.component.html',
  styleUrls: ['./strategy.component.scss']
})
export class StrategyComponent {

  private algorithm: Algorithm;
  public listAlgorithm: Strategy[];
  public selectedStrategy: Strategy;
  public result = '';

  constructor() {
    // using factory method would be better
    this.listAlgorithm = [ new MergeSort(), new QuickSort()];
    this.selectedStrategy = this.listAlgorithm[0];
    this.algorithm = new Algorithm(this.selectedStrategy);
  }

  public btnSort(): void {
    this.algorithm.strategy = this.selectedStrategy;
    this.result = this.algorithm.sort();
  }

  public get array(): string {
    return this.algorithm.array ? this.algorithm.array : '';
  }
}
