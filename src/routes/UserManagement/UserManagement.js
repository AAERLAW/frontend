import React, { useEffect, useContext } from "react";
import { ThemeContext } from "styled-components";

import { Grid } from "../../components/Grid.components";
import { Boxed } from "../../components/Boxed.components";
import {
  TableComponent,
  PaginationComponent,
} from "../../components/Table.components";
import { Loader } from "../../components/Loader.components";
import { Button } from "../../components/Button.components";
import { Input } from "../../components/Input.components";
import { Text } from "../../components/Text.components";
import { PageTitle, Icon } from "../../components/style";

import Wrapper from "../Common/FilterWrapper/index";

import { calcViewMode, formatDate } from "../../utils/utils";
import { pageOptions } from "../../utils/constant";
import { Theme } from "../../utils/theme";

import CreateModal from "./CreateModal/index";

export const UserManagement = (props) => {
  // state props receieved
  const {
    isLoading,
    usersList,
    usersTotal,
    fetchActionURL,
    createUsersModal,
    isAdmin,
  } = props;

  // dispatch props recieved
  const { redirect, getAllUsers, openCreateModal } = props;

  const Theme = useContext(ThemeContext);
  let viewMode = calcViewMode();
  let errors;

  const columns = [
    {
      title: "Full Name",
      dataIndex: "last_name",
      key: "last_name",
      render: (text, record) => {
        return (
          <Text>
            {record.first_name} {record.last_name} <br />
            <small>{record.email}</small>
          </Text>
        );
      },
    },
    {
      title: "Phone Number",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Subscription",
      dataIndex: "subscription",
      key: "subscription",
      render: (item) => {
        let status = item && (
          <Text>
            {item?.title ? item?.title : "-- : --"}
            <br />
            {item?.expired ? (
              <span style={{ color: Theme.PrimaryRed }}>Expired</span>
            ) : (
              <span style={{ color: Theme.PrimaryGreen }}>Active</span>
            )}
          </Text>
        );
        return status;
      },
    },
    {
      title: "Roles",
      dataIndex: "roles",
      key: "roles",
      render: (text) => {
        let roles = "";
        text && text.forEach((item) => (roles = `${roles} ${item.name},`));
        return roles;
      },
    },
    {
      title: "Status",
      dataIndex: "enabled",
      key: "enabled",
      align: "center",
      render: (text) => {
        if (text) {
          return (
            <Text
              display="inline-block"
              fontSize={Theme.SecondaryFontSize}
              color={Theme.PrimaryGreen}
              fontWeight="bold"
            >
              {" "}
              <Icon
                color={Theme.PrimaryGreen}
                className="icon icon-circle"
                fontSize={Theme.SecondaryFontSize}
              />{" "}
              ACTIVE{" "}
            </Text>
          );
        } else {
          return (
            <Text
              borderRadius={Theme.TertiaryRadius}
              display="inline-block"
              padding="3px 8px"
              style={{ border: `0.5px solid ${Theme.PrimaryRed}` }}
              bColor={`${Theme.PrimaryRed}20`}
              fontSize={Theme.SecondaryFontSize}
              color={Theme.PrimaryRed}
            >
              {" "}
              <Icon
                color={Theme.PrimaryRed}
                className="icon icon-circle"
                fontSize={Theme.SecondaryFontSize}
              />{" "}
              SUSPENDED{" "}
            </Text>
          );
        }
      },
    },
    // {
    //   title: "Action",
    //   dataIndex: "rule_date",
    //   key: "rule_date",
    //   align: "right",
    //   render: (text) => text && formatDate(text),
    // },
  ];

  useEffect(() => {
    if (isAdmin) {
      let data = { size: 10, page: 1 };
      getAllUsers(data);
    } else {
      redirect("/dashboard");
    }
  }, []);

  return (
    <Boxed pad="20px">
      <PageTitle>User Management</PageTitle>
      <Boxed pad="10px">
        <Boxed pad="10px 0" display="flex">
          {isAdmin ||
            (true && (
              <Button margin="0 0 0 auto" onClick={() => openCreateModal()}>
                Create User
              </Button>
            ))}
        </Boxed>

        <Wrapper
          render={({
            search,
            changePageSize,
            handlePagination,
            currentPage,
            pageSize,
            filter,
          }) => {
            return (
              <Boxed pad="10px 0">
                <Grid
                  desktop="repeat(4, 1fr)"
                  tablet="repeat(4, 1fr)"
                  mobile="repeat(2, 1fr)"
                >
                  <Boxed pad="10px 0">
                    <Input
                      type="search"
                      placeholder="search by name or email"
                      onChange={(value) => search(value, fetchActionURL)}
                    />
                  </Boxed>
                  <Boxed />
                  <Boxed />
                  <Button margin="10px 0" onClick={() => openCreateModal()}>
                    Create User
                  </Button>
                </Grid>
                {isLoading ? (
                  <Boxed pad="20px" display="flex">
                    <Loader margin="2rem auto" />
                  </Boxed>
                ) : (
                  <>
                    <TableComponent columns={columns} data={usersList} />
                    <Boxed pad="10px 0 ">
                      <PaginationComponent
                        total={usersTotal}
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
                          return `${range[0]} - ${range[1]} of ${usersTotal} items`;
                        }}
                      />
                    </Boxed>{" "}
                  </>
                )}
              </Boxed>
            );
          }}
        />
      </Boxed>
      {createUsersModal && <CreateModal />}
    </Boxed>
  );
};
