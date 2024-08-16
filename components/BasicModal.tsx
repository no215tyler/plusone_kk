import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { CircularProgress, Typography } from "@mui/material";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  textAlign: "center",
};

interface BasicModalProps {
  open: boolean;
  handleClose: () => void;
  isLoading: boolean;
  message: string;
}

const BasicModal: React.FC<BasicModalProps> = ({
  open,
  handleClose,
  isLoading,
  message,
}: any) => {
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {isLoading ? (
            <CircularProgress />
          ) : (
            <>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                {message}
              </Typography>
            </>
          )}
        </Box>
      </Modal>
    </>
  );
};

export default BasicModal;
