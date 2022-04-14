import { connect } from "dva";
import { Subscription } from "./Subscription";
import { routerRedux } from "dva/router";
import authentication from "../../models/authentication";

export const mapStateToProps = (state, ownProps) => {
  const { loading, authentication } = state;
  const { openPaymentModal, subscriptionDetail, subscription_plans } =
    authentication;
  return {
    openPaymentModal,
    subscriptionDetail,
    subscription_plans,
  };
};

export const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    redirect(pathname) {
      dispatch(routerRedux.push({ pathname: `${pathname}` }));
    },
    openModal(data) {
      dispatch({
        type: "authentication/save",
        payload: { openPaymentModal: true },
      });
    },
    getAllSubscriptionPlans(data) {
      dispatch({
        type: "authentication/getAllSubscriptionPlans",
        payload: data,
      });
    },

    initiatePayment(data) {
      dispatch({
        type: "authentication/initiatePayment",
        payload: data,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Subscription);
