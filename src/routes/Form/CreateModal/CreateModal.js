import React, { useState, useContext } from "react";
import { ThemeContext } from "styled-components";
import Upload from "rc-upload";

import { Input } from "../../../components/Input.components";
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
  const {
    createFormModal,
    isLoading,
    court_form_item_name,
    court_form_item_id,
  } = props;

  // Dispatch props
  const { form, createForm, closeModal } = props;
  const { getFieldProps, getFieldError, validateFields } = form;

  const Theme = useContext(ThemeContext);

  const [formFile, setFormFile] = useState("");

  let viewMode = calcViewMode();

  const onSubmit = () => {
    validateFields((error, value) => {
      if (!error) {
        if (formFile) {
          const data = {
            title: value.title.trim(),
            file: formFile,
            extension: "word",
            court_form_item_id: court_form_item_id,
          };
          // console.log(data);
          // console.log(decodeURIComponent(data.file));
          createForm(data);
        } else {
          Alert.info("Form file is required");
        }
      }
    });
  };
  let errors;
  return (
    <>
      <ModalComponent
        size={"xl"}
        show={createFormModal}
        onHide={closeModal}
        title={<PageTitle>Create Form</PageTitle>}
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
              Create Form
            </Button>
          </>
        }
      >
        <Text padding="0 0 10px 0">
          Court Form Item : <b>{court_form_item_name}</b>
        </Text>
        <Boxed pad="10px 0">
          <Input
            type="text"
            label="Form Title"
            placeholder="Enter Form title..."
            error={
              (errors = getFieldError("title"))
                ? "Form title is required"
                : null
            }
            {...getFieldProps("title", {
              initialValue: "",
              rules: [{ required: true }],
            })}
          />
        </Boxed>
        <Boxed pad="10px 0">
          <Text fontWeight="bold" fontSize={Theme.SecondaryFontSize}>
            File File
          </Text>
          <EditorComponent
            initialValue="Type something here.."
            // value={formFile}
            onEditorChange={(content) => setFormFile(content)}
          />
        </Boxed>
      </ModalComponent>
    </>
  );
};
