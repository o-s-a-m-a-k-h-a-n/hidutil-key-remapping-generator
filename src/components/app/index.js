import React, { useState, useEffect } from 'react';
import Header from '../header';
import Form from '../form';
import Result from '../result';
import { getKeysFromStorage, saveKeysToStorage } from '../../helpers/storage';
import './app.css';

const App = () => {
  const [keyMaps, setKeyMaps] = useState(getKeysFromStorage() || [{}]);

  useEffect(() => {
    saveKeysToStorage(keyMaps);
  }, [keyMaps]);

  return (
    <div className="app">

      <Header />

      <Form
        keyMaps={keyMaps}
        setKeyMaps={setKeyMaps}
      />

      <Result
        keyMaps={keyMaps}
      />
    </div>
  );
};

export default App;
