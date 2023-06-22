import React from 'react';

import ReactDOM  from 'react-dom';
import './index.css';

// ReactDOM.render(<h1>Noice!!</h1>,document.getElementById("root"));

// ReactDOM.render(
//   [<p>Hello </p>,<h3>How are you</h3>,<h4>I am fine</h4>]
// ,document.getElementById("root"))

// ReactDOM.render(
//   <React.fr>
//   <h1>Hello</h1>
//   <h2>How are you</h2>
//   </React.fr>,
//   document.getElementById("root")
// )

// ReactDOM.render(
//   <>
//   <h1>Hello</h1>
//   <h2>How are you</h2>
//   </>,
//   document.getElementById("root")
// )

//! using expressions in reactjs
//todo: just add {}

// var x="kya hal chal";

// ReactDOM.render(
//   <>
//     <h2>How are you ...{x}</h2>
//     <h1>My lucky number is {2+3}</h1>
//     <h1>Random no generator {Math.floor(Math.random()*10)}</h1>
//   </>,
//   document.getElementById("root")
// )

//! templeate literals

// var x="kya hal chal";
// var y='sahi ha bhai';

// const dt=new Date().toLocaleDateString();
// const tm=new Date().toLocaleTimeString();

// ReactDOM.render(
//   <>
//     <h2>How are you ...{`${x}${y}`}</h2>
//     <h1>Today date is : {dt}</h1>
//     <h1>Today time is : {tm}</h1>
//   </>,
//   document.getElementById("root")
// )

//! JSX Attributes in ReactJS

var name="Aviral";
const img1="https://picsum.photos/200/300";
const img2="https://picsum.photos/250/300";
const img3="https://picsum.photos/300/300";
const link="https://www.google.com";

ReactDOM.render(
  <>
  <div className='container'>
  <h1 className='heading'>My name is {name}</h1>
  <div className='imgs'>
  <img src={img1} alt='im1' />
  <img src={img2} alt='im2'/>
  <a href={link} target='_blank' rel="noopener noreferrer">
  <img src={img3} alt='im3'/>
  </a>
  </div>
  </div>
  </>,
  document.getElementById("root")
)