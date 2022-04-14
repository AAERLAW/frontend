import styled from "styled-components";

export const StyledSection = styled.section`
	font-family: "poppins", sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #666;
	padding: 0 0 10em;
	.container {
		padding: 0 1.25em 3.25em;
		max-width: 1200px;
		margin: 0 auto;

		h1 {
			font-size: 1.4375rem;
			font-weight: 600;
			padding: 0.5em 0;
			margin-bottom: 2.5rem;
			text-transform: capitalize;
			font-family: "poppins", sans-serif;
			position: relative;
			color: #333;

			&::after {
				content: "";
				height: 2px;
				background-color: red;
				position: absolute;
				bottom: 0;
				left: 0;
				right: 0;
			}

			@media screen and (min-width: 600px) {
				font-size: 2.1875rem;
				margin-bottom: 3.5rem;
			}
			@media screen and (min-width: 1024px) {
				font-size: 2.8rem;
			}
		}

		p {
			font-size: 0.875rem;
			line-height: 30px;

			@media screen and (min-width: 600px) {
				font-size: 1em;
				line-height: 35px;
			}
		}

		ul {
			margin: 3em 0;
			li {
				line-height: 30px;

				@media screen and (min-width: 600px) {
					line-height: 35px;
				}
			}
		}
	}
`;
