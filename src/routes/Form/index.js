import { connect } from "dva";
import { Form } from "./Form";
import { routerRedux } from "dva/router";
import qs from "query-string";

export const mapStateToProps = (state, ownProps) => {
  const params = qs.parse(window.location.search);
  const { loading, court, authentication } = state;
  const { profile } = authentication;
  const isAdmin = profile?.roles?.includes("ADMIN");
  const { createFormModal, formList, formTotal } = court;
  const isBASIC = profile.isBASIC ? profile.isBASIC : false;
  return {
    createFormModal,
    params,
    formList,
    formTotal,
    isAdmin,
    isBASIC,
  };
};

export const mapDispatchToProps = (dispatch, ownProps) => {
  const fetchActionURL = "court/getAllForms";
  return {
    fetchActionURL,
    redirect(pathname) {
      dispatch(routerRedux.push({ pathname: `${pathname}` }));
    },
    getAllForms(data) {
      dispatch({ type: fetchActionURL, payload: data });
    },
    openCreateModal() {
      dispatch({ type: "court/save", payload: { createFormModal: true } });
    },
    openReader(data) {
      dispatch({ type: "court/onRead", payload: data });
    },
    deleteForm(data) {
      dispatch({ type: "court/deleteForm", payload: data });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
