import React from 'react';
import Test from '../Test/Test';
import cl from './App.module.scss';

const App = () => {
  return (
    <div className={cl.app}>
      <Test />
    </div>
  );
};

export default App;
