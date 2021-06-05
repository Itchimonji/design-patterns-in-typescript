import { Burger } from './burger.model';

export class ExtraCheeseToppingDecorator implements Burger {
  protected readonly priceCheese: number = 1.3;
  protected burger: Burger;

  constructor(burgerToDecorate: Burger) {
    this.burger = burgerToDecorate;
  }

  public getPrice(): number {
    return this.burger.getPrice() + this.priceCheese;
  }

  public getTopping(): string {
    return this.burger.getTopping() + '.. with extra cheese';
  }
}

export class BeefToppingDecorator implements Burger {
  protected readonly priceBeef: number = 0.9;
  protected burger: Burger;

  constructor(burgerToDecorate: Burger) {
    this.burger = burgerToDecorate;
  }

  public getPrice(): number {
    return this.burger.getPrice() + this.priceBeef;
  }

  public getTopping(): string {
    return this.burger.getTopping() + '.. with extra beef';
  }
}

export class JalapenoToppingDecorator implements Burger {
  protected readonly priceJalapeno: number = 1.5;
  protected burger: Burger;

  constructor(burgerToDecorate: Burger) {
    this.burger = burgerToDecorate;
  }

  public getPrice(): number {
    return this.burger.getPrice() + this.priceJalapeno;
  }

  public getTopping(): string {
    return this.burger.getTopping() + '.. with extra jalapeno';
  }

  public extraHot(): number {
    return 0.8;
  }
}
