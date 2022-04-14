import React from "react";
import styled from "styled-components";
// import { Theme } from "../../utils/theme";

export const StyledTabs = styled.div`
  & .nav-tabs,
  & .tab-content {
    padding: 0 10px;
  }

  & .nav-tabs {
    .nav-item {
      border-radius: ${(props) =>
        `${props.theme.SecondaryRadius} ${props.theme.SecondaryRadius} 0 0`};
      font-size: ${(props) => props.theme.PrimaryFontSize};
      font-weight: bold;
      color: ${(props) => props.theme.SecondaryTextColor};
      background: ${(props) => props.theme.TertiaryDark} !important;
    }

    .nav-link {
      color: ${(props) => props.theme.SecondaryTextColor};
    }
    .disabled {
      opacity: 0.35;
    }
  }
`;
