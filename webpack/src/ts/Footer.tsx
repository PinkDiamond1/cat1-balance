import React from "react";

export default function () {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="col-12-container">
        <div className="footer-content-container">
          <div className="footer-logo">
            <img src="/img/branding/chia-logo-white.svg" alt="Chia Network Logo" />
          </div>
          <div className="footer-company-links">
            <div className="footer-col">
              <h4>Approach</h4>
              <ul>
                <li>
                  <a href="https://www.chia.net/approach">White Paper</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Technology</h4>
              <ul>
                <li>
                  <a href="https://www.chia.net/greenpaper">Green Paper</a>
                </li>
                <li>
                  <a href="https://docs.chia.net/docs/03consensus/consensus_intro/" target="_blank">
                    Consensus 1.1
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Documentation</h4>
              <ul>
                <li>
                  <a href="https://docs.chia.net/" target="_blank">
                    Chia Docs
                  </a>
                </li>
                <li>
                  <a href="https://chialisp.com" target="_blank">
                    Chialisp
                  </a>
                </li>
                <li>
                  <a href="https://github.com/Chia-Network/chia-blockchain/wiki" target="_blank">
                    Chia Blockchain Wiki
                  </a>
                </li>
                <li>
                  <a href="https://www.chia.net/grants">Cultivation Grant Program</a>
                </li>
                <li>
                  <a href="https://github.com/Chia-Network/chia-blockchain/wiki/FAQ" target="_blank">
                    Chia Technical FAQ
                  </a>
                </li>
                <li>
                  <a href="https://www.chia.net/faq">Chia Network Inc. FAQ</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Company</h4>
              <ul>
                <li>
                  <a href="https://www.chia.net/about">About</a>
                </li>
                <li>
                  <a href="https://www.chia.net/blog">Blog</a>
                </li>
                <li>
                  <a href="https://www.chia.net/news">News</a>
                </li>
                <li>
                  <a href="https://www.chia.net/careers">Careers</a>
                </li>
                <li>
                  <a href="https://www.chia.net/contact">Contact</a>
                </li>
                <li>
                  <a href="https://www.chia.net/faq">FAQ</a>
                </li>
              </ul>
            </div>
            <div className="footer-col social-links">
              <ul>
                <li>
                  <img className="chia-icon social-icon" src="/img/social/github-white.svg" alt="Github" />
                  <a href="https://github.com/Chia-Network" target="_blank" rel="noreferrer noopener">
                    Github
                  </a>
                </li>
                <li>
                  <img className="chia-icon social-icon" src="/img/social/twitter-white.svg" alt="Twitter" />
                  <a href="https://twitter.com/chia_project" target="_blank" rel="noreferrer noopener">
                    Twitter
                  </a>
                </li>
                <li>
                  <img className="chia-icon social-icon" src="/img/social/keybase-white.svg" alt="Keybase" />
                  <a href="https://keybase.io/team/chia_network.public" target="_blank" rel="noreferrer noopener">
                    Keybase
                  </a>
                </li>
                <li>
                  <img className="chia-icon social-icon" src="/img/social/reddit-white.svg" alt="Reddit" />
                  <a href="https://www.reddit.com/r/chia/" target="_blank" rel="noreferrer noopener">
                    Reddit
                  </a>
                </li>
                <li>
                  <img className="chia-icon social-icon" src="/img/social/facebook-white.svg" alt="Facebook" />
                  <a href="https://www.facebook.com/ChiaProject" target="_blank" rel="noreferrer noopener">
                    Facebook
                  </a>
                </li>
                <li>
                  <img className="chia-icon social-icon" src="/img/social/instagram-white.svg" alt="Instagram" />
                  <a href="https://www.instagram.com/chia_project/" target="_blank" rel="noreferrer noopener">
                    Instagram
                  </a>
                </li>
                <li>
                  <img className="chia-icon social-icon" src="/img/social/linkedin-white.svg" alt="LinkedIn" />
                  <a href="https://www.linkedin.com/company/chia-network" target="_blank" target="_blank" rel="noreferrer noopener">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div style={{ paddingTop: "2.5rem" }}>
            <div>
              <small>
                © 2022 Chia Network Inc., Licensed under the{" "}
                <a href="https://github.com/Chia-Network/chialisp-web/blob/main/LICENSE" target="_blank">
                  Apache License, Version 2.0
                </a>{" "}
                | <a href="https://www.chia.net/terms">Terms</a>
              </small>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
