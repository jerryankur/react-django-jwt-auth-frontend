import React from "react";
import {Fade} from "reactstrap";

function LoggedOut() {
	return (
		<div className="container component-container">
			<Fade in>
				<h1 className="text-center">Please Log In / Sign Up</h1>
				<Fade in>
					<div className="container component-body-container">
						<h6>You are currently logged out of system</h6>
					</div>
				</Fade>
			</Fade>
		</div>
	);
}

export default LoggedOut;