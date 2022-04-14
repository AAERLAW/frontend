import { connect } from "dva";
import { routerRedux } from "dva/router";
import React from "react";
import { Layout } from "../../components";
import { StyledSection } from "./aboutUs.styles";

const AboutUs = () => {
	return (
		<Layout>
			<StyledSection>
				<div className="container">
					<h1>About AAER</h1>
					<p>
						The ALL APPEAL ELECTRONIC REPORTS (AAER) is an offshoot of ABUJA
						APPEAL QUATERLY REPORTS (AAQR), which was unveiled in 2019 by the
						then President of the Court of Appeal, Hon. Justice Zainab Adamu
						Bulkachuwa (Rtd.).
					</p>
					<p>
						AAQR is a quarterly publication of novel judgements from the Abuja
						Division of the Court of Appeal, which has gained prominence in the
						legal industry as an easy reference tool for research work and
						courtroom practice. AAQR prides itself as a carrier of decisions on
						novel, recondite and topical issues in Nigeria and is given special
						weight because all reported judgements are revised by the Justices
						themselves.
					</p>
					<p>
						Our decision to create the ALL APPEAL ELECTRONIC REPORTS (AAER) is
						inspired by the numerous calls that we have received from
						subscribers who have been impressed by the sterling quality of our
						work on AAQR, and desire a means of accessing our content without
						necessarily waiting for their order of a copy of AAQR to arrive at
						their respective destinations.
					</p>
					<p>
						In an effort to provide our services to a larger market, we have
						expanded our scope to include:
					</p>
					<ul>
						<li>
							Decisions of all Divisions of the Court of Appeal as well as the
							Supreme Court;
						</li>
						<li>Case commentaries;</li>
						<li>Laws of the Federation;</li>
						<li>Rules of Courts;</li>
						<li>Court Forms;</li>
						<li>Contract Drafts;</li>
						<li>Regulations of MDAs;</li>
						<li>Textbooks;</li>
						<li>Journal Articles; and</li>
						<li>Blog Posts.</li>
					</ul>
					<p>
						Our goal is to provide our subscribers with a valuable all-in-one
						tool for legal research, practice management, contract management,
						and continuing education. We are confident that AAER will be a
						valuable legal companion to you, and we invite you to subscribe to
						this exceptional legal resource.
					</p>
				</div>
			</StyledSection>
		</Layout>
	);
};

const mapStateToProps = (state, ownProps) => {
	return {};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		redirect(pathname) {
			dispatch(routerRedux.push({ pathname: `${pathname}` }));
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(AboutUs);
