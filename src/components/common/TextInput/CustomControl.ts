
export interface ICustomControl<Type> {
  onChange: (value: Type | null) => void;
  value: Type | null;
}
export class CustomControl implements ICustomControl<string> {
  public onChange;
  public value;

  constructor(onChange: (value: string | null) => void, value: string | null) {
    this.onChange = onChange;
    this.value = value;
  }
}
