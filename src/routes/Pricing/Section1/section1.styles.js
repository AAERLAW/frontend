import styled from "styled-components";

export const SubscriptionSectionStyle = styled.section`
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	.container {
		padding: 3.25rem 1.25rem;
		padding: 3.25rem 1.25rem;
		max-width: 1200px;
		margin: 0 auto;
		h1 {
			text-align: center;
			font-size: 1.4375rem;
			font-weight: 600;
			margin-bottom: 1.5rem;
			text-transform: capitalize;
			font-family: "poppins", sans-serif;

			@media screen and (min-width: 600px) {
				font-size: 2.1875rem;
			}
			@media screen and (min-width: 1024px) {
				font-size: 2.8rem;
			}
		}
	}
`;
export const Nav = styled.ul`
	padding: 0;
	margin: 0;
	list-style: none;
	max-width: 200px;
	margin: 0 auto;
	display: flex;
	justify-content: center;
	font-weight: 400;
	font-family: "poppins", sans-serif;
	margin-bottom: 1em;

	li {
		position: relative;
		text-transform: capitalize;
		cursor: pointer;
		padding: 0.9375em;
		font-size: 0.8125rem;
		color: #bdbdbd;
		font: 0.8125rem;
		@media screen and (min-width: 600px) {
			font-size: 1rem;
		}

		&.active {
			color: #f15858;

			&::after {
				content: "";
				position: absolute;
				bottom: 0;
				left: 0;
				right: 0;
				height: 2px;
				background-color: #f15858;
			}
		}
	}
`;
export const CardMenu = styled.ul`
	list-style: none;
	padding: 2em 0;
	margin: 0;
	font-family: "poppins", sans-serif;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;

	@media screen and (min-width: 600px) {
		grid-gap: 2em;
		grid-template-columns: 1fr 1fr;
	}
`;
export const CardContentMenu = styled.ul`
	list-style: none;
	padding: 2em 0;
	margin: 0;

	li {
		padding: 0.5em 0;
		text-transform: capitalize;
		color: rgb(169, 179, 193);
		span {
			text-transform: uppercase;
		}
	}
`;

export const Card = styled.li`
	background-color: #ffffff;
	box-shadow: rgb(56 125 255 / 20%) 0px 6px 20px;
	padding: 2.5em;
	margin-bottom: 2em;
	box-sizing: border-box;
	border-radius: 0.8em;
	transition: all ease-in-out 0.3s;
	display: flex;
	flex-direction: column;
	align-self: stretch;
	justify-content: space-between;

	max-width: 340px;

	:hover {
		transform: scale(1.1);
	}
	@media screen and (min-width: 600px) {
		width: 340px;
		margin-bottom: unset;
	}

	h3 {
		font-weight: 700;
		text-transform: capitalize;
		font-size: 1.125rem;
		margin-top: 0.3125em;

		@media screen and (min-width: 600px) {
			font-size: 1.4rem;
			margin-top: 0.85em;
		}
		@media screen and (min-width: 1024px) {
			font-size: 1.8rem;
			margin-top: 1em;
		}
	}

	h4 {
		font-weight: 300;
		font-size: 1.5625rem;
		@media screen and (min-width: 600px) {
			font-size: 1.875rem;
		}
	}
	h5 {
		font-weight: 400;
		font-size: 0.875rem;
		margin-bottom: 1em;
		@media screen and (min-width: 600px) {
			margin-bottom: 1.5em;
		}
	}
`;
export const GetStartedCard = styled(Card)`
	display: none;
	background: rgb(236, 65, 73);

	@media screen and (min-width: 1200px) {
		display: block;
	}

	h3 {
		color: #ffffff;
	}

	a {
		text-decoration: none;
		color: #ffffff;
		text-transform: capitalize;
		font-size: 0.875rem;
		margin-bottom: 1em;
		position: relative;
		transition: all ease-in-out 0.3s;

		:hover {
			color: #dddddd;

			&::after {
				width: 65%;
			}
		}

		&::after {
			content: "";
			position: absolute;
			bottom: -2px;
			left: 0;
			width: 0px;
			height: 2px;
			background-color: #dddddd;

			transition: all ease-in-out 0.3s;
		}
		@media screen and (min-width: 600px) {
			margin-bottom: 1.5em;
		}
	}
`;

export const Button = styled.button`
	align-self: center;
	width: 100%;
	padding: 0.625em 1.35em;
	font-size: 0.875rem;
	outline: none;
	border: none;
	border-radius: 0.25em;
	background: rgb(222, 28, 37);
	color: rgb(236, 236, 236);
	text-transform: capitalize;
	transition: background ease-in-out 0.3s;

	:hover {
		color: rgb(222, 28, 37);
		background: rgb(236, 236, 236);
	}

	@media screen and (min-width: 600px) {
		font-size: 1rem;
	}
	@media screen and (min-width: 1200px) {
		font-size: 1.2rem;
	}
`;
