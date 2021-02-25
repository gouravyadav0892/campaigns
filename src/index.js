import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from "react-router-dom";

import Root from './config/Root'
import "./config/common.scss";

ReactDOM.render(<BrowserRouter><Root /></BrowserRouter>, document.getElementById('root'));