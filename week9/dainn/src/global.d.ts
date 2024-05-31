declare module '*.jpg';
declare module '*.png';
declare module '*.jpeg';
declare module '*.gif';

declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}
