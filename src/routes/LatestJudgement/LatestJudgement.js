import React, { useState, useContext } from "react";
import { ThemeContext } from "styled-components";

import { Tabs, Tab } from "react-bootstrap";

import { Input } from "../../components/Input.components";
import { Grid } from "../../components/Grid.components";
import { Boxed } from "../../components/Boxed.components";
import { Text } from "../../components/Text.components";
import { Button } from "../../components/Button.components";
import { PageTitle } from "../../components/style";

import { calcViewMode } from "../../utils/utils";

import LOGO from "../../assets/img/logo.png";
// import { Theme } from "../../utils/theme";

import JudgementList from "./JudgementList/index";

import { StyledTabs } from "./style";

export const LatestJudgement = (props) => {
  const [key, setKey] = useState("ALL");

  const Theme = useContext(ThemeContext);

  const { redirect } = props;
  let viewMode = calcViewMode();
  let errors;

  return (
    <Boxed margin="20px">
      <JudgementList title="ALL REPORTS" />
    </Boxed>
  );
};
