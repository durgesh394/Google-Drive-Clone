import "./App.css";
import Header from "./Components/Header";
import SideBar from "./Components/SideBar";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ListAltIcon from "@mui/icons-material/ListAlt";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import PhotoSizeSelectActualIcon from "@mui/icons-material/PhotoSizeSelectActual";

import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <SideBar />

        <div className="datacontainer">
          <div className="topmenu">
            <div>
              <span>My Drive</span>
              <ArrowDropDownIcon />
            </div>

            <div>
              <ListAltIcon />
              <ErrorOutlineIcon />
            </div>
          </div>
          {/* middle */}
          <div className="suggedstedmiddle">
            <b>Suggested</b>
          </div>
          <div className="middleSuggested">
            <div className="middleWrapper">
              <PhotoSizeSelectActualIcon
                sx={{ fontSize: "100px", color: "lightgray" }}
              />
              <div className="middlefileName">
                <PhotoSizeSelectActualIcon
                  sx={{
                    marginLeft: "10px",
                    marginTop: "10px",
                    color: "#E74C3C",
                  }}
                />
                <span style={{ marginTop: "10px" }}>122323232343</span>
              </div>
            </div>

            <div className="middleWrapper">
              <PhotoSizeSelectActualIcon
                sx={{ fontSize: "100px", color: "lightgray" }}
              />
              <div className="middlefileName">
                <PhotoSizeSelectActualIcon
                  sx={{
                    marginLeft: "10px",
                    marginTop: "10px",
                    color: "#E74C3C",
                  }}
                />
                <span style={{ marginTop: "10px" }}>122323232343</span>
              </div>
            </div>

            <div className="middleWrapper">
              <PhotoSizeSelectActualIcon
                sx={{ fontSize: "100px", color: "lightgray" }}
              />
              <div className="middlefileName">
                <PhotoSizeSelectActualIcon
                  sx={{
                    marginLeft: "10px",
                    marginTop: "10px",
                    color: "#E74C3C",
                  }}
                />
                <span style={{ marginTop: "10px" }}>122323232343</span>
              </div>
            </div>
            <div className="middleWrapper">
              <PhotoSizeSelectActualIcon
                sx={{ fontSize: "100px", color: "lightgray" }}
              />
              <div className="middlefileName">
                <PhotoSizeSelectActualIcon
                  sx={{
                    marginLeft: "10px",
                    marginTop: "10px",
                    color: "#E74C3C",
                  }}
                />
                <span style={{ marginTop: "10px" }}>122323232343</span>
              </div>
            </div>
            

            <div className="middleWrapper">
              <PhotoSizeSelectActualIcon
                sx={{ fontSize: "100px", color: "lightgray" }}
              />
              <div className="middlefileName">
                <PhotoSizeSelectActualIcon
                  sx={{
                    marginLeft: "10px",
                    marginTop: "10px",
                    color: "#E74C3C",
                  }}
                />
                <span style={{ marginTop: "10px" }}>122323232343</span>
              </div>
            </div>
          </div>

          {/* bottom */}
          
          <div className="mainwrapperBottom">
                  <div className="mainBottomWrapper">
                    <table>
                        <thead>
                          <tr><th> <b>Name <ArrowDownwardIcon /></b></th>
                          <th><b>Owenrt</b></th>
                          <th><b>Last Modified</b></th>
                          <th><b>File size</b></th></tr>
                        </thead>

                        <tbody>
                          <tr>
                            <td><InsertDriveFileIcon sx={{fontSize:"20px"}}/>name</td>
                            <td>durgesh</td>
                            <td>today</td>
                            <td>1MB</td>
                          </tr>
                          <tr>
                            <td> <InsertDriveFileIcon sx={{fontSize:"20px"}}/> me</td>
                            <td>durgesh</td>
                            <td>today</td>
                            <td>1MB</td>
                          </tr>
                        </tbody>
                    </table>
                  </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
