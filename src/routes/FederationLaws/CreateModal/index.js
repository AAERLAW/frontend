import { connect } from "dva";
import { createForm } from "rc-form";
import { CreateModal } from "./CreateModal";
import { routerRedux } from "dva/router";

export const mapStateToProps = (state, ownProps) => {
  const { loading, law } = state;
  const { createLawModal } = law;
  const isLoading = loading.effects["law/createLaw"];
  return {
    createLawModal,
    isLoading,
  };
};

export const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    redirect(pathname) {
      dispatch(routerRedux.push({ pathname: `${pathname}` }));
    },
    createLaw(data) {
      dispatch({ type: "law/createLaw", payload: data });
    },
    closeModal() {
      dispatch({ type: "law/save", payload: { createLawModal: false } });
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(createForm()(CreateModal));
