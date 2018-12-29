import React, { Component } from 'react';

import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';

import Friends from './friends/Friends.entry';
import FriendDetail from './friend-detail/FriendDetail.entry';

import styles from './App.module.css';

import ThemeProvider from './theme/Provider';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ThemeProvider>
          <div className={styles.app}>
            <Header />
            <div className={styles.exercise}>
              <Route path="/" exact component={Friends} />
              <Route path="/friends/:id" component={FriendDetail} />
            </div>
          </div>
        </ThemeProvider>
      </BrowserRouter>
    );
  }
}

export default App;
