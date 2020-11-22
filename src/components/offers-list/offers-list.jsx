import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import OfferCard from "../offer-card/offer-card";
import {setActiveOffer} from "../../store/action";
import {getActiveOffer} from "../../store/selectors";
import {offersPropTypes, offerOrNullPropTypes} from "../../app-prop-types";

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
    const {offers, offerType} = this.props;

    return (
      offers.map((offer) => (
        <OfferCard
          key={offer.offerId}
          offer={offer}
          offerType={offerType}
          onOfferCardMouseOver={() => this._handleOfferCardOver(offer)}
          onOfferCardMouseOut={this._handleOfferCardOut}
        />
      ))
    );
  }
}

OffersList.propTypes = {
  offers: offersPropTypes,
  offerType: PropTypes.string.isRequired,
  activeOffer: offerOrNullPropTypes,
  setActiveOfferAction: PropTypes.func.isRequired,
};

const mapStateToProps = ({PROCESS}) => ({
  activeOffer: getActiveOffer({PROCESS}),
  setActiveOfferAction: PROCESS.setActiveOfferAction,
});

const mapDispatchToProps = ((dispatch) => ({
  setActiveOfferAction(activeOffer) {
    dispatch(setActiveOffer(activeOffer));
  },
}));

export {OffersList};
export default connect(mapStateToProps, mapDispatchToProps)(OffersList);
