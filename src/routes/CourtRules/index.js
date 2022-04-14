import { connect } from "dva";
import { CourtRules } from "./CourtRules";
import { routerRedux } from "dva/router";

export const mapStateToProps = (state, ownProps) => {
  const { loading, court, authentication } = state;
  const { rules, rulesTotal, createRuleModal } = court;
  const { profile } = authentication;
  const isAdmin = profile?.roles?.includes("ADMIN");
  const isLoading = loading.effects["court/getAllRules"];
  return {
    isLoading,
    rules,
    rulesTotal,
    isAdmin,
    createRuleModal,
  };
};

export const mapDispatchToProps = (dispatch, ownProps) => {
  const fetchActionURL = "court/getAllRules";
  return {
    fetchActionURL,
    redirect(pathname) {
      dispatch(routerRedux.push({ pathname: `${pathname}` }));
    },
    getAllRules(data) {
      dispatch({ type: fetchActionURL, payload: data });
    },
    openCreateModal() {
      dispatch({ type: "court/save", payload: { createRuleModal: true } });
    },
    openReader(data) {
      dispatch({ type: "court/onReadRule", payload: data });
    },
    deleteCourtRule(data) {
      dispatch({ type: "court/deleteCourtRule", payload: data });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CourtRules);
