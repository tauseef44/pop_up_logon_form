import React,{createContext} from 'react'


const Authcontext = createContext();


function AuthcontextProvider({children}) {

    const name = "this is auth code";
  return (
<>

    <Authcontext.Provider value={name}>

        {children}
    </Authcontext.Provider>
    
    </>
  )
}

export default AuthcontextProvider
export {Authcontext};
