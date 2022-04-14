import React, { useEffect } from "react";

import { AsyncSelect, Input } from "../../../components/Input.components";
import { Grid } from "../../../components/Grid.components";
import { Boxed } from "../../../components/Boxed.components";
import { Text } from "../../../components/Text.components";
import { Button } from "../../../components/Button.components";
import { Alert } from "../../../components/Alert.components";
import { ModalComponent } from "../../../components/Modal.components";
import { EditorComponent } from "../../../components/Editor.components";

import { calcViewMode, getBase64 } from "../../../utils/utils";
import { PageTitle, Icon } from "../../../components/style";

export const CreateModal = (props) => {
  // State props
  const { createCourtFormModal, isLoading, stateList } = props;

  // Dispatch props
  const { form, createCourtForm, closeModal, getAllStates } = props;
  const { getFieldProps, getFieldError, validateFields } = form;

  useEffect(() => {
    getAllStates({ page: 1, size: 50 });
  }, []);

  let viewMode = calcViewMode();

  const onSubmit = () => {
    validateFields((error, value) => {
      if (!error) {
        const data = {
          title: value.title.trim(),
          court_level: value.court_level.value,
          state_id: value.state_id.value,
        };
        createCourtForm(data);
      }
    });
  };

  const modiState = stateList.map((item) => ({
    value: item.id,
    label: item.name,
  }));

  let errors;
  return (
    <>
      <ModalComponent
        show={createCourtFormModal}
        onHide={closeModal}
        title={<PageTitle>Create Court Form </PageTitle>}
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
              Create Court Form
            </Button>
          </>
        }
      >
        <Boxed pad="10px 0">
          <Input
            type="text"
            label="Court Form Title"
            placeholder="Enter Court Form title..."
            error={
              (errors = getFieldError("title"))
                ? "Court Form title is required"
                : null
            }
            {...getFieldProps("title", {
              initialValue: "",
              rules: [{ required: true }],
            })}
          />
        </Boxed>
        <Grid
          desktop="repeat(2, 1fr)"
          tablet="repeat(2, 1fr)"
          mobile="repeat(2, 1fr)"
        >
          <Boxed pad="10px 0 60px 0">
            <AsyncSelect
              label="Court Level"
              placeholder="Select court Level..."
              options={[
                { label: "Federal", value: "Federal" },
                { label: "State", value: "State" },
              ]}
              error={
                (errors = getFieldError("court_level"))
                  ? "Court level is required"
                  : null
              }
              {...getFieldProps("court_level", {
                initialValue: "",
                rules: [{ required: true }],
              })}
            />
          </Boxed>

          <Boxed pad="10px 0 60px 0">
            <AsyncSelect
              label="State"
              placeholder="Select state..."
              options={modiState}
              {...getFieldProps("state_id", {
                initialValue: "",
                rules: [],
              })}
            />
          </Boxed>
        </Grid>
      </ModalComponent>
    </>
  );
};
