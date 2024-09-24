"use client";

import { Fragment } from "react";
import Button from "../ui/Button";
import Card from "../ui/Card";
import Container from "../ui/Container";
import useCards from "@/hooks/useCards";
import Message from "../ui/Message";

const Hero = () => {
  const { cards, addCard, errorMessage } = useCards();
  return (
    <Container>
      {cards.map((card) => {
        return (
          <Card
            key={card.id}
            label={card.name}
            description={card.details}
            price={card.amount}
            image={card.imageUrl}
          />
        );
      })}
      <Button onClick={addCard}>Add Block</Button>
      {errorMessage && <Message type="danger">{errorMessage}</Message>}
    </Container>
  );
};

export default Hero;
