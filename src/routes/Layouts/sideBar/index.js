import { connect } from "dva";
import { SideBar } from "./sideBar";
import { routerRedux } from "dva/router";

import adminMenu from "./adminMenu";
import { professionMenu, basicMenu } from "./usersMenu";

const mapStateToProps = (state, ownProps) => {
  const { app, authentication } = state;
  const { openMediaMenu, menuMode, nightMode } = app;
  const { profile } = authentication;
  const { collaspe } = ownProps;

  const isBASIC = profile ? profile.isBASIC : false;
  const isAdmin = profile?.roles?.includes("ADMIN");

  let dataList = isBASIC ? basicMenu : professionMenu;
  if (isAdmin) {
    dataList = adminMenu;
  }

  return {
    profile,
    openMediaMenu,
    collaspe,
    dataList,
    pathname: state.routing.location.pathname,
    menuMode,
    nightMode,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { toggleSidebar } = ownProps;
  return {
    redirect(pathname) {
      dispatch(routerRedux.push({ pathname: `${pathname}` }));
    },
    toggleSidebar,
    toggleMediaMenu(data, mode) {
      dispatch({
        type: "app/save",
        payload: { openMediaMenu: data, menuMode: mode },
      });
    },
    setPageTitle(pageTitle) {
      dispatch({
        type: "app/save",
        payload: { pageTitle },
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
