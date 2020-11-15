import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {setActiveOffer} from "../../store/action";
import OfferCard from "../offer-card/offer-card";
import {offerPropTypes, activeOfferPropTypes} from "../../app-prop-types";

class OffersList extends PureComponent {
  constructor(props) {
    super(props);

    this._handleOfferCardOver = this._handleOfferCardOver.bind(this);
    this._handleOfferCardOut = this._handleOfferCardOut.bind(this);
  }

  componentWillUnmount() {
    const {setActiveOfferAction} = this.props;
    setActiveOfferAction(null);
  }

  _handleOfferCardOver(hoveredOffer) {
    const {setActiveOfferAction} = this.props;
    setActiveOfferAction(hoveredOffer);
  }

  _handleOfferCardOut() {
    const {setActiveOfferAction} = this.props;
    setActiveOfferAction(null);
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
  setActiveOfferAction: PropTypes.func.isRequired,
};

const mapStateToProps = ({PROCESS}) => ({
  activeOffer: PROCESS.activeOffer,
  setActiveOfferAction: PROCESS.setActiveOfferAction,
});

const mapDispatchToProps = ((dispatch) => ({
  setActiveOfferAction(activeOffer) {
    dispatch(setActiveOffer(activeOffer));
  },
}));

export {OffersList};
export default connect(mapStateToProps, mapDispatchToProps)(OffersList);
