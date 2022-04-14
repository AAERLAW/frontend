import styled from "styled-components";

export const StyledSection = styled.section`
	font-family: "poppins", sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	padding: 3.125em 0 5em;
	.container {
		padding: 3.25rem 1.25rem;
		max-width: 1200px;
		margin: 0 auto;

		@media screen and (min-width: 800px) {
			display: flex;
			flex-direction: row-reverse;
		}

		div {
			margin: 0 auto;
			max-width: 450px;

			@media screen and (min-width: 800px) {
				max-width: unset;
				flex: 1;
			}

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
				@media screen and (min-width: 800px) {
					text-align: left;
				}
				@media screen and (min-width: 1024px) {
					font-size: 2.8rem;
				}
			}
			h5 {
				font-weight: 400;
				font-size: 1rem;
				margin-bottom: 1em;
				color: rgb(222, 28, 37);
				text-align: center;
				font-weight: 600;
				text-transform: capitalize;
				@media screen and (min-width: 600px) {
					margin-bottom: 1.5em;
				}
				@media screen and (min-width: 800px) {
					text-align: left;
				}
			}

			p {
				font-size: 1rem;
				margin-bottom: 2.1875em;
				text-align: center;
				text-transform: capitalize;

				@media screen and (min-width: 600px) {
					font-size: 1.125rem;
				}

				@media screen and (min-width: 800px) {
					text-align: left;
				}
			}
		}
	}
`;

export const ImageStyle = styled.div`
	@media screen and (min-width: 600px) {
		flex: 1;
	}
	overflow: hidden;

	img {
		width: 100%;
		height: auto;
		display: block;
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
