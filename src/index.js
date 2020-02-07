import React from 'react'
import ReactDOM from "react-dom";
import Routes from './Routes'
function App(){
  return(
    <Routes/>
  )
}


if (document.getElementById('react_root')) {
    ReactDOM.render(<App />, document.getElementById('react_root'))
}