import React, { useEffect } from "react";

import { Grid } from "../../../components/Grid.components";
import { Boxed } from "../../../components/Boxed.components";
import { Alert } from "../../../components/Alert.components";
import { Loader } from "../../../components/Loader.components";

import { calcViewMode } from "../../../utils/utils";

import LOGIN_BG from "../../../assets/img/login-bg.png";

export const SocialLogin = (props) => {
  // state props recieved
  const { params } = props;
  // dispatch props recieved
  const { redirect, socialLogin } = props;
  let viewMode = calcViewMode();

  useEffect(() => {
    const { access_token, refresh_token } = params;
    if (access_token && refresh_token) {
      socialLogin(params);
    } else {
      Alert.info("Invalid token, please login");
    }
  }, []);

  return (
    <>
      <Boxed
        width="100%"
        pad="1rem 0"
        height="100%"
        display="flex"
        position="relative"
      >
        <Boxed maxWidth="1080px" width="100%" margin="0 auto">
          <Grid desktop="50% 50%" tablet="40% 60%" mobile="100%">
            {viewMode !== "mobile" && (
              <Boxed display="flex" width="100%" height="100%">
                <img
                  src={LOGIN_BG}
                  height="450px"
                  alt="login_bg"
                  style={{ margin: "auto" }}
                />
              </Boxed>
            )}
            <Boxed display="flex" width="100%" minHeight="100vh">
              <Loader margin="auto" />
            </Boxed>
          </Grid>
        </Boxed>
      </Boxed>
    </>
  );
};
