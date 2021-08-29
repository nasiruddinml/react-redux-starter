// https://stackoverflow.com/questions/53742766/cannot-import-local-fonts-with-typescript/54101503#54101503
// You need to declare the font file formats as modules so that TypeScript can parse them correctly.
declare module "*.ttf";
declare module "*.woff";
declare module "*.woff2";
