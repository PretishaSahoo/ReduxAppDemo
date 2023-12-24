// App.js
import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Shop from './Components/Shop';


const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container my-3">
          <Shop/>
        </div>
      </div>
    </Router>
  );
};

export default App;

