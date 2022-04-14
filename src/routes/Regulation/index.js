import { connect } from "dva";
import { MDAs } from "./Regulation";
import { routerRedux } from "dva/router";

export const mapStateToProps = (state, ownProps) => {
  const { loading, mda, authentication } = state;
  const { regulationList, regulationTotal, createModal } = mda;
  const { profile } = authentication;
  const isAdmin = profile?.roles?.includes("ADMIN");
  const isLoading = loading.effects["mda/getAllRegulations"];
  return {
    regulationList,
    regulationTotal,
    createModal,
    isLoading,
    isAdmin,
  };
};

export const mapDispatchToProps = (dispatch, ownProps) => {
  const fetchActionURL = "mda/getAllRegulations";
  return {
    fetchActionURL,
    redirect(pathname, search) {
      dispatch(routerRedux.push({ pathname, search }));
    },
    getRegulations(data) {
      dispatch({ type: fetchActionURL, payload: data });
    },
    openCreateModal() {
      dispatch({ type: "mda/save", payload: { createModal: true } });
    },
    deleteRegulation(data) {
      dispatch({ type: "mda/deleteRegulation", payload: data });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MDAs);
