export type FlashCard = {
  id: number;
  question: string;
  answer: string;
  known: number;
  category: Category
};

export type User = {
  id: number;
  email: string;
  password: string;
};

export type Category = {
  id: number;
  name: string;
  userId: number;
};
