import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import "../components.scss";

import { LinearProgress } from "@material-ui/core"
import {ArrowBack, MoreVert} from '@material-ui/icons';
import { useLoadContext } from '../../Context';
import { SubHeader } from "./Subheader";

import Menu from "./Menu";


/** Main header component.----------------------------------- */
const  Head = () => {
  const history = useHistory();
  const location = useLocation();
  const [ { menu, loading }, dispatch] = useLoadContext();
  const profileName = location.pathname.split("/").pop();
  let back = e => { e.stopPropagation(); history.goBack(); };

  const openMenu = () => {
    dispatch({
      type: "MENU",
      payload: true
    })
  }

  let custom_head
  if(profileName === "Football"){
    custom_head = "UNIVERSITY FOOTBALL TEAM"
  } else if(profileName === "Sotmuc"){
    custom_head = "UNIVERSITY STUDENT COUNCIL"
  }else if(profileName === "Cu"){
    custom_head = "CHRISTIAN UNION"
  }else if(profileName === "Noticeboard"){
    custom_head = "ONLINE NOTICEBOARD"
  }else if(profileName === "Timetable"){
    custom_head = "MY WEEKLY TIMETABLE"
  }
  else if(profileName === "Activities"){
    custom_head = "UNIVERSITY ACTIVITIES"
  }
  else if(profileName === "CreatePost"){
    custom_head = "PIN A NOTICE"
  }
  else if(profileName === ""){
    custom_head = "UNIVERSITY ACADEMICS"
  }
  else if(profileName === "Editpost"){
    custom_head = "EDIT PINNED NOTICE"
  }
  else{
    custom_head = ""
  }



  return (
    <>

       { profileName !== "StudentCenter" &&
        <div className="HeadWrapper">
        {(loading === true ) && <LinearProgress/>}
        <div className="Head">
              <div className="Logo">
                <div className="Avartor" style={{ opacity: location.pathname === "/" && .4}}>
                  { <ArrowBack onClick={back}/> }
                </div>
                <div  className="Name">
                  <p>TOM MBOYA STUDENT</p>
                  <h5>
                    {custom_head}
                  </h5>
                </div>
              </div>
              <div className="Menu">
                <MoreVert onClick={openMenu}/>
                <Menu menu_on={menu}/>
              </div>
        </div>
        <SubHeader/>
        </div>}
    </>
  )
};

export default Head
