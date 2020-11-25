import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {getAuthStatus} from "../../store/selectors";
import {AuthStatus, AppRoute} from "../../constants";

const Header = ({authStatus, avatar, email}) => {
  const isAuthorized = authStatus === AuthStatus.AUTH;
  const avatarBgrImage = avatar ? {backgroundImage: `url(${avatar})`} : undefined;

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link" to={AppRoute.MAIN}>
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width={81} height={41} />
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <Link
                  className="header__nav-link header__nav-link--profile"
                  to={isAuthorized ? AppRoute.FAVORITES : AppRoute.LOGIN}
                >
                  <div
                    className="header__avatar-wrapper user__avatar-wrapper"
                    style={isAuthorized ? avatarBgrImage : undefined}
                  >
                  </div>
                  <span className="header__user-name user__name">
                    {isAuthorized ? email : `Sign in`}
                  </span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  authStatus: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

const mapStateToProps = ({DATA, USER}) => ({
  authStatus: getAuthStatus({USER}),
  avatar: getAuthStatus({USER}) === AuthStatus.AUTH ? DATA.authInfo.avatar_url : ``,
  email: getAuthStatus({USER}) === AuthStatus.AUTH ? DATA.authInfo.email : ``,
});

export {Header};
export default connect(mapStateToProps)(Header);
