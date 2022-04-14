import { connect } from "dva";
import { createForm } from "rc-form";
import { Registration } from "./Registration";
import { routerRedux } from "dva/router";
import qs from "query-string";

export const mapStateToProps = (state, ownProps) => {
  const { loading } = state;
  const isLoading = loading.effects["authentication/register"];
  return {
    isLoading,
  };
};

export const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    redirect(pathname) {
      dispatch(routerRedux.push({ pathname: `${pathname}` }));
    },
    register(data) {
      dispatch({ type: "authentication/register", payload: data });
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(createForm()(Registration));
