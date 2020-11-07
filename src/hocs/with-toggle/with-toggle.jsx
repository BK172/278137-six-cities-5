import React, {PureComponent} from "react";

const withToggle = (Component) => {
  class Toggle extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isActive: false
      };

      this._handleToggle = this._handleToggle.bind(this);
    }

    _handleToggle() {
      this.setState(
          (state) => ({isActive: !state.isActive})
      );
    }

    render() {
      return (
        <Component
          {...this.props}
          isActive={this.state.isActive}
          onToggleChange={this._handleToggle}
        />
      );
    }
  }

  return Toggle;
};

export default withToggle;
