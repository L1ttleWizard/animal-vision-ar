import type { AnimalId } from "./animals";

export type GameId = "snake-hunt" | "bee-vision" | "predator-reflex";

export type GameMeta = {
  id: GameId;
  title: string; // RU uppercase
  subtitle: string; // RU uppercase short
  description: string;
  price: number; // 0 if unlocked
  animal: AnimalId;
  buttonLabel: string; // e.g. "СМОТРЕТЬ ГЛАЗАМИ ЗМЕИ"
};

export const GAMES: GameMeta[] = [
  {
    id: "snake-hunt",
    title: "ОХОТА ЗМЕИ",
    subtitle: "ТЕПЛОВИЗОР",
    description: "Поиск добычи по тепловому следу на время.",
    price: 0,
    animal: "snake",
    buttonLabel: "СМОТРЕТЬ ГЛАЗАМИ ЗМЕИ",
  },
  {
    id: "bee-vision",
    title: "ЗРЕНИЕ ПЧЕЛЫ",
    subtitle: "УФ-СПЕКТР",
    description: "Навигация и сбор скрытых маркеров.",
    price: 1500,
    animal: "bee",
    buttonLabel: "СМОТРЕТЬ ГЛАЗАМИ ПЧЕЛЫ",
  },
  {
    id: "predator-reflex",
    title: "РЕАКЦИЯ ХИЩНИКА",
    subtitle: "НОЧНОЕ ЗРЕНИЕ",
    description: "Распознавание движения и ловля быстрых целей в сумерках.",
    price: 1500,
    animal: "wolf",
    buttonLabel: "СМОТРЕТЬ ГЛАЗАМИ ХИЩНИКА",
  },
];

export type QuestId = "speed-quiz" | "tests";

export type Quest = {
  id: QuestId;
  title: string;
  description: string;
  rewardXp: number;
  rewardCoins: number;
};

export const QUESTS: Quest[] = [
  {
    id: "speed-quiz",
    title: "ИГРЫ НА СКОРОСТЬ",
    description:
      "Найди жертву раньше других. 5 раундов по 30 секунд в режиме ИК-зрения.",
    rewardXp: 80,
    rewardCoins: 25,
  },
  {
    id: "tests",
    title: "ТЕСТЫ",
    description:
      "Биология зрения животных. 10 вопросов, +1 уровень за каждые 7 правильных.",
    rewardXp: 120,
    rewardCoins: 40,
  },
];

export type JournalEntry = {
  id: string;
  date: string;
  animal: AnimalId;
  title: string;
  body: string;
};

export const JOURNAL: JournalEntry[] = [
  {
    id: "j1",
    date: "12 МАЯ",
    animal: "fox",
    title: "ЛИСИЦА ОБЫКНОВЕННАЯ",
    body: "Vulpes vulpes. Видит синий и зелёный, чувствует магнитное поле. Прыжок — точная баллистика.",
  },
  {
    id: "j2",
    date: "08 МАЯ",
    animal: "owl",
    title: "СОВА УШАСТАЯ",
    body: "Asio otus. Слух асимметричный: одно ухо выше другого. Локализация добычи в темноте — до 1 см.",
  },
  {
    id: "j3",
    date: "02 МАЯ",
    animal: "dog",
    title: "СОБАКА",
    body: "Canis familiaris. Сине-жёлтый спектр, 250° поле зрения. Узнаёт хозяина по силуэту с 30 м.",
  },
];
