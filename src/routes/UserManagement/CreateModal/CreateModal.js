import React, { useEffect, useState, useContext } from "react";
import { ThemeContext } from "styled-components";
import Upload from "rc-upload";
import moment from "moment";

import { Input, AsyncSelect } from "../../../components/Input.components";
import { Grid } from "../../../components/Grid.components";
import { Boxed } from "../../../components/Boxed.components";
import { Text } from "../../../components/Text.components";
import { Button } from "../../../components/Button.components";
import { Alert } from "../../../components/Alert.components";
import { ModalComponent } from "../../../components/Modal.components";

import { calcViewMode, getBase64 } from "../../../utils/utils";
import { PageTitle, Icon } from "../../../components/style";

export const CreateModal = (props) => {
  // State props
  const { createUsersModal, isLoading, rolesList, isLoadingRoles } = props;

  // Dispatch props
  const { form, createUser, closeModal, getAllRoles } = props;
  const { getFieldProps, getFieldError, validateFields } = form;

  const Theme = useContext(ThemeContext);

  let viewMode = calcViewMode();

  useEffect(() => {
    getAllRoles({ page: 1, size: 50 });
  }, []);

  const onSubmit = () => {
    validateFields((errors, values) => {
      let roles = {};
      if (!errors) {
        let data = {
          first_name: values.first_name.trim(),
          last_name: values.last_name.trim(),
          middle_name: values.middle_name ? values.middle_name.trim() : "",
          email: values.email,
          phone: values.phone,
          country_code: values.country_code.value,
          roles: [`${values.roles.id}`],
        };
        createUser(data);
      }
    });
  };
  let errors;

  let modiRoleList = [];
  rolesList.length > 0 &&
    (modiRoleList = rolesList.map((item) => ({ label: item.name, ...item })));

  return (
    <>
      <ModalComponent
        show={createUsersModal}
        onHide={closeModal}
        title={<PageTitle>Create User</PageTitle>}
        footer={
          <>
            <Button pale onClick={closeModal}>
              Cancel
            </Button>
            <Button
              progress={isLoading}
              disabled={isLoading}
              onClick={onSubmit}
            >
              Create User
            </Button>
          </>
        }
      >
        <Boxed margin="10px 0 ">
          <Input
            type="text"
            label="First Name"
            placeholder="Enter first name..."
            error={
              getFieldError("first_name") ? "First name is required" : null
            }
            {...getFieldProps("first_name", {
              rules: [{ required: true }],
              initialValue: "",
            })}
          />
        </Boxed>
        <Grid
          desktop="repeat(2, 1fr)"
          tablet="repeat(2, 1fr)"
          mobile="repeat(2, 1fr)"
        >
          <Boxed margin="10px 0 ">
            <Input
              type="text"
              label="Last Name"
              placeholder="Enter last name..."
              error={
                getFieldError("last_name") ? "Last name is required" : null
              }
              {...getFieldProps("last_name", {
                rules: [{ required: true }],
                initialValue: "",
              })}
            />
          </Boxed>
          <Boxed margin="10px 0 ">
            <Input
              type="text"
              label="Middle Name"
              placeholder="Enter middle name..."
              error={
                getFieldError("middle_name") ? "Middle name is required" : null
              }
              {...getFieldProps("middle_name", {
                rules: [{}],
                initialValue: "",
              })}
            />
          </Boxed>
          <Boxed margin="10px 0">
            <AsyncSelect
              label="Country"
              placeholder="Select Country..."
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

          <Boxed margin="10px 0">
            <AsyncSelect
              label="Role"
              placeholder="Select Role..."
              options={modiRoleList}
              error={
                (errors = getFieldError("roles")) ? "Role is required" : null
              }
              {...getFieldProps("roles", {
                initialValue: "",
                rules: [{ required: true }],
              })}
            />
          </Boxed>
          <Boxed margin="10px 0">
            <Input
              type="email"
              label="Email"
              placeholder="Enter an email..."
              error={
                (errors = getFieldError("email")) ? "Email is required" : null
              }
              {...getFieldProps("email", {
                initialValue: "",
                rules: [{ required: true, type: "email" }],
              })}
            />
          </Boxed>

          <Boxed margin="10px 0">
            <Input
              type="number"
              label="Phone Number"
              placeholder="Your phone number..."
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
        </Grid>
      </ModalComponent>
    </>
  );
};
