import React from "react";

import { Grid } from "../../components/Grid.components";
import { Boxed } from "../../components/Boxed.components";
import { Text } from "../../components/Text.components";
import { Button } from "../../components/Button.components";

import { calcViewMode } from "../../utils/utils";

import Text_Speech from "../../assets/img/text-to-speech.jpg";
import Text_Editor from "../../assets/img/text-editor.png";

import { Theme } from "../../utils/theme";

import TopNav from "../Common/TopNav/index";
import Footer from "../Common/Footer/index";

export const Features = (props) => {
  const { redirect } = props;
  let viewMode = calcViewMode();
  let errors;

  return (
    <>
      <TopNav />
      <Boxed
        width="100%"
        pad="0"
        height="100%"
        display="flex"
        position="relative"
        minHeight="60vh"
      >
        <Boxed maxWidth="1080px" width="100%" margin="0 auto">
          <Grid desktop="50% 50%" tablet="50% 50%" mobile="100%">
            <Boxed pad="20px 15px" minHeight="300px">
              <img src={Text_Speech} width="100%" alt="home-2" />
            </Boxed>
            <Boxed pad="20px 20px" display="flex">
              <Boxed margin="auto 0">
                <Text margin="10px 0 " fontSize="48px" fontWeight="bold" lineHeight="45px">
                  Powerful real-time speech synthesis.
                </Text>
                <Text color={Theme.SecondaryTextColor} margin="15px 0">
                  With Text-to-Speech Feature, you can listen to Cases and Judgements while multitasking.
                </Text>
              </Boxed>
            </Boxed>
            <Boxed pad="20px 20px" display="flex">
              <Boxed margin="auto 0">
                <Text margin="10px 0 " fontSize="48px" fontWeight="bold" lineHeight="45px">
                Customize your forms and documents online.
                </Text>
                <Text color={Theme.SecondaryTextColor} margin="15px 0">
                  With Text-to-Speech Feature, you can listen to Cases and Judgements while multitasking.
                </Text>
              </Boxed>
            </Boxed>
            <Boxed pad="20px 15px" minHeight="300px">
              <img src={Text_Editor} width="100%" alt="home-2" />
            </Boxed>
          </Grid>
        </Boxed>
      </Boxed>
      <Footer />
    </>
  );
};
