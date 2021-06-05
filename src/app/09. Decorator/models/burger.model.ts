export interface Burger {
  getPrice(): number;
  getTopping(): string;
}

class BaseBurger implements Burger {
  protected price: number;
  protected topping: string;

  public getPrice(): number {
    return this.price;
  }

  public getTopping(): string {
    return this.topping;
  }
}

export class DoubleWhopper extends BaseBurger implements Burger {
  constructor() {
    super();
    this.price = 5.95;
    this.topping = 'Double Whopper';
  }
}

export class VeggieBurger extends BaseBurger implements Burger {
  constructor() {
    super();
    this.price = 7.99;
    this.topping = 'Veggie Burger';
  }
}

export class BlackBeanBurger extends BaseBurger implements Burger {
  constructor() {
    super();
    this.price = 6.89;
    this.topping = 'Black Bean Burger';
  }
}
