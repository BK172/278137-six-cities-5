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

describe(`Should withToggle render correctly`, () => {
  it(`Should withToggle render correctly if isToggleActive true`, () => {
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

  it(`Should withToggle render correctly if isToggleActive false`, () => {
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
});
