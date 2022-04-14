import { connect } from "dva";
import { createForm } from "rc-form";
import { PaymentVerification } from "./PaymentVerification";
import { routerRedux } from "dva/router";
import qs from "query-string";

export const mapStateToProps = (state, ownProps) => {
  const { trxref, reference } = qs.parse(window.location.search);
  const { loading } = state;
  return {
    trxref,
    reference,
    isLoading: loading.effects["authentication/verifyPayment"],
  };
};

export const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    redirect(pathname) {
      dispatch(routerRedux.push({ pathname: `${pathname}` }));
    },
    verifyPayment(data) {
      dispatch({ type: "authentication/verifyPayment", payload: data });
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(createForm()(PaymentVerification));
