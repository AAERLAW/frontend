import { connect } from "dva";
import { RegulationItem } from "./RegulationItem";
import { routerRedux } from "dva/router";
import qs from "query-string";

export const mapStateToProps = (state, ownProps) => {
  let params = qs.parse(window.location.search);

  const { loading, mda, authentication } = state;
  const { regulationItemsList, regulationItemsTotal, createRegItemModal } = mda;
  const { profile } = authentication;
  const isAdmin = profile?.roles?.includes("ADMIN");
  const isLoading = loading.effects["mda/getAllRegulationItems"];
  return {
    regulationItemsList,
    regulationItemsTotal,
    createRegItemModal,
    params,
    isLoading,
    isAdmin,
  };
};

export const mapDispatchToProps = (dispatch, ownProps) => {
  const fetchActionURL = "mda/getAllRegulationItems";
  return {
    fetchActionURL,
    redirect(pathname) {
      dispatch(routerRedux.push({ pathname: `${pathname}` }));
    },
    getAllRegulationItems(data) {
      dispatch({ type: fetchActionURL, payload: data });
    },
    openCreateModal() {
      dispatch({ type: "mda/save", payload: { createRegItemModal: true } });
    },
    openReader(data) {
      dispatch({ type: "mda/onRead", payload: data });
    },
    deleteRegulationItem(data) {
      dispatch({ type: "mda/deleteRegulationItem", payload: data });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegulationItem);
