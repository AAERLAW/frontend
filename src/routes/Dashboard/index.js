import { connect } from "dva";
import { Dashboard } from "./Dashboard";
import { routerRedux } from "dva/router";

const getDashboardStatsURL = "authentication/getDashboardStats";

const mapStateToProps = (state, ownProps) => {
  const { loading, authentication } = state;
  const { profile, dashboardStats } = authentication;
  const isAdmin = profile?.roles?.includes("ADMIN");
  const loadingDashboard = loading.effects[getDashboardStatsURL];

  const isBASIC = profile.isBASIC ? profile.isBASIC : false;
  return {
    profile,
    isAdmin,
    loadingDashboard,
    dashboardStats,
    isBASIC,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    redirect(pathname, search) {
      dispatch(routerRedux.push({ pathname, search }));
    },
    getDashboardStats(data) {
      dispatch({ type: getDashboardStatsURL, payload: data });
    },
    onReadJudgement(data) {
      dispatch({
        type: "judgement/onRead",
        payload: data,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
