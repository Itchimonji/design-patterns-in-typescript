import { MediumBrush, Pen, SlimBrush, WideBrush} from './pen.model';

interface IHashMap {
  [key: string]: Pen;
}

// Flyweight-Factory
export class PenFactory {
  private static pensMap: IHashMap = {};

  public static getWideBrush(color: string): Pen {
    const key: string = color + '-WideBrush';

    if (this.pensMap[key] != null) {
      return this.pensMap[key];
    }

    const pen: Pen = new WideBrush();
    pen.setColor(color);
    this.pensMap[key] = pen;
    return pen;
  }

  public static getSlimBrush(color: string): Pen {
    const key: string = color + '-SlimBrush';

    if (this.pensMap[key] != null) {
      return this.pensMap[key];
    }

    const pen: Pen = new SlimBrush();
    pen.setColor(color);
    this.pensMap[key] = pen;
    return pen;
  }

  public static getMediumBrush(color: string): Pen {
    const key: string = color + '-MediumBrush';

    if (this.pensMap[key] != null) {
      return this.pensMap[key];
    }

    const pen: Pen = new MediumBrush();
    pen.setColor(color);
    this.pensMap[key] = pen;
    return pen;
  }
}
