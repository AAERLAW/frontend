import React from "react";
import { Layout } from "../../components";
import Section1 from "./Section1/Section1";
import Section2 from "./Section2/Section2";
import { connect } from "dva";
import { routerRedux } from "dva/router";

const Pricing = ({ history }) => {
	return (
		<Layout>
			<Section1 history={history} />
			<Section2 history={history} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Pricing);
