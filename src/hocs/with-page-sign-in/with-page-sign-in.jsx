import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {login} from "../../store/api-actions";

const withPageSignIn = (Component) => {
  class PageSignIn extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        email: ``,
        password: ``,
        isFormValid: false,
      };

      this._handleFormSubmit = this._handleFormSubmit.bind(this);
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

    _handleFormSubmit(evt) {
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
        <Component
          {...this.props}
          email={this.state.email}
          password={this.state.password}
          isFormValid={this.state.isFormValid}
          onFormSubmit={this._handleFormSubmit}
          onInputChange={this._handleInputChange}
        />
      );
    }
  }

  PageSignIn.propTypes = {
    onSubmitAction: PropTypes.func.isRequired,
  };

  const mapDispatchToProps = (dispatch) => ({
    onSubmitAction(authData) {
      dispatch(login(authData));
    },
  });

  return connect(undefined, mapDispatchToProps)(PageSignIn);
};

export default withPageSignIn;
