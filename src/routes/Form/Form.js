import React, { useEffect, useContext } from "react";
import { ThemeContext } from "styled-components";

import Dropdown from "react-bootstrap/Dropdown";

import { Grid } from "../../components/Grid.components";
import { Boxed } from "../../components/Boxed.components";
import { Text } from "../../components/Text.components";
import { Button } from "../../components/Button.components";
import { PaginationComponent } from "../../components/Table.components";
import { PageTitle, StyledDrpDown, Icon } from "../../components/style";

import Wrapper from "../Common/FilterWrapper/index";

import { calcViewMode } from "../../utils/utils";
import { pageOptions } from "../../utils/constant";
// import { Theme } from "../../utils/theme";

import CreateModal from "./CreateModal/index";

export const Form = (props) => {
  // state props recieved
  const {
    formList,
    formTotal,
    params,
    createFormModal,
    fetchActionURL,
    isAdmin,
    isBASIC,
  } = props;

  // dispatch props recieved
  const { redirect, getAllForms, openCreateModal, openReader, deleteForm } =
    props;

  const Theme = useContext(ThemeContext);
  let viewMode = calcViewMode();
  let errors;

  useEffect(() => {
    if (!isBASIC || isAdmin) {
      let data = {
        page: 1,
        size: 10,
        court_form_item: params.court_form_item_id,
      };
      getAllForms(data);
    } else {
      redirect("/dashboard");
    }
  }, []);

  const onDelete = (item) => {
    const confirmation = window.confirm(
      `You are about to delete "${item.title}".`
    );
    confirmation && deleteForm(item);
  };

  // onReader = (data) => {
  //   openReader(data);
  // };

  return (
    <Boxed pad="20px">
      <PageTitle>Form / {params.name}</PageTitle>
      <Wrapper
        externalActionURL={fetchActionURL}
        externalParams={{ court_form_item: params.court_form_item_id }}
        render={({
          changePageSize,
          handlePagination,
          currentPage,
          pageSize,
          filter,
        }) => {
          return (
            <>
              <Boxed pad="10px 0" display="flex">
                {isAdmin && (
                  <Button margin="0 0 0 auto" onClick={() => openCreateModal()}>
                    Create Form
                  </Button>
                )}
              </Boxed>
              <Boxed pad="10px 0 ">
                <PaginationComponent
                  total={formTotal}
                  onChange={(page) => handlePagination(page, fetchActionURL)}
                  current={currentPage}
                  pageCounts={pageOptions}
                  changePageSize={(pageSize) =>
                    changePageSize(pageSize, fetchActionURL)
                  }
                  pageSize={pageSize}
                  itemsDisplayed
                  showTotal={(total, range) => {
                    return `${range[0]} - ${range[1]} of ${formTotal} items`;
                  }}
                />
              </Boxed>
              <Boxed
                bColor={Theme.SecondaryDark}
                pad="20px"
                borderRadius="20px"
                flexWrap="wrap"
              >
                <Grid
                  desktop="repeat(3, 1fr)"
                  tablet="repeat(2,1fr)"
                  mobile="repeat(1, 1fr)"
                >
                  {formTotal > 0
                    ? formList.map((item, index) => {
                        return (
                          <Boxed
                            key={index}
                            pad="5px 10px"
                            cursor="pointer"
                            borderRadius={Theme.PrimaryRadius}
                            margin="5px"
                            bColor={Theme.TertiaryDark}
                            hoverBColor={`${Theme.PrimaryColor}20`}
                          >
                            <Grid
                              desktop="auto 20px"
                              tablet="auto 20px"
                              mobile="auto 20px"
                            >
                              <Boxed
                                display="flex"
                                style={{ flexFlow: "column" }}
                              >
                                <Text onClick={() => openReader(item)}>
                                  {item.title} <br />
                                </Text>
                                <Text
                                  color={Theme.SecondaryTextColor}
                                  margin="auto 0 0 0"
                                >
                                  {item.year}
                                </Text>
                              </Boxed>
                              {isAdmin && (
                                <Boxed display="inline-block">
                                  <StyledDrpDown
                                    style={{ margin: "auto 0 auto 10px" }}
                                  >
                                    <Dropdown>
                                      <Dropdown.Toggle
                                        variant
                                        id="dropdown-basic"
                                      >
                                        <Icon className="icon icon-more-vertical" />
                                      </Dropdown.Toggle>

                                      <Dropdown.Menu>
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
                          </Boxed>
                        );
                      })
                    : null}
                </Grid>
              </Boxed>
            </>
          );
        }}
      />
      {createFormModal ? (
        <CreateModal
          court_form_item_id={params.court_form_item_id}
          court_form_item_name={params.name}
        />
      ) : null}
    </Boxed>
  );
};
