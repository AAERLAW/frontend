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
  const { createRuleModal, isLoading, courtFormsList, isCourtsLoading } = props;

  // Dispatch props
  const { form, createRule, closeModal, getAllCourtForms } = props;
  const { getFieldProps, getFieldError, validateFields } = form;

  const [file, setFile] = useState({});

  const Theme = useContext(ThemeContext);

  let viewMode = calcViewMode();

  useEffect(() => {
    getAllCourtForms({ page: 1, size: 10 });
  }, []);

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
            title: value.title.trim(),
            rule_date: moment(value.rule_date).format("DD-MM-YYYY"),
            jurisdiction: value.court_form.label,
            file: file.base64,
            extension: "pdf",
          };
          createRule(data);
        } else {
          Alert.info("Case file is required");
        }
      }
    });
  };
  let errors;

  let modiCourts = courtFormsList.map((item) => ({
    value: item.id,
    label: item.title,
  }));

  return (
    <>
      <ModalComponent
        show={createRuleModal}
        onHide={closeModal}
        title={<PageTitle>Create Rule</PageTitle>}
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
              Create Rule
            </Button>
          </>
        }
      >
        <Boxed pad="10px 0">
          <Input
            type="text"
            label="Title"
            placeholder="Enter title..."
            error={
              (errors = getFieldError("title")) ? "Title is required" : null
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
          mobile="repeat(1, 1fr)"
        >
          <Boxed pad="10px 0 ">
            <Input
              type="date"
              label="Rule Date"
              placeholder="Enter Rule date..."
              error={
                (errors = getFieldError("rule_date"))
                  ? "Rule Date is required"
                  : null
              }
              {...getFieldProps("rule_date", {
                initialValue: "",
                rules: [{ required: true }],
              })}
            />
          </Boxed>
          <Boxed pad="10px 0 ">
            <AsyncSelect
              label="Court Form"
              placeholder="Select Court Form..."
              options={modiCourts}
              isloading={isCourtsLoading}
              error={
                (errors = getFieldError("court_form"))
                  ? "Court form is required"
                  : null
              }
              {...getFieldProps("court_form", {
                initialValue: "",
                rules: [{ required: true }],
              })}
            />
          </Boxed>
        </Grid>
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
