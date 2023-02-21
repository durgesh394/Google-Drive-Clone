import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";

import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import SettingsIcon from "@mui/icons-material/Settings";
import AppsIcon from "@mui/icons-material/Apps";
import { Avatar } from "@mui/material";

const Header = () => {
  return (
    <div className="container">
      <div className="logo">
       
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Google_Drive_icon_%282020%29.svg/100px-Google_Drive_icon_%282020%29.svg.png"
            alt="logo"
            className="drivelogo"
          />
          <span>Drive</span>
      
      </div>
      <div className="search">
    
          <SearchIcon  sx={{width:"25px" , height :"25px"}} />
          <input type="text" placeholder="Search in Drive" />
          <FormatAlignCenterIcon  sx={{width:"25px" , height :"25px"}}  />
   
      </div>
      <div className="menubar">
     
          <HelpOutlineIcon sx={{width:"25px" , height :"25px"}} />
          <SettingsIcon  sx={{width:"25px" , height :"25px"}} />
          <AppsIcon sx={{width:"25px" , height :"25px"}} />
        <Avatar sx={{width:"30px" , height:"30px"}}/>
      </div>
    </div>
  );
};

export default Header;
