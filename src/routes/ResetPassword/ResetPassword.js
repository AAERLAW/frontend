import React from "react";

import { Input } from "../../components/Input.components";
import { Grid } from "../../components/Grid.components";
import { Boxed } from "../../components/Boxed.components";
import { Text } from "../../components/Text.components";
import { Button } from "../../components/Button.components";

import { calcViewMode } from "../../utils/utils";

import LOGO from "../../assets/img/logo.png";
import { Theme } from "../../utils/theme";

export const ResetPassword = (props) => {
  const { form, resetPassword, loadingBtn, token, redirect } = props;
  const { getFieldProps, getFieldError, validateFields, getFieldValue } = form;
  let viewMode = calcViewMode();

  const checkConfirmPassword = (value1, rule, value, callback, source) => {
    if (value !== value1) {
      callback("Passwords must match");
    } else {
      callback();
    }
  };

  const checkPassword = (value1, rule, value, callback, source) => {
    if (value) {
      let length = value.length;
      let checkLength = length > 7;

      if (checkLength) {
        let numberTest = /\d/.test(value);
        let format = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
        let specialCharaterTest = value.match(format);
        if (numberTest || specialCharaterTest) {
          callback();
        } else {
          callback("Password must contain either a digit or special charater.");
        }
      } else {
        callback("Password must be atleast 8 characters");
      }
    } else {
      callback();
    }
  };

  const onResetPassword = () => {
    validateFields((error, value) => {
      if (!error) {
        const data = {
          token,
          new_password: value.password,
          confirm_password: value.confirmPassword,
        };
        resetPassword(data);
      }
    });
  };

  const onEnter = (e) => {
    e.stopPropagation();
    e.key === "Enter" && onResetPassword();
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
                <Text margin="1rem 0">Reset your password?</Text>

                <Boxed margin="20px 0">
                  <Input
                    type="password"
                    placeholder="New Password..."
                    onKeyPress={onEnter}
                    error={
                      getFieldError("password")
                        ? getFieldError("password")
                        : null
                    }
                    {...getFieldProps("password", {
                      rules: [
                        { required: true },
                        {
                          validator: checkPassword.bind(
                            this,
                            getFieldValue("password")
                          ),
                        },
                      ],
                      initialValue: "",
                    })}
                  />
                </Boxed>
                <Boxed margin="20px 0">
                  <Input
                    type="password"
                    placeholder="Confirm Password..."
                    onKeyPress={onEnter}
                    error={
                      getFieldError("confirmPassword")
                        ? "Confirm password must match password"
                        : null
                    }
                    {...getFieldProps("confirmPassword", {
                      rules: [
                        { required: true },
                        {
                          validator: checkConfirmPassword.bind(
                            this,
                            getFieldValue("password")
                          ),
                        },
                      ],
                      initialValue: "",
                    })}
                  />
                </Boxed>

                <Button
                  progress={loadingBtn}
                  diabled={loadingBtn}
                  block
                  onClick={onResetPassword}
                >
                  Reset Password
                </Button>

                <Text margin="1rem 0">Or</Text>
                <Text
                  margin="1rem 0"
                  color={Theme.PrimaryBlue}
                  fontWeight="bold"
                  cursor="pointer"
                  onClick={() => redirect("/")}
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
