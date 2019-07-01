import React from "react";
import { connect } from "react-redux";
import HelloLabel from "../../components/labels/HelloLabel";

type Props = ReduxProps & DispatchProps;

const HelloContainer: React.FunctionComponent<Props> = props => {
  return <HelloLabel text={props.helloText} />;
};

const mapStateToProps = (state: RootState) => {
  return {
    helloText: state.common.text
  };
};

type ReduxProps = ReturnType<typeof mapStateToProps>;

const mapDispatchToProps = {};

type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HelloContainer);
