import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Alert, Collapse, Grid } from "@mui/material";

const ErrorMessage = ({ children }) => {
  const [open, setOpen] = React.useState(true);
  return (
      <Collapse in={open}>
        <Box width="100%" zIndex="999" sx={{ m: 1 }}>
          <Alert
            severity="error"
            onClose={() => {
              setOpen(false);
            }}
          >
            {children}
          </Alert>
        </Box>
      </Collapse>
  );
};

export default ErrorMessage;
