import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import OfferCard from "../offer-card/offer-card";
import {setActiveOffer} from "../../store/reducers/app-process/actions";
import {getActiveOffer} from "../../store/reducers/app-process/selectors";
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
    const {offers, offerType, selectedOfferId} = this.props;

    return (
      offers.map((offer) => (
        <OfferCard
          key={offer.offerId}
          offerName={`offerId=${offer.offerId}`}
          additionalClass={
            offer.offerId === selectedOfferId ? `cities__place-card-focused` : ``
          }
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
  selectedOfferId: PropTypes.number,
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
