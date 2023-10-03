"use client";

import { Autocomplete, Button, TextField } from "@mui/material";
import React, { useState, useEffect } from "react";
import styles from "./CreateForm.module.scss";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { checkAuthenticated } from "@/helpers/auth";
import { Category, FlashCard } from "@/types/constants";
import { getCategories } from "@/helpers/categories";
import CustomSnackbar from "../CustomSnackbar/CustomSnackbar";
import { useRouter } from "next/navigation";

type Props = {};

const CreateForm = (props: Props) => {
  const router = useRouter();

  const [category, setCategory] = useState("");
  const [categoriesList, setCategoriesList] = useState<Category[]>([]);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [snackBar, setSnackBar] = useState<{
    open: boolean;
    message: string;
    severity: null | "success" | "error" | "warning" | "info";
    action: React.ReactNode | null;
  }>({
    open: false,
    message: "",
    severity: null,
    action: null,
  });
  const userState = useAppSelector((state) => state.loggedUser);

  const dispatch = useAppDispatch();

  useEffect(() => {
    checkAuthenticated(dispatch);
  }, []);

  const handleGetCategories = async () => {
    const response = await getCategories();
    if (response) {
      setCategoriesList(response);
    }
  };

  useEffect(() => {
    if (userState.user) {
      handleGetCategories();
    }
  }, [userState.user]);

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
        credentials: "include",
      }
    ).then(async (res) => res.json());
    if (response) {
      setSnackBar({
        open: true,
        message: "Votre carte a bien été créée !",
        severity: "success",
        action: (
          <Button onClick={() => router.push("/")}>Tester ma mémoire</Button>
        ),
      });
      setQuestion("");
      setAnswer("");
      setCategoriesList(curr => [...curr, response.category])
    }
  };

  useEffect(() => {
    console.log(categoriesList, " is the categores list");
  }, [categoriesList]);

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
          options={categoriesList.map((cat) => cat.name)}
          onInputChange={(e, value) => setCategory(value)}
          renderInput={(params) => (
            <TextField
              key={params.id}
              {...params}
              value={category}
              label="Categorie"
            />
          )}
        />
      </div>
      <Button fullWidth size="large" variant="contained" onClick={createCard}>
        Créer
      </Button>
      <CustomSnackbar snackBar={snackBar} setSnackBar={setSnackBar} />
    </div>
  );
};

export default CreateForm;
