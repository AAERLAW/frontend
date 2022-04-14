import { connect } from "dva";
import { createForm } from "rc-form";
import { CreateModal } from "./CreateModal";
import { routerRedux } from "dva/router";

export const mapStateToProps = (state, ownProps) => {
  const { loading, users } = state;
  const { createUsersModal, rolesList } = users;
  const isLoading = loading.effects["users/createUser"];
  const isLoadingRoles = loading.effects["users/getAllRoles"];
  return {
    createUsersModal,
    isLoading,
    rolesList,
    isLoadingRoles,
  };
};

export const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    redirect(pathname) {
      dispatch(routerRedux.push({ pathname: `${pathname}` }));
    },
    createUser(data) {
      dispatch({ type: "users/createUser", payload: data });
    },
    closeModal() {
      dispatch({ type: "users/save", payload: { createUsersModal: false } });
    },
    getAllRoles(data) {
      dispatch({ type: "users/getAllRoles", payload: data });
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(createForm()(CreateModal));
