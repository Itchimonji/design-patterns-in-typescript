export abstract class MorningRoutineReportTemplate {
  private report: string[] = [];

  private getUp(): number {
    return this.report.push('Get up...');
  }

  private breakfast(): number {
    return this.report.push('Get some food...');
  }

  protected abstract doSport(): number;
  protected abstract readBook(): number;
  protected abstract meetFriends(): number;

  public generateReport(): string[] {
    this.getUp();
    this.breakfast();
    this.readBook();
    this.doSport();
    this.meetFriends();
    return this.report;
  }

  protected addToReport(value: string): number {
    return this.report.push(value);
  }
}
