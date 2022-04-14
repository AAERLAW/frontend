import React, { useEffect, useContext } from "react";
import { ThemeContext } from "styled-components";

import Dropdown from "react-bootstrap/Dropdown";

import { Boxed } from "../../components/Boxed.components";
import { Text } from "../../components/Text.components";
import { Button } from "../../components/Button.components";
import { Loader } from "../../components/Loader.components";
import {
  TableComponent,
  PaginationComponent,
} from "../../components/Table.components";
import { PageTitle, Icon, StyledDrpDown } from "../../components/style";

import Wrapper from "../Common/FilterWrapper/index";

import { calcViewMode, formatDate } from "../../utils/utils";
import { pageOptions } from "../../utils/constant";
// import { Theme } from "../../utils/theme";

import CreateModal from "./CreateModal/index";

export const CourtRules = (props) => {
  // state props receieved
  const {
    isLoading,
    rules,
    rulesTotal,
    fetchActionURL,
    createRuleModal,
    isAdmin,
  } = props;

  // dispatch props recieved
  const {
    redirect,
    getAllRules,
    openCreateModal,
    openReader,
    deleteCourtRule,
  } = props;

  const Theme = useContext(ThemeContext);
  let viewMode = calcViewMode();
  let errors;

  useEffect(() => {
    let data = { size: 10, page: 1 };
    getAllRules(data);
  }, []);

  const columns = [
    {
      title: "Tiltle",
      dataIndex: "title",
      key: "title",
      render: (text, record) => (
        <Text onClick={() => openReader(record)} cursor="pointer">
          {text}
        </Text>
      ),
    },
    {
      title: "Jurisdiction",
      dataIndex: "jurisdiction",
      key: "jurisdiction",
    },
    {
      title: "Date",
      dataIndex: "rule_date",
      key: "rule_date",
      align: "right",
      render: (text) => text && formatDate(text),
    },
  ];

  const onDelete = (item) => {
    const confirmation = window.confirm(
      `You are about to delete "${item.title}".`
    );
    confirmation && deleteCourtRule(item);
  };

  const adminSection = {
    title: "",
    dataIndex: "action",
    key: "action",
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
  };

  isAdmin && columns.push(adminSection);

  return (
    <Boxed pad="20px">
      <Boxed
        pad="10px"
        bColor={Theme.TertiaryDark}
        borderRadius={Theme.SecondaryRadius}
      >
        <Boxed pad="10px 0" display="flex">
          {isAdmin && (
            <Button margin="0 0 0 auto" onClick={() => openCreateModal()}>
              Create Rule
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
                    total={rulesTotal}
                    onChange={(page) => handlePagination(page, fetchActionURL)}
                    current={currentPage}
                    pageCounts={pageOptions}
                    changePageSize={(pageSize) =>
                      changePageSize(pageSize, fetchActionURL)
                    }
                    pageSize={pageSize}
                    itemsDisplayed
                    showTotal={(total, range) => {
                      return `${range[0]} - ${range[1]} of ${rulesTotal} items`;
                    }}
                  />
                </Boxed>
                {isLoading ? (
                  <Boxed pad="20px 0" display="flex" width="100%">
                    <Loader margin="auto" />
                  </Boxed>
                ) : (
                  <TableComponent columns={columns} data={rules} />
                )}
                <Boxed pad="10px 0 ">
                  <PaginationComponent
                    total={rulesTotal}
                    onChange={(page) => handlePagination(page, fetchActionURL)}
                    current={currentPage}
                    pageCounts={pageOptions}
                    changePageSize={(pageSize) =>
                      changePageSize(pageSize, fetchActionURL)
                    }
                    pageSize={pageSize}
                    itemsDisplayed
                    showTotal={(total, range) => {
                      return `${range[0]} - ${range[1]} of ${rulesTotal} items`;
                    }}
                  />
                </Boxed>
              </Boxed>
            );
          }}
        />
      </Boxed>
      {createRuleModal && <CreateModal />}
    </Boxed>
  );
};
