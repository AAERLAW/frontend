import { connect } from "dva";
import { UserManagement } from "./UserManagement";
import { routerRedux } from "dva/router";

const fetchActionURL = "users/getAllUsers";

export const mapStateToProps = (state, ownProps) => {
  const { loading, users, authentication } = state;
  const { usersTotal, usersList, createUsersModal } = users;
  const isLoading = loading.effects[fetchActionURL];
  const { profile } = authentication;
  const isAdmin = profile?.roles?.includes("ADMIN");
  return {
    usersTotal,
    usersList,
    isLoading,
    createUsersModal,
    fetchActionURL,
    isAdmin,
  };
};

export const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    redirect(pathname) {
      dispatch(routerRedux.push({ pathname: `${pathname}` }));
    },
    getAllUsers(data) {
      dispatch({ type: fetchActionURL, payload: data });
    },
    openCreateModal() {
      dispatch({ type: "users/save", payload: { createUsersModal: true } });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManagement);
