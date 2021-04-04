import './App.css';
import React, { Fragment, useEffect } from 'react';
import Logs from './Component/Logs/logs';
import AddButton from '../src/Component/Layout/AddButton';
import SearchBar from '../src/Component/Layout/SearchBar';
import AddLogsModal from '../src/Component/Logs/AddLogsModal';
import EditLogsModal from '../src/Component/Logs/EditLogsModal';
import AddTechModalModal from '../src/Component/texts/AddTechModal';
import TechListModal from '../src/Component/texts/TechListModal';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import { Provider } from 'react-redux';
import store from './store';
const App = () => {
  useEffect(() => {
    // init materialize js
    M.AutoInit();
  }, []);
  return (
    <Provider store={store}>
      <Fragment>
        <SearchBar />
        <div className="container">
          <AddButton />
          <AddLogsModal />
          <Logs />
          <EditLogsModal />
          <TechListModal />
          <AddTechModalModal />
        </div>
      </Fragment>
    </Provider>
  );
};

export default App;
