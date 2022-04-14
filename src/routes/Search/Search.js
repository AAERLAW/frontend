import React, { useState, useContext, useEffect } from "react";
import { ThemeContext } from "styled-components";

import { Grid } from "../../components/Grid.components";
import { Boxed } from "../../components/Boxed.components";
import { Text } from "../../components/Text.components";
import { EmptyState } from "../../components/EmptyState.components";
import { Loader } from "../../components/Loader.components";
import { PageTitle, Icon } from "../../components/style";

import { calcViewMode, formatDate } from "../../utils/utils";

import EMPTY from "../../assets/img/search-result.png";
import { Theme } from "../../utils/theme";

export const Search = (props) => {
  // state props recieved
  const { params, profile, judgementList, judgementTotal, isLoading } = props;

  // dispatch props received
  const { redirect, onSearch, onReadReport } = props;

  const Theme = useContext(ThemeContext);

  const search = params.search;

  useEffect(() => {
    search && onSearch({ search, page: 1, size: 30 });
  }, [search]);

  let viewMode = calcViewMode();
  let errors;

  return (
    <Boxed pad="20px" display="flex">
      <Boxed maxWidth="1080px" margin="0 auto" width="100%">
        <Boxed pad="10px 0">
          <PageTitle>Search Results for "{params?.search}"</PageTitle>
        </Boxed>

        {isLoading ? (
          <Boxed pad="20px" display="flex">
            <Loader margin="auto" />
          </Boxed>
        ) : (
          <>
            {judgementList.length < 1 ? (
              <EmptyState />
            ) : (
              <>
                {judgementList &&
                  judgementList.map((item, index) => (
                    <Boxed
                      key={index}
                      margin="5px 0"
                      pad="20px"
                      bColor={Theme.TertiaryDark}
                      borderRadius={Theme.SecondaryRadius}
                      boxShadow={Theme.PrimaryShadow}
                      onClick={() => onReadReport(item)}
                      cursor="pointer"
                    >
                      <Text fontWeight="bold">{item.case_title}</Text>

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
                          SuitNumber: <b>{item.suit_number}</b>
                        </Text>
                      </Grid>
                      <Text
                        padding="5px 0"
                        color={Theme.SecondaryTextColor}
                        fontSize={Theme.SecondaryFontSize}
                      >
                        Judged by: <b>{item.lead_judgement_by}</b> on{" "}
                        <b>{formatDate(item.judgement_date)}</b>
                      </Text>
                    </Boxed>
                  ))}
              </>
            )}
          </>
        )}
      </Boxed>
    </Boxed>
  );
};
