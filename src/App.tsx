import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Data from './components/Data';
import NotFound from './components/NotFound';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Routes>
              <Route path="/" element={<Main />}></Route>
              <Route path="/data" element={<Data />}></Route>
              <Route path="*" element={<NotFound />}></Route>
          </Routes>
      </header>
    </div>
  );
}

export default App;
