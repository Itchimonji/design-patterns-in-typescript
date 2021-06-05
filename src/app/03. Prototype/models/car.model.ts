import { Engine } from './engine.model';

export interface Prototype {
  name: string;
  color: string;
  clone(): Prototype;
}

export class CarPrototype implements Prototype {
  public name: string;
  public color: string;
  private engine: Engine;

  constructor(name: string, color: string, engine: Engine) {
    this.name = name;
    this.color = color;
    this.engine = engine;
  }

  public clone(): Prototype {
    return Object.assign(Object.create(this), this);
  }
}

