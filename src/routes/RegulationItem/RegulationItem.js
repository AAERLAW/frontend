import React, { useEffect, useContext } from "react";
import { ThemeContext } from "styled-components";

import Dropdown from "react-bootstrap/Dropdown";

import { Grid } from "../../components/Grid.components";
import { Boxed } from "../../components/Boxed.components";
import { Text } from "../../components/Text.components";
import { Button } from "../../components/Button.components";
import { PaginationComponent } from "../../components/Table.components";
import { Loader } from "../../components/Loader.components";
import { PageTitle, StyledDrpDown, Icon } from "../../components/style";

import Wrapper from "../Common/FilterWrapper/index";

import { calcViewMode } from "../../utils/utils";
import { pageOptions } from "../../utils/constant";
// import { Theme } from "../../utils/theme";

import CreateModal from "./CreateModal/index";

export const RegulationItem = (props) => {
  // dispatch props recieved
  const {
    regulationItemsList,
    regulationItemsTotal,
    params,
    createRegItemModal,
    fetchActionURL,
    isLoading,
    isAdmin,
  } = props;

  // dispatch props recieved
  const {
    redirect,
    getAllRegulationItems,
    openCreateModal,
    openReader,
    deleteRegulationItem,
  } = props;
  const Theme = useContext(ThemeContext);
  let viewMode = calcViewMode();
  let errors;

  useEffect(() => {
    let data = {
      page: 1,
      size: 10,
      regulation: params.regulation_id,
    };
    getAllRegulationItems(data);
  }, []);

  const onDelete = (item) => {
    const confirmation = window.confirm(
      `You are about to delete "${item.name}".`
    );
    confirmation && deleteRegulationItem(item);
  };

  return (
    <Boxed pad="20px">
      <PageTitle>Regulation of M.D.A.'s / {params.name}</PageTitle>
      <Boxed pad="10px 0" display="flex">
        {isAdmin && (
          <Button margin="0 0 0 auto" onClick={() => openCreateModal()}>
            Create Item
          </Button>
        )}
      </Boxed>
      <Wrapper
        externalActionURL={fetchActionURL}
        externalParams={{ regulation: params.regulation_id }}
        render={({
          changePageSize,
          handlePagination,
          currentPage,
          pageSize,
          filter,
        }) => {
          return (
            <>
              <Boxed pad="10px 0 ">
                <PaginationComponent
                  total={regulationItemsTotal}
                  onChange={(page) => handlePagination(page, fetchActionURL)}
                  current={currentPage}
                  pageCounts={pageOptions}
                  changePageSize={(pageSize) =>
                    changePageSize(pageSize, fetchActionURL)
                  }
                  pageSize={pageSize}
                  itemsDisplayed
                  showTotal={(total, range) => {
                    return `${range[0]} - ${range[1]} of ${regulationItemsTotal} items`;
                  }}
                />
              </Boxed>
              <Boxed
                bColor={Theme.SecondaryDark}
                pad="20px"
                borderRadius="20px"
                flexWrap="wrap"
              >
                {isLoading ? (
                  <Boxed display="flex">
                    <Loader margin="auto" />
                  </Boxed>
                ) : (
                  <Grid
                    desktop="repeat(3, 1fr)"
                    tablet="repeat(2,1fr)"
                    mobile="repeat(1, 1fr)"
                  >
                    {regulationItemsTotal > 0
                      ? regulationItemsList.map((item, index) => {
                          return (
                            <Boxed
                              key={index}
                              pad="5px 10px"
                              borderRadius={Theme.PrimaryRadius}
                              margin="5px"
                              bColor={Theme.TertiaryDark}
                              hoverBColor={`${Theme.PrimaryColor}20`}
                              display="flex"
                              style={{ flexFlow: "column" }}
                            >
                              <Grid
                                desktop="auto 20px"
                                tablet="auto 20px"
                                mobile="auto 20px"
                              >
                                <Text
                                  onClick={() => openReader(item)}
                                  cursor="pointer"
                                >
                                  {item.name} <br />
                                </Text>
                                {isAdmin && (
                                  <Boxed display="flex">
                                    <StyledDrpDown
                                      style={{ margin: "auto 0 x" }}
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
                              <Text
                                color={Theme.SecondaryTextColor}
                                margin="auto 0 0 0"
                              >
                                {item.year}
                              </Text>
                            </Boxed>
                          );
                        })
                      : null}
                  </Grid>
                )}
              </Boxed>
            </>
          );
        }}
      />
      {createRegItemModal ? (
        <CreateModal
          regulation_id={params.regulation_id}
          regulation_name={params.name}
        />
      ) : null}
    </Boxed>
  );
};
