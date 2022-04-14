import { connect } from "dva";
import { routerRedux } from "dva/router";
import React from "react";
import { Layout } from "../../components";
import { StyledSection } from "./termsAndCondition.styles";

const TermsAndCondition = () => {
	return (
		<Layout>
			<StyledSection>
				<div className="container">
					<h1>terms of service</h1>
					<p>
						Thanks for using aaerlaw.com (“AAER”). These Terms of Service
						("Terms") cover your use and access to the products, services,
						software and platform (collectively, "Services") provided by AAER.
						By using our Services, you agree to be bound by these Terms as well
						as our Privacy Policy. If you are using our Services as the employee
						or agent of an organization, you are agreeing to these Terms on
						behalf of that organization.
					</p>
					<p>
						You must be the legal age of majority in your state of residence or
						otherwise able to form a binding contract with AAER in order to use
						the Services. In no event is use of the Services permitted by those
						under the age of 13.
					</p>

					{/*===== No.1 =====*/}
					<h2>1. Payments</h2>
					<p>
						To ensure uninterrupted service and to enable you to conveniently
						purchase additional products and Services, AAER will store and
						update (e.g. upon expiration) your payment method on file. Monthly
						subscriptions will automatically renew each month, but you can
						cancel or downgrade at any time. If we are unable to charge your
						designated payment method for any reason, we reserve the right to
						automatically downgrade your premium plan to a lower-priced plan or
						to suspend your subscription until your designated payment method
						can be charged again. Please note that it is your responsibility to
						maintain current billing information on file with AAER.
					</p>

					{/*===== No.2 =====*/}
					<h2>2. Refund Policy</h2>
					<p>We want you to be 100% satisfied with our Services.</p>
					<p>
						We gladly offer refunds for billing mistakes. If you change your
						mind and want to cancel an account that you paid for, we can give
						you a prorated refund. Unless you have a good reason, we don't give
						refunds for services that you've already used.
					</p>
					<p>
						If you are less than satisfied or believe there has been an error in
						billing, please contact our Customer Service Department by email at
						customerservice@legaljurisconsults.com or by telephone at
						07063906162 or 07038638740 immediately so that we can help you
						resolve the issue, provide a refund or offer credit that can be used
						for future Services. When contacting us, please include any details
						relating to the Services you have purchased so that we can ensure
						you are completely satisfied with your AAER experience. All refund
						requests must be made within 30 days of purchase. If you wish to
						cancel an annual subscription, you may apply to receive a prorated
						refund for the remaining time which has not been used.
					</p>

					{/*===== No.3 =====*/}
					<h2>
						3. Legal Information Provided on AAER is Not a Substitute for Legal
						Advice
					</h2>
					<p>
						AAER provides a platform for legal information and self-help. The
						information provided by AAER along with the content of our Service
						related to legal matters ("Legal Information") is provided for your
						private use and does not constitute legal advice. We do not review
						any information you provide us for legal accuracy or sufficiency,
						draw legal conclusions, provide opinions about your selection of
						forms, or apply the law to the facts of your situation.
					</p>
					<p>
						If you need legal advice for a specific problem, you should consult
						with a duly licensed attorney. Legal Information provided by AAER
						through its Service is not a substitute for legal advice from a
						qualified legal practitioner licensed to practice law in Nigeria.
						Communications between you and AAER may not be protected as
						privileged communications under the attorney-client privilege or
						work product doctrine.
					</p>
					<p>
						Your use of our Services does not create an attorney-client
						relationship between you and AAER, or between you and any AAER
						employee or representative. Unless you are otherwise represented by
						a lawyer, you represent yourself in any legal matter you undertake
						through our Services.
					</p>

					{/*===== No.4 =====*/}
					<h2>4. Termination of Subscription and Access Restriction</h2>
					<p>
						AAER reserves the right, in its sole discretion, to downgrade or
						terminate your access to our Services, for any reason and at any
						time without prior notice. For example, we may suspend or terminate
						your use of some or all of our Services if you violate these Terms
						or use the Services in a manner that may expose us to legal
						liability, disrupt the Services or disrupt others' use of the
						Services.
					</p>
					<p>
						If AAER elects to terminate your subscription, AAER will provide you
						with notice at your registered email address. AAER also reserves the
						right to modify or discontinue, either temporarily or permanently,
						any part of its Services with notice. You agree that AAER will not
						be liable to you or to any third party for any modification,
						suspension, or discontinuance of your subscription or access to the
						Services.
					</p>

					{/*===== No.5 =====*/}
					<h2>5. Ownership and Preservation of Your Documents</h2>
					<p>
						AAER does not claim ownership of any documents you either create or
						store using our Services ("Documents"). You grant permission for
						AAER to use your Documents in connection with providing Services to
						you. You acknowledge and agree that AAER may preserve these
						Documents as well as disclose them if required to do so by law or in
						the good faith belief that such preservation or disclosure is
						reasonably necessary to accomplish any of the following:
					</p>
					<ol className="ownership">
						<li>
							to comply with legal process, applicable laws or government
							requests;
						</li>
						<li>to enforce these Terms;</li>
						<li>
							to respond to claims that any content violates the rights of third
							parties; or
						</li>
						<li>
							to protect the rights, property, or personal safety of AAER, its
							users and the public.
						</li>
					</ol>
					<p>
						You understand that the technical processing and transmission of the
						Service, including your Documents and other content, may involve
						transmissions over third party networks and changes to conform and
						adapt to technical requirements of connecting networks or devices.
						You agree that AAER has no responsibility or liability for deleting
						or failing to store any Documents or other content maintained or
						uploaded in the Services.
					</p>

					{/*===== No.6 =====*/}
					<h2>6. Consent to Receive Emails</h2>
					<p>
						By creating an account, you agree that you may receive
						communications from AAER, such as newsletters, special offers, and
						account reminders and updates. You also understand that you can
						remove yourself from promotional communications by clicking the
						"Unsubscribe" link in the footer of the actual email. You cannot opt
						out of essential communications regarding your account, such as
						renewal notices.
					</p>

					{/*===== No.7 =====*/}
					<h2>7. Acceptable Use of Communications Services</h2>
					<p>
						Our Services include a large number of what are collectively called
						"Communications Services." These include services such as live
						chats, electronic signature Services, payment Services, comment
						threads, blog posts, question and answer products and customer
						service communication forums. You agree to use the Communications
						Services only to post, send, and receive messages or materials
						proper to and related to the particular Communication Service. When
						using a Communication Service, you agree that you will not do any of
						the following:
					</p>
					<ol>
						<li>
							Defame, abuse, harass, stalk, threaten or otherwise violate the
							legal rights of others.
						</li>
						<li>
							Create a false identity, represent yourself as someone else, or
							sign an agreement as someone else or on behalf of someone else or
							otherwise falsify or delete in an uploaded file any significant
							attributions or notices.
						</li>
						<li>
							Upload files that contain software or other material protected
							either by intellectual property laws or by the rights of privacy
							or publicity except when you own or control the necessary rights,
							or you have received all necessary consents to do so.
						</li>
						<li>
							Upload corrupted files, files that contain viruses, or any other
							files that may damage the operation of another's computer.
						</li>
						<li>
							Advertise, offer to sell, or offer to buy anything for business
							purposes except to the limited extent any particular Communication
							Service expressly allows such activity.
						</li>
						<li>
							Restrict or inhibit any other user from using and enjoying the
							Communications Services.
						</li>
						<li>
							Harvest or otherwise collect any information about other users,
							either individually or in the aggregate, or about the Services
							generally.
						</li>
						<li>
							Violate any code of conduct or other guidelines, which may be
							applicable for any particular Communication Service.
						</li>
						<li>Violate any applicable laws or regulations.</li>
					</ol>
					<p>
						Although AAER has no obligation to monitor the Communications
						Services, we reserve the right, in our own discretion, to review and
						remove materials posted to a Communication Service (in whole or in
						part), terminate or limit any user’s access to the Communications
						Services, or take other steps that we believe are appropriate to
						prevent abusive or unreasonably burdensome use of the Communications
						Services. AAER reserves the right to disclose any materials posted,
						information or activity as necessary to satisfy any applicable law,
						regulation, legal process, or governmental request.
					</p>

					{/*===== No.8 =====*/}
					<h2>8. No Unlawful or Prohibited Use</h2>
					<p>
						You can only use our Services if doing so complies with the laws of
						your jurisdiction(s). The availability of our Services in your
						jurisdiction(s) is not an invitation or authorization by AAER to
						access or use our website or Services in a manner that violates your
						local laws and regulations. By using our Services, you accept sole
						responsibility to ensure that you or anyone else who accesses your
						account to use our Services does not violate any applicable laws in
						your jurisdiction(s). To enforce this provision, AAER reserves the
						right to refuse membership, or suspend or terminate your account
						immediately and without prior notice at our sole discretion.
					</p>
					<p>
						You may not hack, "scrape" or "crawl" our Services, whether directly
						or through intermediaries such as spiders, robots, crawlers,
						scrapers, framing, iframes or RSS feeds without express written
						permission from AAER. You may not access or attempt to access any
						information AAER has not intentionally made available to you on its
						Services via purchased subscription. Your use of the AAER Services
						does not entitle you to resell any AAER content without prior
						express written consent from AAER.
					</p>

					{/*===== No.9 =====*/}
					<h2>9. Intellectual Property Rights; License Grant</h2>
					<p>
						The AAER logo, software, trademarks, products, and Services belong
						to us. You agree not to copy or sell any of our intellectual
						property. As long as you follow these Terms, you are welcome to use
						all AAER Services in the manner intended. The documents you create
						are yours for personal use, but you can't sell or give away the AAER
						template they're based on.
					</p>
					<p>
						AAER retains all rights, titles and interests in and to its products
						and Services, including, without limitation, software, images, text,
						graphics, illustrations, logos, service marks, copyrights,
						photographs, videos, music, articles, document templates and all
						related intellectual property rights. Except as otherwise provided
						in the Terms, you may not, and may not permit others to:
					</p>
					<ol>
						<li>
							reproduce, modify, translate, enhance, decompile, disassemble,
							reverse engineer or create derivative works of any of our products
							and Services (other than documents you create through your
							membership, which you may use for your own personal use);
						</li>
						<li>
							sell, license, sub-license, rent, lease, distribute, copy,
							publicly display, publish, adapt or edit any of our products and
							Services; or
						</li>
						<li>
							circumvent or disable any security or technological features of
							our products and Services.
						</li>
					</ol>
					<p>
						The design, text, graphics and selection and arrangement of our
						Services and the legal forms, documents, guidance and all other
						content found on our Service ("Service Content") are copyrights of
						Legal Jurisconsults Prints Limited. All rights reserved.
					</p>
					<p>
						Subject to your compliance with these Terms, you are hereby granted
						a non-exclusive, limited, non- transferable, revocable license to
						use the Services as we intend for them to be used. As a registered
						AAER user, you are the owner of and are fully authorized to keep,
						for your own personal records, electronic or physical copies of
						documents you have created on AAER.
					</p>
					<p>
						When you transmit public-facing user content on AAER, you hereby
						grant AAER and its affiliates a non-exclusive, royalty-free,
						perpetual, irrevocable and fully sub-licensable right to use,
						reproduce, modify, adapt, publish, translate, create derivative
						works from, distribute, perform and display any such content,
						including throughout the world in any media. If you submit feedback
						or suggestions about our Services, we may use your feedback or
						suggestions without obligation or compensation to you. You
						acknowledge and agree that AAER is authorized to collect and use
						aggregated or anonymized information from or about you and other
						users and user-created documents for the purposes of researching,
						developing, improving and marketing its Services.
					</p>

					<p>
						Resale or unauthorized copying, use, storage, display or
						distribution of forms, articles, documents or other materials copied
						or downloaded from our Service is strictly prohibited. Use of these
						materials is for your personal or business use. Any resale or
						redistribution of our materials requires the express written consent
						of AAER. Any rights not expressly granted in these Terms are
						reserved by AAER.
					</p>

					{/* ==== No.10 =====*/}
					<h2>10. Copyright</h2>
					<p>
						We respond to notices of alleged copyright infringement and
						terminate accounts of repeat infringers following due process. If
						you believe that any material on our Service infringes upon any
						copyright which you own or control, you may file a Notice of Alleged
						Infringement with AAER's Designated Copyright Agent:
					</p>
					<ul>
						<li>Legal Jurisconsults Prints Limited</li>
						<li>9, Johannesburg Street, Zone 2, Wuse, FCT Abuja</li>
						<li>Email: legaljurisconsults@gmail.com</li>
					</ul>

					{/* ===== No. 11 ===== */}

					<h2>11. Links to Third Party Sites</h2>
					<p>
						AAER's Service may contain links to third party resources and
						businesses on the Internet, called here "links" or "Linked Site(s)."
						Those links are provided for your convenience to help you identify
						and locate other Internet resources that may be of interest to you.
						The links we provide to other websites are for your information
						only. We don't endorse and are not responsible for the content on
						those sites.
					</p>
					<p>
						AAER does not control, endorse or monitor the contents of any Linked
						Site. That includes, without limitation, any further link contained
						in a Linked Site, and any changes or updates to a Linked Site. AAER
						is not responsible for webcasting or for any other form of
						transmission received from any Linked Site. These Terms do not cover
						your interaction with Linked Sites. You should carefully review the
						terms and conditions and privacy policies of any Linked Sites.
					</p>
					<p>If you use any service provided on a Linked Site:</p>
					<ol>
						<li>
							AAER will not be responsible for any act or omission of the third
							party, including the third party's access to or use of your
							customer data; and
						</li>
						<li>
							AAER does not warrant or support any service provided by the third
							party.
						</li>
					</ol>

					{/* ===== No. 12 ===== */}
					<h2>12. Disclaimer of Representations and Liability</h2>
					<p>
						Please read this section carefully as it affects your rights While
						we do our best to make sure everything is accurate and up to date,
						your use of our Services is at your own risk. Please don't make
						personal, medical, legal, or financial decisions without consulting
						a professional.
					</p>
					<p>
						The information, software, products, and Services made available
						through AAER may include inaccuracies or typographical errors. AAER
						reserves the right at any time to modify, improve, suspend or
						deprecate certain features of our Services. Legal Information
						received via AAER should not be relied upon exclusively for
						personal, medical, legal or financial decisions; rather, we
						recommend you use information from our Service in conjunction with
						the advice of a qualified professional tailored to your situation.
						In short, your use of our Services is at your own risk.
					</p>
					<p className="uppercase">
						TO THE FULLEST EXTENT PERMITTED BY LAW, AAER AND ITS AFFILIATES,
						SUBSIDIARIES, PROGRAM SPONSORS AND DISTRIBUTORS MAKE NO WARRANTIES,
						EITHER EXPRESS OR IMPLIED, ABOUT THE SERVICES. THE SERVICES ARE
						PROVIDED "AS IS” AND “AS AVAILABLE." WE ALSO DISCLAIM ANY WARRANTIES
						OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
						NON-INFRINGEMENT. INFORMATION AND OPINIONS RECEIVED VIA OUR SERVICES
						SHOULD NOT BE RELIED UPON FOR PERSONAL, MEDICAL, LEGAL OR FINANCIAL
						DECISIONS WITHOUT CONSULTING AN APPROPRIATE PROFESSIONAL FOR
						SPECIFIC ADVICE TAILORED TO YOUR SITUATION.
					</p>
					<p className="uppercase">
						TO THE FULLEST EXTENT PERMITTED BY LAW, IN NO EVENT WILL AAER OR ITS
						AFFILIATES BE LIABLE FOR ANY INDIRECT, SPECIAL, INCIDENTAL,
						PUNITIVE, EXEMPLARY OR CONSEQUENTIAL DAMAGES OR ANY LOSS OF USE,
						DATA, BUSINESS, OR PROFITS, REGARDLESS OF LEGAL THEORY, WHETHER OR
						NOT AAER HAS BEEN WARNED OF THE POSSIBILITY OF SUCH DAMAGES, AND
						EVEN IF A REMEDY FAILS OF ITS ESSENTIAL PURPOSE. TO THE FULLEST
						EXTENT PERMITTED BY LAW, AAER'S AGGREGATE LIABILITY TO YOU FOR ALL
						CLAIMS RELATING TO THE SERVICES SHALL IN NO EVENT EXCEED THE GREATER
						OF NGN50,000 OR THE AMOUNT PAID BY YOU TO AAER FOR THE 12 MONTHS
						PRECEDING THE SERVICES IN QUESTION.
					</p>
					<p className="uppercase">
						THE PARTIES EXPRESSLY AGREE AND ACKNOWLEDGE THAT THE FOREGOING
						DISCLAIMERS AND LIMITATIONS OF LIABILITY FORM AN ESSENTIAL BASIS OF
						THE BARGAIN BETWEEN THE PARTIES.
					</p>

					{/* ===== No. 13 ===== */}
					<h2>13. Release and Indemnity</h2>
					<p>
						By using our Service, you, on behalf of yourself and your heirs,
						executors, agents, representatives, and assigns, fully release,
						forever discharge, and hold AAER and its affiliates, and its and
						their respective officers, employees, directors and agents, harmless
						from any and all losses, damages, expenses, including reasonable
						attorneys' fees, rights, claims, and actions of any kind and injury
						(including death) arising out of or relating to your use of the
						Services. You agree that this release has been freely and
						voluntarily consented to and you confirm that you fully understand
						what you are agreeing to.
					</p>
					<p>
						You agree to indemnify and hold AAER and its affiliates, and their
						respective officers, employees, directors and agent harmless from
						any and all losses, damages, expenses, including reasonable
						attorneys' fees, rights, claims, actions of any kind and injury
						(including death) arising out of any third party claims relating to
						your use of the Service, your violation of these Terms or your
						violation of any rights of another.
					</p>

					{/* ===== No. 14 ===== */}
					<h2>
						14. Dispute Resolution By Binding Arbitration and Class Action
						Waivery
					</h2>

					<span className="attention">
						PLEASE READ THIS SECTION CAREFULLY, AS IT AFFECTS YOUR RIGHTS.
					</span>
					<p>
						Most customer concerns can be resolved quickly and to the customer's
						satisfaction by calling our Customer Service Department at
						07063906162. You can also email us at customerservice@aaer.com.
					</p>
					<p>
						However, if AAER is not able to resolve a dispute with you after
						attempting to do so informally, then as a condition to your use of
						the Services we mutually agree to resolve such dispute through
						binding arbitration under the auspices of the Abuja Multi-Door
						Courthouse (AMDC). AMDC will administer any such arbitration under
						its Commercial Arbitration Rules. The arbitration will be held
						physically in the Federal Capital Territory or virtually using
						video-conferencing software. A party seeking arbitration must first
						send to the other, by certified mail, a written notice of dispute.
					</p>
					<p>
						Any notice to AAER should be addressed to Legal Jurisconsults Prints
						Limited of 9, Johannesburg Street, Zone 2, Wuse, FCT Abuja. Any
						notice to you shall be sent to your address as set forth in AAER's
						records of account or such other legal address as AAER is able to
						identify.
					</p>
					<p>
						You may only resolve disputes with AAER on an individual basis, and
						may not bring a claim as a plaintiff or a class member in a class,
						consolidated, or representative action. Class arbitrations, class
						actions, private attorney general actions, and consolidation with
						other arbitrations aren't allowed. Notwithstanding our agreement to
						arbitrate our disputes as provided above, the following exceptions
						will apply to the resolution of disputes between us:
					</p>
					<p>
						Either you or AAER may assert claims, if they qualify, in any High
						Court of the state where you live or work without first engaging in
						arbitration or the informal dispute-resolution process described
						above.
					</p>
					<p>
						AAER may bring a lawsuit against you in any court of competent
						jurisdiction solely for injunctive relief to stop any unauthorized
						use or abuse of the Services or intellectual property infringement
						without first engaging in arbitration or the informal
						dispute-resolution process described above.
					</p>
					<p>
						In the event that the agreement to arbitrate provided herein is
						found to be inapplicable or unenforceable for any reason, then as a
						condition to your use of the Services we agree that any resulting
						judicial proceedings will be brought in the High Court of the
						Federal Capital Territory, and by your use of the Services you
						expressly consent to venue and personal jurisdiction of the courts
						therein.
					</p>
					<p>
						AAER may, in the future, make changes to these provisions regarding
						dispute resolution and arbitration by providing notice in accordance
						with the "Modifications" section below. You may reject any changes
						to this section made during your subscription by sending us written
						notice. Such notice must be given within thirty (30) calendar days
						of the notice of modification to the following address: Legal
						Jurisconsults Prints Limited of 9, Johannesburg Street, Xone 2,
						Wuse, FCT Abuja.
					</p>

					{/* ===== No. 15 ===== */}
					<h2>15. Controlling Law</h2>
					<p>
						These Terms are governed by the laws of the Federal Republic of
						Nigeria, without regard to conflict of law rules.
					</p>

					{/* ===== No. 16 ===== */}

					<h2>16. Entire Agreement</h2>
					<p>
						These Terms constitute the entire agreement between you and AAER
						with respect to the subject matter of these Terms, and supersede and
						replace any other prior or contemporaneous agreements, or terms and
						conditions applicable to the subject matter of these Terms. These
						Terms create no third party beneficiary rights other than as
						specifically stated in Clause 13 of these Terms.
					</p>

					{/* ===== No. 17 ===== */}
					<h2>17. Waiver, Severability and Assignment</h2>
					<p>
						AAER's failure to enforce a provision is not a waiver of its right
						to do so later. If a provision of these Terms is found
						unenforceable, the remaining provisions will remain in full effect
						and an enforceable term will be substituted reflecting the intent of
						the unenforceable language as closely as possible. You may not
						assign any of your rights under these Terms, and any such attempt
						will be void. AAER may assign its rights to any of its affiliates or
						subsidiaries, or to any successor in interest of any business
						associated with the Services.
					</p>

					{/* ===== No. 18 ===== */}
					<h2>18. Consent to Receive Emails </h2>
					<p>
						We may revise these Terms from time to time, and will always post
						the most current version on our website. By continuing to use or
						access the Services after the revisions come into effect, you agree
						to be bound by the revised Terms. We encourage users to periodically
						review the Terms to ensure that you understand them in their
						entirety.
					</p>
					<p>
						If you have any questions or concerns, please Contact Us at any
						time.
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

export default connect(mapStateToProps, mapDispatchToProps)(TermsAndCondition);
