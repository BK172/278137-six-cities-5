import React, {PureComponent, Fragment} from "react";

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
    const ratings = [{
      mark: 5, title: `perfect`
    }, {
      mark: 4, title: `good`
    }, {
      mark: 3, title: `not bad`
    }, {
      mark: 2, title: `badly`
    }, {
      mark: 1, title: `terribly`
    }];

    return (
      <form className="reviews__form form" action="#" method="post" onSubmit={this._handleFormSubmit}>
        <label className="reviews__label form__label" htmlFor="review">Your review</label>
        <div className="reviews__rating-form form__rating">
          {ratings.map(({mark, title}) => (
            <Fragment key={title}>
              <input
                className="form__rating-input visually-hidden"
                name="rating"
                defaultValue={mark}
                id={title}
                type="radio"
                onChange={this._handleInputChange}
              />
              <label htmlFor={title} className="reviews__rating-label form__rating-label" title={title}>
                <svg className="form__star-image" width={37} height={33}>
                  <use xlinkHref="#icon-star"/>
                </svg>
              </label>
            </Fragment>
          ))}
        </div>
        <textarea
          className="reviews__textarea form__textarea"
          id="review"
          name="review"
          placeholder="Tell how was your stay, what you like and what can be improved"
        />
        <div className="reviews__button-wrapper">
          <p className="reviews__help">
            To submit review please make sure to set
            <span className="reviews__star">rating</span>
            and describe your stay with at least
            <b className="reviews__text-amount">50 characters</b>.
          </p>
          <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
        </div>
      </form>
    );
  }
}

export default ReviewForm;
