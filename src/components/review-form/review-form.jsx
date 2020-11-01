import React, {PureComponent} from "react";

class ReviewForm extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      rating: ``,
      review: ``,
    };

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleFormSubmit(evt) {
    evt.preventDefault();
  }

  handleInputChange(evt) {
    const {name, value} = evt.target;

    this.setState({[name]: value});
  }

  render() {
    const ratingMark = [`5`, `4`, `3`, `2`, `1`];
    const ratingTtitle = [`perfect`, `good`, `not bad`, `badly`, `terribly`];

    return (
      <form className="reviews__form form" action="#" method="post" onSubmit={this.handleFormSubmit}>
        <label className="reviews__label form__label" htmlFor="review">Your review</label>
        <div className="reviews__rating-form form__rating">
          {ratingMark.map((item, i) => (
            <React.Fragment key={item}>
              <input className="form__rating-input visually-hidden" name="rating" defaultValue={item} id={`${item}-stars`} type="radio"
                onChange={this.handleInputChange}
              />
              <label htmlFor={`${item}-stars`} className="reviews__rating-label form__rating-label" title={ratingTtitle[i]}>
                <svg className="form__star-image" width={37} height={33}>
                  <use xlinkHref="#icon-star"/>
                </svg>
              </label>
            </React.Fragment>
          ))}
        </div>
        <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" />
        <div className="reviews__button-wrapper">
          <p className="reviews__help">
            To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
          </p>
          <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
        </div>
      </form>
    );
  }
}

export default ReviewForm;
