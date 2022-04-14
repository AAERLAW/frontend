import { connect } from "dva";
import { createForm } from "rc-form";
import { CreateModal } from "./CreateModal";
import { routerRedux } from "dva/router";

export const mapStateToProps = (state, ownProps) => {
  const { loading, court } = state;
  const { createFormModal } = court;
  const isLoading = loading.effects["court/createForm"];
  return {
    createFormModal,
    isLoading,
  };
};

export const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    redirect(pathname) {
      dispatch(routerRedux.push({ pathname: `${pathname}` }));
    },
    createForm(data) {
      dispatch({ type: "court/createForms", payload: data });
    },
    closeModal() {
      dispatch({ type: "court/save", payload: { createFormModal: false } });
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(createForm()(CreateModal));
