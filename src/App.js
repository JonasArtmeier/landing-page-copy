import React from 'react';
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import Navigation from './Navigation';
import BodyFirstPart from './BodyFirstPart.js';
import BodySecondPart from './BodySecondPart';
import BodyThirdPart from './BodyThirdPart';
import Footer from './Footer';
// import CovidBanner from './CovidBanner';

function App() {
  return (
    <div>
      {/* <CovidBanner /> */}
      <Navigation />
      <BodyFirstPart />
      <BodySecondPart />
      <BodyThirdPart />
      <Footer />
    </div>
  );
}

export default App;
