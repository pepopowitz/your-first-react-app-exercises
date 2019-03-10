import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';

import Friends from './friends/Friends.entry';
import FriendDetail from './friend-detail/FriendDetail.entry';

import styles from './App.module.css';

function App() {
  return (
    <BrowserRouter>
      <div className={styles.app}>
        <Header />
        <div className={styles.exercise}>
          <Route path="/" exact component={Friends} />
          <Route path="/friends/:id" component={FriendDetail} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
