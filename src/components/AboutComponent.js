import React from "react";
import { Fade } from 'react-animation-components';
import { Media } from "reactstrap";

function About() {
	return (
		<div className="container component-container">
			<Fade in>
				<h1>About Me</h1>
				<div className="container component-body-container body-wide">
					<Fade in>
						<Media id="ankur" className="row mt-3 mb-4">
							<Media left className="col-xs-12 col-sm-4 col-md-3 col-lg-2">
								<Media height="110px" object src="https://media-exp1.licdn.com/dms/image/C4E03AQEnYfIb5bDqnw/profile-displayphoto-shrink_800_800/0?e=1609372800&v=beta&t=TrHEXTxDW8whq6txINVSLTBhS37MhkwvY_-e5Ic3vM4
	" alt="ANKUR" />
							</Media>
							<Media body className="col">
								<Media heading>
									Priyanshu Dwivedi
								</Media>
								<p>Junior Undergrad, Indian Institute of Information Technology, Design and Manufacturing, Jabalpur</p>
								<div>
									<a className="btn btn-social-icon btn-facebook" href="https://www.facebook.com/jerry.ankur"><i className="fa fa-facebook"></i></a>
									<a className="btn btn-social-icon btn-linkedin" href="https://www.linkedin.com/in/ankurdwivedi75/"><i className="fa fa-linkedin"></i></a>
									<a className="btn btn-social-icon btn-instagram" href="https://www.instagram.com/jerry.ankur/"><i className="fa fa-instagram"></i></a>
									<a className="btn btn-social-icon" href="mailto:ankurdwivedi75@gmail.com"><i className="fa fa-envelope-o"></i></a>
								</div>
							</Media>
						</Media>
					</Fade>
				</div>
			</Fade>
		</div>
	);
}

export default About;