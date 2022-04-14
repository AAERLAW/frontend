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

import { calcViewMode, printView } from "../../../utils/utils";
import { PageTitle, Icon } from "../../../components/style";

export const EditForm = (props) => {
  // State props
  const { editFormModal, editFormData } = props;

  // Dispatch props
  const { closeModal } = props;

  const { file, name } = editFormData;
  const Theme = useContext(ThemeContext);

  const [formFile, setFormFile] = useState(file);

  let viewMode = calcViewMode();
  return (
    <>
      <ModalComponent
        size={"xl"}
        show={editFormModal}
        onHide={closeModal}
        title={<PageTitle>Edit Form</PageTitle>}
      >
        <Text padding="0 0 10px 0">
          title : <b>{name}</b>
        </Text>
        <Boxed align="right">
          <Button sm pale onClick={closeModal}>
            Cancel{" "}
          </Button>
          <Button sm onClick={() => printView(formFile)}>
            Print Form
          </Button>
        </Boxed>
        <Boxed pad="10px 0">
          <EditorComponent
            // initialValue={formFile}
            value={formFile}
            onEditorChange={(text) => setFormFile(text)}
          />
        </Boxed>
      </ModalComponent>
    </>
  );
};
