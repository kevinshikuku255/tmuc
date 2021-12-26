import React from "react";
import ReactGA from "react-ga";
import { useHistory, useLocation } from "react-router-dom";
import "../components.scss";



/** Sub header compoent Containing the three header Navigation tabs*/
export const SubHeader = () => {
  const history = useHistory();
  const {pathname} = useLocation();

  const academics = () => {
      ReactGA.event({
            category:"Tab",
            action:"Navigated to Academics tab",
            transport:"beacon",
            label:"ACADEMICS-TAB"
          })
    history.push("/")
  }

  const timetable = () => {
      ReactGA.event({
            category:"Tab",
            action:"Navigated to Timetable tab",
            transport:"beacon",
            label:"TIMETABLE-TAB"
          })
    history.push("/Timetable")
  }

  const noticeboard = () => {
      ReactGA.event({
            category:"Button",
            action:"Navigated to noticeboard tab",
            transport:"beacon",
            label:"NOTICE-BOARD-TAB"
          })
    history.push("/Noticeboard")
  }

/* -------------------------------------------------------------------------- */

   return(
     <div className="SubHeader">
        <div>
          <p onClick={() => academics() }  className={ (pathname === "/" ) ? "active" : "a"}>ACADEMICS</p>
        </div>
        <div>
             <p onClick={() => timetable() } className={ (pathname === "/Timetable" ) ? "active" : "a"}>My-TTABLE</p>
        </div>
        <div>
             <p onClick={() => noticeboard()} className={ (pathname === "/Noticeboard" ) ? "active" : "a"}>NOTICEBOARD</p>
        </div>

     </div>
   )
}
