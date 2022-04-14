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

import { calcViewMode, getBase64 } from "../../../utils/utils";
import { PageTitle, Icon } from "../../../components/style";

export const CreateModal = (props) => {
  // State props
  const { createRegItemModal, isLoading, regulation_name, regulation_id } =
    props;

  // Dispatch props
  const { form, createRegulationItem, closeModal } = props;
  const { getFieldProps, getFieldError, validateFields } = form;

  const Theme = useContext(ThemeContext);

  const [file, setFile] = useState({});

  let viewMode = calcViewMode();

  // handle logic for uploading an image
  const beforeUpload = (file) => {
    const isPDF = file.type === "application/pdf";
    if (!isPDF) {
      Alert.error("You can only upload PDF file!");
    }
    const isLt100M = file.size / 1024 / 1024 < 100;
    if (!isLt100M) {
      Alert.error("Image must be smaller than 100MB!");
    }
    if (isPDF && isLt100M) {
      handleFileUploader(file);
      return isPDF && isLt100M;
    }
  };

  const handleFileUploader = (file) => {
    getBase64(file).then((data) => {
      const base64Data = data.split(",")[1];
      setFile({
        pdf: file,
        base64: base64Data,
        format: file.type,
        name: file.name,
      });
    });
  };

  const onSubmit = () => {
    validateFields((error, value) => {
      if (!error) {
        if (file.base64) {
          const data = {
            name: value.name.trim(),
            year: value.year,
            file: file.base64,
            extension: "pdf",
            regulation_id: regulation_id,
          };
          createRegulationItem(data);
        } else {
          Alert.info("Case file is required");
        }
      }
    });
  };
  let errors;
  return (
    <>
      <ModalComponent
        show={createRegItemModal}
        onHide={closeModal}
        title={<PageTitle>Create Regulation Item</PageTitle>}
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
              Create Item
            </Button>
          </>
        }
      >
        <Text padding="0 0 10px 0">
          Regulation : <b>{regulation_name}</b>
        </Text>
        <Boxed pad="10px 0">
          <Input
            type="text"
            label="Item Name"
            placeholder="Enter Item name..."
            error={
              (errors = getFieldError("name")) ? "Item name is required" : null
            }
            {...getFieldProps("name", {
              initialValue: "",
              rules: [{ required: true }],
            })}
          />
        </Boxed>
        <Boxed pad="10px 0">
          <Input
            type="number"
            label="Year"
            placeholder="Enter Year..."
            error={(errors = getFieldError("year")) ? "Year is required" : null}
            {...getFieldProps("year", {
              initialValue: "",
              rules: [{ required: true }],
            })}
          />
        </Boxed>
        <Boxed pad="10px 0">
          <Text fontWeight="bold" fontSize={Theme.SecondaryFontSize}>
            File
          </Text>
          {file.base64 ? (
            <Boxed display="flex">
              <Icon
                className="icon-file-text"
                fontSize="25px"
                margin="auto 5px auto 0"
                color={Theme.PrimaryTextColor}
              />{" "}
              <Text margin="auto 5px"> {file.name}</Text>{" "}
              <Button xs pale margin="auto 0" onClick={() => setFile({})}>
                Remove
              </Button>
            </Boxed>
          ) : (
            <Upload
              type="drap"
              multiple={false}
              beforeUpload={(pdf) => beforeUpload(pdf)}
              onChange={() => {}}
            >
              <Boxed
                height="150px"
                width="100%"
                border={`1px dashed ${Theme.SecondaryTextColor}`}
                bColor={`${Theme.SecondaryDark}50`}
                display="flex"
              >
                <Boxed margin="auto" align="center">
                  <Icon
                    className="icon-upload-cloud"
                    fontSize="35px"
                    color={Theme.PrimaryTextColor}
                  />
                  <Text>Click or drag pdf file here to upload. </Text>
                </Boxed>
              </Boxed>
            </Upload>
          )}
        </Boxed>
      </ModalComponent>
    </>
  );
};
