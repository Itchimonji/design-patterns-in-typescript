import { MorningRoutineReportTemplate } from './morning-routine.template';

export class AthleticPerson extends MorningRoutineReportTemplate {
  protected doSport(): number {
    return this.addToReport('Running a marathon!');
  }

  protected readBook(): number {
    return this.addToReport('No time for reading. I need to do some sport.');
  }

  protected meetFriends(): number {
    return this.addToReport('Meet my coach.');
  }
}


