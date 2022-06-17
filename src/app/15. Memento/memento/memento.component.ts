import { Component, OnInit } from '@angular/core';
import { ConcreteOriginator, Originator } from '../models/originator.model';
import { CareTaker, ConcreteCareTaker } from '../models/care-taker.model';
import { Card, MatCard } from '../models/card.model';
import { Memento } from '../models/memento.model';

@Component({
  selector: 'app-memento',
  templateUrl: './memento.component.html',
  styleUrls: ['./memento.component.scss']
})
export class MementoComponent {
  public history: Memento[];
  public title = '';
  public description = '';
  public color = '';

  private readonly originator: Originator;
  private readonly careTaker: CareTaker;
  private readonly currentCardState: Card;

  constructor() {
    this.history = new Array<Memento>();
    this.currentCardState = new MatCard('Default title', 'Default description', 'white');
    this.originator = new ConcreteOriginator(this.currentCardState);
    this.careTaker = new ConcreteCareTaker(this.originator);
    this.history = this.careTaker.history();
  }

  public btnChangeTitle(title: string): void {
    this.careTaker.backUp();
    this.originator.changeTitle(title);
  }

  public btnChangeDescription(description: string): void {
    this.careTaker.backUp();
    this.originator.changeDescription(description);
  }

  public btnChangeColor(color: string): void {
    this.careTaker.backUp();
    this.originator.changeColor(color);
  }
}
