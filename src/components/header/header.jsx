import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {getAuthStatus} from "../../store/reducers/user/selectors";
import {requireAuthorization} from "../../store/reducers/user/actions";
import {redirectToRoute} from "../../store/middlewares/actions";
import {AuthStatus, AppRoute} from "../../constants";

const Header = ({authStatus, avatar, email, onSignOutAction}) => {
  const isLoggedIn = authStatus === AuthStatus.AUTH;
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
                  to={isLoggedIn ? AppRoute.FAVORITES : AppRoute.LOGIN}
                >
                  <div
                    className="header__avatar-wrapper user__avatar-wrapper"
                    style={isLoggedIn ? avatarBgrImage : undefined}
                  >
                  </div>
                  <span className="header__user-name user__name">
                    {isLoggedIn ? email : `Sign in`}
                  </span>
                </Link>
              </li>
            </ul>
            {isLoggedIn && (
              <div className="header__signout">
                <button
                  className="header__signout-button"
                  type="button"
                  title="Sign out"
                  onClick={onSignOutAction}
                >
                  <span className="header__signout-button-icon"></span>
                </button>
              </div>
            )}
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
  onSignOutAction: PropTypes.func.isRequired,
};

const mapStateToProps = ({DATA, USER}) => ({
  authStatus: getAuthStatus({USER}),
  avatar: getAuthStatus({USER}) === AuthStatus.AUTH ? DATA.authInfo.avatar_url : ``,
  email: getAuthStatus({USER}) === AuthStatus.AUTH ? DATA.authInfo.email : ``,
});

const mapDispatchToProps = (dispatch) => ({
  onSignOutAction() {
    dispatch(requireAuthorization(AuthStatus.NO_AUTH));
    dispatch(redirectToRoute(AppRoute.MAIN));
  },
});

export {Header};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
