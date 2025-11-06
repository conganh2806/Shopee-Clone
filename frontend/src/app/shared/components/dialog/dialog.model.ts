export interface DialogButton {
  text: string;
  value: string;
  style?: 'primary' | 'secondary' | 'danger';
}

export interface DialogConfig {
  title: string;
  message: string;
  buttons: DialogButton[];
}
