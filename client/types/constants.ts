export type FlashCard = {
  id: number;
  question: string;
  answer: string;
  known: number;
};

export type User = {
  id: number;
  email: string;
  password: string;
};
