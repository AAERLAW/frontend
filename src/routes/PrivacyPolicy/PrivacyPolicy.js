import { connect } from "dva";
import { routerRedux } from "dva/router";
import React from "react";
import { Layout } from "../../components";
import { StyledSection } from "./privacyPolicy.styles";

const PrivacyPolicy = () => {
	return (
		<Layout>
			<StyledSection>
				<div className="container">
					<h1>privacy policy</h1>
					<p>
						This statement of privacy (“Privacy Policy”) describes how Legal
						Jurisconsults Prints Ltd (hereinafter referred to as “we”, “us”
						“our”) collect, use, and disclose information pertaining to you -
						the user (hereinafter referred to as “you”, “your”) obtained via
						this website www.aaerlaw.com (hereinafter referred to as “our
						website”).
					</p>
					<p>
						Please read the following to learn about our practice of secure
						collection, use, disclosure and dissemination of your information.
						By visiting our website, you agree to be bound by the terms and
						conditions of this Privacy Policy. If you do not agree, please do
						not use or access our website. This Privacy Policy is incorporated
						into and subject to our Terms of Use (“Terms of Use”).
					</p>

					{/*===== No.1 =====*/}
					<h2>1. Consent</h2>
					<p>
						By using our website and/or by providing your information, you
						consent to the collection and use of the information you disclose on
						our website in accordance with this Privacy Policy, including but
						not limited to your consent for sharing your information as per this
						Privacy Policy. If you disclose any personal information relating to
						other people to us, you represent that you have the authority to do
						so and to permit us to use the information in accordance with this
						Privacy Policy.
					</p>

					{/*===== No.2 =====*/}
					<h2>2. Amendment</h2>
					<p>
						Our Privacy Policy is subject to change at any time without notice.
						To make sure you are aware of any changes, please review this policy
						periodically.
					</p>

					{/*===== No.3 =====*/}
					<h2>
						3. Collection of Personally Identifiable Information and Other
						Information
					</h2>
					<p>
						When you use our website, we collect and store your personal
						information such as name, contact number, email address etc., which
						is provided by you from time to time. Our primary goal in doing so
						is to be able to contact you for the services requested by you and
						to provide you with a safe, efficient, smooth and customized
						experience.
					</p>
					<p>
						In general, you can browse our website without telling us who you
						are or revealing any personal information about yourself. Once you
						give us your personal information, you are not anonymous to us.
						Where possible, we may indicate which fields are required and which
						fields are optional for us to contact you. You always have the
						option to not provide information, however, in such an instance we
						will not be able to contact you.
					</p>
					<p>
						If you choose to post comments on our “Contact Us” page or leave
						feedback, we will collect that information you provide to us.
					</p>

					{/*===== No.4 =====*/}
					<h2>4. Use of Demographic / Profile Data / Your Information</h2>
					<p>
						We use personal information to provide the services you request. To
						the extent we use your personal information to market to you, we
						will provide you the ability to opt-out of such uses.
					</p>
					<p>
						We identify and use your IP address to help diagnose problems with
						our server, and to administer our website. Your IP address is also
						used to help identify you and to gather broad demographic
						information. We also use this information to do internal research on
						our users' demographics, interests, and behaviour to better
						understand, protect and serve our users. This information is
						compiled and analysed on an aggregated basis. This information may
						include the URL that you just came from (whether this URL is on our
						website or not), which URL you next go to (whether this URL is on
						our website or not), your computer browser information, and your IP
						address.
					</p>
					<p>
						We retain any information as necessary to contact you and provide
						support as permitted by law.
					</p>

					{/*===== No.5 =====*/}
					<h2>5. Sharing of Personal Information:</h2>
					<p>
						We may share personal information with our affiliates. We do not
						disclose your personal information to third parties for their
						marketing and advertising purposes without your explicit consent. We
						may disclose personal information if required to do so by law or in
						the good faith belief that such disclosure is reasonably necessary
						to respond to subpoenas, court orders, or other legal process.
					</p>

					<p>
						We may disclose personal information to law enforcement offices,
						third party rights owners, or others in the good faith belief that
						such disclosure is reasonably necessary to: enforce our Terms of Use
						or Privacy Policy; respond to claims that an advertisement, posting
						or other content violates the rights of a third party; or protect
						the rights, property or personal safety of our users or the general
						public.
					</p>
					<p>
						We and our affiliates will share some or all of your personal
						information with another business entity should we (or our assets)
						plan to merge with, or be acquired by that business entity, or
						re-organization, amalgamation, restructuring of business. Should
						such a transaction occur, that other business entity (or the new
						combined entity) will be required to follow this Privacy Policy with
						respect to your personal information.
					</p>

					{/*===== No.6 =====*/}
					<h2>6. Links to Other Sites</h2>
					<p>
						Our website may contain links to other websites that may collect
						personally identifiable information about you. We are not
						responsible for the privacy practices or the content of those linked
						websites.
					</p>

					{/*===== No.7 =====*/}
					<h2>7. Security Precautions</h2>
					<p>
						Our website has stringent security measures in place to protect the
						loss, misuse, and alteration of the information under our control.
						Once your information is in our possession, we adhere to strict
						security guidelines, protecting it against unauthorized access.
					</p>

					{/*===== No.8 =====*/}
					<h2>8. Cookies</h2>
					<p>
						A "cookie" is a small piece of information stored by a web server on
						a web browser so it can be later read back from that browser.
						Cookies are useful for enabling the browser to remember information
						specific to a given user. We place both permanent and temporary
						cookies in your computer's hard drive. The cookies do not contain
						any of your personally identifiable information.
					</p>
					<p>
						We use data collection devices such as "cookies" on certain pages of
						our website to help analyse our web page flow, measure promotional
						effectiveness, and promote trust and safety. "Cookies" are small
						files placed on your hard drive that assist us in providing our
						services. We offer certain features that are only available through
						the use of a "cookie". Cookies can also help us provide information
						that is targeted to your interests. Most cookies are "session
						cookies," meaning that they are automatically deleted from your hard
						drive at the end of a session. You are always free to decline our
						cookies if your browser permits, although in that case you may not
						be able to use certain features on the Website.
					</p>
					<p>
						Additionally, you may encounter "cookies" or other similar devices
						on certain pages of our website that are placed by third parties. We
						do not control the use of cookies by third parties.
					</p>

					{/*===== No.9 =====*/}
					<h2>9. Choice/Opt-Out</h2>
					<p>
						We provide all users with the opportunity to opt-out of receiving
						non-essential (promotional, marketing-related) communications from
						us or on behalf of our partners. If you want to remove your contact
						information from our server or want to unsubscribe to any
						newsletters or alerts from us, please contact us on the email
						address mentioned under clause 11 below.
					</p>

					{/* ==== No.10 =====*/}
					<h2>10. Advertisements</h2>
					<p>
						We may use third-party advertising companies to serve ads when you
						visit our website. These companies may use information (not
						including your name, address, email address, or telephone number)
						about your visits to this and other websites in order to provide
						advertisements about goods and services of interest to you.
					</p>

					{/* ===== No. 11 ===== */}

					<h2>11. Data Controller</h2>
					<p>
						For the purposes of the Nigerian Data Protection Regulation, the
						name and contact details of the data controller are provided below:
					</p>

					<ul>
						<li>Data Controller: Legal Jurisconsults Prints Ltd.</li>
						<li>
							Address: 9, Johannesburg Street, Zone 2, Wuse, Abuja, Nigeria.
						</li>
						<li>Phone: 07063906162, 07038638740</li>
						<li>Email: legaljurisconsults@gmail.com</li>
					</ul>

					{/* ===== No. 12 ===== */}
					<h2>12. Questions?</h2>
					<p>
						Please contact us if you have any questions regarding this
						statement.
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

export default connect(mapStateToProps, mapDispatchToProps)(PrivacyPolicy);
