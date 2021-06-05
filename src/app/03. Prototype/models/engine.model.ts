export interface Engine {
  ccm: number;
  fuel: string;
  engine: Engine;
}

export class PetrolEngine implements Engine {
  public fuel = 'petrol';
  public ccm: number;
  public engine: Engine;

  constructor(ccm: number) {
    this.ccm = ccm;
    this.engine = new DieselEngine(555);
  }
}

export class DieselEngine implements Engine {
  public fuel = 'diesel';
  public ccm: number;
  public engine: Engine;

  constructor(ccm: number) {
    this.ccm = ccm;
    this.engine = null;
  }
}
