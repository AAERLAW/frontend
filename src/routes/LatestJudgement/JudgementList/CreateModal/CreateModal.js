import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "styled-components";
import moment from "moment";
import Upload from "rc-upload";

import {
  Input,
  AsyncSelect,
  Textarea,
  Checkbox,
} from "../../../../components/Input.components";
import { Grid } from "../../../../components/Grid.components";
import { Boxed } from "../../../../components/Boxed.components";
import { Text } from "../../../../components/Text.components";
import { Button } from "../../../../components/Button.components";
import { Alert } from "../../../../components/Alert.components";
import { ModalComponent } from "../../../../components/Modal.components";
import { Icon } from "../../../../components/style";

import { calcViewMode, getBase64 } from "../../../../utils/utils";
// import { Theme } from "../../../../utils/theme";
import { PageTitle } from "../../../../components/style";

export const CreateJudgement = (props) => {
  // State props
  const {
    createJudgementModal,
    isLoading,
    courts,
    isCourtsLoading,
    editMode,
    editData,
  } = props;

  // Dispatch props
  const { form, createJudgement, editJudgement, closeModal, getAllCourts } =
    props;
  const { getFieldProps, getFieldError, validateFields } = form;

  const Theme = useContext(ThemeContext);

  const [file, setFile] = useState({});
  const [changeFile, setChangeFile] = useState(false);

  useEffect(() => {
    let data = {
      page: 1,
      size: 100,
    };
    getAllCourts(data);
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

  let viewMode = calcViewMode();

  const onSubmit = () => {
    validateFields((error, value) => {
      if (!error) {
        if (file.base64) {
          console.log(value);
          const data = {
            case_title: value.case_title.trim(),
            suit_number: value.suit_number.trim(),
            citation: value.citation.trim(),
            lead_judgement_by: value.lead_judgement_by.trim(),
            summary: value.summary.trim(),
            judgement_date: moment(value.judgement_date).format("DD-MM-YYYY"),
            court_id: value.court_id.value,
            file: file.base64,
            extension: "pdf",
          };
          createJudgement(data);
        } else {
          Alert.info("File is required");
        }
      }
    });
  };

  const onEdit = () => {
    validateFields((error, value) => {
      if (!error) {
        let data = {
          id: editData.id,
          case_title: value.case_title.trim(),
          suit_number: value.suit_number.trim(),
          citation: value.citation.trim(),
          lead_judgement_by: value.lead_judgement_by.trim(),
          summary: value.summary.trim(),
          judgement_date: moment(value.judgement_date).format("DD-MM-YYYY"),
        };
        if (changeFile && file.base64) {
          data["file"] = file.base64;
          data["extension"] = "pdf";
        }
        console.log(data);
        editJudgement(data);
      }
    });
  };

  const modiCourts =
    courts && courts.map((item) => ({ value: item.id, label: item.name }));
  let errors;

  return (
    <>
      <ModalComponent
        show={createJudgementModal}
        onHide={closeModal}
        title={<PageTitle>{editMode ? "Edit" : "Create"} Report</PageTitle>}
        footer={
          <>
            <Button pale onClick={closeModal}>
              Cancel
            </Button>
            <Button
              diabled={isLoading}
              progress={isLoading}
              onClick={editMode ? onEdit : onSubmit}
            >
              {`${editMode ? "Edit" : "Create"} Report`}
            </Button>
          </>
        }
      >
        <Boxed pad="10px 0 ">
          <Input
            type="text"
            label="Case Title"
            placeholder="Enter case title..."
            error={
              (errors = getFieldError("case_title"))
                ? "Case title is required"
                : null
            }
            {...getFieldProps("case_title", {
              initialValue: editMode ? editData?.case_title : "",
              rules: [{ required: true }],
            })}
          />
        </Boxed>
        <Boxed pad="10px 0 ">
          <Input
            type="text"
            label="Lead Judgement by"
            placeholder="Enter lead judgement by..."
            error={
              (errors = getFieldError("lead_judgement_by"))
                ? "Lead Judgement by is required"
                : null
            }
            {...getFieldProps("lead_judgement_by", {
              initialValue: editMode ? editData?.lead_judgement_by : "",
              rules: [{ required: true }],
            })}
          />
        </Boxed>
        <Grid
          desktop="repeat(2, 1fr)"
          tablet="repeat(2, 1fr)"
          mobile="repeat(2, 1fr)"
        >
          <Boxed pad="10px 0 ">
            <Input
              type="text"
              label="Suit Number"
              placeholder="Enter suit number..."
              error={
                (errors = getFieldError("suit_number"))
                  ? "Suit Number is required"
                  : null
              }
              {...getFieldProps("suit_number", {
                initialValue: editMode ? editData?.suit_number : "",
                rules: [{ required: true }],
              })}
            />
          </Boxed>
          <Boxed pad="10px 0 ">
            <Input
              type="text"
              label="Citation"
              placeholder="Enter citation..."
              error={
                (errors = getFieldError("citation"))
                  ? "Citation is required"
                  : null
              }
              {...getFieldProps("citation", {
                initialValue: editMode ? editData?.citation : "",
                rules: [{ required: true }],
              })}
            />
          </Boxed>
          <Boxed pad="10px 0 ">
            <Input
              type="date"
              label="Judgement Date"
              placeholder="Enter judgement date..."
              error={
                (errors = getFieldError("judgement_date"))
                  ? "Judgement Date is required"
                  : null
              }
              {...getFieldProps("judgement_date", {
                initialValue: editMode ? editData?.judgement_date : "",
                rules: [{ required: true }],
              })}
            />
          </Boxed>
          <Boxed pad="10px 0 ">
            {!editMode && (
              <AsyncSelect
                label="Court"
                placeholder="Enter Court..."
                options={modiCourts}
                isloading={isCourtsLoading}
                error={
                  (errors = getFieldError("court_id"))
                    ? "Court is required"
                    : null
                }
                {...getFieldProps("court_id", {
                  initialValue: editMode
                    ? {
                        value: editData?.court?.id,
                        label: editData?.court?.name,
                      }
                    : "",
                  rules: [{ required: true }],
                })}
              />
            )}
          </Boxed>
        </Grid>
        <Boxed pad="10px 0">
          <Textarea
            label="Summary"
            placeholder="Enter Summary..."
            rows={5}
            height="100px"
            error={
              (errors = getFieldError("summary")) ? "Summary is required" : null
            }
            {...getFieldProps("summary", {
              initialValue: editMode ? editData?.summary : "",
              rules: [{ required: true }],
            })}
          />
        </Boxed>
        {editMode && (
          <Boxed pad="10px 0 5px 0">
            <Checkbox
              checked={changeFile}
              label="Change Upload file"
              onClick={() => setChangeFile((prev) => !prev)}
            />
          </Boxed>
        )}
        {(!editMode || changeFile) && (
          <Boxed pad="5px 0 10px 0">
            <Text fontWeight="bold" fontSize={Theme.SecondaryFontSize}>
              Case File
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
        )}
      </ModalComponent>
    </>
  );
};
