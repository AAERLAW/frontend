import React from "react";

import { Input, AsyncSelect } from "../../components/Input.components";
import { Grid } from "../../components/Grid.components";
import { Boxed } from "../../components/Boxed.components";
import { Text } from "../../components/Text.components";
import { Button } from "../../components/Button.components";

import { calcViewMode } from "../../utils/utils";

import LOGO from "../../assets/img/logo.png";
import LOGIN_BG from "../../assets/img/login-bg.png";
import { Theme } from "../../utils/theme";

export const Registration = (props) => {
  const { form, register, redirect, isLoading } = props;
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

  const onSignUp = () => {
    validateFields((error, value) => {
      if (!error) {
        const data = {
          country_code: value.country_code.value,
          email: value.email.trim(),
          first_name: value.first_name.trim(),
          last_name: value.last_name.trim(),
          middle_name: value.middle_name ? value.middle_name.trim() : "",
          phone: value.phone,
          password: value.password,
          confirm_password: value.confirm_password,
        };
        register(data);
      }
    });
  };

  const onEnter = (e) => {
    e.stopPropagation();
    e.key === "Enter" && onSignUp();
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
                  height="600px"
                  alt="app_logo"
                  style={{ margin: "auto" }}
                />
              </Boxed>
            )}
            <Boxed display="flex" width="100%" minHeight="100vh">
              <Boxed
                margin="auto"
                align="center"
                minWidth="300px"
                maxWidth="500px"
              >
                <Boxed pad="10px 0">
                  <img src={LOGO} alt="app_logo" />
                </Boxed>
                <Text margin="1rem 0">Register an Account</Text>

                <Grid
                  desktop="repeat(2, 1fr)"
                  tablet="repeat(2, 1fr)"
                  mobile="repeat(2, 1fr)"
                >
                  <Boxed margin="15px 0 ">
                    <Input
                      type="text"
                      placeholder="First Name"
                      error={
                        getFieldError("first_name")
                          ? "First name is required"
                          : null
                      }
                      {...getFieldProps("first_name", {
                        rules: [{ required: true }],
                        initialValue: "",
                      })}
                    />
                  </Boxed>
                  <Boxed margin="15px 0 ">
                    <Input
                      type="text"
                      placeholder="Last Name"
                      error={
                        getFieldError("last_name")
                          ? "Last name is required"
                          : null
                      }
                      {...getFieldProps("last_name", {
                        rules: [{ required: true }],
                        initialValue: "",
                      })}
                    />
                  </Boxed>
                  <Boxed margin="15px 0 ">
                    <Input
                      type="text"
                      placeholder="Middle Name"
                      {...getFieldProps("middle_name", {
                        rules: [{}],
                        initialValue: "",
                      })}
                    />
                  </Boxed>
                  <Boxed margin="15px 0">
                    <Input
                      type="email"
                      placeholder="Your Email..."
                      error={
                        (errors = getFieldError("email"))
                          ? "Email is required"
                          : null
                      }
                      {...getFieldProps("email", {
                        initialValue: "",
                        rules: [{ required: true, type: "email" }],
                      })}
                    />
                  </Boxed>

                  <Boxed margin="15px 0">
                    <Input
                      type="phone"
                      placeholder="Your Phone Number..."
                      error={
                        (errors = getFieldError("phone"))
                          ? "Phone Number is required"
                          : null
                      }
                      {...getFieldProps("phone", {
                        initialValue: "",
                        rules: [{ required: true }],
                      })}
                    />
                  </Boxed>
                  <Boxed margin="15px 0">
                    <AsyncSelect
                      placeholder="Select Country"
                      options={[{ value: "NG", label: "Nigeria" }]}
                      error={
                        (errors = getFieldError("country_code"))
                          ? "Country is required"
                          : null
                      }
                      {...getFieldProps("country_code", {
                        initialValue: "",
                        rules: [{ required: true }],
                      })}
                    />
                  </Boxed>
                </Grid>

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
                      getFieldError("confirm_password")
                        ? "Confirm password must match password"
                        : null
                    }
                    {...getFieldProps("confirm_password", {
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
                  block
                  onClick={onSignUp}
                  progress={isLoading}
                  disabled={isLoading}
                >
                  Sign Up
                </Button>

                <Text margin="1rem 0">or</Text>
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
