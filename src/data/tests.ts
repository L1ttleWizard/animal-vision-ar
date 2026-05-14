export type Question = {
  q: string;
  options: string[];
  correct: number; // index
  explain: string;
};

export const TESTS: Question[] = [
  {
    q: "Какие лучи распознают пчёлы, недоступные человеку?",
    options: ["Инфракрасные", "Гамма", "Ультрафиолетовые", "Рентгеновские"],
    correct: 2,
    explain:
      "Пчёлы видят УФ-спектр — он показывает им «дорожки» к нектару на лепестках.",
  },
  {
    q: "Сколько у орла фоторецепторов больше, чем у человека?",
    options: ["В 1.5 раза", "В 4–5 раз", "В 10 раз", "Одинаково"],
    correct: 1,
    explain:
      "У орлов в 4–5 раз больше колбочек и палочек в сетчатке. Это даёт остроту зрения 4–8 ×.",
  },
  {
    q: "За счёт чего змея видит в темноте?",
    options: [
      "Ультразвук",
      "Тепловые рецепторы (ИК-зрение)",
      "Усиленные палочки сетчатки",
      "Электрорецепция",
    ],
    correct: 1,
    explain:
      "Ямки на голове работают как ИК-камера и строят тепловую карту жертвы.",
  },
  {
    q: "Какое поле зрения у лошади?",
    options: ["180°", "220°", "Почти 360°", "120°"],
    correct: 2,
    explain:
      "Лошади видят почти всё вокруг — два слепых пятна: перед носом и за хвостом.",
  },
  {
    q: "Что особенного в сетчатке кошки в темноте?",
    options: [
      "Особая роговица",
      "Слой tapetum lucidum",
      "Двойной зрачок",
      "Световые антенны",
    ],
    correct: 1,
    explain:
      "Tapetum lucidum отражает свет назад через сетчатку, удваивая чувствительность ночью.",
  },
];

export type SpeedTarget = {
  id: string;
  emoji: string;
  isPrey: boolean;
};

export const SPEED_TARGETS: SpeedTarget[] = [
  { id: "1", emoji: "🐭", isPrey: true },
  { id: "2", emoji: "🪨", isPrey: false },
  { id: "3", emoji: "🐭", isPrey: true },
  { id: "4", emoji: "🌿", isPrey: false },
  { id: "5", emoji: "🦗", isPrey: true },
  { id: "6", emoji: "🍂", isPrey: false },
  { id: "7", emoji: "🐭", isPrey: true },
  { id: "8", emoji: "🪵", isPrey: false },
  { id: "9", emoji: "🐰", isPrey: true },
  { id: "10", emoji: "🌳", isPrey: false },
];
