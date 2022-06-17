import { Memento } from './memento.model';
import { Originator } from './originator.model';

export interface CareTaker {
  backUp(): void;
  undo(): void;
  history(): Memento[];
}

export class ConcreteCareTaker implements CareTaker {
  private listMemento: Memento[] = [];
  private originator: Originator;

  constructor(originator: Originator) {
    this.originator = originator;
  }

  public backUp(): void {
    this.listMemento.push(this.originator.saveState());
  }

  public undo(): void {
    if (!this.listMemento.length) {
      return;
    }

    const memento: Memento = this.listMemento.pop();
    this.originator.restoreState(memento);
  }

  public history(): Memento[] {
    console.log(this.listMemento);
    return this.listMemento;
  }
}
