import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import CompA from './useContext/CompA'
// import Ref from './useRef/Ref'
// import List <CompA>from './List-keys/List'

// import External from './styles/External'
// import './index.css'
// import App from './App.jsx'
// import Cbc from './component/Cbc.jsx'
// import Fbc from './component/Fbc.jsx'
// import Props from './Props/Props.jsx'
// import Parent from './Props/Parent.jsx'
//  app
// import Inline from './styles/Inline.jsx'
// import Comp1 from './styles/Comp1.jsx'
// import "../src/styles/globally.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Cbc/>
    <Fbc/>
    <Props/> */}
     {/* <Parent/>  */}
     {/* <Inline/> */}
     {/* <State/>  */}
     {/* <Comp1/> */}
     {/* <External/> */}
     {/* <List/> */}
  <CompA/>
  </StrictMode>,
)

