import translations from "../translations.json";

export type Translations = typeof translations;
export type Language = keyof Translations;
