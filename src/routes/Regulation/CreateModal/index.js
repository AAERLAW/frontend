import { connect } from "dva";
import { createForm } from "rc-form";
import { CreateModal } from "./CreateModal";
import { routerRedux } from "dva/router";

export const mapStateToProps = (state, ownProps) => {
  const { loading, mda } = state;
  const isLoading = loading.effects["mda/createRegulation"];
  const { createModal } = mda;
  return {
    createModal,
    isLoading,
  };
};

export const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    redirect(pathname) {
      dispatch(routerRedux.push({ pathname: `${pathname}` }));
    },
    createRegulation(data) {
      dispatch({ type: "mda/createRegulation", payload: data });
    },
    closeModal() {
      dispatch({ type: "mda/save", payload: { createModal: false } });
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(createForm()(CreateModal));
