import { connect } from "dva";
import { JudgementList } from "./JudgementList";
import { routerRedux } from "dva/router";

export const mapStateToProps = (state, ownProps) => {
  const { loading, judgement, authentication, court } = state;
  const { judgementList, judgementTotal, createJudgementModal } = judgement;
  const { courts } = court;
  const isLoading = loading.effects["judgement/getAllJudgements"];
  const { profile } = authentication;
  const isAdmin = profile?.roles?.includes("ADMIN");
  return {
    judgementList,
    judgementTotal,
    createJudgementModal,
    isLoading,
    isAdmin,
    courtList: courts,
  };
};

export const mapDispatchToProps = (dispatch, ownProps) => {
  const fetchActionURL = "judgement/getAllJudgements";
  return {
    fetchActionURL,
    redirect(pathname) {
      dispatch(routerRedux.push({ pathname: `${pathname}` }));
    },
    getAllJudgements(data) {
      dispatch({ type: fetchActionURL, payload: data });
    },
    openCreateJudgementModal() {
      dispatch({
        type: "judgement/save",
        payload: { createJudgementModal: true, editData: {}, editMode: false },
      });
    },
    getAllCourts(data) {
      dispatch({ type: "court/getAllCourts", payload: data });
    },
    openEditJudgement(data) {
      dispatch({
        type: "judgement/save",
        payload: {
          createJudgementModal: true,
          editData: data,
          editMode: true,
        },
      });
    },
    onRead(data) {
      dispatch({
        type: "judgement/onRead",
        payload: data,
      });
    },
    deleteJudgement(data) {
      dispatch({
        type: "judgement/deleteJudgements",
        payload: data,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(JudgementList);
