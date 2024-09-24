import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation"; // Import useSearchParams and useRouter
import initialCards from "../utils/cardsList.json";

//This is for appending cards to initial card count
const useCards = () => {
  const [cards, setCards] = useState(initialCards);
  const [validAddCard, setValidAddCard] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const router = useRouter();
  const searchParams = useSearchParams(); // Access search params

  // Handle query parameters using searchParams
  useEffect(() => {
    const queryCards = searchParams.get("cards")
      ? searchParams.get("cards").split(",")
      : [];

    const newCards = queryCards.map((id) => ({
      id,
      name: `Sample ${id}`,
      amount: "10,000",
      details: "Lorem ipsum dolor sit amet",
      imageUrl: "/static/images/sample.png",
    }));

    setCards([...initialCards, ...newCards]);
  }, [searchParams]);

  const addCard = () => {
    if (validAddCard) {
      const newCardName = `Sample ${cards.length + 1}`;
      console.log(newCardName);
      const newCardId = cards.length + 1; // Generate new ID in ISO format

      // Generate new object for the newly added card
      const updatedCards = [
        ...cards,
        {
          id: newCardId,
          name: newCardName,
          amount: "10,000",
          details: "Lorem ipsum dolor sit amet",
          imageUrl: "/static/images/sample.png",
        },
      ];

      setCards(updatedCards);

      // Update URL parameters
      const queryCards = searchParams.get("cards")
        ? searchParams.get("cards").split(",")
        : [];
      const newQueryCards = [...queryCards, newCardId];

      const newSearchParams = new URLSearchParams(searchParams);
      newSearchParams.set("cards", newQueryCards.join(","));

      // Use router to update URL (shallow push)
      router.push(`?${newSearchParams.toString()}`);

      // Prevent adding another card for 5 seconds
      setValidAddCard(false);
      setTimeout(() => setValidAddCard(true), 5000);
    } else {
      setErrorMessage(
        "Oops, you need to wait for 5 seconds before you can add again!"
      );
      setTimeout(() => {
        setErrorMessage("");
      }, 4000);
    }
  };

  return { cards, addCard, errorMessage };
};

export default useCards;
