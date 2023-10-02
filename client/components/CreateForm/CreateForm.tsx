"use client";

import {
  Autocomplete,
  Button,
  TextField,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import styles from "./CreateForm.module.scss";
import { useAppDispatch } from "@/redux/hooks";
import { checkAuthenticated } from "@/helpers/auth";
import { FlashCard } from "@/types/constants";
import { addCards } from "@/redux/flashCardsSlice";
import { setSnackBarMessage } from "@/redux/generalPropertiesSlice";

type Props = {};

const CreateForm = (props: Props) => {
  const [category, setCategory] = useState("");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const dispatch = useAppDispatch();

  useEffect(() => {
    checkAuthenticated(dispatch);
  }, []);

  const createCard = async () => {
    const response: FlashCard = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/flash-cards/create`,
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          category,
          question,
          answer,
        }),
        credentials: 'include'
      }
    ).then(async (res) => res.json());
    if (response) {
      console.log(response, " is the response");
      dispatch(addCards([response]));
      dispatch(
        setSnackBarMessage({
          open: true,
          message: `Votre carte a bien été créée !`,
          severity: "success",
        })
      );
    }
  };

  return (
    <div className={styles.form}>
      <div className={styles.input}>
        <TextField
          label="Question"
          variant="outlined"
          fullWidth
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
      </div>
      <div className={styles.input}>
        <TextField
          label="Réponse"
          variant="outlined"
          fullWidth
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />
      </div>
      <div className={styles.input}>
        <Autocomplete
          freeSolo
          autoSelect
          options={[]}
          onInputChange={(e, value) => setCategory(value)}
          renderInput={(params) => (
            <TextField
              key={params.id}
              {...params}
              label="Categorie"
            />
          )}
        />
      </div>
      <Button fullWidth size="large" variant="contained" onClick={createCard}>
        Créer
      </Button>
    </div>
  );
};

export default CreateForm;
