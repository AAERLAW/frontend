import React from "react";
import {
	BrowserRouter as Router,
	Route,
	Switch,
	routerRedux,
	Redirect,
} from "dva/router";
import App from "./routes/app";
import { storageToken } from "./utils/constant";

// Pages Route Imports
import Home from "./routes/Home/index";
import Login from "./routes/Login/index";
import Registration from "./routes/Registration/index";
import ForgotPassword from "./routes/ForgotPassword/index";
import ResetPassword from "./routes/ResetPassword/index";
import Features from "./routes/Features/index";
import Pricing from "./routes/Pricing/Pricing";
import EmailConfirmation from "./routes/EmailConfirmation/index";
import SocialLogin from "./routes/Login/SocialLogin/index";
import Privacy from "./routes/Privacy/index";
import FAQ from "./routes/FAQ/index";
import VerifyPayment from "./routes/PaymentVerification/index";

import Dashboard from "./routes/Dashboard/index";
import Subscription from "./routes/Subscription/index";
import LatestJudgement from "./routes/LatestJudgement/index";
import FederationLaws from "./routes/FederationLaws/index";
import Regulation from "./routes/Regulation/index";
import RegulationItem from "./routes/RegulationItem/index";
import CourtRules from "./routes/CourtRules/index";
import CourtManagement from "./routes/CourtManagement/index";
import CourtForms from "./routes/CourtForms/index";
import CourtFormsItem from "./routes/CourtFormsItem/index";
import Form from "./routes/Form/index";
import Search from "./routes/Search/index";
import Reader from "./routes/Reader/index.js";
import UsersManagement from "./routes/UserManagement/index";
import AboutUs from "./routes/AboutUs/AboutUs";
import TermsAndCondition from "./routes/TermsAndCondition/TermsAndCondition";
import PrivacyPolicy from "./routes/PrivacyPolicy/PrivacyPolicy";

const { ConnectedRouter } = routerRedux;

const registerModel = (app, model) => {
	if (
		!(app._models.filter((m) => m.namespace === model.namespace).length === 1)
	) {
		app.model(model);
	}
};

const PrivateRoute = (props) => {
	const AuthToken = localStorage.getItem(`${storageToken}`);
	if (AuthToken) {
		return <Route {...props} />;
	} else {
		return <Redirect to={{ pathname: "/login" }} />;
	}
};

const NonPrivateRoute = (props) => {
	const AuthToken = localStorage.getItem(`${storageToken}`);
	if (AuthToken) {
		return <Redirect to={{ pathname: "/dashboard" }} />;
	} else {
		return <Route {...props} />;
	}
};

const openRoutes = [
	"/",
	"/login",
	"/social",
	"/pricing",
	"/features",
	"/forgotpassword",
	"/resetpassword",
	"/subscription",
	"/registration",
	"/activation",
	"/privacy",
	"/faq",
	"/about-aaer",
	"/terms-and-conditions",
	"/privacy-policy",
];

export function RouterConfig({ history, app }) {
	return (
		<ConnectedRouter history={history}>
			<App openRoutes={openRoutes} history={history}>
				<Switch>
					{/* #########   S T A R T :   O P E N      U R L S   #########*/}
					<Route
						path="/"
						exact
						render={(props) => {
							return <Home {...props} />;
						}}
					/>
					<NonPrivateRoute
						path="/login"
						exact
						render={(props) => {
							return <Login {...props} />;
						}}
					/>
					<Route
						path="/social"
						exact
						render={(props) => {
							return <SocialLogin {...props} />;
						}}
					/>
					<Route
						path="/registration"
						exact
						render={(props) => {
							return <Registration {...props} />;
						}}
					/>
					<Route
						path="/forgotpassword"
						exact
						render={(props) => {
							return <ForgotPassword {...props} />;
						}}
					/>
					<Route
						path="/resetpassword"
						exact
						render={(props) => {
							return <ResetPassword {...props} />;
						}}
					/>
					<Route
						path="/activation"
						exact
						render={(props) => {
							return <EmailConfirmation {...props} />;
						}}
					/>
					<Route
						path="/features"
						exact
						render={(props) => {
							return <Features {...props} />;
						}}
					/>
					<Route
						path="/pricing"
						exact
						render={(props) => {
							return <Pricing {...props} />;
						}}
					/>

					<Route
						path="/subscription"
						exact
						render={(props) => {
							return <Subscription {...props} />;
						}}
					/>
					<Route
						path="/about-aaer"
						exact
						render={(props) => {
							return <AboutUs {...props} />;
						}}
					/>
					<Route
						path="/terms-and-conditions"
						exact
						render={(props) => {
							return <TermsAndCondition {...props} />;
						}}
					/>
					<Route
						path="/privacy-policy"
						exact
						render={(props) => {
							return <PrivacyPolicy {...props} />;
						}}
					/>
					<Route
						path="/verify-payment"
						exact
						render={(props) => {
							return <VerifyPayment {...props} />;
						}}
					/>
					{/* #########   E N D :    O P E N      U R L S   #########*/}
					{/* #########   S T A R T :   G U A R D E D      U R L S   #########*/}
					<Route
						path="/dashboard"
						exact
						render={(props) => {
							return <Dashboard {...props} />;
						}}
					/>
					<PrivateRoute
						path="/law-reports"
						exact
						render={(props) => {
							return <LatestJudgement {...props} />;
						}}
					/>
					<PrivateRoute
						path="/federation-laws"
						exact
						render={(props) => {
							return <FederationLaws {...props} />;
						}}
					/>
					<PrivateRoute
						path="/regulation"
						exact
						render={(props) => {
							return <Regulation {...props} />;
						}}
					/>
					<PrivateRoute
						path="/regulation/items"
						exact
						render={(props) => {
							return <RegulationItem {...props} />;
						}}
					/>
					<PrivateRoute
						path="/court-rules"
						exact
						render={(props) => <CourtRules />}
					/>
					<PrivateRoute
						path="/court-forms"
						exact
						render={(props) => <CourtForms />}
					/>
					<PrivateRoute
						path="/court-forms/items"
						exact
						render={(props) => <CourtFormsItem />}
					/>
					<PrivateRoute
						path="/court-forms/form"
						exact
						render={(props) => <Form />}
					/>
					<PrivateRoute
						path="/court-management"
						exact
						render={(props) => <CourtManagement />}
					/>

					<PrivateRoute
						path="/users-management"
						exact
						render={(props) => {
							registerModel(app, require("./models/users").default);
							return <UsersManagement />;
						}}
					/>

					<PrivateRoute path="/search" exact render={(props) => <Search />} />

					<PrivateRoute path="/reader" exact render={(props) => <Reader />} />
					<PrivateRoute
						path="/precedents"
						exact
						render={(props) => {
							return (
								<Redirect
									to={{
										pathname: "/court-forms/items",
										search: "?court_form_id=15&name=Precedents",
									}}
								/>
							);
						}}
					/>
					{/* #########   E N D :    G U A R D E D      U R L S   #########*/}
					<Route path="/privacy" exact render={(props) => <Privacy />} />
					<Route path="/faq" exact render={(props) => <FAQ />} />

					<Route
						render={(props) => {
							return <Redirect to={{ pathname: "/login" }} />;
						}}
					/>
				</Switch>
			</App>
		</ConnectedRouter>
	);
}
