import React from 'react';

import Footer from './Components/Footer';
import Header from './Components/Header';
import Main from './Components/Main';
import AltMain from './Components/Main';
import './App.css';

class App extends React.Component {
  render(){
    return (
      <div>
        <Header banana="World!" />
        {/* 
        comment out Main and comment in AltMain, 
        what is different about the code?
        what is different about the results? 
        */}
        <Main />
        {/* <AltMain /> */}
        <Footer />
      </div>
    );
  }
}

export default App;
