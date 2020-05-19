import React from 'react';
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import carrot_wordmark from './carrot_wordmark.svg';

const navBar = css`
  height: 83px;
  position: fixed;
  width: 100%;
  z-index: 100;
  background-color: transparent;
  border-bottom: 1px solid transparent;
  background-color: #fffdf9;
  transition: background-color 0.18s, height 0.18s;
`;
// const navBarOnScroll = css`
//   height: 60px;
//   box-shadow: 0 2px 16px 0 rgba(0, 0, 0, 0.16);
//   background-color: #fff;
// `;

export default function Navigation() {
  return (
    <nav css={navBar}>
      <div
        css={css`
          height: 60px;
          padding: 39px 16px 16px;
          position: relative;
          max-width: 1209px;
          margin: 0 auto;
          transition: padding 0.18s;
        `}
      >
        <img
          src={carrot_wordmark}
          alt="Carrot Logo"
          href="/?no_redirect=1"
          css={css`
            float: left;
            margin: 0;
            width: 118px;
            height: 28px;
            background-image: url(https://d1wc0stj82keig.cloudfront.net/1589548137/img/ML/carrot_wordmark.svg);
            background-size: 118px 28px;
            background-repeat: no-repeat;
            padding: 0;
          `}
        />
        <div
          css={css`
            width: 327px;
            height: 28px;
            margin: 0 auto;
            text-align: center;
          `}
        >
          <a
            href="/?no_redirect=1"
            css={css`
              font-family: LL Circular Book Web, Muli, Arial, sans-serif;
              font-weight: 300;
              font-style: normal;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
              text-rendering: optimizeLegibility;
              padding: 0 20px;
              display: inline-block;
              font-size: 18px;
              line-height: 28px;
              color: #34414f;
              margin: 0;
              height: 28px;
              z-index: 2;
            `}
          >
            Home
          </a>
          <a
            href="/?no_redirect=1"
            css={css`
              font-family: LL Circular Book Web, Muli, Arial, sans-serif;
              font-weight: 300;
              font-style: normal;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
              text-rendering: optimizeLegibility;
              padding: 0 20px;
              display: inline-block;
              font-size: 18px;
              line-height: 28px;
              color: #34414f;
              margin: 0;
              height: 28px;
              z-index: 2;
            `}
          >
            Apps
          </a>
          <a
            href="/?no_redirect=1"
            css={css`
              font-family: LL Circular Book Web, Muli, Arial, sans-serif;
              font-weight: 300;
              font-style: normal;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
              text-rendering: optimizeLegibility;
              padding: 0 20px;
              display: inline-block;
              font-size: 18px;
              line-height: 28px;
              color: #34414f;
              margin: 0;
              height: 28px;
              z-index: 2;
            `}
          >
            Pricing
          </a>
        </div>
        <div
          css={css`
            position: absolute;
            height: 40px;
            right: 16px;
            top: 33px;
          `}
        >
          <a
            href="/?no_redirect=1"
            css={css`
              height: 40px;
              color: #3fbd7c;
              font-family: LL Circular Book Web, Muli, Arial, sans-serif;
              font-weight: 300;
              font-style: normal;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
              text-rendering: optimizeLegibility;
              font-size: 18px;
              line-height: 40px;
              padding: 0;
              margin: 0;
              text-align: center;
              margin-top: 0;
            `}
          >
            Login
          </a>
          <a
            href="/?no_redirect=1"
            css={css`
              background-color: #fa6452;
              font-family: LL Circular Bold Web, Muli, Arial, sans-serif;
              font-weight: 400;
              font-style: normal;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
              text-rendering: optimizeLegibility;
              color: #fff;
              font-size: 18px;
              line-height: 24px;
              padding: 8px 16px;
              border-radius: 4px;
              margin-left: 16px;
            `}
          >
            Start free
          </a>
        </div>
      </div>
    </nav>
  );
}
