import { connect } from "dva";
import { createForm } from "rc-form";
import { SocialLogin } from "./SocialLogin";
import { routerRedux } from "dva/router";
import qs from "query-string";

export const mapStateToProps = (state, ownProps) => {
  const { loading } = state;
  const isLoading = loading.effects["authentication/socialLogin"];
  const params = qs.parse(window.location.search);
  return {
    isLoading,
    params,
  };
};

export const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    redirect(pathname) {
      dispatch(routerRedux.push({ pathname: `${pathname}` }));
    },
    socialLogin(data) {
      dispatch({ type: "authentication/socialLogin", payload: data });
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(createForm()(SocialLogin));
