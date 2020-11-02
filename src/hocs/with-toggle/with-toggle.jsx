import React, {PureComponent} from "react";

const withToggle = (Component) => {
  class Toggle extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        toggleFlag: false
      };

      this._handleToggle = this._handleToggle.bind(this);
    }

    _handleToggle() {
      this.setState(
          (state) => ({toggleFlag: !state.toggleFlag})
      );
    }

    render() {
      return (
        <Component
          {...this.props}
          toggleFlag={this.state.toggleFlag}
          onToggleChange={this._handleToggle}
        />
      );
    }
  }

  return Toggle;
};

export default withToggle;
