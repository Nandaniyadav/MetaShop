import * as React from "react";
import "./HeaderStyle.css";

import { AppBar, Toolbar, Typography } from "@mui/material";

const Header = () => {
  return (
    <>
      <AppBar className="navbar" sx={{ backgroundColor: "#ff5722" }}>
        <Toolbar>
          <Typography
            className="navbartext"
            component="div"
            sx={{ flexGrow: 1, color: "#ffffff" }}
          >
            Get 20% Flat Discount on Your First Order
          </Typography>
          <Typography>
            <select name="desh" id="country">
              <option value="option1">EN</option>
              <option value="option2">ES</option>
              <option value="option3">ER</option>
            </select>
          </Typography>
          <Typography>
           <hr className="separator"/>
           </Typography>
          <Typography>Login or Registation</Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
