"use client";

import { Autocomplete, Button, Paper, TextField } from "@mui/material";
import React, { useState } from "react";
import styles from "./CreateForm.module.scss";

type Props = {};

const CreateForm = (props: Props) => {
  const [category, setCategory] = useState("");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const createCard = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/flash-cards/create`,
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          category,
          question,
          answer,
        }),
      }
    );
    console.log(await response.json(), " is the response");
  };

  return (
    <div className={styles.container}>
      <Paper className={styles.form}>
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
            onChange={(e, value) => console.log('value', e, value)}
            renderInput={(params) => (
              <TextField key={params.id} {...params} label="Categorie" />
            )}
          />
        </div>
        <Button size="large" variant="contained" onClick={createCard}>
          Créer
        </Button>
      </Paper>
    </div>
  );
};

export default CreateForm;
