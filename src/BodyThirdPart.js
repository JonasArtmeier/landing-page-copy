import React from 'react';
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { css, jsx } from '@emotion/core';

export default function BodySecondPart() {
  return (
    <div
      class="home-wrap-ground"
      css={css`
        min-height: 100vh;
        background-color: #fffdf9;
      `}
    >
      <div
        class="main-page"
        css={css`
          width: 100%;
        `}
      >
        <section
          css={css`
            background-color: #f8f7f3;
            padding: 80px 0;
            text-align: center;
            position: relative;
            width: 100%;
          `}
        >
          <h1
            class="pricing-headline"
            css={css`
              font-size: 60px;
              line-height: 78px;
              font-family: LL Circular Bold Web, Muli, Arial, sans-serif;
              font-weight: 400;
              font-style: normal;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
              text-rendering: optimizeLegibility;
              color: #34414f;
              max-width: 730px;
              margin: 0 auto;
            `}
          >
            Simple pricing, and free for small teams
          </h1>
          <div
            class="pricing-table group"
            css={css`
              background-color: #34414f;
              border-radius: 16px;
              box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
              width: 100%;
              max-width: 960px;
              margin: 40px auto 0;
              padding: 40px;
              position: relative;
              min-height: 240px;
              display: flex;
              flex-direction: row;
              align-items: normal;
              align-content: flex-start;
            `}
          >
            <div
              class="pricing-table-left"
              css={css`
                width: 195px;
                flex: 0 0 195px;
              `}
            >
              <div
                class="pricing-table-left-price"
                css={css`
                  font-family: LL Circular Book Web, Muli, Arial, sans-serif;
                  font-weight: 300;
                  font-style: normal;
                  -webkit-font-smoothing: antialiased;
                  text-rendering: optimizeLegibility;
                  text-align: center;
                  font-size: 80px;
                  line-height: 90px;
                  color: #fff;
                `}
              >
                $0
              </div>
              <div
                class="pricing-table-left-subprice"
                css={css`
                  margin-top: 8px;
                  font-size: 22px;
                  line-height: 28px;
                  color: hsla(0, 0%, 100%, 0.5);
                  font-family: LL Circular Book Web, Muli, Arial, sans-serif;
                  font-weight: 300;
                  font-style: normal;
                  -webkit-font-smoothing: antialiased;
                  text-rendering: optimizeLegibility;
                  text-align: center;
                `}
              >
                for teams of up to 20 people
              </div>
            </div>
            <div
              class="pricing-table-divider-line"
              css={css`
                width: 1px;
                min-height: 100%;
                flex: 0 0 1px;
                background-color: hsla(0, 0%, 100%, 0.2);
                margin: 0 60px;
              `}
            ></div>
            <div
              class="pricing-table-right group"
              css={css`
                float: right;
                width: auto;
                flex: 1 1 auto;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-content: flex-start;
              `}
            >
              <div
                class="pricing-table-right-copy"
                css={css`
                  font-family: LL Circular Book Web, Muli, Arial, sans-serif;
                  font-weight: 300;
                  font-style: normal;
                  -webkit-font-smoothing: antialiased;
                  text-rendering: optimizeLegibility;
                  font-size: 22px;
                  line-height: 28px;
                  color: #fff;
                  text-align: left;
                `}
              >
                Carrot is free for up to 20 people. After that, it’s just $3.25
                / month for each person with our annual plan. If you prefer a
                monthly plan, it’s $4.00 / month.
              </div>
              <a
                css={css`
                  margin-top: 24px;
                  display: block;
                  height: 56px;
                  color: #fff;
                  background-color: #fb5e48;
                  border-radius: 6px;
                  text-align: center;
                  font-family: LL Circular Bold Web, Muli, Arial, sans-serif;
                  font-weight: 400;
                  font-style: normal;
                  -webkit-font-smoothing: antialiased;
                  -moz-osx-font-smoothing: grayscale;
                  text-rendering: optimizeLegibility;
                  font-size: 18px;
                  line-height: 23px;
                  padding: 16px 26px;
                  width: 205px;
                  cursor: pointer;
                `}
                class="pricing-table-right-link"
                href="/sign-up"
              >
                Try Carrot for free
              </a>
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
            class="pricing-subheadline"
            css={css`
              color: #34414f;
              font-size: 22px;
              line-height: 28px;
              font-family: LL Circular Book Web, Muli, Arial, sans-serif;
              font-weight: 300;
              font-style: normal;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
              text-rendering: optimizeLegibility;
              margin: 24px auto 0;
              position: relative;
              max-width: 630px;
            `}
          >
            Questions?{' '}
            <a
              css={css`
                color: #3fbd7c;
                cursor: pointer;
                background-color: transparent;
                text-decoration: none;
              `}
              class="chat-with-us intercom-chat-link"
              href="mailto:hello@carrot.io"
            >
              Let's chat
            </a>
          </div>
        </section>
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
  );
}
