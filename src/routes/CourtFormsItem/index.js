import { connect } from "dva";
import { CourtFormsItem } from "./CourtFormsItem";
import { routerRedux } from "dva/router";
import qs from "query-string";

export const mapStateToProps = (state, ownProps) => {
  let params = qs.parse(window.location.search);
  const { loading, court, authentication } = state;
  const { courtFormsItemList, courtFormsItemTotal, createCourtFormItemModal } =
    court;
  const { profile } = authentication;
  const isAdmin = profile?.roles?.includes("ADMIN");
  const isLoading = loading.effects["court/getAllCourtFormsItem"];
  const isBASIC = profile.isBASIC ? profile.isBASIC : false;
  return {
    courtFormsItemList,
    courtFormsItemTotal,
    createCourtFormItemModal,
    params,
    isLoading,
    isAdmin,
    isBASIC,
  };
};

export const mapDispatchToProps = (dispatch, ownProps) => {
  const fetchActionURL = "court/getAllCourtFormsItem";
  return {
    fetchActionURL,
    redirect(pathname, search) {
      dispatch(routerRedux.push({ pathname, search }));
    },
    getAllCourtFormsItem(data) {
      dispatch({ type: fetchActionURL, payload: data });
    },
    openCreateModal() {
      dispatch({
        type: "court/save",
        payload: { createCourtFormItemModal: true },
      });
    },
    deleteCourtFormItem(data) {
      dispatch({
        type: "court/deleteCourtFormItem",
        payload: data,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CourtFormsItem);
