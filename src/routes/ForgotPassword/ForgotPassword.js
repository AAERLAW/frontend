import React from "react";

import { Input } from "../../components/Input.components";
import { Grid } from "../../components/Grid.components";
import { Boxed } from "../../components/Boxed.components";
import { Text } from "../../components/Text.components";
import { Button } from "../../components/Button.components";

import { calcViewMode } from "../../utils/utils";

import LOGO from "../../assets/img/logo.png";
import { Theme } from "../../utils/theme";

export const ForgotPassword = (props) => {
  const { form, forgotPassword, redirect } = props;
  const { getFieldProps, getFieldError, validateFields } = form;
  let viewMode = calcViewMode();

  const onForgotPassword = () => {
    validateFields((error, value) => {
      if (!error) {
        const data = {
          email: value.username.trim(),
        };
        forgotPassword(data);
      }
    });
  };

  const onEnter = (e) => {
    e.stopPropagation();
    e.key === "Enter" && onForgotPassword();
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
            <Boxed display="flex" width="100%" height="100%">
              <img
                src={LOGO}
                height="64px"
                alt="app_logo"
                style={{ margin: "auto" }}
              />
            </Boxed>
            <Boxed display="flex" width="100%" minHeight="100vh">
              <Boxed margin="auto" align="center" minWidth="300px">
                <Boxed pad="10px 0">
                  <img src={LOGO} alt="app_logo" />
                </Boxed>
                <Text margin="1rem 0">Forgot your password?</Text>
                <Boxed margin="20px 0">
                  <Input
                    type="email"
                    placeholder="Your Email..."
                    onKeyPress={onEnter}
                    error={
                      (errors = getFieldError("username"))
                        ? "Email or Phone Number is required"
                        : null
                    }
                    {...getFieldProps("username", {
                      initialValue: "",
                      rules: [{ required: true }],
                    })}
                  />
                </Boxed>

                <Button block onClick={onForgotPassword}>
                  Submit
                </Button>

                <Text margin="1rem 0">Or</Text>
                <Text
                  margin="1rem 0"
                  color={Theme.PrimaryBlue}
                  fontWeight="bold"
                  cursor="pointer"
                  onClick={() => redirect("/login")}
                >
                  Login
                </Text>
              </Boxed>
            </Boxed>
          </Grid>
        </Boxed>
      </Boxed>
    </>
  );
};
