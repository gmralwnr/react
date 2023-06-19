import React from 'react';
import ReactDOM  from 'react-dom';
//import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Component from './chapter_01/Component';
import Libray from './chapter_03/Libray';
import Clock from './chapter_04/Clock';
import CommentList from './chapter_05/CommentList';
import ComfirmButton from './chapter_08/ComfirmButton';
import NotificationList from './chapter_06/NotificationList';
import Accommodate from './chapter_07/Accommodate';
import LandingPage from './chapter_09/LandingPage';
import AttendanceBook from './chapter_10/AttendanceBook';
import Signup from './chater_11/Signup'
import DarkOrLight from './chapter_14/DarkOrLight';
//const root = ReactDOM.createRoot(document.getElementById('root'));


ReactDOM.render(
  <React.StrictMode>
    <NotificationList></NotificationList>
    <Accommodate/>
    <LandingPage/>
    <AttendanceBook/>
    <Signup/>
    <DarkOrLight></DarkOrLight>
  </React.StrictMode>,
  document.getElementById('root')
);
/*
root.render(
  <React.StrictMode>
    
    <Libray />
    <Clock/>
    <NotificationList/>

    <Component/>
    <CommentList/>
    <ComfirmButton/>
    
  </React.StrictMode>
);
*/
/*
setInterval(() => {
  root.render(
    <React.StrictMode>
     <Clock/>
    
    </React.StrictMode>
  );
}, 1000);
*/

/*
setInterval(() => {
  root.render(
    <React.StrictMode>
     <Libray />
     <Clock/>
     <Component/>
     <CommentList/>
     <ComfirmButton/>
    </React.StrictMode>
  );
}, 1000);
*/
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
