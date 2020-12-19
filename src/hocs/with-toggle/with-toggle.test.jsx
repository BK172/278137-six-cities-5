import React, {Fragment} from "react";
import renderer from "react-test-renderer";
import PropTypes from "prop-types";
import withToggle from "./with-toggle";

const MockComponent = (props) => {
  const {children} = props;

  return (
    <div>
      {children}
    </div>
  );
};

MockComponent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

const MockComponentWrapped = withToggle(MockComponent);

describe(`withToggle component test`, () => {
  it(`Should render withToggle correctly if isToggleActive true`, () => {
    const tree = renderer.create(
        <MockComponentWrapped
          isToggleActive={true}
          onToggleChange={()=>{}}
        >
          <Fragment />
        </MockComponentWrapped>
    )
    .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`Should render withToggle correctly if isToggleActive false`, () => {
    const tree = renderer.create(
        <MockComponentWrapped
          isToggleActive={false}
          onToggleChange={()=>{}}
        >
          <Fragment />
        </MockComponentWrapped>
    )
    .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
