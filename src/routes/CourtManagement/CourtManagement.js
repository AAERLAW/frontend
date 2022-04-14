import React, { useEffect, useContext } from "react";
import { ThemeContext } from "styled-components";

import Dropdown from "react-bootstrap/Dropdown";

import { Boxed } from "../../components/Boxed.components";
import {
  TableComponent,
  PaginationComponent,
} from "../../components/Table.components";
import { StyledDrpDown, Icon } from "../../components/style";

import Wrapper from "../Common/FilterWrapper/index";

import { calcViewMode, formatDate } from "../../utils/utils";
import { pageOptions } from "../../utils/constant";
// import { Theme } from "../../utils/theme";

import CourtModal from "./CreateCourt/index";
import { Button } from "../../components/Button.components";

export const CourtManagement = (props) => {
  // state props receieved
  const {
    isLoading,
    courts,
    courtsTotal,
    fetchActionURL,
    createCourtModal,
    isAdmin,
  } = props;

  // dispatch props recieved
  const { redirect, getAllCourts, openCourtModal, deleteCourt } = props;

  const Theme = useContext(ThemeContext);
  let viewMode = calcViewMode();
  let errors;

  useEffect(() => {
    if (isAdmin) {
      let data = { size: 10, page: 1 };
      getAllCourts(data);
    } else {
      redirect("/dashboard");
    }
  }, []);

  const onDelete = (item) => {
    const confirmation = window.confirm(
      `You are about to delete "${item.name}".`
    );
    confirmation && deleteCourt(item);
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Date",
      dataIndex: "rule_date",
      key: "rule_date",
      align: "right",
      render: (text, record) => {
        return (
          <Boxed display="inline-block">
            <StyledDrpDown style={{ margin: "auto 0 auto 10px" }}>
              <Dropdown>
                <Dropdown.Toggle variant id="dropdown-basic">
                  <Icon className="icon icon-more-vertical" />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => onDelete(record)}>
                    Delete
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </StyledDrpDown>
          </Boxed>
        );
      },
    },
  ];

  return (
    <Boxed pad="20px">
      <Boxed
        pad="10px"
        bColor={Theme.TertiaryDark}
        borderRadius={Theme.SecondaryRadius}
      >
        <Boxed pad="10px 0" display="flex">
          {isAdmin && (
            <Button margin="0 0 0 auto" onClick={() => openCourtModal()}>
              Create Court
            </Button>
          )}
        </Boxed>
        <Wrapper
          render={({
            changePageSize,
            handlePagination,
            currentPage,
            pageSize,
            filter,
          }) => {
            return (
              <Boxed pad="10px 0">
                <Boxed pad="10px 0 ">
                  <PaginationComponent
                    total={courtsTotal}
                    onChange={(page) => handlePagination(page, fetchActionURL)}
                    current={currentPage}
                    pageCounts={pageOptions}
                    changePageSize={(pageSize) =>
                      changePageSize(pageSize, fetchActionURL)
                    }
                    pageSize={pageSize}
                    itemsDisplayed
                    showTotal={(total, range) => {
                      return `${range[0]} - ${range[1]} of ${courtsTotal} items`;
                    }}
                  />
                </Boxed>
                <TableComponent columns={columns} data={courts} />
                <Boxed pad="10px 0 ">
                  <PaginationComponent
                    total={courtsTotal}
                    onChange={(page) => handlePagination(page, fetchActionURL)}
                    current={currentPage}
                    pageCounts={pageOptions}
                    changePageSize={(pageSize) =>
                      changePageSize(pageSize, fetchActionURL)
                    }
                    pageSize={pageSize}
                    itemsDisplayed
                    showTotal={(total, range) => {
                      return `${range[0]} - ${range[1]} of ${courtsTotal} items`;
                    }}
                  />
                </Boxed>
              </Boxed>
            );
          }}
        />
      </Boxed>
      {createCourtModal ? <CourtModal /> : null}
    </Boxed>
  );
};
