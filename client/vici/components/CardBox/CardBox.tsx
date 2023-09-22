import React from "react";

type Props = {
  card: {
    id: number;
    question: string;
    answer: string;
    known: string;
  };
};

const CardBox = (props: Props) => {
  return (
    <div>
      <div>question: {props.card.question}</div>
      <div>answer: {props.card.answer}</div>
      <div>known ? {props.card.known}</div>
    </div>
  );
};

export default CardBox;
