import { connect } from "dva";
import { CourtForms } from "./CourtForms";
import { routerRedux } from "dva/router";

export const mapStateToProps = (state, ownProps) => {
  const { loading, court, authentication } = state;
  const { courtFormsList, courtFormsTotal, createCourtFormModal } = court;
  const { profile } = authentication;
  const isBASIC = profile.isBASIC ? profile.isBASIC : false;
  const isAdmin = profile?.roles?.includes("ADMIN");
  const isLoading = loading.effects["court/getAllCourtForms"];
  return {
    isLoading,
    courtFormsList,
    courtFormsTotal,
    createCourtFormModal,
    isAdmin,
    isBASIC,
  };
};

export const mapDispatchToProps = (dispatch, ownProps) => {
  const fetchActionURL = "court/getAllCourtForms";
  return {
    fetchActionURL,
    redirect(pathname, search) {
      dispatch(routerRedux.push({ pathname, search }));
    },
    getAllCourtForms(data) {
      dispatch({ type: fetchActionURL, payload: data });
    },
    openCreateModal() {
      dispatch({ type: "court/save", payload: { createCourtFormModal: true } });
    },
    deleteCourtForm(data) {
      dispatch({ type: "court/deleteCourtForm", payload: data });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CourtForms);
