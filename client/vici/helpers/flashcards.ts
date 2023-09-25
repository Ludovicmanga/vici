import { FlashCard } from "@/types/constants";
import { KnownledgeLevel } from "@/types/enums";

export const updateKnowledgeLevel = async (initialCard: FlashCard, selectedBtn: KnownledgeLevel) => {
    const cardWithUpdatedKnownProp = { ...initialCard, known: selectedBtn };
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/flash-cards/update`,
      {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          cardToUpdate: cardWithUpdatedKnownProp,
        }),
      }
    );
    console.log(response, " is the res");
  };