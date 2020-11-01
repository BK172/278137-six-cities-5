import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {ActionCreator} from "../../store/action";
import {connect} from "react-redux";
import OfferCard from "../offer-card/offer-card";
import {offerPropTypes, activeOfferPropTypes} from "../../app-prop-types";

class OfferList extends PureComponent {
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

OfferList.propTypes = {
  offers: PropTypes.arrayOf(offerPropTypes).isRequired,
  activeOffer: activeOfferPropTypes,
  setActiveOffer: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  activeOffer: state.activeOffer,
  setActiveOffer: state.setActiveOffer,
});

const mapDispatchToProps = ((dispatch) => ({
  setActiveOffer(activeOffer) {
    dispatch(ActionCreator.setActiveOffer(activeOffer));
  },
}));

export {OfferList};
export default connect(mapStateToProps, mapDispatchToProps)(OfferList);
