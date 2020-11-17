import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import OfferCard from "../offer-card/offer-card";
import {offerPropTypes, activeOfferPropTypes} from "../../app-prop-types";

class OffersList extends PureComponent {
  constructor(props) {
    super(props);

    this._handleOfferCardOver = this._handleOfferCardOver.bind(this);
    this._handleOfferCardOut = this._handleOfferCardOut.bind(this);
  }

  componentWillUnmount() {
    const {setActiveOffer} = this.props;
    setActiveOffer(null);
  }

  _handleOfferCardOver(hoveredOffer) {
    const {setActiveOffer} = this.props;
    setActiveOffer(hoveredOffer);
  }

  _handleOfferCardOut() {
    const {setActiveOffer} = this.props;
    setActiveOffer(null);
  }

  render() {
    const {offers} = this.props;

    return (
      offers.map((offer) => (
        <OfferCard
          key={offer.offerId}
          offer={offer}
          offerType={`main`}
          onOfferCardMouseOver={() => this._handleOfferCardOver(offer)}
          onOfferCardMouseOut={this._handleOfferCardOut}
        />
      ))
    );
  }
}

OffersList.propTypes = {
  offers: PropTypes.arrayOf(offerPropTypes).isRequired,
  activeOffer: activeOfferPropTypes,
  setActiveOffer: PropTypes.func.isRequired,
};

const mapStateToProps = ({PROCESS}) => ({
  activeOffer: PROCESS.activeOffer,
  setActiveOffer: PROCESS.setActiveOffer,
});

const mapDispatchToProps = ((dispatch) => ({
  setActiveOffer(activeOffer) {
    dispatch(ActionCreator.setActiveOffer(activeOffer));
  },
}));

export {OffersList};
export default connect(mapStateToProps, mapDispatchToProps)(OffersList);
