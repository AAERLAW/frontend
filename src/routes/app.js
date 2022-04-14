import React from "react";
import { ThemeProvider } from "styled-components";
import { connect } from "dva";
import { withRouter } from "dva/router";

import HeaderLayout from "./Layouts/headerLayout/index";
import BodyLayout from "./Layouts/bodyLayout/index";

import { AlertComponent } from "../components/Alert.components";
import { Loader } from "../components/Loader.components";
import { Boxed } from "../components/Boxed.components";

import { Theme, Theme2 } from "../utils/theme";

const readURL = [
	"judgement/onRead",
	"mda/onRead",
	"law/readLaw",
	"court/onReadRule",
	"court/onRead",
];

const App = (props) => {
	const { children, openRoutes, history, loading } = props;
	const { nightMode } = props.app;

	const exist =
		openRoutes.findIndex((item) => item === history.location.pathname) > -1;

	let pageLoader = false;
	readURL.forEach((item) => {
		loading.effects[item] && (pageLoader = true);
	});

	return (
		<React.Fragment>
			<ThemeProvider theme={exist || !nightMode ? Theme : Theme2}>
				<React.Fragment>
					{exist ? (
						<Boxed minHeight="100vh">{children}</Boxed>
					) : (
						<React.Fragment>
							<BodyLayout>
								<HeaderLayout />
								<div />
								<div className="body-layout-children">{children}</div>
							</BodyLayout>
							{pageLoader && (
								<Boxed
									className="page-loader"
									width="100%"
									minHeight="100vh"
									position="fixed"
									display="flex"
									background="#77777750"
									zIndex="350"
									style={{
										top: "0",
										bottom: "0",
										zIndex: "350",
									}}
								>
									<Loader margin="auto" />
								</Boxed>
							)}
						</React.Fragment>
					)}
					<AlertComponent
						stack={{ limit: 3, spacing: 10 }}
						effect="slide"
						position="top-right"
						offset={10}
					/>
				</React.Fragment>
			</ThemeProvider>
		</React.Fragment>
	);
};

export default withRouter(
	connect(({ app, loading }) => ({ app, loading }))(App)
);
