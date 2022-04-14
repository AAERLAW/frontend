import React from "react";

import { Input } from "../../../components/Input.components";
import { Grid } from "../../../components/Grid.components";
import { Boxed } from "../../../components/Boxed.components";
import { Text } from "../../../components/Text.components";
import { Button } from "../../../components/Button.components";
import { ModalComponent } from "../../../components/Modal.components";

import { calcViewMode } from "../../../utils/utils";
import { Theme } from "../../../utils/theme";
import { PageTitle } from "../../../components/style";

export const CreateCourt = (props) => {
  // State props
  const { createCourtModal, isLoading } = props;

  // Dispatch props
  const { form, createCourt, closeModal } = props;
  const { getFieldProps, getFieldError, validateFields } = form;

  let viewMode = calcViewMode();

  const onSubmit = () => {
    validateFields((error, value) => {
      if (!error) {
        const data = {
          name: value.name.trim(),
        };
        createCourt(data);
      }
    });
  };
  let errors;

  return (
    <>
      <ModalComponent
        show={createCourtModal}
        onHide={closeModal}
        title={<PageTitle>Create Court</PageTitle>}
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
              Create Court
            </Button>
          </>
        }
      >
        <Boxed pad="0 0 20px 0">
          <Input
            type="text"
            label="Court Name"
            placeholder="Enter Court name..."
            error={
              (errors = getFieldError("name"))
                ? "Court's name is required"
                : null
            }
            {...getFieldProps("name", {
              initialValue: "",
              rules: [{ required: true }],
            })}
          />
        </Boxed>
      </ModalComponent>
    </>
  );
};
