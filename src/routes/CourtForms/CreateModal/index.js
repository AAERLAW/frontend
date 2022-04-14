import { connect } from "dva";
import { createForm } from "rc-form";
import { CreateModal } from "./CreateModal";
import { routerRedux } from "dva/router";

export const mapStateToProps = (state, ownProps) => {
  const { loading, court, auxillary } = state;
  const { createCourtFormModal } = court;
  const { stateList } = auxillary;
  const isLoading = loading.effects["court/createRegulationItem"];
  return {
    createCourtFormModal,
    isLoading,
    stateList,
  };
};

export const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    redirect(pathname) {
      dispatch(routerRedux.push({ pathname: `${pathname}` }));
    },
    createCourtForm(data) {
      dispatch({ type: "court/createCourtForm", payload: data });
    },
    getAllStates(data) {
      dispatch({ type: "auxillary/getAllStates", payload: data });
    },
    closeModal() {
      dispatch({
        type: "court/save",
        payload: { createCourtFormModal: false },
      });
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(createForm()(CreateModal));
