// let msg="welcome to react"
// document.getElementById('root').innerHTML=msg

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import './Sass/styles.scss'
import Class_comp from "./style/Class_comp";

// valariable should be written between {} braces in jsx
// wrap codes for multiple lines of code in a single
// while creating component(file) first letter should be capslock

let msg=()=>"The addition of 5+5 is"
let Msg=()=>"The addition of 5+5 is"
ReactDOM.createRoot(document.getElementById('root')).render(
<>
{/* {App()} */}
<App/>
<Class_comp/>

</>
)
