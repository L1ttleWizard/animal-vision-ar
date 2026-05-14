export type AnimalId =
  | "cat"
  | "dog"
  | "eagle"
  | "wolf"
  | "fox"
  | "bear"
  | "owl"
  | "zebra"
  | "elephant"
  | "snake"
  | "bee"
  | "horse";

export type Animal = {
  id: AnimalId;
  name: string; // RU uppercase, nominative
  genitive: string; // RU uppercase, genitive (for "глазами ...")
  emoji: string; // Fallback icon
  description: string; // Short bio
  fact: string; // Educational fact
  price: number; // 0 if free / unlocked by default
  visionPalette: string[]; // For vision-mode demo card
  visionLabel: string; // e.g. "Тепловизор", "УФ-спектр"
};

export const ANIMALS: Animal[] = [
  {
    id: "cat",
    name: "КОШКА",
    genitive: "КОШКИ",
    emoji: "🐈‍⬛",
    description:
      "Видит при низком освещении в 6 раз лучше человека. Различает оттенки серого и приглушённые цвета.",
    fact: "У кошки 200° поле зрения и слой tapetum lucidum — он отражает свет и удваивает чувствительность сетчатки в сумерках.",
    price: 0,
    visionPalette: ["#7B7363", "#A39879", "#D7C896", "#3A3A2C"],
    visionLabel: "Ночное зрение",
  },
  {
    id: "dog",
    name: "СОБАКА",
    genitive: "СОБАКИ",
    emoji: "🐕",
    description:
      "Видит мир в сине-жёлтых тонах, без красного. Зато улавливает движение в 10 раз лучше человека.",
    fact: "Собаки — дихроматы: их сетчатка содержит только 2 типа колбочек, поэтому красный для них почти неразличим.",
    price: 0,
    visionPalette: ["#3C6FA6", "#A89A4C", "#D2C880", "#1C2C2A"],
    visionLabel: "Дихромат",
  },
  {
    id: "eagle",
    name: "ОРЁЛ",
    genitive: "ОРЛА",
    emoji: "🦅",
    description:
      "Зрение в 4-8 раз острее человеческого. Различает УФ-следы мочи грызунов на километровой высоте.",
    fact: "Орёл может увидеть зайца с высоты 3 километра благодаря 5 типам фоторецепторов в сетчатке.",
    price: 120,
    visionPalette: ["#1D2B1A", "#E0C46B", "#9A7B30", "#2C3520"],
    visionLabel: "УФ + резкость",
  },
  {
    id: "wolf",
    name: "ВОЛК",
    genitive: "ВОЛКА",
    emoji: "🐺",
    description:
      "Острое периферийное зрение и отличное восприятие движения. В сумерках почти как днём.",
    fact: "У волков 250° поле зрения. Они слышат на 1.6 км и чувствуют запах на 2.4 км.",
    price: 180,
    visionPalette: ["#5C6B4F", "#9AA88F", "#383F2D", "#22281C"],
    visionLabel: "Сумеречное",
  },
  {
    id: "fox",
    name: "ЛИСА",
    genitive: "ЛИСЫ",
    emoji: "🦊",
    description:
      "Видит магнитное поле Земли — учёные считают, лисы используют его для прыжков в снег.",
    fact: "Лисицы — единственные хищники, прыгающие на добычу с расчётом по магнитным полюсам.",
    price: 150,
    visionPalette: ["#A85E2F", "#E0A06B", "#3E2B1F", "#7A4D2A"],
    visionLabel: "Магнитное чувство",
  },
  {
    id: "bear",
    name: "МЕДВЕДЬ",
    genitive: "МЕДВЕДЯ",
    emoji: "🐻",
    description:
      "Цветное зрение слабее, зато запахи и контуры — на максимуме. Видит лучше, чем думают.",
    fact: "Бурый медведь различает цвета и помнит ягодные поляны годами.",
    price: 250,
    visionPalette: ["#5C4A2E", "#A88456", "#221A0C", "#3F3422"],
    visionLabel: "Цвет + контраст",
  },
  {
    id: "owl",
    name: "СОВА",
    genitive: "СОВЫ",
    emoji: "🦉",
    description:
      "Чувствительность к свету в 100 раз выше нашей. Поворачивает голову на 270°.",
    fact: "Глаза совы неподвижны в глазницах — поэтому она крутит шею. Бинокулярное поле — 70°.",
    price: 110,
    visionPalette: ["#1A1F12", "#6A7556", "#C9C8A0", "#2A2F1A"],
    visionLabel: "Ночь + слух",
  },
  {
    id: "zebra",
    name: "ЗЕБРА",
    genitive: "ЗЕБРЫ",
    emoji: "🦓",
    description:
      "Двухцветное зрение и почти 360° обзор. Полосы стада создают зрительный шум для хищника.",
    fact: "Полосы зебр сбивают с толку слепней и хищников — это пример эволюционного камуфляжа движения.",
    price: 200,
    visionPalette: ["#5B5B5B", "#E6E6E6", "#1B1B1B", "#888888"],
    visionLabel: "Панорама",
  },
  {
    id: "elephant",
    name: "СЛОН",
    genitive: "СЛОНА",
    emoji: "🐘",
    description:
      "Помнит маршруты и лица годами. Видит хуже, чем чувствует ногами вибрацию земли.",
    fact: "Слоны общаются инфразвуком и ощущают шаги других стад за десятки километров.",
    price: 220,
    visionPalette: ["#7D7A6C", "#B0A98D", "#3E3A2A", "#5C5849"],
    visionLabel: "Инфразвук",
  },
  {
    id: "snake",
    name: "ЗМЕЯ",
    genitive: "ЗМЕИ",
    emoji: "🐍",
    description:
      "Чувствует тепло жертвы в темноте через ямки на голове. Видит инфракрасный мир.",
    fact: "Гремучие змеи строят тепловую карту окружения с разрешением до 0.003 °C.",
    price: 0,
    visionPalette: ["#1F4ABF", "#FF7B3D", "#0E2C6B", "#FFD15C"],
    visionLabel: "Тепловизор",
  },
  {
    id: "bee",
    name: "ПЧЕЛА",
    genitive: "ПЧЕЛЫ",
    emoji: "🐝",
    description:
      "Видит ультрафиолет: цветы для неё — взлётные полосы с УФ-метками к нектару.",
    fact: "Фасеточные глаза пчелы состоят из 6 900 фасеток и видят поляризованный свет.",
    price: 1500,
    visionPalette: ["#8C5BD9", "#3F2B7A", "#C1A1FF", "#221536"],
    visionLabel: "УФ-зрение",
  },
  {
    id: "horse",
    name: "ЛОШАДЬ",
    genitive: "ЛОШАДИ",
    emoji: "🐎",
    description:
      "Поле зрения почти 360°. Два слепых пятна — прямо перед носом и за хвостом.",
    fact: "Лошади видят почти всё вокруг, но плохо оценивают расстояние из-за бокового расположения глаз.",
    price: 130,
    visionPalette: ["#6A5037", "#B69875", "#33261A", "#54402A"],
    visionLabel: "Панорама",
  },
];

export const getAnimal = (id: AnimalId) =>
  ANIMALS.find((a) => a.id === id) ?? ANIMALS[0];
