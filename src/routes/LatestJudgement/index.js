import { connect } from "dva";
import { LatestJudgement } from "./LatestJudgement";
import { routerRedux } from "dva/router";

export const mapStateToProps = (state, ownProps) => {
  const { loading } = state;
  return {};
};

export const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    redirect(pathname) {
      dispatch(routerRedux.push({ pathname: `${pathname}` }));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LatestJudgement);
