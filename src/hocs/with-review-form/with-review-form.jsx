import React, {PureComponent} from "react";

const withReviewForm = (Component) => {
  class ReviewForm extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        rating: ``,
        review: ``,
      };

      this._handleFormSubmit = this._handleFormSubmit.bind(this);
      this._handleInputChange = this._handleInputChange.bind(this);
    }

    _handleFormSubmit(evt) {
      evt.preventDefault();
    }

    _handleInputChange(evt) {
      const {name, value} = evt.target;
      this.setState({[name]: value});
    }

    render() {
      return (
        <Component
          {...this.props}
          onFormSubmit={this._handleFormSubmit}
          onInputChange={this._handleInputChange}
        />
      );
    }
  }

  return ReviewForm;
};

export default withReviewForm;
