import React from 'react';
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { css, jsx } from '@emotion/core';

export default function BodySecondPart() {
  return (
    <footer
      class="navbar navbar-default navbar-bottom"
      css={css`
        background-color: #fffdf9 !important;
        margin-bottom: 0 !important;
        border-radius: 0;
        border: none;
        padding: 0 0 60px;
        overflow: hidden;
        position: relative;
        min-height: 50px;
        box-sizing: border-box;
        display: block;
      `}
    >
      <div
        class="before"
        css={css`
          display: table;
          content: ' ';
          box-sizing: border-box;
          display: block;
        `}
      />
      <div
        class="container-fluid group"
        css={css`
          position: relative;
          max-width: 1160px;
          width: calc(100% - 48px);
          padding-left: 0 !important;
          padding-right: 0 !important;
          padding-top: 40px !important;
          margin-right: auto;
          margin-left: auto;
          box-sizing: border-box;
          display: block;
        `}
      >
        <div
          class="before1"
          css={css`
            display: table;
            content: ' ';
            display: block;
            box-sizing: border-box;
          `}
        />
        <div
          class="right-column group"
          css={css`
            float: right;
            z-index: 2;
            box-sizing: border-box;
            display: block;
          `}
        >
          <div
            class="column column-company"
            css={css`
              float: left;
              margin-right: 40px;
              width: 180px;
              box-sizing: border-box;
              display: block;
            `}
          >
            <div
              class="column-title"
              css={css`
                font-family: LL Circular Book Web, Muli, Arial, sans-serif;
                font-weight: 300;
                font-style: normal;
                -webkit-font-smoothing: antialiased;
                text-rendering: optimizeLegibility;
                color: #c4c6c9;
                font-size: 18px;
                margin-bottom: 16px;
                box-sizing: border-box;
              `}
            >
              Product
            </div>
            <div
              class="column-item"
              css={css`
                box-sizing: border-box;
                display: block;
              `}
            >
              <a
                href="/pricing"
                css={css`
                  font-family: LL Circular Book Web, Muli, Arial, sans-serif;
                  font-weight: 300;
                  font-style: normal;
                  -webkit-font-smoothing: antialiased;
                  text-rendering: optimizeLegibility;
                  color: #34414f;
                  font-size: 18px;
                  line-height: 32px;
                  cursor: pointer;
                  background-color: transparent;
                  text-decoration: none;
                  box-sizing: border-box;
                `}
              >
                Pricing
              </a>
            </div>
            <div
              class="column-item"
              css={css`
                box-sizing: border-box;
                display: block;
              `}
            >
              <a
                css={css`
                  font-weight: 300;
                  font-style: normal;
                  -webkit-font-smoothing: antialiased;
                  text-rendering: optimizeLegibility;
                  color: #34414f;
                  font-size: 18px;
                  line-height: 32px;
                `}
                href="https://carrot.news/"
                target="blank"
              >
                What’s new
              </a>
            </div>
            <div class="column-item">
              <a
                css={css`
                  font-weight: 300;
                  font-style: normal;
                  -webkit-font-smoothing: antialiased;
                  -moz-osx-font-smoothing: grayscale;
                  text-rendering: optimizeLegibility;
                  color: #34414f;
                  font-size: 18px;
                  line-height: 32px;
                  cursor: pointer;
                  background-color: transparent;
                  text-decoration: none;
                `}
                href="https://github.com/open-company"
                target="blank"
              >
                GitHub
              </a>
            </div>
            <div class="column-item">
              <a
                href="/slack"
                css={css`
                  font-weight: 300;
                  font-style: normal;
                  -webkit-font-smoothing: antialiased;
                  cursor: pointer;
                  background-color: transparent;
                  text-decoration: none;
                  text-rendering: optimizeLegibility;
                  color: #34414f;
                  font-size: 18px;
                  line-height: 32px;
                `}
              >
                Slack integration
              </a>
            </div>
          </div>
          <div
            class="column column-resources"
            css={css`
              float: left;
              margin-right: 40px;
              width: 180px;
            `}
          >
            <div
              class="column-title"
              css={css`
                font-family: LL Circular Book Web, Muli, Arial, sans-serif;
                font-weight: 300;
                font-style: normal;
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
                text-rendering: optimizeLegibility;
                color: #c4c6c9;
                font-size: 18px;
                margin-bottom: 16px;
              `}
            >
              Company
            </div>
            <div class="column-item">
              <a
                href="/about"
                css={css`
                  font-family: LL Circular Book Web, Muli, Arial, sans-serif;
                  font-weight: 300;
                  font-style: normal;
                  -webkit-font-smoothing: antialiased;
                  text-rendering: optimizeLegibility;
                  color: #34414f;
                  font-size: 18px;
                  line-height: 32px;
                  cursor: pointer;
                  background-color: transparent;
                  text-decoration: none;
                `}
              >
                About
              </a>
            </div>
            <div class="column-item">
              <a
                css={css`
                  font-family: LL Circular Book Web, Muli, Arial, sans-serif;
                  font-weight: 300;
                  font-style: normal;
                  -webkit-font-smoothing: antialiased;
                  text-rendering: optimizeLegibility;
                  color: #34414f;
                  font-size: 18px;
                  line-height: 32px;
                  cursor: pointer;
                  background-color: transparent;
                  text-decoration: none;
                `}
                href="https://twitter.com/carrot_hq"
              >
                Twitter
              </a>
            </div>
            <div class="column-item">
              <a
                css={css`
                  font-family: LL Circular Book Web, Muli, Arial, sans-serif;
                  font-weight: 300;
                  font-style: normal;
                  -webkit-font-smoothing: antialiased;
                  cursor: pointer;
                  background-color: transparent;
                  text-decoration: none;
                  text-rendering: optimizeLegibility;
                  color: #34414f;
                  font-size: 18px;
                  line-height: 32px;
                `}
                href="https://blog.carrot.io"
              >
                Blog
              </a>
            </div>
          </div>
          <div
            class="column column-support"
            css={css`
              margin-right: 0;
              width: 300px;
              float: left;
            `}
          >
            <div
              css={css`
                font-family: LL Circular Book Web, Muli, Arial, sans-serif;
                font-weight: 300;
                font-style: normal;
                -webkit-font-smoothing: antialiased;
                text-rendering: optimizeLegibility;
                color: #c4c6c9;
                font-size: 18px;
                margin-bottom: 16px;
              `}
              class="column-title"
            >
              Resources
            </div>
            <div class="column-item">
              <a
                css={css`
                  font-family: LL Circular Book Web, Muli, Arial, sans-serif;
                  font-weight: 300;
                  font-style: normal;
                  -webkit-font-smoothing: antialiased;
                  cursor: pointer;
                  text-decoration: none;
                  text-rendering: optimizeLegibility;
                  color: #34414f;
                  font-size: 18px;
                  line-height: 32px;
                `}
                href="https://help.carrot.io/"
              >
                Help center
              </a>
              <div class="column-item">
                <a
                  css={css`
                    font-family: LL Circular Book Web, Muli, Arial, sans-serif;
                    font-weight: 300;
                    font-style: normal;
                    -webkit-font-smoothing: antialiased;
                    cursor: pointer;
                    background-color: transparent;
                    text-decoration: none;
                    text-rendering: optimizeLegibility;
                    color: #34414f;
                    font-size: 18px;
                    line-height: 32px;
                  `}
                  class="intercom-chat-link"
                  href="mailto:hello@carrot.io"
                >
                  Contact us
                </a>
              </div>
            </div>
          </div>
          <div
            class="after"
            css={css`
              content: '';
              display: table;
              clear: both;
              white-space: nowrap;
            `}
          />
        </div>
        <div
          css={css`
            float: left;
            width: 231px;
            z-index: 2;
          `}
          class="left-column group"
        >
          <img
            css={css`
              width: 82px;
              height: 20px;
              border: 0;
              vertical-align: middle;
            `}
            class="logo"
            src="https://d1wc0stj82keig.cloudfront.net/1589548137/img/ML/carrot_wordmark.svg"
          />
          <div
            css={css`
              margin-top: 15px;
              font-family: LL Circular Book Web, Muli, Arial, sans-serif;
              font-weight: 300;
              font-style: normal;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
              text-rendering: optimizeLegibility;
              font-size: 16px;
              color: #34414f;
            `}
            class="footer-small-links static"
          >
            <a
              css={css`
                margin-left: 0;
                margin: 0 5px;
                font-family: LL Circular Book Web, Muli, Arial, sans-serif;
                font-weight: 300;
                font-style: normal;
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
                text-rendering: optimizeLegibility;
                color: #3fbd7c;
                font-size: 16px;
                text-decoration: none;
                opacity: 1;
                cursor: pointer;
                background-color: transparent;
              `}
              href="/login"
            >
              Login
            </a>
            or
            <a
              css={css`
                margin: 0 5px;
                font-family: LL Circular Book Web, Muli, Arial, sans-serif;
                font-weight: 300;
                font-style: normal;
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
                text-rendering: optimizeLegibility;
                color: #3fbd7c;
                font-size: 16px;
                text-decoration: none;
                opacity: 1;
                cursor: pointer;
                background-color: transparent;
              `}
              href="/sign-up"
            >
              create your team
            </a>
          </div>
          <div
            css={css`
              font-size: 14px;
              font-family: LL Circular Book Web, Muli, Arial, sans-serif;
              font-weight: 300;
              font-style: normal;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
              text-rendering: optimizeLegibility;
              color: #34414f;
              max-width: 180px;
              margin-top: 16px;
            `}
            class="tos-and-pp"
          >
            <a
              css={css`
                color: #34414f;
                cursor: pointer;
                text-decoration: none;
                background-color: transparent;
              `}
              href="/privacy"
            >
              Privacy
            </a>{' '}
            &{' '}
            <a
              css={css`
                color: #34414f;
                cursor: pointer;
                background-color: transparent;
                text-decoration: none;
              `}
              href="/terms"
            >
              Terms
            </a>
          </div>
          <div
            css={css`
              font-size: 14px;
              font-family: LL Circular Book Web, Muli, Arial, sans-serif;
              font-weight: 300;
              font-style: normal;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
              text-rendering: optimizeLegibility;
              color: #34414f;
              max-width: 180px;
            `}
            class="copyright"
          >
            © 2020 Carrot
          </div>
          <div
            class="after2"
            css={css`
              content: '';
              display: table;
              clear: both;
              white-space: nowrap;
            `}
          />
        </div>
        <div
          class="after3"
          css={css`
            content: '';
            display: table;
            clear: both;
            white-space: nowrap;
          `}
        />
      </div>
      <div
        class="after4"
        css={css`
          clear: both;
          display: table;
          content: ' ';
        `}
      />
    </footer>
  );
}
