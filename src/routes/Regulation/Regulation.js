import React, { useEffect, useContext } from "react";
import { ThemeContext } from "styled-components";

import Dropdown from "react-bootstrap/Dropdown";

import { Button } from "../../components/Button.components";
import { Grid } from "../../components/Grid.components";
import { Boxed } from "../../components/Boxed.components";
import { Text } from "../../components/Text.components";
import { PaginationComponent } from "../../components/Table.components";
import { Loader } from "../../components/Loader.components";
import { Input } from "../../components/Input.components";
import { PageTitle, StyledDrpDown, Icon } from "../../components/style";

import Wrapper from "../Common/FilterWrapper/index";

import { calcViewMode } from "../../utils/utils";
import { pageOptions } from "../../utils/constant";
// import { Theme } from "../../utils/theme";

import CreateModal from "./CreateModal/index";
import { EmptyState } from "../../components/EmptyState.components";

export const MDAs = (props) => {
  // State props received
  const {
    fetchActionURL,
    regulationList,
    regulationTotal,
    createModal,
    isLoading,
    isAdmin,
  } = props;

  //dispatch props receieved
  const { redirect, getRegulations, openCreateModal, deleteRegulation } = props;

  const Theme = useContext(ThemeContext);

  let viewMode = calcViewMode();
  let errors;

  useEffect(() => {
    let data = {
      page: 1,
      size: 10,
    };
    getRegulations(data);
  }, []);

  const onDelete = (item) => {
    const confirmation = window.confirm(
      `You are about to delete "${item.name}".`
    );
    confirmation && deleteRegulation(item);
  };

  return (
    <Boxed pad="20px">
      <PageTitle>Regulation of M.D.A.'s</PageTitle>
      <Boxed pad="10px 0" display="flex">
        {isAdmin && (
          <Button margin="0 0 0 auto" onClick={() => openCreateModal()}>
            Create Regulation
          </Button>
        )}
      </Boxed>

      <Wrapper
        render={({
          changePageSize,
          handlePagination,
          currentPage,
          pageSize,
          search,
        }) => {
          return (
            <>
              <Grid
                desktop="1fr 1fr 2fr"
                tablet="1fr 0.5fr 2.5fr"
                mobile="repeat(1, 1fr)"
              >
                <Boxed pad="10px 0">
                  <Input
                    type="search"
                    placeholder="Search by name..."
                    onChange={(value) => search(value, fetchActionURL)}
                  />
                </Boxed>
                <Boxed />

                <Boxed pad="10px 0 ">
                  <PaginationComponent
                    total={regulationTotal}
                    onChange={(page) => handlePagination(page, fetchActionURL)}
                    current={currentPage}
                    pageCounts={pageOptions}
                    changePageSize={(pageSize) =>
                      changePageSize(pageSize, fetchActionURL)
                    }
                    pageSize={pageSize}
                    itemsDisplayed
                    showTotal={(total, range) => {
                      return `${range[0]} - ${range[1]} of ${regulationTotal} items`;
                    }}
                  />
                </Boxed>
              </Grid>

              <Boxed
                bColor={Theme.SecondaryDark}
                pad="20px"
                display="flex"
                borderRadius="20px"
                flexWrap="wrap"
              >
                {isLoading ? (
                  <Boxed display="flex" width="100%">
                    <Loader margin="auto" />
                  </Boxed>
                ) : (
                  <>
                    {regulationTotal > 0 ? (
                      <>
                        {regulationTotal > 0
                          ? regulationList.map((item, index) => {
                              return (
                                <Text
                                  key={index}
                                  padding="5px 10px"
                                  margin="5px"
                                  cursor="pointer"
                                  bColor={Theme.TertiaryDark}
                                  hoverBColor={`${Theme.PrimaryColor}20`}
                                  borderRadius="15px"
                                >
                                  <span
                                    onClick={() =>
                                      redirect(
                                        "/regulation/items",
                                        `?regulation_id=${item.id}&name=${item.name}`
                                      )
                                    }
                                  >
                                    {item.name}
                                  </span>
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
                                </Text>
                              );
                            })
                          : null}
                      </>
                    ) : (
                      <Boxed display="flex" width="100%">
                        <EmptyState />
                      </Boxed>
                    )}
                  </>
                )}
              </Boxed>
            </>
          );
        }}
      />
      {createModal ? <CreateModal /> : null}
    </Boxed>
  );
};
