import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "styled-components";

import { Grid } from "../../../components/Grid.components";
import { Input, AsyncSelect } from "../../../components/Input.components";
import { Boxed } from "../../../components/Boxed.components";
import { Button } from "../../../components/Button.components";
import { Loader } from "../../../components/Loader.components";
import { Text } from "../../../components/Text.components";
import { PaginationComponent } from "../../../components/Table.components";
import { PageTitle, Icon, StyledDrpDown } from "../../../components/style";

import Wrapper from "../../Common/FilterWrapper/index";
import Dropdown from "react-bootstrap/Dropdown";

import { calcViewMode, formatDate } from "../../../utils/utils";
import { pageOptions } from "../../../utils/constant";
// import { Theme } from "../../../utils/theme";

import CreateModal from "./CreateModal/index";

export const JudgementList = (props) => {
  // state props recieved
  const {
    judgementList,
    judgementTotal,
    createJudgementModal,
    isLoading,
    isAdmin,
    courtList,
  } = props;
  // dispatch props received
  const {
    fetchActionURL,
    getAllJudgements,
    openCreateJudgementModal,
    openEditJudgement,
    onRead,
    deleteJudgement,
    getAllCourts,
  } = props;

  const Theme = useContext(ThemeContext);
  let viewMode = calcViewMode();
  let errors;

  useEffect(() => {
    let data = {
      page: 0,
      size: 10,
    };
    getAllJudgements(data);
    getAllCourts({ page: 0, size: 50 });
  }, []);

  const onDelete = (item) => {
    const confirmation = window.confirm(
      `You are about to delete "${item.case_title}".`
    );
    confirmation && deleteJudgement(item);
  };

  const [court, setCourt] = useState("");
  let externalParams = {};
  court.id && (externalParams["court_id"] = court.id);
  console.log({ externalParams });

  const modiCourts =
    courtList && courtList.map((item) => ({ label: item.name, ...item }));

  return (
    <Boxed pad="10px">
      <Boxed display="flex">
        <PageTitle>{props.title}</PageTitle>
        <Icon className="icon-refresh-o" margin="0 0 0 auto" />
      </Boxed>
      <Boxed display="flex">
        {isAdmin && (
          <Button
            margin="0 0 0 auto"
            onClick={() => openCreateJudgementModal()}
          >
            Create Report
          </Button>
        )}
      </Boxed>
      <Wrapper
        externalParams={{ ...externalParams }}
        externalActionURL={fetchActionURL}
        render={({
          changePageSize,
          handlePagination,
          currentPage,
          pageSize,
          search,
          filter,
        }) => {
          return (
            <Boxed pad="10px 0">
              {isLoading ? (
                <Boxed pad="20px 0 " display="flex">
                  {" "}
                  <Loader margin="auto" />{" "}
                </Boxed>
              ) : (
                <>
                  <Grid
                    desktop="1fr 1fr 0.25fr 1.75fr"
                    tablet="1fr 1fr 0.25fr 1.75fr"
                    mobile="repeat(1, 1fr)"
                  >
                    <Boxed pad="5px 0" margin="auto 0 0 0">
                      <Input
                        value={filter.search}
                        placeholder="Search by report title"
                        type="search"
                        onChange={(e) => search(e, fetchActionURL)}
                      />
                    </Boxed>
                    <Boxed pad="5px 0">
                      <AsyncSelect
                        label="Court"
                        placeholder="Select court Item"
                        isClearable
                        options={modiCourts}
                        onChange={(e) => setCourt(e)}
                      />
                    </Boxed>

                    <Boxed />
                    <Boxed pad="5px 0" margin="auto 0 0 0">
                      <PaginationComponent
                        total={judgementTotal}
                        onChange={(page) =>
                          handlePagination(page, fetchActionURL)
                        }
                        current={currentPage}
                        pageCounts={pageOptions}
                        changePageSize={(pageSize) =>
                          changePageSize(pageSize, fetchActionURL)
                        }
                        pageSize={pageSize}
                        itemsDisplayed
                        showTotal={(total, range) => {
                          return `${range[0]} - ${range[1]} of ${judgementTotal} items`;
                        }}
                      />
                    </Boxed>
                  </Grid>

                  {judgementList &&
                    judgementList.map((item, index) => (
                      <Boxed
                        key={index}
                        margin="5px 0"
                        pad="20px"
                        bColor={Theme.TertiaryDark}
                        borderRadius={Theme.SecondaryRadius}
                        boxShadow={Theme.PrimaryShadow}
                      >
                        <Grid
                          desktop="auto 30px"
                          tablet="auto 30px"
                          mobile="auto 30px"
                        >
                          <Text
                            fontWeight="bold"
                            onClick={() => onRead(item)}
                            cursor="pointer"
                          >
                            {item.case_title}
                          </Text>
                          {isAdmin && (
                            <Boxed>
                              <StyledDrpDown style={{ margin: "auto 0" }}>
                                <Dropdown>
                                  <Dropdown.Toggle variant id="dropdown-basic">
                                    <Icon className="icon icon-more-vertical" />
                                  </Dropdown.Toggle>

                                  <Dropdown.Menu>
                                    {/* <Dropdown.Item
                                      onClick={() => openEditJudgement(item)}
                                    >
                                      Edit
                                    </Dropdown.Item> */}
                                    <Dropdown.Item
                                      onClick={() => onDelete(item)}
                                    >
                                      Delete
                                    </Dropdown.Item>
                                  </Dropdown.Menu>
                                </Dropdown>
                              </StyledDrpDown>
                            </Boxed>
                          )}
                        </Grid>

                        <Grid
                          desktop="repeat(2, 1fr)"
                          tablet="repeat(2, 1fr)"
                          mobile="repeat(1, 1fr)"
                          pad="5px 0"
                        >
                          <Text
                            color={Theme.SecondaryTextColor}
                            fontSize={Theme.SecondaryFontSize}
                          >
                            Citation: <b>{item.citation}</b>
                          </Text>
                          <Text
                            color={Theme.SecondaryTextColor}
                            fontSize={Theme.SecondaryFontSize}
                          >
                            Appeal No.: <b>{item.suit_number}</b>
                          </Text>
                        </Grid>
                        <Grid
                          desktop="repeat(2, 1fr)"
                          tablet="repeat(2, 1fr)"
                          mobile="repeat(1, 1fr)"
                          pad="5px 0"
                        >
                          <Text
                            padding="5px 0"
                            color={Theme.SecondaryTextColor}
                            fontSize={Theme.SecondaryFontSize}
                          >
                            Lead Judgement: <b>{item.lead_judgement_by}</b>
                          </Text>
                          <Text
                            padding="5px 0"
                            color={Theme.SecondaryTextColor}
                            fontSize={Theme.SecondaryFontSize}
                          >
                            Date of Judgement:
                            <b>{formatDate(item.judgement_date)}</b>
                          </Text>
                        </Grid>
                      </Boxed>
                    ))}

                  <Boxed pad="10px 0 ">
                    <PaginationComponent
                      total={judgementTotal}
                      onChange={(page) =>
                        handlePagination(page, fetchActionURL)
                      }
                      current={currentPage}
                      pageCounts={pageOptions}
                      changePageSize={(pageSize) =>
                        changePageSize(pageSize, fetchActionURL)
                      }
                      pageSize={pageSize}
                      itemsDisplayed
                      showTotal={(total, range) => {
                        return `${range[0]} - ${range[1]} of ${judgementTotal} items`;
                      }}
                    />
                  </Boxed>
                </>
              )}
            </Boxed>
          );
        }}
      />
      {isAdmin && createJudgementModal ? <CreateModal /> : null}
    </Boxed>
  );
};
