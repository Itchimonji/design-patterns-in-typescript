import { BrushSize } from './brush-size.enum';

// Flyweight
export interface Pen {
  setColor(color: string): void;
  draw(content: string): string;
}

export class WideBrush implements Pen {
  // intrinsic state - shareable
  private readonly brushSize = BrushSize.WIDE;

  // extrinsic state - supplied by client
  private color: string;

  public setColor(color: string): void {
    this.color = color;
  }

  public draw(content: string): string {
    return 'Draw WIDE content "' + content +
      '" in color ' + this.color;
  }
}

export class SlimBrush implements Pen {
  // intrinsic state - shareable
  private readonly brushSize = BrushSize.SLIM;

  // extrinsic state - supplied by client
  private color: string;

  public setColor(color: string): void {
    this.color = color;
  }

  public draw(content: string): string {
    return 'Draw SMALL content "' + content +
      '" in color ' + this.color;
  }
}

export class MediumBrush implements Pen {
  // intrinsic state - shareable
  private readonly brushSize = BrushSize.MEDIUM;

  // extrinsic state - supplied by client
  private color: string;

  public setColor(color: string): void {
    this.color = color;
  }

  public draw(content: string): string {
    return 'Draw MEDIUM content "' + content +
      '" in color ' + this.color;
  }
}
