import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import OfferCard from "../offer-card/offer-card";
import {offerPropTypes} from "../../app-prop-types";

class OfferList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeOffer: this.props.offers[0],
    };

    this.handleOfferCardHover = this.handleOfferCardHover.bind(this);
  }

  handleOfferCardHover(offer) {
    this.setState((state) => {
      if (state.activeOffer.offerId !== offer.offerId) {
        return {activeOffer: offer};
      }

      return null;
    });
  }

  render() {
    const {offers} = this.props;

    return (
      offers.map((offer) => (
        <OfferCard
          key={offer.offerId}
          offer={offer}
          offerType={`main`}
          currentOffer={this.state.activeOffer}
          handleOfferCardHover={this.handleOfferCardHover}
        />
      ))
    );
  }
}

OfferList.propTypes = {
  offers: PropTypes.arrayOf(offerPropTypes).isRequired,
};

export default OfferList;
