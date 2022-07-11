import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  #root {
    height: 100%;
  }
  * {
    box-sizing: border-box;
    position: relative
  }

  html,body {
    background-color: #FFF
  }

  body {
    text-rendering: optimizeLegibility;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%
  }

  body,html,div,blockquote,img,p,a,h1,h2,h3,h4,ul,ol,li,th,td {
    border: 0;
    margin: 0;
    padding: 0
  }

  table {
    border-spacing: 0
  }

  article,footer,header,main,menu,nav,section {
    display: block
  }

  h1,h2,h3,h4 {
    font-size: 100%
  }

  img,video {
    display: block;
    height: auto;
    max-width: 100%;
    width: auto
  }

  a {
    color: #3AAC59;
    text-decoration: none;
    transition: all 0.25s ease-in-out 0s
  }

  a:visited {
    color: #3AAC59
  }

  a:hover,a:active {
    color: #3C4A3E
  }

  button {
    background-color: transparent;
    border: none;
    border-radius: 0;
    margin: 0;
    padding: 0;
    text-align: left;
    transition: all 0.25s ease-in-out 0s
  }

  button::-moz-focus-inner {
    border: none;
    padding: 0
  }

  strong,b {
    font-weight: 700
  }

  em,i,cite {
    font-style: italic
  }

  small {
    font-size: px(14);
    font-size: .875rem;
    line-height: 1.7142857143
  }

  hr {
    background-color: #DDD;
    border: none;
    color: #DDD;
    display: block;
    height: .125rem;
    margin: 2.25rem 0;
    text-align: left
  }

  body {
    font-family: "Poppins",sans-serif;
    font-style: normal;
    font-weight: 500;
    color: #3C4A3E
  }

  h1,h2,h3,h4,h5,h6 {
    font-weight: 700
  }

  h1 {
    font-size: px(37.3333333333);
    font-size: 2.3333333333rem;
    line-height: 1.1428571429;
    margin-bottom: 1.5rem
  }

  @media only screen and (min-width: 48em) {
    h1 {
        font-size:px(42);
        font-size: 2.625rem;
        line-height: 1.1428571429
    }
  }

  h2 {
    font-size: px(32);
    font-size: 2rem;
    line-height: 1.3333333333;
    margin-bottom: 1rem
  }

  @media only screen and (min-width: 48em) {
    h2 {
        font-size:px(36);
        font-size: 2.25rem;
        line-height: 1.3333333333
    }
  }

  h3 {
    font-size: px(21.3333333333);
    font-size: 1.3333333333rem;
    line-height: 1.3333333333;
    margin-bottom: 1rem
  }

  @media only screen and (min-width: 48em) {
    h3 {
        font-size:px(24);
        font-size: 1.5rem;
        line-height: 1.3333333333
    }
  }

  h4 {
    font-size: px(17.7777777778);
    font-size: 1.1111111111rem;
    line-height: 1.35;
    margin-bottom: 1rem
  }

  @media only screen and (min-width: 48em) {
    h4 {
        font-size:px(20);
        font-size: 1.25rem;
        line-height: 1.35
    }
  }

  h5 {
    font-size: px(16);
    font-size: 1rem;
    line-height: 1.3333333333;
    margin-bottom: 1rem
  }

  @media only screen and (min-width: 48em) {
    h5 {
        font-size:px(18);
        font-size: 1.125rem;
        line-height: 1.3333333333
    }
  }

  h6 {
    font-size: px(14.2222222222);
    font-size: .8888888889rem;
    line-height: 1.75;
    margin-bottom: 1rem
  }

  @media only screen and (min-width: 48em) {
    h6 {
        font-size:px(16);
        font-size: 1rem;
        line-height: 1.75
    }
  }

  p {
    font-size: px(14.2222222222);
    font-size: .8888888889rem;
    line-height: 1.75;
    margin: .75rem 0 .75rem
  }

  @media only screen and (min-width: 48em) {
    p {
        font-size:px(16);
        font-size: 1rem;
        line-height: 1.75
    }
  }

  blockquote {
    font-size: px(26.6666666667);
    font-size: 1.6666666667rem;
    line-height: 1.6;
    background-color: #EFFDF0;
    border-left: .25rem solid #3C4A3E;
    margin: 2.25rem 0;
    padding: 1.5rem
  }

  blockquote p {
    font-size: inherit;
    line-height: inherit;
    margin: 2.25rem 0 0
  }

  blockquote p:first-child {
    margin-top: 0
  }

  @media only screen and (min-width: 48em) {
    blockquote {
        font-size:px(30);
        font-size: 1.875rem;
        line-height: 1.6
    }
  }

  ul,ol,dl {
    font-size: px(14.2222222222);
    font-size: .8888888889rem;
    line-height: 1.75;
    margin: 1.75rem 0 1.75rem
  }

  @media only screen and (min-width: 48em) {
    ul,ol,dl {
        font-size:px(16);
        font-size: 1rem;
        line-height: 1.75
    }
  }

  ul {
    list-style: disc;
    padding-left: 1.5rem
  }

  ul ul,ol ul {
    list-style: circle
  }

  ol {
    list-style: decimal;
    padding-left: 2rem
  }

  ul ol,ol ol {
    list-style: lower-alpha
  }

  ol ol ol {
    list-style: decimal
  }

  ul ul,ol ul,ul ol,ol ol {
    font-size: inherit;
    margin: .75rem 0
  }

  ul ul,ol ul {
    padding-left: 1.5rem
  }

  ul ol,ol ol {
    padding-left: 2rem
  }

  dt {
    font-size: inherit;
    font-weight: 700
  }

  li {
    margin-bottom: .75rem
  }

  dd {
    margin-bottom: 2.25rem
  }

  table {
    font-size: px(14.2222222222);
    font-size: .8888888889rem;
    line-height: 1.4765625;
    background-color: #FFF;
    margin: 1.75rem 0;
    width: 100%
  }

  @media only screen and (min-width: 48em) {
    table {
        font-size:px(16);
        font-size: 1rem;
        line-height: 1.5
    }
  }

  caption {
    font-size: px(17.7777777778);
    font-size: 1.1111111111rem;
    line-height: 1.35;
    font-weight: 700;
    margin-bottom: .5rem
  }

  @media only screen and (min-width: 48em) {
    caption {
        font-size:px(20);
        font-size: 1.25rem;
        line-height: 1.35
    }
  }

  th {
    font-weight: 700;
    padding: .75rem .9375rem;
    text-align: left;
    vertical-align: top
  }

  td {
    padding: .75rem .9375rem;
    text-align: left;
    vertical-align: top
  }

  th:nth-of-type(1),td:nth-of-type(1) {
    border-left: none
  }

  code {
    background-color: #EFFDF0;
    border-radius: 2px;
    color: #3C4A3E;
    font-family: "Consolas",Courier,monospace;
    padding: 2px 4px
  }

  pre {
    background-color: #EFFDF0;
    border-radius: 8px;
    line-height: 1.6025;
    margin: 1.75rem 0;
    overflow: auto;
    overflow-y: hidden;
    padding: 24px;
    white-space: pre
  }

  pre code {
    background-color: transparent;
    border-radius: 0;
    font-size: inherit;
    line-height: inherit;
    padding: 0
  }

  .light-bg {
    background-color: #EFFDF0;
    padding: 1.5rem 0
  }

  @media only screen and (min-width: 62em) {
    .light-bg {
        padding:5.5rem 1.5rem
    }
  }

  .white-bg {
    background-color: #FFF
  }

  .col-4-container {
    display: block;
    margin-left: auto;
    margin-right: auto;
    max-width: 29rem
  }

  .col-6-container {
    display: block;
    margin-left: auto;
    margin-right: auto;
    max-width: 44.25rem
  }

  .col-8-container {
    display: block;
    margin-left: auto;
    margin-right: auto;
    max-width: 59.5rem
  }

  .col-10-container {
    display: block;
    margin-left: auto;
    margin-right: auto;
    max-width: 74.75rem
  }

  .col-12-container {
    display: block;
    margin-left: auto;
    margin-right: auto;
    max-width: 90rem
  }

  .content-padding {
    padding: 1.5rem 3.125%
  }

  @media only screen and (min-width: 62em) {
    .content-padding {
        padding:5.5rem 1.5rem
    }
  }

  .clear:after {
    clear: both;
    content: "";
    display: block;
    height: 0;
    visibility: hidden
  }

  .soft-shadow {
    box-shadow: .5rem .5rem 3rem 1.5rem rgba(162,162,162,0.1)
  }

  .pg-title {
    background: linear-gradient(to right bottom, #3AAC59, #96C93D);
    color: #FFF;
    padding: 1.5rem 1.6666666667%;
    text-align: center
  }

  .pg-title h1 {
    margin-bottom: 0
  }

  @media only screen and (min-width: 62em) {
    .pg-title {
        padding:3rem 1.6666666667%
    }
  }

  .full-width-col {
    margin-bottom: 2.25rem
  }

  .full-width-col p:nth-of-type(1) {
    font-size: px(26.6666666667);
    font-size: 1.6666666667rem;
    line-height: 1.6
  }

  @media only screen and (min-width: 48em) {
    .full-width-col p:nth-of-type(1) {
        font-size:px(30);
        font-size: 1.875rem;
        line-height: 1.6
    }
  }

  .two-col-txt::after {
    clear: both;
    content: "";
    display: block;
    height: 0;
    visibility: hidden
  }

  @media only screen and (min-width: 48em) {
    .two-col-txt .two-col {
        width:48.7394957983%
    }

    .two-col-txt .txt-col-left {
        float: left
    }

    .two-col-txt .txt-col-right {
        float: right
    }
  }

  .featured-content {
    display: flex;
    flex-direction: column
  }

  @media only screen and (min-width: 48em) {
    .featured-content {
        flex-direction:row
    }
  }

  .featured-content-txt-container {
    background-color: #FFF
  }

  @media only screen and (min-width: 48em) {
    .featured-content-txt-container {
        width:61.2040133779%
    }
  }

  .featured-content-txt {
    padding: 1.5rem
  }

  .featured-content-txt .button,.featured-content-txt .primary-button,.featured-content-txt .outline-green-button,.featured-content-txt .outline-white-button,.featured-content-txt .full-width-button,.featured-content-txt .full-width-outline-green-button,.featured-content-txt .full-width-outline-white-button {
    margin-top: 1.5rem
  }

  @media only screen and (min-width: 67.5em) {
    .featured-content-txt {
        padding:3.75rem
    }
  }

  @media only screen and (min-width: 81.125em) {
    .featured-content-txt {
        padding:3.75rem 7.625rem 3.75rem 9.125rem
    }
  }

  .featured-content-img {
    display: none
  }

  @media only screen and (min-width: 48em) {
    .featured-content-img {
        display:block;
        width: 38.7959866221%
    }
  }

  .featured-section h2 {
    background-image: url(/img/bg/heading-decoration_@2x.png);
    background-position: center bottom;
    background-repeat: no-repeat;
    background-size: 11.25rem auto;
    margin-bottom: 3.75rem;
    padding-bottom: 1.5rem;
    text-align: center
  }

  .superhero {
    background-color: #3C4A3E;
    background-image: url(/img/bg/icon-tile_@2x.png);
    background-position: 50%;
    background-repeat: repeat;
    background-size: 12.5rem 12.5rem;
    color: #FFF
  }

  .superhero-bg-container {
    background-image: url(/img/bg/superhero-asbstract-pattern_@2x.png);
    background-position: -62.4375rem;
    background-repeat: repeat-y;
    background-size: 13.75rem auto
  }

  @media only screen and (min-width: 42.5em) {
    .superhero-bg-container {
        background-position:right top
    }
  }

  @media only screen and (min-width: 56.25em) {
    .superhero-bg-container {
        background-size:21.375rem auto
    }
  }

  @media only screen and (min-width: 67.5em) {
    .superhero-bg-container {
        background-size:29rem auto
    }
  }

  .superhero-layout-container {
    padding-bottom: 15%;
    padding-left: 8.4722222222%;
    padding-right: 8.4722222222%;
    padding-top: 13.8888888889%
  }

  @media only screen and (min-width: 42.5em) {
    .superhero-layout-container {
        padding-right:38.0208333333%
    }
  }

  @media only screen and (min-width: 48em) {
    .superhero-layout-container {
        padding-right:34%
    }
  }

  @media only screen and (min-width: 56.25em) {
    .superhero-layout-container {
        padding-right:42.037037037%
    }
  }

  @media only screen and (min-width: 67.5em) {
    .superhero-layout-container {
        padding-right:50.8333333333%
    }
  }

  .superhero-content {
    max-width: 36.625rem
  }

  .slick-dots {
    list-style: none;
    margin: 0;
    padding-left: 0;
    margin-top: 10%
  }

  .slick-dots li {
    display: inline-block;
    margin: 0 1rem 0 0
  }

  .slick-dots li button {
    font-size: 0;
    line-height: 0;
    outline: none
  }

  .slick-dots li button:before {
    background-color: #FFF;
    border: .25rem solid #FFF;
    border-radius: 100%;
    content: '';
    display: block;
    height: .75rem;
    transition: all 0.25s ease-in-out 0s;
    width: .75rem
  }

  .slick-dots li button:hover:before {
    background-color: transparent;
    cursor: pointer
  }

  .slick-dots .slick-active button:before {
    background-color: transparent
  }

  @media only screen and (min-width: 56.25em) {
    .value-props-grid {
        display:grid;
        gap: 1.5rem 1.5rem;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr
    }
  }

  .value-prop {
    border-radius: .5rem;
    margin-bottom: 1.5rem;
    padding: 1.5rem 4.0955631399% 1.5rem
  }

  .value-prop:nth-child(4) {
    margin-bottom: 0
  }

  .value-prop h2 {
    background-image: url(/img/bg/gradient-border_@2x.png);
    background-position: bottom left;
    background-repeat: no-repeat;
    background-size: 11.25rem 1rem;
    padding-bottom: 3rem
  }

  @media only screen and (min-width: 28.75em) {
    .value-prop {
        padding:10.2389078498%
    }
  }

  @media only screen and (min-width: 56.25em) {
    .value-prop {
        margin-bottom:0
    }
  }

  .chia-cta {
    margin-top: 1.5rem
  }

  .chia-cta a {
    font-weight: 700
  }

  .download-options {
    padding-bottom: 1.5rem;
    padding-top: 1.5rem
  }

  .download-option {
    border-bottom: 1px solid #DDD;
    margin-bottom: 1.5rem;
    padding-bottom: 1.5rem
  }

  .download-option::after {
    clear: both;
    content: "";
    display: block;
    height: 0;
    visibility: hidden
  }

  .download-option h6 {
    margin-bottom: .25rem;
    margin-top: 0
  }

  .download-option span {
    word-wrap: break-word
  }

  .download-option-details {
    float: left
  }

  .admonition-note {
    font-weight: 400;
    background-color: #EFFDF0
  }

  .download-option-button {
    margin-bottom: 1.5rem;
    width: 100%
  }

  @media only screen and (min-width: 56.25em) {
    .download-option-button {
        margin-bottom:0;
        margin-right: 2.5210084034%;
        width: 23.1092436975%
    }
  }

  .download-option-ver {
    margin-bottom: 1.5rem
  }

  @media only screen and (min-width: 36em) {
    .download-option-ver {
        margin-bottom:0;
        width: 50%
    }
  }

  @media only screen and (min-width: 56.25em) {
    .download-option-ver {
        margin-right:2.5210084034%;
        padding-left: 2.5210084034%;
        width: 35.9243697479%
    }
  }

  .download-option-check {
    width: 100%
  }

  @media only screen and (min-width: 36em) {
    .download-option-check {
        width:50%
    }
  }

  @media only screen and (min-width: 56.25em) {
    .download-option-check {
        width:35.9243697479%
    }
  }

  .verify-check {
    border-bottom: none
  }

  .verify-check .chia-cta {
    margin: 0
  }

  @media only screen and (min-width: 36em) {
    .verify-check .chia-cta {
        float:right;
        width: 50%
    }
  }

  @media only screen and (min-width: 56.25em) {
    .verify-check .chia-cta {
        width:35.9243697479%
    }
  }

  @media only screen and (min-width: 56.25em) {
    .download-extras {
        display:grid;
        gap: 1.5rem 1.5rem;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr
    }
  }

  .download-extra-option {
    border-radius: .5rem;
    margin-bottom: 1.5rem;
    padding: 1.5rem 4.0955631399% 1.5rem
  }

  .download-extra-option:nth-child(2) {
    margin-bottom: 0
  }

  .download-extra-option li {
    margin-bottom: .25rem
  }

  @media only screen and (min-width: 28.75em) {
    .download-extra-option {
        padding:6.8965517241%
    }
  }

  @media only screen and (min-width: 56.25em) {
    .download-extra-option {
        margin-bottom:0
    }
  }

  .release-notes-options h2 {
    text-align: center
  }

  @media only screen and (min-width: 36em) {
    .release-notes-grid {
        display:grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        gap: 1.5rem 1.5rem
    }
  }

  .release {
    border: 1px solid #DDD;
    border-radius: .5rem;
    margin-bottom: 1.5rem;
    padding: 1rem 5.1724137931%
  }

  .release .release-date {
    font-size: px(14);
    font-size: .875rem;
    line-height: 1.7142857143
  }

  @media only screen and (min-width: 36em) {
    .release {
        margin-bottom:0
    }
  }

  .faq {
    color: #0C282A;
    padding-bottom: 3rem
  }

  .faq .faq-entry {
    padding: 1rem 0
  }

  .faq .faq-entry h2 {
    font-weight: bold;
    font-size: 32px;
    margin-bottom: 2rem
  }

  .faq .faq-entry p {
    font-size: 16px
  }

  .faq .faq-summary-box {
    background: #eee
  }

  .faq .faq-summary-box h2 {
    font-size: 24px;
    padding: 1rem 30px;
    padding-top: 2rem
  }

  .faq .faq-summary-box a {
    color: inherit;
    display: block;
    padding: 1rem 30px;
    border-top: 1px solid #808080
  }

  .chia-accordion {
    border-bottom: .125rem solid #DDD
  }

  .chia-accordion-item {
    border-top: .125rem solid #DDD
  }

  .chia-accordion-item .accordion-trigger {
    font-size: px(16);
    font-size: 1rem;
    line-height: 1.5;
    border-left: .125rem solid #DDD;
    border-right: .125rem solid #DDD;
    margin: 0
  }

  .chia-accordion-item .accordion-trigger a,.chia-accordion-item .accordion-trigger a:visited {
    border-bottom: none;
    color: #3C4A3E;
    display: block;
    padding: 1.5rem 3.75rem 1.5rem 1.5rem
  }

  .chia-accordion-item .accordion-trigger a:hover,.chia-accordion-item .accordion-trigger a:active,.chia-accordion-item .accordion-trigger a:visited:hover,.chia-accordion-item .accordion-trigger a:visited:active {
    color: #3AAC59
  }

  .chia-accordion-item .accordion-trigger a:hover .accordion-button:before,.chia-accordion-item .accordion-trigger a:hover .accordion-button:after,.chia-accordion-item .accordion-trigger a:active .accordion-button:before,.chia-accordion-item .accordion-trigger a:active .accordion-button:after,.chia-accordion-item .accordion-trigger a:visited:hover .accordion-button:before,.chia-accordion-item .accordion-trigger a:visited:hover .accordion-button:after,.chia-accordion-item .accordion-trigger a:visited:active .accordion-button:before,.chia-accordion-item .accordion-trigger a:visited:active .accordion-button:after {
    background-color: #3AAC59
  }

  .chia-accordion-item .accordion-trigger a:hover .accordion-button:before,.chia-accordion-item .accordion-trigger a:active .accordion-button:before,.chia-accordion-item .accordion-trigger a:visited:hover .accordion-button:before,.chia-accordion-item .accordion-trigger a:visited:active .accordion-button:before {
    transform: rotate(90deg)
  }

  .chia-accordion-item .accordion-trigger a:hover .accordion-button:after,.chia-accordion-item .accordion-trigger a:active .accordion-button:after,.chia-accordion-item .accordion-trigger a:visited:hover .accordion-button:after,.chia-accordion-item .accordion-trigger a:visited:active .accordion-button:after {
    transform: rotate(180deg)
  }

  .chia-accordion-item .accordion-trigger .active-accordion .accordion-button:before {
    transform: rotate(90deg)
  }

  .chia-accordion-item .accordion-trigger .active-accordion .accordion-button:after {
    transform: rotate(180deg)
  }

  .chia-accordion-details {
    border-left: .125rem solid #DDD;
    border-right: .125rem solid #DDD;
    border-top: .125rem solid #DDD;
    padding: .75rem 1.5rem 1.5rem
  }

  .accordion-button {
    height: 1rem;
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    width: 1rem
  }

  .accordion-button:before,.accordion-button:after {
    background-color: #3C4A3E;
    content: '';
    position: absolute;
    transition: transform 0.25s ease-out
  }

  .accordion-button:before {
    height: 100%;
    left: 50%;
    margin-left: -.0625rem;
    top: 0;
    width: .125rem
  }

  .accordion-button:after {
    height: .125rem;
    left: 0;
    margin-top: -.0625rem;
    top: 50%;
    width: 100%
  }

  .accordion-button:hover {
    cursor: pointer
  }

  .accordion-button:hover:before {
    transform: rotate(90deg)
  }

  .accordion-button:hover:after {
    transform: rotate(180deg)
  }

  .team-members {
    max-width: 67.125rem;
    display: block;
    margin-left: auto;
    margin-right: auto;
    display: grid;
    gap: 1.5rem 1.5rem;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr
  }

  @media only screen and (min-width: 48em) {
    .team-members {
        grid-template-columns:1fr 1fr 1fr
    }
  }

  .team-member img {
    border-radius: .5rem;
    margin-bottom: .5rem
  }

  .team-member span {
    display: block
  }

  .team-member .team-name {
    font-size: px(16);
    font-size: 1rem;
    line-height: 1.5;
    font-weight: 700;
    margin-bottom: .25rem
  }

  .team-member .team-title {
    font-size: px(14);
    font-size: .875rem;
    line-height: 1.5;
    color: rgba(60,74,62,0.5)
  }

  .investors {
    max-width: 67.125rem;
    display: block;
    margin-left: auto;
    margin-right: auto;
    display: grid;
    gap: 1.5rem 1.5rem;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr
  }

  @media only screen and (min-width: 48em) {
    .investors {
        grid-template-columns:1fr 1fr 1fr
    }
  }

  .investor img {
    border-radius: .5rem
  }

  .jumbotron {
    border: 0px solid #DDD;
    border-radius: .5rem;
    margin-bottom: 1.5rem
  }

  .jumbotron .news-jumbotron-thumbnail {
    border-radius: .5rem .5rem 0 0;
    height: 18.125rem;
    object-fit: cover;
    width: 100%
  }

  @media only screen and (min-width: 48em) {
    .jumbotron .news-jumbotron-thumbnail {
        height:37.125rem
    }
  }

  .jumbotron-content {
    border-top: 1px solid #DDD;
    padding: 1.5rem 5.1724137931% 1.5rem
  }

  .jumbotron-content .date {
    font-size: px(14);
    font-size: .875rem;
    line-height: 1.7142857143;
    display: block;
    margin-bottom: .5rem
  }

  .jumbotron-content h2 a,.jumbotron-content h2 a:visited {
    color: #3C4A3E
  }

  .jumbotron-content h2 a:hover,.jumbotron-content h2 a:active,.jumbotron-content h2 a:visited:hover,.jumbotron-content h2 a:visited:active {
    color: #3AAC59
  }

  @media only screen and (min-width: 28.75em) {
    .jumbotron-content {
        padding:6.8965517241%
    }
  }

  .news-post {
    border: 1px solid #DDD;
    border-radius: .5rem;
    margin-bottom: 1.5rem
  }

  .news-post .news-small-thumbnail {
    border-radius: .5rem .5rem 0 0;
    height: 18.125rem;
    object-fit: cover;
    width: 100%
  }

  @media only screen and (min-width: 48em) {
    .news-post {
        margin-bottom:0
    }
  }

  .news-content {
    border-top: 1px solid #DDD;
    padding: 1.5rem 5.1724137931% 1.5rem
  }

  .news-content .date {
    font-size: px(14);
    font-size: .875rem;
    line-height: 1.7142857143;
    display: block;
    margin-bottom: .5rem
  }

  .news-content h3 a,.news-content h3 a:visited {
    color: #3C4A3E
  }

  .news-content h3 a:hover,.news-content h3 a:active,.news-content h3 a:visited:hover,.news-content h3 a:visited:active {
    color: #3AAC59
  }

  @media only screen and (min-width: 28.75em) {
    .news-content {
        padding:6.8965517241%
    }
  }

  .news-content-padding {
    padding: 1.5rem 3.125%
  }

  .see-more {
    margin-top: 1.5rem;
    text-align: center
  }

  @media only screen and (min-width: 28.75em) {
    .see-more {
        margin-top:2.25rem
    }
  }

  .d-none {
    display: none
  }

  .notice {
    text-align: center;
    color: #727272
  }

  .ribbon {
    position: fixed;
    right: 0;
    top: 0;
    background-color: #2f3640;
    color: #8e9aa9;
    padding: 15px;
    width: 300px;
    text-align: center;
    transform: rotate(45deg) translate3d(100px, 0px, 0);
    font-family: "Inconsolata";
    font-weight: bold;
    font-size: 20px;
    text-decoration: none;
    outline: 10px solid #8c7ae6
  }

  .section-calculations {
    display: flex;
    flex-direction: row;
    padding-top: 1rem;
    padding-bottom: 1rem;
    margin-bottom: 2rem
  }

  @media (max-width: 768px) {
    .section-calculations {
        flex-direction:column;
        padding-bottom: 0rem;
        margin-bottom: 1rem
    }
  }

  .input {
    width: 33%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    background-color: #effdf0;
    font-family: "Poppins", sans-serif
  }

  @media (max-width: 768px) {
    .input {
        width:50%
    }
  }

  .slide-spacing {
    padding-top: 1rem;
    padding-bottom: 1rem
  }

  .slide-label {
    padding-bottom: 4rem
  }

  .calculation-box {
    align-self: flex-start;
    flex: 1;
    padding: 3rem;
    margin: 0rem 1rem 0rem
  }

  @media (max-width: 768px) {
    .calculation-box {
        margin-bottom:0.5rem;
        padding: 1.5rem
    }
  }

  .input-container {
    flex: 2;
    padding: 3rem;
    margin: 0rem 1rem 0rem
  }

  @media (max-width: 768px) {
    .input-container {
        padding:1.5rem
    }
  }

  .steady-subcontainer {
    flex: 1;
    padding: 2rem
  }

  .flex-1 {
    flex: 1
  }

  .flex-2 {
    flex: 2
  }

  .steady-coin-value {
    font-size: 5rem;
    font-weight: 700
  }

  .slider-range {
    flex: 1;
    flex-direction: row;
    display: flex;
    justify-content: space-between;
    margin-top: 5px
  }

  .slider-number {
    text-align: end
  }

  .slider-short {
    width: 60%
  }

  @media (max-width: 768px) {
    .slider-short {
        width:100%
    }
  }

  .slider-short-2 {
    width: 85%
  }

  @media (max-width: 768px) {
    .slider-short-2 {
        width:100%
    }
  }

  .rangeable-tooltip::after {
    content: '%'
  }

  .no-percentage .rangeable-tooltip::after {
    content: ''
  }

  .input-style {
    background-color: #effdf0
  }

  .summary-section {
    display: flex;
    flex-direction: row
  }

  .summary-subsection {
    flex: 1;
    padding-right: 2rem;
    text-align: end
  }

  @media (max-width: 1128px) {
    .summary-subsection {
        font-size:2.5vw
    }
  }

  .summary-subsection-text {
    flex: 2;
    font-size: 24px;
    font-weight: 400;
    letter-spacing: 0px;
    margin-bottom: 1rem
  }

  @media (max-width: 1128px) {
    .summary-subsection-text {
        font-size:2.5vw
    }
  }

  .note-text {
    color: #bbbbbb;
    padding-top: 1rem
  }

  .coin-value {
    font-size: 75px;
    font-weight: 700;
    letter-spacing: 0px
  }

  @media (max-width: 1128px) {
    .coin-value {
        font-size:5vw
    }
  }

  .summary-header-value {
    padding-top: 2rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid #E5E5E5
  }

  .summary-results {
    padding-top: 2rem
  }

  .input:focus {
    outline: none;
    background-color: transparent
  }

  @media (max-width: 1128px) {
    .summary-description {
        font-size:2.5vw
    }
  }

  @media only screen and (min-width: 48em) {
    .blog-posts-grid {
        display:grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        gap: 1.5rem 1.5rem
    }
  }

  .post {
    flex-direction: column;
    border: 1px solid #DDD;
    border-radius: .5rem;
    margin-bottom: 1.5rem;
    padding: 1.5rem 5.1724137931% 1.5rem
  }

  .post .date {
    font-size: px(14);
    font-size: .875rem;
    line-height: 1.7142857143;
    display: block;
    margin-bottom: .5rem
  }

  @media only screen and (min-width: 28.75em) {
    .post {
        padding:6.8965517241%
    }
  }

  @media only screen and (min-width: 48em) {
    .post {
        margin-bottom:0
    }
  }

  .contact-links {
    list-style: none;
    margin: 0;
    padding-left: 0;
    border-top: 1px solid #DDD;
    margin-bottom: 2rem
  }

  .contact-links li {
    border-bottom: 1px solid #DDD;
    margin: 0
  }

  .contact-links li a,.contact-links li a:visited {
    display: block;
    padding: .75rem .5rem
  }

  .contact-links li a:hover,.contact-links li a:active,.contact-links li a:visited:hover,.contact-links li a:visited:active {
    background-color: #EFFDF0
  }

  .join-keybase {
    margin-bottom: 1rem
  }

  .mc_forms_x {
    margin-bottom: 1.25rem
  }

  ::placeholder {
    color: #DDD
  }

  h4 {
    margin-bottom: 0.25rem
  }

  #mc_embed_signup form {
    text-align: center;
    padding: 10px 0 10px 0;
    font-family: "Poppins", sans-serif
  }

  .mc-field-group {
    display: inline-block
  }

  #mc_embed_signup input.email {
    font-size: 15px;
    border: 1px solid #ABB0B2;
    -webkit-border-radius: .25rem;
    -moz-border-radius: .25rem;
    border-radius: .25rem;
    color: #343434;
    background-color: #fff;
    box-sizing: border-box;
    height: 32px;
    padding: 0px 0.4em;
    display: inline-block;
    margin: 0;
    width: 350px;
    vertical-align: top;
    font-family: "Poppins", sans-serif
  }

  #mc_embed_signup input:focus {
    border-color: #3aac59;
    outline: none
  }

  #mc_embed_signup label {
    display: block;
    font-size: 16px;
    padding-bottom: 10px;
    font-weight: bold;
    font-family: "Poppins", sans-serif
  }

  #mc_embed_signup .clear {
    display: inline-block
  }

  #mc_embed_signup .button,#mc_embed_signup .primary-button,#mc_embed_signup .outline-green-button,#mc_embed_signup .outline-white-button,#mc_embed_signup .full-width-button,#mc_embed_signup .full-width-outline-green-button,#mc_embed_signup .full-width-outline-white-button {
    font-size: 13px;
    border: none;
    -webkit-border-radius: .25rem;
    -moz-border-radius: .25rem;
    border-radius: .25rem;
    letter-spacing: .03em;
    color: #fff;
    background-color: #3aac59;
    box-sizing: border-box;
    height: 32px;
    line-height: 32px;
    padding: 0 18px;
    display: inline-block;
    margin: 0;
    transition: all 0.23s ease-in-out 0s;
    font-family: "Poppins", sans-serif
  }

  #mc_embed_signup .button:hover,#mc_embed_signup .primary-button:hover,#mc_embed_signup .outline-green-button:hover,#mc_embed_signup .outline-white-button:hover,#mc_embed_signup .full-width-button:hover,#mc_embed_signup .full-width-outline-green-button:hover,#mc_embed_signup .full-width-outline-white-button:hover {
    background-color: #777;
    cursor: pointer
  }

  #mc_embed_signup div#mce-responses {
    float: left;
    top: -1.4em;
    padding: 0em .5em 0em .5em;
    overflow: hidden;
    width: 90%;
    margin: 0 5%;
    clear: both
  }

  #mc_embed_signup div.response {
    margin: 1em 0;
    padding: 1em .5em .5em 0;
    font-weight: bold;
    float: left;
    top: -1.5em;
    z-index: 1;
    width: 80%
  }

  #mc_embed_signup #mce-error-response {
    display: none
  }

  #mc_embed_signup #mce-success-response {
    color: #3aac59;
    display: none
  }

  #mc_embed_signup label.error {
    display: block;
    float: none;
    width: auto;
    margin-left: 1.05em;
    text-align: left;
    padding: .5em 0
  }

  @media (max-width: 768px) {
    #mc_embed_signup input.email {
        width:100%;
        margin-bottom: 5px
    }

    #mc_embed_signup .clear {
        display: block;
        width: 100%
    }

    #mc_embed_signup .button,#mc_embed_signup .primary-button,#mc_embed_signup .outline-green-button,#mc_embed_signup .outline-white-button,#mc_embed_signup .full-width-button,#mc_embed_signup .full-width-outline-green-button,#mc_embed_signup .full-width-outline-white-button {
        width: 100%;
        margin: 0
    }
  }

  .article-header {
    border-bottom: .25rem solid #DDD;
    margin-bottom: 2.25rem;
    padding-bottom: 1.5rem
  }

  .article-header p {
    display: inline;
    margin: 0
  }

  .article-header .date {
    font-size: px(14.2222222222);
    font-size: .8888888889rem;
    line-height: 1.75
  }

  @media only screen and (min-width: 48em) {
    .article-header .date {
        font-size:px(16);
        font-size: 1rem;
        line-height: 1.75
    }
  }

  .article-content img {
    margin: 1.5rem 0
  }

  .article-content h2+h3,.article-content p+h1,.article-content p+h2,.article-content p+h3,.article-content p+h4 {
    margin-top: 2.25rem
  }

  .featured-profile {
    display: flex;
    flex-direction: column
  }

  @media only screen and (min-width: 48em) {
    .featured-profile {
        flex-direction:row
    }
  }

  .featured-profile-txt-container {
    background-color: #FFF
  }

  @media only screen and (min-width: 48em) {
    .featured-profile-txt-container {
        width:61.2040133779%
    }
  }

  .featured-profile-txt {
    padding: 1.5rem
  }

  .featured-profile-txt .profile-job-title {
    color: rgba(60,74,62,0.5);
    margin-bottom: 2.25rem
  }

  .featured-profile-txt h1+.profile-job-title {
    margin-top: -1rem
  }

  .featured-profile-txt .button,.featured-profile-txt .primary-button,.featured-profile-txt .outline-green-button,.featured-profile-txt .outline-white-button,.featured-profile-txt .full-width-button,.featured-profile-txt .full-width-outline-green-button,.featured-profile-txt .full-width-outline-white-button {
    margin-top: 1.5rem
  }

  @media only screen and (min-width: 67.5em) {
    .featured-profile-txt {
        padding:3.75rem
    }
  }

  @media only screen and (min-width: 81.125em) {
    .featured-profile-txt {
        padding:3.75rem 7.625rem 3.75rem 9.125rem
    }
  }

  .featured-profile-img {
    width: 100%
  }

  .featured-profile-img::after {
    clear: both;
    content: "";
    display: block;
    height: 0;
    visibility: hidden
  }

  .featured-profile-img img {
    float: left;
    width: 50%
  }

  @media only screen and (min-width: 48em) {
    .featured-profile-img {
        width:38.7959866221%
    }

    .featured-profile-img img {
        float: none;
        width: 100%
    }
  }

  .green-paper {
    padding-bottom: 3rem
  }

  .green-paper .btn {
    display: inline-block;
    padding: 1rem 3rem;
    background: #3AAC59;
    color: white;
    font-weight: bold;
    font-size: 16px;
    line-height: 21px;
    border-radius: 2px;
    margin-top: 7px;
    margin-bottom: 36px
  }

  .green-paper .book {
    background-image: url("/assets/book.svg");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: top 50px right 0;
    background-origin: content-box
  }

  .proof-of-space-competition-page {
    width: 100%;
    background: #0A1B2C
  }

  .proof-of-space-competition-page .header {
    width: 100%;
    position: relative;
    padding: 64px
  }

  .proof-of-space-competition-page .header .green-dots {
    position: absolute;
    right: 0px;
    top: 0px;
    height: 300px
  }

  .proof-of-space-competition-page .header .chia-logo {
    height: 48px
  }

  .proof-of-space-competition-page .header .header-text {
    margin-top: 220px;
    margin-bottom: 0px;
    color: #ffffff;
    font-size: 48px;
    font-weight: 300
  }

  .proof-of-space-competition-page .sign-up-button {
    color: white;
    display: inline-block;
    padding: 8px 64px;
    margin-top: 48px;
    background-color: #3AAC59;
    font-size: 16px;
    text-align: center;
    white-space: nowrap;
    text-decoration: none !important;
    vertical-align: middle;
    border-radius: 28px;
    font-family: 'Monaco', 'Courier New', Courier, monospace;
    margin-bottom: 64px
  }

  .proof-of-space-competition-page .about-competition {
    display: flex;
    flex-direction: row
  }

  .proof-of-space-competition-page .about-competition .about-container {
    width: 656px;
    background-image: url("/img/zeros_and_ones.svg");
    background-repeat: repeat;
    background-position: right top;
    background-size: auto 148px
  }

  .proof-of-space-competition-page .about-competition .about-container .about-box {
    margin: 74px auto;
    min-height: 518px;
    max-width: 630px;
    background: #192A3A;
    border-radius: 40px;
    padding: 48px;
    word-wrap: break-word
  }

  .proof-of-space-competition-page .about-competition .about-container .about-box h1 {
    color: #3AAC59;
    font-size: 40px;
    margin-bottom: 32px;
    font-weight: 300
  }

  .proof-of-space-competition-page .about-competition .about-container .about-box p {
    color: white;
    line-height: 2em
  }

  .proof-of-space-competition-page .about-competition .background-left {
    background-image: url("/img/zeros_and_ones.svg");
    background-repeat: repeat;
    background-position: right top;
    flex: 1 1 auto;
    background-size: auto 148px
  }

  .proof-of-space-competition-page .about-competition .light-zeros-and-ones-background {
    background-image: url("/img/zeros_and_ones.svg");
    background-repeat: repeat;
    background-position: left top;
    width: 328px;
    background-size: auto 148px
  }

  .proof-of-space-competition-page .about-competition .light-zeros-and-ones-background .light-zeros-and-ones-image {
    height: 196px;
    margin-top: 235px;
    margin-left: 13px;
    background: #0A1B2C
  }

  .proof-of-space-competition-page .about-competition .background-right {
    background-image: url("/img/zeros_and_ones.svg");
    background-repeat: repeat;
    background-position: left top;
    flex: 1 1 auto;
    background-size: auto 148px
  }

  .proof-of-space-competition-page .competition-footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 64px
  }

  .proof-of-space-competition-page .competition-footer h1 {
    margin-top: 64px;
    margin-bottom: 64px;
    color: #ffffff;
    font-size: 48px;
    font-weight: 300
  }

  @media (max-width: 992px) {
    .proof-of-space-competition-page .about-competition .background-left,.proof-of-space-competition-page .about-competition .light-zeros-and-ones-background,.proof-of-space-competition-page .about-competition .background-right {
        display:none
    }

    .proof-of-space-competition-page .about-competition .about-container {
        width: 100%;
        padding-left: 32px;
        padding-right: 32px
    }

    .proof-of-space-competition-page .about-competition .about-container .about-box {
        min-height: initial
    }
  }

  @media (max-width: 768px) {
    .proof-of-space-competition-page .header {
        padding:48px
    }

    .proof-of-space-competition-page .header .green-dots {
        display: none
    }

    .proof-of-space-competition-page .header .chia-logo {
        height: 48px
    }

    .proof-of-space-competition-page .header .header-text {
        margin-top: 48px;
        color: #ffffff;
        font-size: 32px
    }

    .proof-of-space-competition-page .about-competition .about-container .about-box {
        padding: 32px
    }

    .proof-of-space-competition-page .about-competition .about-container .about-box h1 {
        font-size: 32px
    }

    .proof-of-space-competition-page .competition-footer h1 {
        font-size: 32px
    }
  }

  @media (max-width: 576px) {
    .proof-of-space-competition-page .about-competition .about-container .about-box h1 {
        font-size:20px
    }

    .proof-of-space-competition-page .about-competition .about-container .about-box p {
        line-height: 1.5em
    }
  }

  .proof-of-time-contest-page {
    width: 100%;
    background: #F2F2F2
  }

  .proof-of-time-contest-page .chia-logo {
    height: 48px
  }

  .proof-of-time-contest-page .header {
    padding: 64px;
    background: linear-gradient(90deg, #04194A 1.1%, #051D51 100%, #051D51 100%);
    box-shadow: 0px 6px 2px rgba(0,0,0,0.5),inset 0px 1px 3px rgba(0,0,0,0.5)
  }

  .proof-of-time-contest-page .header-container {
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto
  }

  .proof-of-time-contest-page .header-content-container {
    display: flex;
    flex-direction: row
  }

  .proof-of-time-contest-page .header-text-container {
    margin-left: 48px
  }

  .proof-of-time-contest-page .heading {
    font-weight: 300;
    font-size: 47px;
    line-height: 50px;
    color: #E6E5E5;
    margin-top: 32px;
    margin-bottom: 30px
  }

  .proof-of-time-contest-page .heading-subtext {
    font-weight: 300;
    font-size: 25px;
    line-height: 29px;
    color: #E6E5E5;
    margin-bottom: 56px
  }

  .proof-of-time-contest-page .header-info-text {
    display: inline-block;
    font-weight: 300;
    font-size: 22px;
    line-height: 36px;
    color: #E6E5E5;
    padding-top: 16px
  }

  .proof-of-time-contest-page .header-info-text.underline {
    border-bottom: 1px solid #E6E5E5;
    padding-top: 0px;
    padding-bottom: 16px
  }

  .proof-of-time-contest-page .header-info-icon {
    height: 36px;
    margin-right: 4px
  }

  .proof-of-time-contest-page .join-now-button-anchor {
    display: block;
    margin: 64px auto
  }

  .proof-of-time-contest-page .join-now-button {
    color: #FAFAFA;
    padding: 18px 82px;
    background-color: #48A7A9;
    font-family: 'Avenir Next';
    font-size: 22px;
    line-height: 31px;
    text-decoration: none !important;
    border: none;
    cursor: pointer
  }

  .proof-of-time-contest-page .mobile-vision {
    display: none;
    margin: 32px auto 64px auto;
    padding: 0px 16px;
    width: 100%;
    max-width: 475px
  }

  .proof-of-time-contest-page .body-section {
    margin: 64px;
    padding: 64px;
    background: #FFFCFC;
    box-shadow: 0px 1px 43px #D8D8D8
  }

  .proof-of-time-contest-page .body-section h3 {
    font-weight: 300;
    font-size: 40px;
    line-height: 47px;
    color: #052056;
    margin-bottom: 64px
  }

  .proof-of-time-contest-page .body-section p {
    font-weight: 300;
    font-size: 22px;
    line-height: 40px;
    color: #000000;
    margin-bottom: 64px
  }

  .proof-of-time-contest-page .body-section .less-space-after {
    margin-bottom: 32px
  }

  .proof-of-time-contest-page .body-section a {
    color: #48A7A9;
    cursor: pointer
  }

  .proof-of-time-contest-page .body-section a:hover {
    text-decoration: none;
    color: #48A7A9;
    border-bottom: 2px solid #48A7A9
  }

  .proof-of-time-contest-page .body-section .section-line {
    width: 100%;
    height: 1px;
    background: #979797;
    margin-bottom: 64px
  }

  .proof-of-time-contest-page .body-section .prize-rules-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 64px
  }

  .proof-of-time-contest-page .body-section .prize-rules-container .rules-container {
    margin-left: 64px
  }

  .proof-of-time-contest-page .body-section .prize-rules-container .caption {
    color: #6D7278
  }

  .proof-of-time-contest-page .body-section .prize-rules-container p {
    margin-bottom: 24px
  }

  .proof-of-time-contest-page .body-section .link-paragraph {
    margin-bottom: 32px;
    font-weight: 800
  }

  .proof-of-time-contest-page .footer {
    width: 100%;
    padding: 256px 32px;
    background-image: url("/assets/time_footer.png");
    background-size: cover;
    text-align: center
  }

  .proof-of-time-contest-page .footer h3 {
    font-size: 40px;
    line-height: 47px;
    font-weight: 300;
    color: #FFFFFF;
    text-shadow: 0px 0px 20px #000000;
    margin-bottom: 48px
  }

  .proof-of-time-contest-page .footer .sign-up-button {
    color: #FAFAFA;
    padding: 18px 82px;
    font-family: 'Avenir Next';
    font-size: 22px;
    line-height: 31px;
    text-decoration: none !important;
    border: none;
    cursor: pointer;
    background: #401FB4;
    box-shadow: 3px 4px 27px rgba(0,0,0,0.0943727)
  }

  @media (max-width: 992px) {
    .proof-of-time-contest-page .header-text-container {
        margin-left:0px
    }

    .proof-of-time-contest-page .body-section {
        margin: 8px 0px 0px 0px;
        box-shadow: none
    }

    .proof-of-time-contest-page .body-section h3 {
        text-align: center
    }

    .proof-of-time-contest-page .body-section .prize-rules-container {
        flex-direction: column;
        align-items: center
    }

    .proof-of-time-contest-page .body-section .prize-rules-container>img {
        margin-bottom: 64px
    }

    .proof-of-time-contest-page .body-section .prize-rules-container .rules-container {
        margin-left: 0px
    }

    .proof-of-time-contest-page .desktop-vision {
        display: none
    }

    .proof-of-time-contest-page .mobile-vision {
        display: block
    }

    .proof-of-time-contest-page .footer {
        padding: 128px 16px
    }
  }

  @media (max-width: 576px) {
    .proof-of-time-contest-page .header {
        padding:24px
    }

    .proof-of-time-contest-page .heading {
        margin-top: 48px;
        margin-bottom: 0px;
        padding-bottom: 32px;
        font-size: 28px;
        line-height: 47px;
        border-bottom: 1px solid #D8D8D8
    }

    .proof-of-time-contest-page .heading-subtext {
        display: none
    }

    .proof-of-time-contest-page .header-info-text {
        padding-top: 0px;
        font-size: 16px;
        line-height: 20px
    }

    .proof-of-time-contest-page .header-info-text.underline {
        border-bottom: none;
        padding-bottom: 0px
    }

    .proof-of-time-contest-page .header-info-texts-container {
        margin-top: 32px
    }

    .proof-of-time-contest-page .header-info-icon {
        height: 27px
    }

    .proof-of-time-contest-page .join-now-button-anchor {
        display: block;
        margin: 48px auto;
        text-align: center
    }

    .proof-of-time-contest-page .join-now-button {
        padding: 12px 48px;
        font-weight: 800;
        font-size: 16px;
        line-height: 31px
    }

    .proof-of-time-contest-page .body-section {
        padding: 16px 16px 40px 16px
    }

    .proof-of-time-contest-page .body-section .section-line {
        margin-bottom: 48px
    }

    .proof-of-time-contest-page .body-section h3 {
        font-size: 28px;
        line-height: 40px;
        margin-bottom: 48px
    }

    .proof-of-time-contest-page .body-section p {
        font-size: 16px;
        line-height: 26px;
        font-weight: 400;
        margin-bottom: 48px
    }

    .proof-of-time-contest-page .body-section .less-space-after {
        margin-bottom: 32px
    }

    .proof-of-time-contest-page .body-section .prize-rules-container {
        margin-bottom: 40px
    }

    .proof-of-time-contest-page .body-section .prize-rules-container>img {
        margin-bottom: 48px
    }

    .proof-of-time-contest-page .body-section .prize-rules-container p {
        margin-bottom: 8px
    }

    .proof-of-time-contest-page .body-section .link-paragraph {
        margin-bottom: 8px
    }

    .proof-of-time-contest-page .footer h3 {
        font-size: 28px;
        line-height: 33px
    }

    .proof-of-time-contest-page .footer .sign-up-button {
        font-weight: 800;
        font-size: 16px;
        line-height: 31px;
        padding: 12px 48px
    }
  }

  .basic h2 {
    font-weight: bold;
    font-size: 32px
  }

  .basic h3 {
    font-size: 24px;
    color: #5A6D6E
  }

  .basic code {
    font-family: monospace;
    background: #ffeff0;
    word-wrap: break-word;
    box-decoration-break: clone;
    padding: .1rem .3rem .2rem;
    border-radius: .2rem
  }

  .green-paper {
    padding-bottom: 3rem
  }

  .green-paper .btn {
    display: inline-block;
    padding: 1rem 3rem;
    background: #3AAC59;
    color: white;
    font-weight: bold;
    font-size: 16px;
    line-height: 21px;
    border-radius: 2px;
    margin-top: 7px;
    margin-bottom: 36px
  }

  .green-paper .book {
    background-image: url("/assets/book.svg");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: top 50px right 0;
    background-origin: content-box
  }

  .container {
    position: relative;
    overflow: hidden;
    width: 100%;
    padding-top: 56.25%;
    height: 835px
  }

  .responsive-iframe {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%
  }

  .bold em {
    font-weight: bold
  }

  .section {
    font-weight: 700
  }

  .section {
    font-weight: 700
  }

  .indent {
    text-indent: 5rem
  }

  .modal {
    background: white;
    padding: 2.5rem 5rem;
    max-width: 75rem
  }

  @media only screen and (min-width: 23.4375em) {
    .modal {
        padding:1.25rem
    }
  }

  @media only screen and (min-width: 48em) {
    .modal {
        padding:2.5rem 5rem
    }
  }

  .containerDialogIsOpen {
    backdrop-filter: blur(1px);
    -webkit-filter: blur(1px) grayscale(50%);
    z-index: 10
  }

  .modalIsOpen {
    transform: scale(1);
    opacity: 1;
    pointer-events: auto
  }

  .grants-container,.modal {
    transition: all 0.4s ease
  }

  .backdrop {
    height: 100vh;
    width: 100vw;
    backdrop-filter: blur(1px);
    background: rgba(0,0,0,0.5);
    z-index: 3;
    position: fixed;
    top: 0;
    left: 0;
    align-items: center;
    justify-content: center
  }

  .d-flex {
    display: flex
  }

  .grant-winner-container {
    display: flex;
    flex-direction: column
  }

  @media only screen and (min-width: 23.4375em) {
    .grant-winner-container {
        padding:1.25rem
    }
  }

  @media only screen and (min-width: 48em) {
    .grant-winner-container {
        padding:3.125rem 5rem
    }
  }

  .grant-winner-box {
    background: #FFFFFF;
    border: .125rem solid #ddd;
    box-sizing: border-box;
    border-radius: .1875rem
  }

  .grant-winner-icon {
    padding-right: 1.5rem;
    width: 6.25rem;
    height: 6.25rem
  }

  .grant-winner-description {
    display: flex;
    flex-direction: column
  }

  .grant-winner-name {
    padding-bottom: .5rem
  }

  .modal-description {
    padding-right: 1.5rem
  }

  @media only screen and (min-width: 23.4375em) {
    .modal-description {
        width:100%
    }
  }

  @media only screen and (min-width: 48em) {
    .modal-description {
        width:60%
    }
  }

  @media only screen and (min-width: 23.4375em) {
    .modal-content {
        flex-direction:column
    }
  }

  @media only screen and (min-width: 48em) {
    .modal-content {
        flex-direction:row;
        justify-content: space-between
    }
  }

  @media only screen and (min-width: 23.4375em) {
    .modal-image {
        margin:auto;
        width: 12.5rem
    }
  }

  @media only screen and (min-width: 48em) {
    .modal-image {
        width:21.875rem
    }
  }

  .apply-button {
    margin-top: .9375rem
  }

  .link-icon {
    width: 1rem;
    display: inline-block;
    vertical-align: middle
  }

  .modal-link {
    display: inline-block
  }

  .modal-image-container {
    text-align: center;
    padding-top: 2rem
  }

  .team-page-members {
    max-width: 67.125rem;
    display: block;
    margin-left: auto;
    margin-right: auto;
    display: grid;
    gap: 1.5rem 1.5rem;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr
  }

  @media only screen and (min-width: 48em) {
    .team-page-members {
        grid-template-columns:1fr 1fr 1fr 1fr 1fr
    }
  }

  .team-member img {
    border-radius: .5rem;
    margin-bottom: .5rem
  }

  .team-member span {
    display: block
  }

  .team-member .team-name {
    font-size: px(16);
    font-size: 1rem;
    line-height: 1.5;
    font-weight: 700;
    margin-bottom: .25rem
  }

  .team-member .team-title {
    font-size: px(14);
    font-size: .875rem;
    line-height: 1.5;
    color: rgba(60,74,62,0.5)
  }

  .team-stat-items {
    margin-bottom: 3.4375rem;
    max-width: 67.125rem;
    display: block;
    margin-left: auto;
    margin-right: auto;
    display: grid;
    gap: 1.5rem 1.5rem;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr
  }

  @media only screen and (min-width: 48em) {
    .team-stat-items {
        grid-template-columns:1fr 1fr 1fr
    }
  }

  .team-stat-item {
    border-radius: .5rem;
    margin-bottom: .125rem;
    padding: 1.25rem
  }

  .team-stat-item .team-stat-content {
    font-size: px(42);
    font-size: 2.625rem;
    line-height: .5714285714;
    font-weight: 700;
    margin-bottom: .25rem;
    margin-left: .5rem
  }

  .team-stat-item .team-stat-title {
    font-size: px(16);
    font-size: 1rem;
    line-height: 1.5;
    font-weight: 500;
    margin-bottom: .25rem;
    margin-top: .125rem;
    margin-left: .5rem
  }

  .ip-assets {
    max-width: 67.125rem;
    display: block;
    margin-left: auto;
    margin-right: auto;
    display: grid;
    gap: 1.5rem 1.5rem;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    padding: 50px;
    border-radius: .5rem;
    max-width: 95%;
    margin: 25px
  }

  @media only screen and (min-width: 48em) {
    .ip-assets {
        grid-template-columns:1fr 1fr 1fr 1fr 1fr
    }
  }

  .ip-assets-item {
    margin: auto;
    text-align: center
  }

  .ip-assets-item img {
    max-height: 70%;
    max-width: 70%;
    margin: auto
  }

  .ip-assets-item span {
    display: block
  }

  .site-footer {
    background-color: #3AAC59;
    background-image: url(/img/bg/tiling-abstract-shapes.png);
    background-position: -21.375rem 0;
    background-repeat: no-repeat;
    color: #FFF;
    padding: 2.25rem 3.125%;
  }

  .site-footer a,.site-footer a:visited {
    color: #FFF
  }

  .site-footer a:hover,.site-footer a:active,.site-footer a:visited:hover,.site-footer a:visited:active {
    color: rgba(255,255,255,0.4)
  }

  @media only screen and (min-width: 28.75em) {
    .site-footer {
        background-position:-16.0625rem 0;
        padding: 3.75rem 3.125%
    }
  }

  @media only screen and (min-width: 56.25em) {
    .site-footer {
        background-position:-10.6875rem 0
    }
  }

  @media only screen and (min-width: 75em) {
    .site-footer {
        background-position:0 0
    }
  }

  @media only screen and (min-width: 28.75em) {
    .footer-content-container {
        margin-left:6.25rem
    }
  }

  @media only screen and (min-width: 48em) {
    .footer-content-container {
        margin-left:15%
    }
  }

  @media only screen and (min-width: 56.25em) {
    .footer-content-container {
        margin-left:20%;
        margin-right: 8.4722%
    }
  }

  @media only screen and (min-width: 75em) {
    .footer-content-container {
        margin-left:33.89%
    }
  }

  .footer-logo {
    margin-bottom: 2.25rem
  }

  .footer-company-links {
    display: grid;
    gap: 1.5rem 1.5rem;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr
  }

  @media only screen and (min-width: 36em) {
    .footer-company-links {
        grid-template-columns:1fr 1fr 1fr
    }
  }

  .footer-col ul {
    list-style: none;
    margin: 0;
    padding-left: 0;
    font-size: px(14.2222222222);
    font-size: .8888888889rem;
    line-height: 1.4765625
  }

  @media only screen and (min-width: 48em) {
    .footer-col ul {
        font-size:px(16);
        font-size: 1rem;
        line-height: 1.3125
    }
  }

  .footer-col li {
    margin-bottom: .5rem
  }

  .social-icon {
    max-width: 24px;
    margin-right: 0.5rem
  }

  .main-header {
    max-width: 90rem;
    display: block;
    margin-left: auto;
    margin-right: auto;
    background-color: #FFF;
    padding: 1rem 0 0
  }

  @media only screen and (min-width: 62em) {
    .main-header {
        padding-bottom:1rem
    }
  }

  .main-menu {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between
  }

  @media only screen and (min-width: 62em) {
    .main-menu {
        flex-direction:row
    }
  }

  .site-branding {
    margin-bottom: 1rem;
    padding-left: 3.125%;
    width: 100%
  }

  @media only screen and (min-width: 62em) {
    .site-branding {
        margin:0 0 0 1.5rem;
        padding: 0;
        width: 6.25rem
    }
  }

  .site-logo {
    width: 6.25rem
  }

  .main-menu-links {
    font-size: px(14.2222222222);
    font-size: .8888888889rem;
    line-height: 1.4765625;
    list-style: none;
    margin: 0;
    padding-left: 0;
    background-color: #3C4A3E;
    display: none;
    width: 100%
  }

  @media only screen and (min-width: 48em) {
    .main-menu-links {
        font-size:px(16);
        font-size: 1rem;
        line-height: 1.3125
    }
  }

  @media only screen and (min-width: 62em) {
    .main-menu-links {
        background-color:transparent;
        display: block !important;
        margin-right: 1.5rem;
        width: auto
    }
  }

  .main-menu-links li {
    margin-bottom: 0
  }

  @media only screen and (min-width: 62em) {
    .main-menu-links li {
        display:inline-block;
        margin-left: 1.5rem
    }
  }

  .main-menu-links li a {
    color: #FFF;
    display: block;
    padding: 1rem 3.125%
  }

  .main-menu-links li a:visited {
    color: #FFF
  }

  .main-menu-links li a:hover,.main-menu-links li a:active {
    background-color: rgba(0,0,0,0.25);
    color: #3AAC59
  }

  @media only screen and (min-width: 62em) {
    .main-menu-links li a {
        color:#3C4A3E;
        padding: .75rem 0
    }

    .main-menu-links li a:visited {
        color: #3C4A3E
    }

    .main-menu-links li a:hover,.main-menu-links li a:active {
        background-color: transparent;
        color: #3AAC59
    }
  }

  .main-menu-links li.main-menu-button a,.main-menu-links li.main-menu-button a:visited {
    background-color: #3AAC59;
    color: #FFF
  }

  .main-menu-links li.main-menu-button a:hover,.main-menu-links li.main-menu-button a:active,.main-menu-links li.main-menu-button a:visited:hover,.main-menu-links li.main-menu-button a:visited:active {
    background-color: #4cc36c;
    color: #FFF
  }

  @media only screen and (min-width: 62em) {
    .main-menu-links li.main-menu-button a,.main-menu-links li.main-menu-button a:visited {
        border-radius:.25rem;
        color: #FFF;
        padding-left: 3rem;
        padding-right: 3rem
    }
  }

  .menu-icon {
    display: grid;
    height: 1.875rem;
    place-items: center;
    position: absolute;
    right: 3.125%;
    top: .25rem;
    width: 1.875rem
  }

  @media only screen and (min-width: 62em) {
    .menu-icon {
        display:none
    }
  }

  .menu-icon span {
    background-color: #3C4A3E;
    border-radius: .125rem;
    display: block;
    height: .1875rem;
    transition: all 0.25s ease-in-out 0s;
    width: 1.875rem
  }

  .menu-icon span.line-1 {
    justify-self: start;
    width: 84%
  }

  .menu-icon span.line-2 {
    justify-self: start;
    width: 60%
  }

  .menu-icon:hover span {
    background-color: #3AAC59
  }

  .menu-icon:hover span:nth-child(1) {
    width: 40%
  }

  .menu-icon:hover span:nth-child(2) {
    width: 80%
  }

  .menu-icon.close span {
    background-color: #3AAC59
  }

  .menu-icon.close span:nth-child(1) {
    width: 40%
  }

  .menu-icon.close span:nth-child(2) {
    width: 80%
  }

  .video {
    position: relative;
    text-align: center;
    height: 100%
  }

  .video video {
    width: 100%
  }

  .video .modal.show {
    background: rgba(0,0,0,0.7)
  }

  .video .video-preview {
    display: block;
    cursor: pointer;
    height: 100%
  }

  .video .video-preview img {
    position: absolute;
    height: 100%;
    width: 100%;
    object-fit: contain;
    left: 0;
    right: 0;
    top: 0;
    margin: 0 auto
  }

  .video .video-preview .play-pause {
    transition: opacity 0.2s;
    position: absolute;
    top: calc(50% - 35px);
    left: calc(50% - 35px);
    opacity: 50%;
    padding-left: 25px;
    padding-top: 25px;
    z-index: 1;
    width: 70px;
    height: 70px;
    background-color: rgba(255,255,255,0.9);
    -moz-box-shadow: 0 0 5px 0 rgba(0,0,0,0.75);
    -webkit-box-shadow: 0 0 5px 0 rgba(0,0,0,0.75);
    box-shadow: 0 0 10px 0 rgba(0,0,0,0.25)
  }

  .video .video-preview .play-pause .icon {
    box-sizing: border-box;
    width: 20px;
    height: 20px;
    border-style: solid;
    border-width: 10px 0px 10px 20px;
    border-color: transparent transparent transparent #469D62
  }

  @media (max-width: 768px) {
    .video .video-preview img {
        position:static
    }
  }

  .email-box {
    background: #eee;
    padding: 3rem
  }

  .email-box h2 {
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 1rem
  }

  .email-box .email-form form {
    padding: 0 !important;
    margin-top: 1rem
  }

  .email-box .email-form .input-group {
    border-radius: 0;
    border: 2px solid #3AAC59
  }

  .email-box .email-form input {
    border: none !important;
    font-size: 20px;
    padding: 1.5rem 1rem
  }

  .email-box .email-form button {
    border: none;
    border-radius: 0;
    color: white;
    background-color: #3AAC59;
    font-size: 20px;
    font-weight: bold;
    width: 8rem
  }

  .chia-icon {
    display: inline-block;
    vertical-align: middle
  }

  .social-icon {
    margin-right: .5rem
  }

  .value-prop-icon {
    margin-bottom: 1rem
  }

  .ui-icon {
    margin-left: .25rem;
    top: -.0625rem
  }

  .ui-icon-left {
    margin-right: .25rem
  }

  .baseline-icon {
    top: auto;
    vertical-align: baseline
  }

  .button,.primary-button,.outline-green-button,.outline-white-button,.full-width-button,.full-width-outline-green-button,.full-width-outline-white-button {
    border-radius: .25rem;
    color: #FFF;
    display: inline-block;
    font-size: .8888888889rem;
    font-weight: 500;
    padding: .75rem 3rem;
    white-space: nowrap;
    width: auto
  }

  @media only screen and (min-width: 48em) {
    .button,.primary-button,.outline-green-button,.outline-white-button,.full-width-button,.full-width-outline-green-button,.full-width-outline-white-button {
        font-size:1rem
    }
  }

  .primary-button {
    background-color: #3AAC59;
    cursor: pointer
  }

  .primary-button:visited {
    color: #FFF
  }

  .primary-button:hover {
    background-color: #4cc36c;
    color: #FFF
  }

  .outline-green-button {
    background-color: transparent;
    border: 1px solid #3AAC59;
    color: #3AAC59
  }

  .outline-green-button:visited {
    color: #3AAC59
  }

  .outline-green-button:hover {
    background-color: #3AAC59;
    color: #FFF
  }

  .outline-white-button {
    background-color: transparent;
    border: 1px solid #FFF;
    color: #FFF
  }

  .outline-white-button:visited {
    color: #FFF
  }

  .outline-white-button:hover {
    background-color: #FFF;
    color: #3C4A3E
  }

  .full-width-button {
    background-color: #3AAC59;
    padding-left: 1rem;
    padding-right: 1rem;
    text-align: center;
    width: 100%
  }

  .full-width-button:visited {
    color: #FFF
  }

  .full-width-button:hover {
    background-color: #4cc36c;
    color: #FFF
  }

  .full-width-outline-green-button {
    background-color: transparent;
    border: 1px solid #3AAC59;
    color: #3AAC59;
    padding-left: 1rem;
    padding-right: 1rem;
    text-align: center;
    width: 100%
  }

  .full-width-outline-green-button:visited {
    color: #FFF
  }

  .full-width-outline-green-button:hover {
    background-color: #3AAC59;
    color: #FFF
  }

  .full-width-outline-white-button {
    background-color: transparent;
    border: 1px solid #FFF;
    color: #FFF;
    padding-left: 1rem;
    padding-right: 1rem;
    text-align: center;
    width: 100%
  }

  .full-width-outline-white-button:visited {
    color: #FFF
  }

  .full-width-outline-white-button:hover {
    background-color: #FFF;
    color: #3C4A3E
  }

  .button_h7b0,.emailInput_IFA3 {
    box-sizing: border-box;
    font-family: Poppins,sans-serif;
    height: 32px
  }
`;
