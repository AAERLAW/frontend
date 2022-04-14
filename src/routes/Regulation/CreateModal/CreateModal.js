import React from "react";

import { Input } from "../../../components/Input.components";
import { Boxed } from "../../../components/Boxed.components";
import { Text } from "../../../components/Text.components";
import { Button } from "../../../components/Button.components";
import { ModalComponent } from "../../../components/Modal.components";

import { calcViewMode } from "../../../utils/utils";
import { PageTitle } from "../../../components/style";

export const CreateModal = (props) => {
  // State props
  const { createModal, isLoading } = props;

  // Dispatch props
  const { form, createRegulation, closeModal } = props;
  const { getFieldProps, getFieldError, validateFields } = form;

  let viewMode = calcViewMode();

  const onSubmit = () => {
    validateFields((error, value) => {
      if (!error) {
        const data = {
          name: value.name.trim(),
        };
        createRegulation(data);
      }
    });
  };
  let errors;

  return (
    <>
      <ModalComponent
        show={createModal}
        onHide={closeModal}
        title={<PageTitle>Create Regulation</PageTitle>}
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
              Create Regulation
            </Button>
          </>
        }
      >
        <Boxed pad="0 0 20px 0">
          <Input
            type="text"
            label="Regulation Name"
            placeholder="Enter Regulation name..."
            error={
              (errors = getFieldError("name"))
                ? "Regulation's name is required"
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
