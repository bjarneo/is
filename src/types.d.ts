declare module 'isdotjs' {
  export default interface is {
    Array: (value: any) => boolean;
    Object: (value: any) => boolean;
    Function: (value: any) => boolean;
    Undefined: (value: any) => boolean;
    String: (value: any) => boolean;
    Empty: (value: any) => boolean;
    Number: (value: any) => boolean;
    Integer: (value: any) => boolean;
    Float: (value: any) => boolean;
    Boolean: (value: any) => boolean;
    Null: (value: any) => boolean;
    Element: (value: any) => boolean;
    Date: (value: any) => boolean;
    RegExp: (value: any) => boolean;
    Global: (value: any) => boolean;
  }
}