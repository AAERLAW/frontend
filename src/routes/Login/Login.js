import React from "react";

import { Input } from "../../components/Input.components";
import { Grid } from "../../components/Grid.components";
import { Boxed } from "../../components/Boxed.components";
import { Text } from "../../components/Text.components";
import { Button } from "../../components/Button.components";

import { calcViewMode } from "../../utils/utils";
import { endpoint } from "../../utils/config";

import LOGO from "../../assets/img/logo.png";
import LOGIN_BG from "../../assets/img/login-bg.png";
import { Facebook } from "../../assets/svg/facebook.js";
import { Theme } from "../../utils/theme";

export const Login = (props) => {
  const { form, isLoading, login, redirect } = props;
  const { getFieldProps, getFieldError, validateFields } = form;
  let viewMode = calcViewMode();

  const onLogin = () => {
    validateFields((error, value) => {
      if (!error) {
        const data = {
          username: value.username.trim(),
          password: value.password,
        };
        login(data);
      }
    });
  };

  const onEnter = (e) => {
    e.stopPropagation();
    e.key === "Enter" && onLogin();
  };
  let errors;
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
              <Boxed margin="auto" align="center">
                <Boxed pad="10px 0">
                  <img src={LOGO} alt="app_logo" />
                </Boxed>
                <Text margin="1rem 0">Sign into your account.</Text>
                <Boxed margin="20px 0">
                  <Input
                    type="email"
                    placeholder="Your Email..."
                    error={
                      (errors = getFieldError("username"))
                        ? "Email is required"
                        : null
                    }
                    {...getFieldProps("username", {
                      initialValue: "",
                      rules: [{ required: true }],
                    })}
                  />
                </Boxed>
                <Boxed margin="20px 0">
                  <Input
                    type="password"
                    placeholder="Your Password..."
                    onKeyPress={onEnter}
                    error={
                      (errors = getFieldError("password"))
                        ? "Password is required"
                        : null
                    }
                    {...getFieldProps("password", {
                      initialValue: "",
                      rules: [{ required: true }],
                    })}
                  />
                </Boxed>

                <Button
                  disabled={isLoading}
                  progress={isLoading}
                  block
                  onClick={onLogin}
                >
                  Login
                </Button>
                <Text margin="1rem 0">or continue with</Text>
                <Boxed pad="10px 0 20px 0" display="flex" align="center">
                  <Grid
                    desktop="repeat(2, 1fr)"
                    tablet="repeat(2, 1fr)"
                    mobile="repeat(2, 1fr)"
                  >
                    <Boxed align="center">
                      <a
                        href={`${endpoint}/auth/facebook`}
                        style={{ cursor: "pointer", textDecoration: "none" }}
                      >
                        <Facebook />
                      </a>
                    </Boxed>

                    <a
                      href={`${endpoint}/auth/google?scope=openid%20profile%20email`}
                      style={{ cursor: "pointer", textDecoration: "none" }}
                    >
                      <img
                        src="https://www.google.com/images/hpp/gsa_super_g-64.gif"
                        style={{
                          height: "40px",
                          width: "40px",
                          margin: "0 auto",
                          cursor: "pointer",
                        }}
                      />
                    </a>
                  </Grid>
                </Boxed>

                <Text>
                  {" "}
                  Don't have an account?{" "}
                  <span
                    style={{
                      color: Theme.PrimaryGreen,
                      fontWeight: "bold",
                      cursor: "pointer",
                    }}
                    onClick={() => redirect("/registration")}
                  >
                    Create an account
                  </span>
                </Text>
                <Text
                  margin="1rem 0"
                  color={Theme.PrimaryBlue}
                  fontWeight="bold"
                  cursor="pointer"
                  onClick={() => redirect("/forgotpassword")}
                >
                  Forgot Password
                </Text>
              </Boxed>
            </Boxed>
          </Grid>
        </Boxed>
      </Boxed>
    </>
  );
};
