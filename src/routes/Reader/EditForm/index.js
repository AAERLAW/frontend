import { connect } from "dva";
import { createForm } from "rc-form";
import { EditForm } from "./EditForm";
import { routerRedux } from "dva/router";

export const mapStateToProps = (state, ownProps) => {
  const { reader } = state;
  const { editFormModal, editFormData } = reader;
  return {
    editFormModal,
    editFormData,
  };
};

export const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    redirect(pathname) {
      dispatch(routerRedux.push({ pathname: `${pathname}` }));
    },
    closeModal() {
      dispatch({
        type: "reader/save",
        payload: { editFormModal: false, editFormData: {} },
      });
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(createForm()(EditForm));
