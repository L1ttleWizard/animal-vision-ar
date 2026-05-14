import type { AnimalId } from "./animals";

export type ChatPreview = {
  id: string;
  title: string;
  lastMessage: string;
  time: string;
  unread: number;
  avatar: AnimalId | "compass";
};

export type ChatMessage = {
  id: string;
  author: string;
  text: string;
  time: string;
  isSelf?: boolean;
};

export const CHATS: ChatPreview[] = [
  {
    id: "cat-club",
    title: "КОШАЧИЙ КЛУБ",
    lastMessage: "Привет! Видел модель оленя? Супер!",
    time: "10:15",
    unread: 3,
    avatar: "cat",
  },
  {
    id: "alexander",
    title: "АЛЕКСАНДР",
    lastMessage: "На 12 уровне! Да, так держать!",
    time: "09:30",
    unread: 0,
    avatar: "fox",
  },
  {
    id: "forest-friends",
    title: "ЛЕСНЫЕ ДРУЗЬЯ (ГРУППА)",
    lastMessage: "Кто на метку 18 в субботу? Я иду.",
    time: "ВЧЕРА",
    unread: 0,
    avatar: "compass",
  },
  {
    id: "navigators",
    title: "КОМАНДА НАВИГАТОРОВ",
    lastMessage: "Метка найдена! До 5м!",
    time: "14:45",
    unread: 1,
    avatar: "compass",
  },
];

export const CHAT_THREADS: Record<string, ChatMessage[]> = {
  "cat-club": [
    {
      id: "1",
      author: "Виктория",
      text: "Привет! Видел модель оленя? Супер!",
      time: "10:12",
    },
    {
      id: "2",
      author: "Лев",
      text: "Я её три дня выслеживал в лесопарке",
      time: "10:13",
    },
    {
      id: "3",
      author: "Я",
      text: "Сегодня вечером сходим — покажу метку?",
      time: "10:15",
      isSelf: true,
    },
  ],
  alexander: [
    {
      id: "1",
      author: "Александр",
      text: "На 12 уровне! Да, так держать!",
      time: "09:30",
    },
    {
      id: "2",
      author: "Я",
      text: "Спасибо! Сегодня поймал лису",
      time: "09:32",
      isSelf: true,
    },
  ],
  "forest-friends": [
    {
      id: "1",
      author: "Денис",
      text: "Кто на метку 18 в субботу? Я иду.",
      time: "вчера",
    },
    {
      id: "2",
      author: "Маша",
      text: "Я с тобой! Возьму бинокль",
      time: "вчера",
    },
  ],
  navigators: [
    {
      id: "1",
      author: "Капитан",
      text: "Метка найдена! До 5м!",
      time: "14:45",
    },
  ],
};
