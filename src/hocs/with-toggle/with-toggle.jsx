import React, {PureComponent} from "react";

const withToggle = (Component) => {
  class Toggle extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isToggleActive: false
      };

      this._handleToggle = this._handleToggle.bind(this);
    }

    _handleToggle() {
      this.setState(
          (state) => ({isToggleActive: !state.isToggleActive})
      );
    }

    render() {
      return (
        <Component
          {...this.props}
          isToggleActive={this.state.isToggleActive}
          onToggleChange={this._handleToggle}
        />
      );
    }
  }

  return Toggle;
};

export default withToggle;
