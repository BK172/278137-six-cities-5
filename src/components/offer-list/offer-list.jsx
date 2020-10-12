import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import OfferCard from "../offer-card/offer-card";

export default class OfferList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeOffer: this.props.offers[0],
    };

    this.onOfferCardMouseOver = this.onOfferCardMouseOver.bind(this);
  }

  onOfferCardMouseOver(offer) {
    this.setState({activeOffer: offer});
  }

  render() {
    const {offers} = this.props;

    return (
      <div className="cities__places-list places__list tabs__content">
        {offers.map((offer) => (
          <OfferCard
            key={offer.offerId}
            offer={offer}
            onOfferCardMouseOver={this.onOfferCardMouseOver}
          />
        ))}
      </div>
    );
  }
};

OfferList.propTypes = {
  offers: PropTypes.array.isRequired,
};
