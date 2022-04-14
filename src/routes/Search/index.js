import { connect } from "dva";
import { Search } from "./Search";
import { routerRedux } from "dva/router";
import qs from "query-string";

export const mapStateToProps = (state, ownProps) => {
  let params = qs.parse(window.location.search);
  const { loading, authentication, judgement } = state;
  const { profile } = authentication;
  const { judgementList, judgementTotal } = judgement;
  const isLoading = loading.effects["judgement/getAllJudgements"];
  console.log({ params });
  return {
    profile,
    params,
    judgementList,
    judgementTotal,
    isLoading,
  };
};

export const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    redirect(pathname, search) {
      dispatch(routerRedux.push({ pathname: `${pathname}`, search }));
    },
    onSearch(data) {
      dispatch({ type: "judgement/getAllJudgements", payload: data });
    },
    onReadReport(data) {
      dispatch({
        type: "judgement/onRead",
        payload: data,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
