import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import Header from "../../header/header";
import {login as loginAction} from "../../../store/api-actions";
import {AppRoute} from "../../../constants";

class PageSignIn extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      email: ``,
      password: ``,
      isFormValid: false,
    };

    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleInputChange = this._handleInputChange.bind(this);
  }

  componentDidUpdate() {
    const {email, password} = this.state;

    if (email.trim().length && password.trim().length) {
      this.setState({isFormValid: true});
    } else {
      this.setState({isFormValid: false});
    }
  }

  _handleSubmit(evt) {
    evt.preventDefault();

    const {onSubmitAction} = this.props;
    const {email, password} = this.state;

    if (email.trim().length && password.trim().length) {
      onSubmitAction({email, password});
    }
  }

  _handleInputChange({target}) {
    const {name, value} = target;
    this.setState({[name]: value});
  }

  render() {
    return (
      <div className="page page--gray page--login">
        <Header />
        <main className="page__main page__main--login">
          <div className="page__login-container container">
            <section className="login">
              <h1 className="login__title">Sign in</h1>
              <form className="login__form form" action="#" method="post" onSubmit={this._handleSubmit}>
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden">E-mail</label>
                  <input
                    className="login__input form__input"
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={this._handleInputChange}
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
                    onChange={this._handleInputChange}
                    required
                  />
                </div>
                <button
                  className="login__submit form__submit button"
                  disabled={this.state.isFormValid ? `` : `disabled`}
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
  }
}

PageSignIn.propTypes = {
  onSubmitAction: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onSubmitAction(authData) {
    dispatch(loginAction(authData));
  },
});

export {PageSignIn};
export default connect(undefined, mapDispatchToProps)(PageSignIn);
