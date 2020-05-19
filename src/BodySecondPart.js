import React from 'react';
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import dashed_string_1 from './dashed_string_1.svg';
import testimonial_author_ifttt from './testimonial_author_ifttt.png';
import dashed_string_5 from './dashed_string_5.svg';
import dashed_string_6 from './dashed_string_6.svg';
import testimonial_author_blend_labs from './testimonial_author_blend_labs.png';

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
          class="testimonials"
          css={css`
            text-align: center;
            position: relative;
            padding-left: 24px !important;
            padding-right: 24px !important;
          `}
        >
          <div
            class="dashed-string dashed-string-1 "
            css={css`
              background-image: url(${dashed_string_1});
              margin: 40px auto;
              width: 80px;
              height: 200px;
              background-size: 80px 200px;
              background-repeat: no-repeat;
              background-position: 50%;
            `}
          ></div>

          <div
            class="testimonials-block group ifttt big-web-tablet-only"
            css={css`
              max-width: 640px;
              width: 100%;
              margin: 0 auto;
              position: relative;
              text-align: center;
            `}
          >
            <div
              class="testimonial-copy"
              css={css`
                font-family: LL Circular Book Web, Muli, Arial, sans-serif;
                font-weight: 300;
                font-style: normal;
                -webkit-font-smoothing: antialiased;
                text-rendering: optimizeLegibility;
                font-size: 22px;
                line-height: 28px;
                color: #34414f;
                margin: 0 auto;
              `}
            >
              “Carrot eliminates the fear of missing key Slack conversations,
              and cuts out the "Did you see my message?" nagging.”
            </div>
            <div
              class="testimonial_copy_footer"
              css={css`
                display: flex;
                justify-content: center;
                align-items: center;
                text-align: center;
                margin-top: 24px;
              `}
            >
              <div
                class="testimonial-author-pic"
                css={css`
                  width: 40px;
                  height: 40px;
                  background-size: 40px 40px;
                  background-position: 50%;
                  background-repeat: no-repeat;
                  margin-top: 3px;
                  background-image: url(${testimonial_author_ifttt});
                `}
              ></div>
              <div
                class="testimonial-copy-footer-right"
                css={css`
                  font-family: LL Circular Book Web, Muli, Arial, sans-serif;
                  font-weight: 300;
                  font-style: normal;
                  -webkit-font-smoothing: antialiased;
                  text-rendering: optimizeLegibility;
                  font-size: 18px;
                  color: #34414f;
                  line-height: 23px;
                  text-align: left;
                  margin-left: 16px;
                `}
              >
                Kevin Ebaugh, Senior Platform Community Manager
                <a
                  class="testimonial-copy-link"
                  href="https://ifttt.com/"
                  target="_blank"
                  css={css`
                    display: block;
                    color: #3fbd7c;
                    line-height: 23px;
                  `}
                >
                  IFTTT.com
                </a>
              </div>
            </div>
            <div
              class="after2"
              css={css`
                content: '';
                display: table;
                clear: both;
                white-space: nowrap;
              `}
            ></div>
          </div>
          <div
            class="dashed-string dashed-string-2 "
            css={css`
              margin: 40px auto;
              width: 80px;
              height: 200px;
              background-size: 80px 200px;
              background-repeat: no-repeat;
              background-position: 50%;
              background-image: url(https://d1wc0stj82keig.cloudfront.net/1589548137/img/ML/dashed_string_2.svg);
            `}
          ></div>
          <div
            class="testimonials-floated-block big-web-tablet-only"
            css={css`
              width: 100%;
              max-width: 1218px;
              margin: 0 auto;
            `}
          >
            <div
              class="testimonials-floated-block-inner left-block group"
              css={css`
                margin-top: 0;
                width: 100%;
                position: relative;
                box-sizing: border-box;
              `}
            >
              <img
                css={css`
                  float: left;
                  width: calc(50% - 12px);
                  border: 0;
                `}
                class="testimonials-floated-screenshot"
                src="https://d1wc0stj82keig.cloudfront.net/1589548137/img/ML/testimonials_floated_screenshot_1.png"
                srcset="https://d1wc0stj82keig.cloudfront.net/1589548137/img/ML/testimonials_floated_screenshot_1@2x.png 2x, https://d1wc0stj82keig.cloudfront.net/1589548137/img/ML/testimonials_floated_screenshot_1@3x.png 3x, https://d1wc0stj82keig.cloudfront.net/1589548137/img/ML/testimonials_floated_screenshot_1@4x.png 4x"
              />
              <div
                class="testimonials-floated-copy"
                css={css`
                  margin-left: 24px;
                  left: 50%;
                  max-width: 479px;
                  width: calc(50% + 12px);
                  position: absolute;
                  top: 50%;
                  transform: translateY(-50%);
                `}
              >
                <div
                  class="testimonials-floated-header"
                  css={css`
                    font-family: LL Circular Bold Web, Muli, Arial, sans-serif;
                    font-weight: 400;
                    font-style: normal;
                    -webkit-font-smoothing: antialiased;

                    text-rendering: optimizeLegibility;
                    font-size: 26px;
                    line-height: 33px;
                    color: #34414f;
                    text-align: left;
                  `}
                >
                  Space to say more
                </div>
                <div
                  class="testimonials-floated-subheader"
                  css={css`
                    margin-top: 8px;
                    font-family: LL Circular Book Web, Muli, Arial, sans-serif;
                    font-weight: 300;
                    font-style: normal;
                    -webkit-font-smoothing: antialiased;
                    text-rendering: optimizeLegibility;
                    font-size: 20px;
                    line-height: 26px;
                    color: #34414f;
                    text-align: left;
                  `}
                >
                  For longer-form updates and discussions, Carrot gives you room
                  to convey more information. Add images, video, code blocks,
                  and polls to keep everyone engaged.
                </div>
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
              class="testimonials-floated-block-inner right-block group"
              css={css`
                width: 100%;
                margin-top: 40px;
                position: relative;
              `}
            >
              <img
                css={css`
                  float: right;
                  width: calc(50% - 12px);
                  border: 0;
                `}
                class="testimonials-floated-screenshot"
                src="https://d1wc0stj82keig.cloudfront.net/1589548137/img/ML/testimonials_floated_screenshot_2.png"
                srcset="https://d1wc0stj82keig.cloudfront.net/1589548137/img/ML/testimonials_floated_screenshot_2@2x.png 2x, https://d1wc0stj82keig.cloudfront.net/1589548137/img/ML/testimonials_floated_screenshot_2@3x.png 3x, https://d1wc0stj82keig.cloudfront.net/1589548137/img/ML/testimonials_floated_screenshot_2@4x.png 4x"
              />
              <div
                class="testimonials-floated-copy"
                css={css`
                  margin-right: 24px;
                  right: 50%;
                  max-width: 479px;
                  width: calc(50% + 12px);
                  position: absolute;
                  top: 50%;
                  transform: translateY(-50%);
                `}
              >
                <div
                  class="testimonials-floated-header"
                  css={css`
                    font-family: LL Circular Bold Web, Muli, Arial, sans-serif;
                    font-weight: 400;
                    font-style: normal;
                    -webkit-font-smoothing: antialiased;
                    text-rendering: optimizeLegibility;
                    font-size: 26px;
                    line-height: 33px;
                    color: #34414f;
                    text-align: left;
                  `}
                >
                  Clear, organized discussions
                </div>
                <div
                  class="testimonials-floated-subheader"
                  css={css`
                    margin-top: 8px;
                    font-family: LL Circular Book Web, Muli, Arial, sans-serif;
                    font-weight: 300;
                    font-style: normal;
                    -webkit-font-smoothing: antialiased;
                    text-rendering: optimizeLegibility;
                    font-size: 20px;
                    line-height: 26px;
                    color: #34414f;
                    text-align: left;
                  `}
                >
                  With smart highlights, viewers always know what's new - no
                  matter when they join the discussion. It's asynchronous
                  communication at its best.
                </div>
              </div>
              <div
                class="after4"
                css={css`
                  content: '';
                  display: table;
                  clear: both;
                  white-space: nowrap;
                `}
              />
            </div>
            <div
              class="testimonials-floated-block-inner left-block group"
              css={css`
                width: 100%;
                margin-top: 40px;
                position: relative;
              `}
            >
              <img
                css={css`
                  float: left;
                  width: calc(50% - 12px);
                `}
                class="testimonials-floated-screenshot"
                src="https://d1wc0stj82keig.cloudfront.net/1589548137/img/ML/testimonials_floated_screenshot_3.png"
                srcset="https://d1wc0stj82keig.cloudfront.net/1589548137/img/ML/testimonials_floated_screenshot_3@2x.png 2x, https://d1wc0stj82keig.cloudfront.net/1589548137/img/ML/testimonials_floated_screenshot_3@3x.png 3x, https://d1wc0stj82keig.cloudfront.net/1589548137/img/ML/testimonials_floated_screenshot_3@4x.png 4x"
              />
              <div
                class="testimonials-floated-copy"
                css={css`
                  margin-left: 24px;
                  left: 50%;
                  max-width: 479px;
                  width: calc(50% + 12px);
                  position: absolute;
                  top: 50%;
                  transform: translateY(-50%);
                `}
              >
                <div
                  class="testimonials-floated-header"
                  css={css`
                    font-family: LL Circular Bold Web, Muli, Arial, sans-serif;
                    font-weight: 400;
                    font-style: normal;
                    -webkit-font-smoothing: antialiased;
                    text-rendering: optimizeLegibility;
                    font-size: 26px;
                    line-height: 33px;
                    color: #34414f;
                    text-align: left;
                  `}
                >
                  Know who saw your update
                </div>
                <div
                  class="testimonials-floated-subheader"
                  css={css`
                    margin-top: 8px;
                    font-family: LL Circular Book Web, Muli, Arial, sans-serif;
                    font-weight: 300;
                    font-style: normal;
                    -webkit-font-smoothing: antialiased;
                    text-rendering: optimizeLegibility;
                    font-size: 20px;
                    line-height: 26px;
                    color: #34414f;
                    text-align: left;
                  `}
                >
                  Is anyone paying attention? Carrot works in the background to
                  make sure everyone sees what matters. If it's missed, Carrot
                  reminds them for you.
                </div>
              </div>
              <div
                class="after5"
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
            class="dashed-string dashed-string-5 "
            css={css`
              background-image: url(${dashed_string_5});
              margin: 40px auto;
              width: 80px;
              height: 200px;
              background-size: 80px 200px;
              background-repeat: no-repeat;
              background-position: 50%;
            `}
          ></div>
          <div
            class="testimonials-commgaps-block big-web-tablet-only"
            css={css`
              width: 100%;
              max-width: 1212px;
              margin: 0 auto;
            `}
          >
            <div
              class="testimonals-commgaps-header"
              css={css`
                font-weight: 400;
                font-style: normal;
                -webkit-font-smoothing: antialiased;
                text-rendering: optimizeLegibility;
                font-size: 60px;
                line-height: 60px;
                color: #34414f;
              `}
            >
              Close communication gaps
            </div>
            <div
              class="testimonals-commgaps-subheader"
              css={css`    margin-top: 24px;
    font-family: LL Circular Book Web,Muli,Arial,sans-serif;
    font-weight: 300;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    font-size: 24px;
    line-height: 32px;
    color: #34414f;
}`}
            >
              Automatically share posts to Slack and email to increase coverage.
            </div>
            <div
              class="testimonials commgaps-block-inner group"
              css={css`
                width: 100%;
                margin-top: 40px;
              `}
            >
              <div
                class="testimonials-commgaps-column left-column"
                css={css`
                  float: left;
                  width: calc(50% - 3px);
                  text-align: center;
                `}
              >
                <img
                  css={css`
                    width: 100%;
                    border: 0;
                    vertical-align: middle;
                  `}
                  class="testimonials-commgaps-column-screenshot"
                  src="https://d1wc0stj82keig.cloudfront.net/1589548137/img/ML/testimonials_commgaps_email.png"
                  srcset="https://d1wc0stj82keig.cloudfront.net/1589548137/img/ML/testimonials_commgaps_email@2x.png 2x, https://d1wc0stj82keig.cloudfront.net/1589548137/img/ML/testimonials_commgaps_email@3x.png 3x, https://d1wc0stj82keig.cloudfront.net/1589548137/img/ML/testimonials_commgaps_email@4x.png 4x"
                />
                <div
                  class="testimonials-commgaps-column-header"
                  css={css`
                    font-family: LL Circular Bold Web, Muli, Arial, sans-serif;
                    font-weight: 400;
                    font-style: normal;
                    -webkit-font-smoothing: antialiased;
                    -moz-osx-font-smoothing: grayscale;
                    text-rendering: optimizeLegibility;
                    font-size: 26px;
                    line-height: 33px;
                    color: #34414f;
                    max-width: 404px;
                    margin: 16px auto 0;
                  `}
                >
                  Daily newsletter to stay in sync
                </div>
                <div
                  class="testimonials-commgaps-column-subheader"
                  css={css`
                    font-family: LL Circular Book Web, Muli, Arial, sans-serif;
                    font-weight: 300;
                    font-style: normal;
                    -webkit-font-smoothing: antialiased;
                    -moz-osx-font-smoothing: grayscale;
                    text-rendering: optimizeLegibility;
                    font-size: 20px;
                    line-height: 26px;
                    color: #34414f;
                    max-width: 404px;
                    margin: 8px auto 0;
                  `}
                >
                  Everyone gets a daily, personalized summary of what's
                  important.
                </div>
              </div>
              <div
                class="testimonials-commgaps-column right-column"
                css={css`
                  float: right;
                  width: calc(50% - 3px);
                  text-align: center;
                `}
              >
                <img
                  css={css`
                    width: 100%;
                    border: 0;
                    vertical-align: middle;
                  `}
                  class="testimonials-commgaps-column-screenshot"
                  src="https://d1wc0stj82keig.cloudfront.net/1589548137/img/ML/testimonials_commgaps_slack.png"
                  srcset="https://d1wc0stj82keig.cloudfront.net/1589548137/img/ML/testimonials_commgaps_slack@2x.png 2x, https://d1wc0stj82keig.cloudfront.net/1589548137/img/ML/testimonials_commgaps_slack@3x.png 3x, https://d1wc0stj82keig.cloudfront.net/1589548137/img/ML/testimonials_commgaps_slack@4x.png 4x"
                />
                <div
                  class="testimonials-commgaps-column-header"
                  css={css`
                    font-family: LL Circular Bold Web, Muli, Arial, sans-serif;
                    font-weight: 400;
                    font-style: normal;
                    -webkit-font-smoothing: antialiased;
                    -moz-osx-font-smoothing: grayscale;
                    text-rendering: optimizeLegibility;
                    font-size: 26px;
                    line-height: 33px;
                    color: #34414f;
                    max-width: 404px;
                    margin: 16px auto 0;
                  `}
                >
                  Auto-share posts to Slack
                </div>
                <div
                  class="testimonials-commgaps-column-subheader"
                  css={css`
                    font-family: LL Circular Book Web, Muli, Arial, sans-serif;
                    font-weight: 300;
                    font-style: normal;
                    -webkit-font-smoothing: antialiased;
                    -moz-osx-font-smoothing: grayscale;
                    text-rendering: optimizeLegibility;
                    font-size: 20px;
                    line-height: 26px;
                    color: #34414f;
                    max-width: 404px;
                    margin: 8px auto 0;
                  `}
                >
                  Your Carrot posts are automatically shared to the right Slack
                  #channel.
                </div>
              </div>{' '}
              <div
                class="after6"
                css={css`
                  content: '';
                  display: table;
                  clear: both;
                  white-space: nowrap;
                  box-sizing: border-box;
                `}
              />
            </div>
          </div>
          <div
            class="dashed-string dashed-string-6 "
            css={css`
              background-image: url(${dashed_string_6});
              margin: 40px auto;
              width: 80px;
              height: 200px;
              background-size: 80px 200px;
              background-repeat: no-repeat;
              background-position: 50%;
            `}
          ></div>
          <div
            class="testimonials-block group blend-labs big-web-tablet-only"
            css={css`
              max-width: 710px;
              width: 100%;
              margin: 0 auto;
              position: relative;
              text-align: center;
            `}
          >
            <div
              class="testimonial-copy"
              css={css`
                font-family: LL Circular Book Web, Muli, Arial, sans-serif;
                font-weight: 300;
                font-style: normal;
                -webkit-font-smoothing: antialiased;
                text-rendering: optimizeLegibility;
                font-size: 22px;
                line-height: 28px;
                color: #34414f;
                margin: 0 auto;
              `}
            >
              “We use Carrot for key announcements and weekly updates no one can
              miss.”
            </div>
            <div
              class="testimonial-copy-footer"
              css={css`
                display: flex;
                justify-content: center;
                align-items: center;
                text-align: center;
                margin-top: 24px;
              `}
            >
              <div
                class="testimonial-author-pic"
                css={css`
                  background-image: url(${testimonial_author_blend_labs});
                  width: 40px;
                  height: 40px;
                  background-size: 40px 40px;
                  background-position: 50%;
                  background-repeat: no-repeat;
                  margin-top: 3px;
                `}
              ></div>
              <div
                class="testimonial-copy-footer-right"
                css={css`
                  font-family: LL Circular Book Web, Muli, Arial, sans-serif;
                  font-weight: 300;
                  font-style: normal;
                  -webkit-font-smoothing: antialiased;
                  -moz-osx-font-smoothing: grayscale;
                  text-rendering: optimizeLegibility;
                  font-size: 18px;
                  color: #34414f;
                  line-height: 23px;
                  text-align: left;
                  margin-left: 16px;
                `}
              >
                Sara Vienna, Head of Design
                <a
                  css={css`
                    display: block;
                    color: #3fbd7c;
                    line-height: 23px;
                    cursor: pointer;
                  `}
                  class="testimonial-copy-link"
                  href="https://bl3ndlabs.com/"
                  target="_blank"
                >
                  Bl3NDlabs.com
                </a>
              </div>
            </div>
            <div
              class="after7"
              css={css`
                content: '';
                display: table;
                clear: both;
                white-space: nowrap;
              `}
            />
          </div>
          <div
            class="dashed-string dashed-string-1 big-web-tablet-only"
            css={css`
              background-image: url(${dashed_string_1});
              margin: 40px auto;
              width: 80px;
              height: 200px;
              background-size: 80px 200px;
              background-repeat: no-repeat;
              background-position: 50%;
            `}
          ></div>
        </section>
      </div>
    </div>
  );
}
