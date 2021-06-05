import { ExtraCheeseToppingDecorator, JalapenoToppingDecorator } from './topping.decorator';
import { Burger } from './burger.model';

export class ExtraExtraCheeseToppingDecorator extends ExtraCheeseToppingDecorator implements Burger {
  constructor(burgerToDecorate: Burger) {
    super(burgerToDecorate);
  }

  public getPrice(): number {
    return super.getPrice() + 0.5;
  }

  public getTopping(): string {
    return super.getTopping() + ' & with moooore extra cheese';
  }
}

export class HotJalapenoToppingDecorator extends JalapenoToppingDecorator implements Burger {
  constructor(burgerToDecorate: Burger) {
    super(burgerToDecorate);
  }

  public getPrice(): number {
    return super.getPrice() + 0.7;
  }

  public getTopping(): string {
    return super.getTopping() + ' & with extra hot hot jalapeno';
  }
}
