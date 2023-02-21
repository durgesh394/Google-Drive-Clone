import React, { useState } from "react";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import DevicesIcon from "@mui/icons-material/Devices";
import GroupIcon from "@mui/icons-material/Group";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import {ref } from "firebase/storage";
import WbCloudyOutlinedIcon from "@mui/icons-material/WbCloudyOutlined";
import { Modal } from "@mui/material";

import {storage} from "./firebase"
function SideBar() {

const [open , setOpen] = useState(true);
const [file , setfile] = useState(null);
const [uploading , setuploading] = useState(false);
  const Hadleclose = () =>{
    setOpen(false)
  }




//file 
const fileHandleChange = (e)=>{
  setfile(e.target.files[0]);
}



const uploadfileHadler = (e) =>{
    
  const storageRef = ref(storage);
  const imagesRef = ref(storageRef, 'file');

  const spaceRef = ref(imagesRef, file.name);

  const path = spaceRef.fullPath;

  const name = spaceRef.name;

  const imagesRefAgain = spaceRef.parent;

  console.log(imagesRefAgain)
    // ref(`file/${file.name}`).put(file).then(snapshot=>{
    //   console.log(snapshot);
    // })
}
  return (
  <>

  {/* modal open */}

<Modal open={open} onClose={Hadleclose}>

<div className="modalcontainer">
  <div className="modalWrapper">
       <div className="modalTop">
        <h3>Select File you want to upload</h3>
       </div>

       {
        uploading ? <div className="uploading"> Uploading... </div> : <><div className="modalfile">
        <input type="file" onChange={fileHandleChange} />
       </div>
       <div className="submitBtn">
        <button onClick={uploadfileHadler}> <b>UPLOAD</b></button>
       </div>
       </>
       }
      
  </div>
</div>
</Modal>  

{/* Modal close */}

  <div className="sidebarContainer">
      <div className="newBtn">
        <button>New</button>
      </div>
      <div className="sidebarList">
        <div className="sidelistItem">
          <UploadFileIcon />
          <span>My Drive</span>
        </div>

        <div className="sidelistItem">
          <DevicesIcon />
          <span>Computers</span>
        </div>

        <div className="sidelistItem">
          <GroupIcon />
          <span>Shared with me</span>
        </div>

        <div className="sidelistItem">
          <AccessTimeIcon />
          <span>Recent</span>
        </div>

        <div className="sidelistItem">
          <StarBorderIcon />
          <span>Stared</span>
        </div>

        <div className="sidelistItem">
          <DeleteOutlineIcon />
          <span>Trash</span>
        </div>
      </div>
      <div className="storagesidebar">
        <div style={{display : "flex" , alignItems:"center" , gap:"10px"}}>
          <WbCloudyOutlinedIcon />
          <span>storagae</span>
        </div>

         <input type="range" /><br />
         <span id="sidestorage">6.45 GB of 15 GB used</span>

      </div>
    </div>
  </>
  );
}

export default SideBar;
