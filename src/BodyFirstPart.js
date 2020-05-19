import React from 'react';
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
// import homepage_screenshot from './homepage_screenshot.png';
import logo_flyt from './logo_flyt.png';
import logo_ifttt from './logo_ifttt.png';
import logo_gamercraft from './logo_gamercraft.png';
import logo_hinge from './logo_hinge.png';
import logo_hopper from './logo_hopper.png';
import logo_novo from './logo_novo.png';
import logo_primary from './logo_primary.png';
import logo_resy from './logo_resy.png';
import logo_weblify from './logo_weblify.png';

export default function BodyFirstPart() {
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
          class="cta group"
          css={css`
            padding-top: 143px;
            padding-bottom: 73px;
            padding-left: 24px !important;
            padding-right: 24px !important;
            text-align: center;
            overflow: hidden;
            position: relative;
          `}
        >
          <div
            class="before"
            css={css`
              position: absolute;
              bottom: 0;
              left: 50%;
              width: calc(100% - 32px);
              height: 32%;
              transform: translateX(-50%);
              background-color: rgba(52, 65, 79, 0.1);
              border-radius: 20px 200px 20px 20px;
              display: block;
              content: '';
              max-width: 1232px;
            `}
          ></div>
          <h1
            class="headlin"
            css={css`
              font-size: 60px;
              font-family: LL Circular Bold Web, Muli, Arial, sans-serif;
              font-weight: 400;
              font-style: normal;
              -webkit-font-smoothing: antialiased;
              text-rendering: optimizeLegibility;
              color: #34414f;
              line-height: 66px;
              margin: 0 auto;
              z-index: 2;
              position: relative;
              max-width: 722px;
            `}
          >
            Remote teams communicate differently
          </h1>
          <div
            class="subheadline"
            css={css`
              margin-top: 16px;
              color: #34414f;
              font-size: 28px;
              line-height: 36px;
              font-family: LL Circular Book Web, Muli, Arial, sans-serif;
              font-weight: 300;
              font-style: normal;
              -webkit-font-smoothing: antialiased;
              text-rendering: optimizeLegibility;
              margin: 0 auto;
              z-index: 2;
              position: relative;
            `}
          >
            Teams struggle to stay in-sync with chat alone.
            <br />
            With Carrot, distributed teams have productive,
            <br />
            asynchronous discussions without the chatter.
          </div>
          <div
            class="get-started-button"
            css={css`
              margin: 0 auto 80px;
              width: 220px;
              text-align: center;
            `}
          >
            <button
              class="get-started"
              id="get-started"
              css={css`
                width: 220px;
                height: 56px;
                border-radius: 6px;
                background-color: #fa6452;
                color: #fff;
                font-family: LL Circular Bold Web, Muli, Arial, sans-serif;
                font-weight: 400;
                font-style: normal;
                -webkit-font-smoothing: antialiased;
                text-rendering: optimizeLegibility;
                font-size: 20px;
                line-height: 25px;
                margin: 32px auto 0;
                position: relative;
                text-align: center;
                padding: 0;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.16);
                overflow: hidden;
                text-overflow: ellipsis;
              `}
            >
              Try Carrot for free
            </button>
            <span
              class="get-started-sub"
              css={css`
                font-family: LL Circular Book Web, Muli, Arial, sans-serif;
                font-weight: 300;
                font-style: normal;
                -webkit-font-smoothing: antialiased;
                text-rendering: optimizeLegibility;
                font-size: 16px;
                line-height: 20px;
                color: rgba(52, 65, 79, 0.5);
              `}
            >
              Carrot is open source.{' '}
              <a
                css={css`
                  text-decoration: none;
                `}
                href="https://github.com/open-company"
                target="blank"
              >
                Join us
              </a>
            </span>
            <div
              class="after"
              css={css`
                content: '';
                display: table;
                clear: both;
                white-space: nowrap;
              `}
            ></div>
          </div>
          <div
            class="main-animation-container"
            css={css`
              position: relative;
              z-index: 3;
              max-width: 1200px;
              margin: 80px auto 0;
            `}
          >
            <img
              alt="Carrot"
              class="main-animation"
              css={css`
                width: 83%;
                height: auto;
                margin: 0 auto;
                padding: 0;
                z-index: 10;
                position: relative;
              `}
              src={
                'https://d1wc0stj82keig.cloudfront.net/1589548137/img/ML/homepage_screenshot.png'
              }
              srcset="https://d1wc0stj82keig.cloudfront.net/1589548137/img/ML/homepage_screenshot@2x.png 2x, https://d1wc0stj82keig.cloudfront.net/1589548137/img/ML/homepage_screenshot@3x.png 3x, https://d1wc0stj82keig.cloudfront.net/1589548137/img/ML/homepage_screenshot@4x.png 4x"
            />
            <div
              class="testimonials-container"
              css={css`
                position: relative;
                z-index: 3;
              `}
            >
              <div
                class="testimonials-logos"
                css={css`
                  max-width: 914px;
                  max-height: 66px;
                  overflow-y: hidden;
                  width: 100%;
                  margin: 0 auto;
                `}
              >
                <div
                  class="homepage-testimonials-logo logo-ifttt"
                  css={css`
                    background-image: url(${logo_ifttt});
                    background-size: 78px 21px;
                    width: 102px;
                    height: 66px;
                    display: inline-block;
                    background-position: 50%;
                    background-repeat: no-repeat;
                  `}
                />
                <div
                  class="homepage-testimonials-logo logo-hopper"
                  css={css`
                    background-image: url(${logo_hopper});
                    background-size: 78px 21px;
                    width: 102px;
                    height: 66px;
                    display: inline-block;
                    background-position: 50%;
                    background-repeat: no-repeat;
                  `}
                />
                <div
                  class="homepage-testimonials-logo logo-primary"
                  css={css`
                    background-image: url(${logo_primary});
                    background-size: 78px 21px;
                    width: 102px;
                    height: 66px;
                    display: inline-block;
                    background-position: 50%;
                    background-repeat: no-repeat;
                  `}
                />
                <div
                  class="homepage-testimonials-logo logo-hinge"
                  css={css`
                    background-image: url(${logo_hinge});
                    background-size: 78px 21px;
                    width: 102px;
                    height: 66px;
                    display: inline-block;
                    background-position: 50%;
                    background-repeat: no-repeat;
                  `}
                />
                <div
                  class="homepage-testimonials-logo logo-resy"
                  css={css`
                    background-image: url(${logo_resy});
                    background-size: 78px 21px;
                    width: 102px;
                    height: 66px;
                    display: inline-block;
                    background-position: 50%;
                    background-repeat: no-repeat;
                  `}
                />
                <div
                  class="homepage-testimonials-logo logo-flyt"
                  css={css`
                    background-image: url(${logo_flyt});
                    background-size: 78px 21px;
                    width: 102px;
                    height: 66px;
                    display: inline-block;
                    background-position: 50%;
                    background-repeat: no-repeat;
                  `}
                />
                <div
                  class="homepage-testimonials-logo logo-weblify"
                  css={css`
                    background-image: url(${logo_weblify});
                    background-size: 78px 21px;
                    width: 102px;
                    height: 66px;
                    display: inline-block;
                    background-position: 50%;
                    background-repeat: no-repeat;
                  `}
                />
                <div
                  class="homepage-testimonials-logo logo-novo"
                  css={css`
                    background-image: url(${logo_novo});
                    background-size: 78px 21px;
                    width: 102px;
                    height: 66px;
                    display: inline-block;
                    background-position: 50%;
                    background-repeat: no-repeat;
                  `}
                />
                <div
                  class="homepage-testimonials-logo logo-gamercraft"
                  css={css`
                    background-image: url(${logo_gamercraft});
                    background-size: 78px 21px;
                    width: 102px;
                    height: 66px;
                    display: inline-block;
                    background-position: 50%;
                    background-repeat: no-repeat;
                  `}
                />
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
        </section>
      </div>
    </div>
  );
}
