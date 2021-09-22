import React, { useEffect, useRef} from 'react';
import { useHistory } from 'react-router-dom';
import { useLoadDispatch } from '../Context/loading';


/** Menu  */
export default function AccountMenu({open}) {
 const ref = useRef()
 const loadispatch = useLoadDispatch();
 const history = useHistory();

  useEffect(() => {
    const checkIfClickedOutside = e => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (open && ref.current && !ref.current.contains(e.target)) {
        loadispatch({type:"MENU", payload: false})
      }
    }

    document.addEventListener("mousedown", checkIfClickedOutside)

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside)
    }
  }, [open, loadispatch])

  return (
        <>
        { open &&
        <div className= "MenuWrapper" ref={ref} onClick={() => loadispatch({type:"MENU", payload: false})}>
           <div className="MenuItems">
              <p className="MenuItem" onClick={() => history.push("/Sotmuc")} >SOTMUC</p>
              <p className="MenuItem" onClick={() => loadispatch({type:"OPEN", payload:true})}>HELB</p>
              <p className="MenuItem" onClick={() => history.push("/Cu")}>C.U.</p>
              <p className="MenuItem" onClick={() => history.push("/Football")}>FOOTBALL CLUB</p>
           </div>
        </div>
        }
        </>


  );
}
