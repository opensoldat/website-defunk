import React from "react"
import { Link } from "gatsby"
import CommonIcon from "../common/CommonIcon"
import Data from "../../../content/footer.yaml"

const Footer = () => (
  <footer className="c-footer">
    <div className="c-footer__bg" />
    <div className="c-footer__inner">
      <div className="c-footer__columns o-wrapper">
        <div className="c-footer__col c-footer__col--logo">
          <a href="https://thd.vg/" className="c-footer__logo">
            <CommonIcon name="thd" />
          </a>
        </div>
        <div className="c-footer__col c-footer__col--logo-sec">
          <a
            href="https://store.steampowered.com/app/638490/Soldat/"
            className="c-footer__logo"
          >
            <CommonIcon name="steam" />
          </a>
        </div>

        <div className="c-footer__col c-footer__col--menu">
          <nav>
            <ul className="c-footer__list">
              {Data.links.map(({ title, path, internal }) => (
                <li className="c-footer__list-el">
                  {internal ? (
                    <Link to={path} className="c-footer__list-link">
                      {title}
                    </Link>
                  ) : (
                    <a href={path} className="c-footer__list-link">
                      {title}
                    </a>
                  )}
                </li>
              ))}
            </ul>
            <ul className="c-footer__list c-footer__list--grey">
              {Data.links_secondary.map(({ title, path, internal }) => (
                <li className="c-footer__list-el">
                  {internal ? (
                    <Link to={path} className="c-footer__list-link">
                      {title}
                    </Link>
                  ) : (
                    <a href={path} className="c-footer__list-link">
                      {title}
                    </a>
                  )}
                </li>
              ))}
            </ul>

            <ul className="c-footer__list c-footer__social-media">
              {Data.social_links.map(({ icon, url }) => (
                <li className="c-footer__social-media-el">
                  <a
                    href={url}
                    className="c-footer__social-media-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    title={icon}
                    aria-label={icon}
                  >
                    <CommonIcon fill="currentColor" name={icon} />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <p className="c-footer__text">
            Copyright &copy; {new Date().getFullYear()} Soldat Team. All rights
            reserved.
          </p>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
