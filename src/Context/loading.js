import React, {createContext, useReducer, useContext} from 'react';

//Two context one holding state other holding dispatch
//Auth state context
const LoadStateContext = createContext();

//Dispatch state context
const LoadDispatchContext = createContext();



//State reducer
const loadReducer = (state, {type, payload})  =>{

   switch(type){
    case 'LOAD' :
      return {
        ...state,
        loading: payload
      }
      
    case 'OFFLOAD' :
      return {
        ...state,
        loading: payload
      }
      default:
       throw new Error(`unknown action type ${type}`)
   }
}


//Provider that will export and use in the App.js
export const LoadProvider = ({children}) => {
  const [state, dispatch] = useReducer(loadReducer, false );
   return(
    <LoadDispatchContext.Provider value={dispatch}>
        <LoadStateContext.Provider value ={state}>
                   {children}
        </LoadStateContext.Provider>
    </LoadDispatchContext.Provider>
   )
}


//Export uwhat is held inside usecontext
/** State */
export const useLoadState = () => useContext(LoadStateContext);

/** Dispatch */
export const useLoadDispatch = () => useContext(LoadDispatchContext);
