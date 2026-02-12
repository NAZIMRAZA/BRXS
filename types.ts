
export interface BootLine {
  text: string;
  delay: number;
}

export enum AppState {
  BOOTING = 'BOOTING',
  READY = 'READY'
}
