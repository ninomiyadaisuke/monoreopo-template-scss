export type Styles = {
  title: string;
  title__test: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
