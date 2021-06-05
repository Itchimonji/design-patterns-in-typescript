import { Component,  } from '@angular/core';
import {
  BeefToppingDecorator,
  ExtraCheeseToppingDecorator,
  JalapenoToppingDecorator,
} from '../models/topping.decorator';
import { ExtraExtraCheeseToppingDecorator, HotJalapenoToppingDecorator} from '../models/extend-topping.decorator';
import {BlackBeanBurger, Burger, DoubleWhopper, VeggieBurger} from '../models/burger.model';

@Component({
  selector: 'app-decorator',
  templateUrl: './decorator.component.html',
  styleUrls: ['./decorator.component.scss']
})
export class DecoratorComponent {
  public price: number;
  public toppings: string[];
  public burgers: Burger[];

  public burger: Burger;

  constructor() {
    this.price = 0;
    this.toppings = new Array<string>();
    this.initBurgers();
  }

  // normal toppings

  public btnCheese(): void {
    const decorator = new ExtraCheeseToppingDecorator(this.burger);
    this.logOrder(decorator);
  }

  public btnMushrooms(): void {
    const decorator = new BeefToppingDecorator(this.burger);
    this.logOrder(decorator);
  }

  public btnJalapeno(): void {
    const decorator = new JalapenoToppingDecorator(this.burger);
    this.logOrder(decorator);
  }

  // composition toppings

  public btnCheeseAndJalapeno(): void {
    const cheeseDecorator = new ExtraCheeseToppingDecorator(this.burger);
    const cheeseAndJalapenoDecorator = new JalapenoToppingDecorator(cheeseDecorator);
    this.logOrder(cheeseAndJalapenoDecorator);
  }

  public btnCheeseAndMushrooms(): void {
    const cheeseDecorator = new ExtraCheeseToppingDecorator(this.burger);
    const cheeseAndMushroomDecorator = new BeefToppingDecorator(cheeseDecorator);
    this.logOrder(cheeseAndMushroomDecorator);
  }

  // inherited toppings

  public btnExtraCheese(): void {
    const decorator = new ExtraExtraCheeseToppingDecorator(this.burger);
    this.logOrder(decorator);
  }

  public btnHotJalapeno(): void {
    const decorator = new HotJalapenoToppingDecorator(this.burger);
    this.logOrder(decorator);
  }

  private logOrder(decorator: Burger) {
    this.price = decorator.getPrice();
    this.toppings.push(decorator.getTopping());
  }

  private initBurgers() {
    this.burgers = new Array<Burger>();
    this.burgers.push(new VeggieBurger());
    this.burgers.push(new DoubleWhopper());
    this.burgers.push(new BlackBeanBurger());
  }
}
