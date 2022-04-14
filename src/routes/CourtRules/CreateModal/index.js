import { connect } from "dva";
import { createForm } from "rc-form";
import { CreateModal } from "./CreateModal";
import { routerRedux } from "dva/router";

export const mapStateToProps = (state, ownProps) => {
  const { loading, court } = state;
  const { createRuleModal, courtFormsList } = court;
  const isLoading = loading.effects["court/createRule"];
  const isCourtsLoading = loading.effects["court/getAllCourtForms"];
  return {
    createRuleModal,
    isLoading,
    courtFormsList,
    isCourtsLoading,
  };
};

export const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    redirect(pathname) {
      dispatch(routerRedux.push({ pathname: `${pathname}` }));
    },
    getAllCourtForms(data) {
      dispatch({ type: "court/getAllCourtForms", payload: data });
    },
    createRule(data) {
      dispatch({ type: "court/createRule", payload: data });
    },
    closeModal() {
      dispatch({ type: "court/save", payload: { createRuleModal: false } });
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(createForm()(CreateModal));
