import React from 'react';
import ReactDOM from 'react-dom';
import Popup from 'react-popup';
import './Popup.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import List from './containers/List';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  return (
    <>
      <Navbar />
      <div className='container-fluid'>
        <List />
        <Popup />
      </div>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));