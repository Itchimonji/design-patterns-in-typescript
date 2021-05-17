import { MobilePhoneState } from './screen.state';

// optional interface of state model
export interface MobilePhoneOptions {
  state: MobilePhoneState;
  name: string;
  lockScreen(): void;
  unlockScreen(): void;
  showLowBatteryScreen(): void;
}
