import React from "react";
import Footer from "../../routes/Common/Footer";
import TopNav from "../../routes/Common/TopNav";

const Layout = ({ children }) => {
	return (
		<>
			<TopNav />
			{children}
			<Footer />
		</>
	);
};

export default Layout;
