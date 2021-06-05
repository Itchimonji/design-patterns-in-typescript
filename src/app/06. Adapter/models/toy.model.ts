// target interface
export interface Toy {
  squeak(): string;
}

export class AnyToy implements Toy {
  public squeak(): string {
    return 'squeaaaaaak...';
  }
}
