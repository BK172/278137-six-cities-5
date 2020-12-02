import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import Header from "../../header/header";
import withPageSignIn from "../../../hocs/with-page-sign-in/with-page-sign-in";
import {AppRoute} from "../../../constants";

const PageSignIn = ({
  email,
  password,
  isFormValid,
  onFormSubmit,
  onInputChange,
}) => {
  return (
    <div className="page page--gray page--login">
      <Header />
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="#" method="post" onSubmit={onFormSubmit}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={onInputChange}
                  value={email}
                  required
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={onInputChange}
                  value={password}
                  required
                />
              </div>
              <button
                className="login__submit form__submit button"
                disabled={isFormValid ? `` : `disabled`}
                type="submit"
              >
                Sign in
              </button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to={AppRoute.MAIN}>
                <span>Amsterdam</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

PageSignIn.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  isFormValid: PropTypes.bool.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export {PageSignIn};
export default withPageSignIn(PageSignIn);
