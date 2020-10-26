import React from "react";
import {Fade} from "reactstrap";

function Processing() {
	return (
		<div className="container process-container">
			<Fade in>
				<h3><span className="fa fa-circle-o-notch fa-spin"></span> Processing</h3>
			</Fade>
		</div>
	);
}

export default Processing;