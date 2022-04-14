import { connect } from "dva";
import { createForm } from "rc-form";
import { CreateModal } from "./CreateModal";
import { routerRedux } from "dva/router";

export const mapStateToProps = (state, ownProps) => {
  const { loading, mda } = state;
  const { createRegItemModal } = mda;
  const isLoading = loading.effects["mda/createRegulationItem"];
  return {
    createRegItemModal,
    isLoading,
  };
};

export const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    redirect(pathname) {
      dispatch(routerRedux.push({ pathname: `${pathname}` }));
    },
    createRegulationItem(data) {
      dispatch({ type: "mda/createRegulationItem", payload: data });
    },
    closeModal() {
      dispatch({ type: "mda/save", payload: { createRegItemModal: false } });
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(createForm()(CreateModal));
