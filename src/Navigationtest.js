// import React from 'react';
// // this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
// /** @jsx jsx */
// import { css, jsx } from '@emotion/core';
// import carrot_wordmark from './carrot_wordmark.svg';

// // const navbarStyle = css`
// //   height: 60px;
// //   box-shadow: 0 2px 16px 0 rgba(0, 0, 0, 0.16);
// //   background-color: #fff;
// //   text-align: center;
// // `;

// const navDefaultStyle = css`
//   height: ${window.scrollY < 100 ? '83px' : '60px'};
//   position: fixed;
//   width: 100%;
//   z-index: 100;
//   background-color: transparent;
//   border-bottom: 1px solid transparent;
//   background-color: #fffdf9;
//   transition: background-color 0.18s, height 0.18s;
// `;

// // const navScrollStyle = css`
// //   height: 60px;
// //   box-shadow: 0 2px 16px 0 rgba(0, 0, 0, 0.16);
// //   background-color: #fff;
// //   position: fixed;
// //   width: 100%;
// //   z-index: 100;
// //   border-bottom: 1px solid transparent;
// //   transition: background-color 0.18s, height 0.18s;
// // `;

// export default function Nacigation() {
//   return (
//     <nav css={navDefaultStyle}>
//       <img
//         src={carrot_wordmark}
//         alt="Carrot Logo"
//         href="/?no_redirect=1"
//         css={css`
//           float: left;
//           margin: 0;
//           width: 118px;
//           height: 28px;
//           background-size: 118px 28px;
//           background-repeat: no-repeat;
//           padding: 0;
//         `}
//       />
//       <div
//         navContainer={css`
//           height: 60px;
//           padding: 39px 16px 16px;
//           position: relative;
//           max-width: 1209px;
//           margin: 0 auto;
//           transition: padding 0.18s;
//         `}
//       >
//         <a
//           href="/?no_redirect=1"
//           home={css`
//             font-family: LL Circular Book Web, Muli, Arial, sans-serif;
//             font-weight: 300;
//             font-style: normal;
//             text-rendering: optimizeLegibility;
//             padding: 0 20px;
//             display: inline-block;
//             font-size: 18px;
//             line-height: 28px;
//             color: rgba(52, 65, 79, 0.5);
//             margin: 0;
//             height: 28px;
//             z-index: 2;
//           `}
//         >
//           Home
//         </a>
//         <a href="/?no_redirect=1">Apps</a>
//         <a href="/?no_redirect=1">Pricing</a>
//         <a href="/?no_redirect=1">Login</a>
//         <a href="/?no_redirect=1">Start free</a>
//       </div>
//     </nav>
//   );
// }
