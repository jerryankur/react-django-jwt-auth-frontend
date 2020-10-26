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
								<Media height="110px" object src={process.env.PUBLIC_URL + '/pd.jpg'} alt="pd" />
							</Media>
							<Media body className="col">
								<Media heading>
									Priyanshu Dwivedi
								</Media>
								<p>Junior Undergrad, Indian Institute of Information Technology, Design and Manufacturing, Jabalpur</p>
								<div>
									<a className="btn btn-social-icon btn-facebook" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/jerry.ankur"><i className="fa fa-facebook"></i></a>
									<a className="btn btn-social-icon btn-linkedin" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/ankurdwivedi75/"><i className="fa fa-linkedin"></i></a>
									<a className="btn btn-social-icon btn-instagram" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/jerry.ankur/"><i className="fa fa-instagram"></i></a>
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