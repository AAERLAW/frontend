import { connect } from "dva";
import { FederationLaws } from "./FederationLaws";
import { routerRedux } from "dva/router";

export const mapStateToProps = (state, ownProps) => {
  const { loading, law, authentication } = state;
  const { lawsList, lawsTotal, createLawModal } = law;
  const { profile } = authentication;
  const isAdmin = profile?.roles?.includes("ADMIN");
  const isLoading = loading.effects["law/getAllLaws"];

  return {
    lawsList,
    lawsTotal,
    createLawModal,
    isLoading,
    isAdmin,
  };
};

export const mapDispatchToProps = (dispatch, ownProps) => {
  const fetchActionURL = "law/getAllLaws";
  return {
    fetchActionURL,
    redirect(pathname) {
      dispatch(routerRedux.push({ pathname: `${pathname}` }));
    },
    getFederalLaws(data) {
      dispatch({ type: fetchActionURL, payload: data });
    },
    openCreateModal() {
      dispatch({ type: "law/save", payload: { createLawModal: true } });
    },
    readLaw(data) {
      dispatch({ type: "law/readLaw", payload: data });
    },
    deleteLaw(data) {
      dispatch({
        type: "law/deleteLaw",
        payload: data,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FederationLaws);
