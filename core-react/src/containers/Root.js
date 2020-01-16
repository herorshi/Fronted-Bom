import React from 'react'
import Hi from './Hi'
import styles from './Root.scss' // .ใช้ชื่อ styles ผูกกับ Modules
import $ from "jquery";
import { Browserrouter as Router } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import {App} from 'Containers'


// { test:/\.css$/, include:/node_modules/,use:['style-loader','css-loader'] } จากการ config นี้ใน webpackทำให้  bootstrap สามารถใช้งานได้
function getMessage(){
    // debugger
    return "Hello World"
}


export default ()=>(
  <Router>
    <App/>
  </Router>
    // <div className="">
    //     <h1 className={styles['hello']}>{getMessage()}</h1>
    //     <Hi/>
    //     <div className="">Hello React Hot Loader XD </div>
    //     <div className="card">test</div>
    //     <div className="btn btn-primary">OK</div>
    // </div>
)


