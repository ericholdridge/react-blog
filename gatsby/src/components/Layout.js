import React from 'react';
import 'normalize.css';
import GlobalStyles from '../styles/GlobalStyles';
import Nav from './Nav/Nav';

export default function Layout({ children }) {
  return (
    <div>
      <GlobalStyles />
      <Nav />
      {children}
    </div>
  );
}
