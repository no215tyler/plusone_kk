import { Box } from "@mui/material";
import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <Box component="footer" flexGrow={0}>
      <div className={classes.footer}>
        <span className={classes.copyright}>©</span>
        <img
          src="plusone_logos/Plus-One-CoLtd_bgwhite_text.jpg"
          alt="Plus One Co., Ltd."
          className={classes.footer_logo}
        />
      </div>
    </Box>
  );
};

export default Footer;
