import { connect } from "dva";
import { CourtManagement } from "./CourtManagement";
import { routerRedux } from "dva/router";

export const mapStateToProps = (state, ownProps) => {
  const { loading, court, authentication } = state;
  const { courts, courtsTotal, createCourtModal } = court;
  const { profile } = authentication;
  const isAdmin = profile?.roles?.includes("ADMIN");
  const isLoading = loading.effects["court/getAllCourts"];
  return {
    isLoading,
    courts,
    courtsTotal,
    createCourtModal,
    isAdmin,
  };
};

export const mapDispatchToProps = (dispatch, ownProps) => {
  const fetchActionURL = "court/getAllCourts";
  return {
    fetchActionURL,
    redirect(pathname) {
      dispatch(routerRedux.push({ pathname: `${pathname}` }));
    },
    getAllCourts(data) {
      dispatch({ type: fetchActionURL, payload: data });
    },
    openCourtModal() {
      dispatch({ type: "court/save", payload: { createCourtModal: true } });
    },
    deleteCourt(data) {
      dispatch({ type: "court/deleteCourt", payload: data });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CourtManagement);
