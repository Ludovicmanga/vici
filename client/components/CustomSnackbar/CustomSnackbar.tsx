import React from 'react'
import { Alert, Snackbar } from "@mui/material";

type Props = { 
    setSnackBar: React.Dispatch<React.SetStateAction<{
        open: boolean;
        message: string;
        severity: null | "success" | "error" | "warning" | "info";
        action: React.ReactNode | null;
    }>>
    snackBar: {
        open: boolean;
        message: string;
        severity: null | "success" | "error" | "warning" | "info";
        action: React.ReactNode | null;
    }
}

const CustomSnackbar = (props: Props) => {
  return (
    <Snackbar
        open={props.snackBar.open}
        autoHideDuration={6000}
        onClose={() =>
          props.setSnackBar({
            open: false,
            message: "",
            severity: null,
            action: null,
          })
        }
      >
        <Alert
          onClose={() =>
            props.setSnackBar({
              open: false,
              message: "",
              severity: null,
              action: null
            })
          }
          severity={props.snackBar.severity || "success"}
          sx={{ width: "100%" }}
          action={props.snackBar.action ? props.snackBar.action : false}
        >
          {props.snackBar.message}
        </Alert>
      </Snackbar>
  )
}

export default CustomSnackbar