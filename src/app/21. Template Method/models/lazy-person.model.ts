import { MorningRoutineReportTemplate } from './morning-routine.template';

export class LazyPerson extends MorningRoutineReportTemplate {
  protected doSport(): number {
    return this.addToReport('No sport in the morning!');
  }

  protected readBook(): number {
    return this.addToReport('Reading "Refactoring" by Martin Fowler.');
  }

  protected meetFriends(): number {
    return this.addToReport('Meet my mother.');
  }
}
