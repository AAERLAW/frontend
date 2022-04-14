import React from "react";
import PropTypes from "prop-types";
import { Button, ImageStyle, StyledSection } from "./section2.styles";
import paymentCard from "../../../assets/img/payment.jpg";

const Section2 = ({ history }) => {
	return (
		<StyledSection>
			<div className="container">
				<div>
					<h5>Get everything set up and ready in under 10 minutes.</h5>
					<h1>A subscription plan for everyone.</h1>
					<p>AAER puts the knowlegde of law right in your pockets.</p>
					<Button onClick={() => history.push("/login")}>get started</Button>
				</div>
				<ImageStyle>
					<img src={paymentCard} alt="aaer payment card" />
				</ImageStyle>
			</div>
		</StyledSection>
	);
};

Section2.propTypes = {
	history: PropTypes.object.isRequired,
};

export default Section2;
