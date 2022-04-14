import { connect } from "dva";
import { createForm } from "rc-form";
import { CreateCourt } from "./CreateCourt";
import { routerRedux } from "dva/router";

export const mapStateToProps = (state, ownProps) => {
  const { loading, court } = state;
  const { createCourtModal } = court;
  const isLoading = loading.effects["court/createCourt"];
  return {
    createCourtModal,
    isLoading,
  };
};

export const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    redirect(pathname) {
      dispatch(routerRedux.push({ pathname: `${pathname}` }));
    },
    createCourt(data) {
      dispatch({ type: "court/createCourt", payload: data });
    },
    closeModal() {
      dispatch({ type: "court/save", payload: { createCourtModal: false } });
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(createForm()(CreateCourt));
