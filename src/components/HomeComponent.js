import React from "react";
import {Fade} from "reactstrap";
import LoggedOut from "./LoggedOut";
import Processing from "./Processing";

function Home(props) {
	if(props.processing) return <Processing />
	if (props.loggedIn)
		return (
			<div className="container component-container">
				<Fade in>
					<h1>Home</h1>
					<Fade in>
						<div className="container component-body-container">
							<h3>Welcome {props.username}</h3>
							<br/>
							<h6>You are successfully signed in</h6>
						</div>
					</Fade>
				</Fade>
			</div>
		);
	return <LoggedOut />;
}

export default Home;