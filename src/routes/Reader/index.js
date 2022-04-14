import { connect } from "dva";
import { Reader } from "./Reader";
import { routerRedux } from "dva/router";

export const mapStateToProps = (state, ownProps) => {
  const { loading, reader } = state;
  const { bookList, activeTab, editFormModal } = reader;
  return {
    bookList,
    activeTab,
    editFormModal,
  };
};

export const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    redirect(pathname, search) {
      dispatch(routerRedux.push({ pathname, search }));
    },
    saveReader(data) {
      dispatch({ type: "reader/save", payload: data });
    },
    openEditForm(data) {
      dispatch({
        type: "reader/save",
        payload: { editFormModal: true, editFormData: data },
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Reader);
