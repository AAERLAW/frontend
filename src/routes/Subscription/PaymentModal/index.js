import { connect } from "dva";
import { createForm } from "rc-form";
import { PaymentModal } from "./PaymentModal";
import { routerRedux } from "dva/router";

export const mapStateToProps = (state, ownProps) => {
  const { loading, authentication } = state;
  const {
    openPaymentModal,
    subscriptionPlan,
    subscriptionDetail,
    paymentDetail,
    profile,
  } = authentication;
  const isLoading = loading.effects["authentication/verifyPayment"];
  return {
    openPaymentModal,
    isLoading,
    subscriptionPlan,
    subscriptionDetail,
    paymentDetail,
    profile,
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
    closeModal() {
      dispatch({
        type: "authentication/save",
        payload: { openPaymentModal: false, subcriptionPlan: {} },
      });
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(createForm()(PaymentModal));
