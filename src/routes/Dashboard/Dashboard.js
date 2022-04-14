import React, { useContext, useEffect } from "react";
import { ThemeContext } from "styled-components";

import { Grid } from "../../components/Grid.components";
import { Boxed } from "../../components/Boxed.components";
import { Text } from "../../components/Text.components";
import { Loader } from "../../components/Loader.components";
import { PageTitle, Icon } from "../../components/style";

import {
  calcViewMode,
  formatDate,
  formatCount,
  truncateText,
} from "../../utils/utils";
// import { Theme } from "../../utils/theme";

export const Dashboard = (props) => {
  // state props recieved
  const { profile, isAdmin, loadingDashboard, dashboardStats, isBASIC } = props;
  const { law_reports_count, rule_regulation_count } = dashboardStats;
  const judgementList = dashboardStats.reports ? dashboardStats.reports : [];
  const regulationList = dashboardStats.regulations
    ? dashboardStats.regulations
    : [];
  const formList = dashboardStats.court_forms ? dashboardStats.court_forms : [];

  // dispatch props received
  const { redirect, getDashboardStats, onReadJudgement } = props;

  const Theme = useContext(ThemeContext);

  useEffect(() => {
    getDashboardStats({ page: 1, size: 5 });
  }, []);

  let viewMode = calcViewMode();
  let errors;

  return (
    <Boxed pad="20px" display="flex">
      <Boxed margin="0 auto" pad="3% 0 0 0" width="100%">
        <Boxed margin="0 0 0 40px">
          <PageTitle fontSize="24px" color={Theme.PrimaryTextColor}>
            Welcome back 👋🏽,{" "}
          </PageTitle>
          <Text fontSize="24px">{profile?.username}</Text>
        </Boxed>
        <Grid
          desktop="repeat(3, 1fr)"
          tablet="repeat(3, 1fr)"
          mobile="repeat(1, 1fr)"
          pad="20px 0 0 0"
        >
          <Boxed
            margin="0.25rem"
            pad="20px"
            borderRadius={Theme.SecondaryRadius}
            background={`linear-gradient(to bottom right, ${Theme.PrimaryDark}, ${Theme.PrimaryTextColor}40)`}
            boxShadow={Theme.PrimaryShadow}
          >
            <Text fontWeight="bold" display="flex">
              Law Reports{" "}
              <Icon
                className="icon icon-clipboard"
                fontSize="16px"
                margin="auto 0 auto auto"
                color={Theme.PrimaryTextColor}
              />
            </Text>
            <Text fontWeight="bold" padding="15px 0 5px 0" fontSize="24px">
              {formatCount(law_reports_count || 0)}+
            </Text>
            {/* <Text fontWeight="light">3 New Updates</Text> */}
          </Boxed>

          <Boxed
            margin="0.25rem"
            pad="20px"
            borderRadius={Theme.SecondaryRadius}
            background={`linear-gradient(to bottom right, ${Theme.PrimaryDark}, ${Theme.PrimaryColor}40)`}
            boxShadow={Theme.PrimaryShadow}
          >
            <Text fontWeight="bold" display="flex">
              Rules & Regulation
              <Icon
                className="icon icon-codepen"
                fontSize="16px"
                margin="auto 0 auto auto"
                color={Theme.PrimaryTextColor}
              />
            </Text>
            <Text fontWeight="bold" padding="15px 0 5px 0" fontSize="24px">
              {formatCount(rule_regulation_count || 0)}+
            </Text>
            {/* <Text fontWeight="light">2 New Updates</Text> */}
          </Boxed>

          {!isAdmin && (
            <Boxed
              margin="0.25rem"
              pad="20px"
              borderRadius={Theme.SecondaryRadius}
              background={`linear-gradient(to bottom right, ${Theme.PrimaryDark}, ${Theme.PrimaryYellow}40)`}
              boxShadow={Theme.PrimaryShadow}
            >
              <Text fontWeight="bold" display="flex">
                You are currently using the {profile?.subscription?.title} Plan
              </Text>

              <Text padding="25px 0 0 0" fontWeight="bold" fontSize="16px">
                {profile?.subscription?.end_date &&
                  formatDate(profile.subscription.end_date)}
              </Text>
              <Text fontWeight="light">End date.</Text>
            </Boxed>
          )}
        </Grid>
        <Grid
          desktop="repeat(3, 1fr)"
          tablet="repeat(2, 1fr)"
          mobile="repeat(1, 1fr)"
          pad="20px 0 0 0"
        >
          {/* ############   R E P O R T   U P D A T E S   ############ */}
          <Boxed
            background={Theme.TertiaryDark}
            borderRadius={Theme.SecondaryRadius}
            boxShadow={Theme.PrimaryShadow}
            margin="0.2rem"
            pad="10px 0"
          >
            <Text fontWeight="bold" padding="10px">
              Latest Reports
            </Text>
            {loadingDashboard ? (
              <Boxed display="flex" pad="10px">
                <Loader margin="auto" />
              </Boxed>
            ) : (
              <>
                {judgementList.length > 0 &&
                  judgementList.map((item, index) => (
                    <Grid
                      key={index}
                      desktop="auto 40px"
                      tablet="auto 40px"
                      mobile="auto 40px"
                      background={index % 2 > 0 && Theme.PrimaryDark}
                    >
                      <Boxed pad="10px ">
                        <Text
                          color={Theme.SecondaryTextColor}
                          cursor="pointer"
                          onClick={() => onReadJudgement(item)}
                        >
                          {item.case_title && truncateText(item.case_title, 27)}
                        </Text>
                        <Text
                          color={Theme.SecondaryTextColor}
                          fontSize={Theme.SecondaryFontSize}
                        >
                          {formatDate(item.judgement_date)}
                        </Text>
                      </Boxed>
                      <Boxed display="flex">
                        <Icon margin="auto" className="icon icon-file-text" />
                      </Boxed>
                    </Grid>
                  ))}
              </>
            )}
          </Boxed>

          {/* ############   F O R M S   U P D A T E S   ############ */}
          {!isBASIC && (
            <Boxed
              background={Theme.TertiaryDark}
              borderRadius={Theme.SecondaryRadius}
              boxShadow={Theme.PrimaryShadow}
              margin="0.2rem"
              pad="10px 0"
            >
              <Text fontWeight="bold" padding="15px 10px">
                LATEST FORMS
              </Text>
              {loadingDashboard ? (
                <Boxed display="flex" pad="10px">
                  <Loader margin="auto" />
                </Boxed>
              ) : (
                <>
                  {formList.length > 0 &&
                    formList.map((item, index) => (
                      <Grid
                        key={index}
                        desktop="auto 40px"
                        tablet="auto 40px"
                        mobile="auto 40px"
                        background={index % 2 > 0 && Theme.PrimaryDark}
                      >
                        <Boxed pad="10px ">
                          <Text
                            color={Theme.SecondaryTextColor}
                            cursor="pointer"
                            onClick={() =>
                              redirect(
                                `/court-forms/items`,
                                `?court_form_id=${item.id}&name=${item.title}`
                              )
                            }
                          >
                            {item.title && truncateText(item.title, 27)}
                          </Text>
                        </Boxed>
                        <Boxed display="flex">
                          <Icon margin="auto" className="icon icon-file-text" />
                        </Boxed>
                      </Grid>
                    ))}
                </>
              )}
            </Boxed>
          )}

          {/* ############   R E G U L A T I O N S   U P D A T E S   ############ */}
          <Boxed
            background={Theme.TertiaryDark}
            borderRadius={Theme.SecondaryRadius}
            boxShadow={Theme.PrimaryShadow}
            margin="0.2rem"
            pad="20px 0"
          >
            <Text fontWeight="bold" padding="15px 10px">
              RECENT REGULATIONS
            </Text>
            {loadingDashboard ? (
              <Boxed display="flex" pad="10px">
                <Loader margin="auto" />
              </Boxed>
            ) : (
              <>
                {regulationList.length > 0 &&
                  regulationList.map((item, index) => (
                    <Grid
                      key={index}
                      desktop="auto 40px"
                      tablet="auto 40px"
                      mobile="auto 40px"
                      background={index % 2 > 0 && Theme.PrimaryDark}
                    >
                      <Boxed pad="10px ">
                        <Text
                          color={Theme.SecondaryTextColor}
                          cursor="pointer"
                          onClick={() =>
                            redirect(
                              "/regulation/items",
                              `?regulation_id=${item.id}&name=${item.name}`
                            )
                          }
                        >
                          {item.name && truncateText(item.name, 27)}
                        </Text>
                      </Boxed>
                      <Boxed display="flex">
                        <Icon margin="auto" className="icon icon-file-text" />
                      </Boxed>
                    </Grid>
                  ))}
              </>
            )}
          </Boxed>
        </Grid>
      </Boxed>
    </Boxed>
  );
};
