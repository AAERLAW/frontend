import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
	Card,
	CardMenu,
	GetStartedCard,
	Nav,
	SubscriptionSectionStyle,
	Button,
	CardContentMenu,
} from "./section1.styles";

const Section1 = ({ history }) => {
	const [state, setState] = useState("monthly");
	const handleSubscriptionPlan = (duration) => {
		setState(duration);
	};
	return (
		<SubscriptionSectionStyle>
			<div className="container">
				<h1>Choose your subscription plan</h1>
				<Nav>
					<li
						className={state === "monthly" ? "active" : ""}
						onClick={() => handleSubscriptionPlan("monthly")}
					>
						monthly
					</li>
					<li
						className={state === "yearly" ? "active" : ""}
						onClick={() => handleSubscriptionPlan("yearly")}
					>
						yearly
					</li>
				</Nav>
				<CardMenu>
					<GetStartedCard>
						<h3>A subscription plan for everyone.</h3>
						<Link to="/login">get started</Link>
					</GetStartedCard>
					<Card>
						<div>
							<h3>basic</h3>
							<h4>₦{state === "monthly" ? "2,500" : "25,000"}</h4>
							<h5>{state === "monthly" ? "per month" : "Yearly"}</h5>
						</div>
						<CardContentMenu>
							<li>law reports</li>
							<li>law of the federation</li>
							<li>
								regulation of <span>mda</span>
							</li>
							<li>rules of court</li>
							<li>textbooks</li>
						</CardContentMenu>
						<Button onClick={() => history.push("/login")}>choose plan</Button>
					</Card>
					<Card>
						<div>
							<h3>premuim</h3>
							<h4>₦{state === "monthly" ? "4,000" : "40,000"}</h4>
							<h5>{state === "monthly" ? "per month" : "Yearly"}</h5>
						</div>
						<CardContentMenu>
							<li>law reports</li>
							<li>law of the federation</li>
							<li>
								regulation of <span>mda</span>
							</li>
							<li>rules of court</li>
							<li>textbooks</li>
							<li>precedents</li>
							<li>journal articles</li>
						</CardContentMenu>
						<Button onClick={() => history.push("/login")}>choose plan</Button>
					</Card>
				</CardMenu>
			</div>
		</SubscriptionSectionStyle>
	);
};

Section1.propTypes = {
	history: PropTypes.object.isRequired,
};

export default Section1;
