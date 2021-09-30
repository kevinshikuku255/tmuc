import React, { useEffect, useRef} from 'react';
import { useHistory } from 'react-router-dom';
import { useLoadDispatch } from '../Context/loading';
import { useStore } from "../store";

/** Menu  */
export default function AccountMenu({menu_on}) {
 const ref = useRef()
 const loadispatch = useLoadDispatch();
 const history = useHistory();
 const  [{auth}] = useStore();

  useEffect(() => {
    const checkIfClickedOutside = e => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (menu_on && ref.current && !ref.current.contains(e.target)) {
        loadispatch({type:"MENU", payload: false})
      }
    }

    document.addEventListener("mousedown", checkIfClickedOutside)

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside)
    }
  }, [menu_on, loadispatch])


// Sharing the app link
async function onShare() {
  const label= "T.M.U.C"
  const url = "https://tmuc.netlify.app";
  const text = "TMUC APP";
  try {
      await navigator
      .share({
        label,
        url,
        text
      })

    } catch (err) {

         // the user cancels the action of sharing
       console.log("share canceled");
    }
}

  return (
        <>
        { menu_on &&
        <div className= "MenuWrapper" ref={ref} onClick={() => loadispatch({type:"MENU", payload: false})}>
           <div className="MenuItems">
              <p className="MenuItem" onClick={() => history.push("/")} >ACADEMICS</p>
              <p className="MenuItem" onClick={() => history.push("/Activities")} >ACTIVITIES</p>
              <p className="MenuItem" onClick={() => history.push("/Sotmuc")} >SOTMUC</p>
              <p className="MenuItem" onClick={() => history.push("/News")}>NOTICE-BOARD</p>
              <p className="MenuItem" onClick={() => history.push("/CreatePost")}> PIN A POST</p>
              <p className="MenuItem" onClick={() => history.push("/Policy")}>  USAGE POLICY</p>
              {!auth?.user && <p className="MenuItem" onClick={() => history.push("/Login")}> LOGIN</p>}
              {auth?.user && <p className="MenuItem" onClick={() => history.push("/Editpost")}> MY PINNED POSTS</p>}
              <p className="MenuItem" onClick={onShare}> SHARE THIS APP</p>
           </div>
        </div>
        }
        </>
  );
}
