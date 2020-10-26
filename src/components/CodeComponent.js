import {Fade, Stagger} from "react-animation-components";
import {Media} from "reactstrap";
import React from "react";

function Code() {
	return (
		<div className="container component-container">
			<Fade in>
				<h1>Code</h1>
				<Stagger in>
					<Media list>
						<div className="container component-body-container body-wide">
							<Fade in>
								<Media tag="li" id="frontend" className="row mt-3 mb-4">
									<Media left className="col-xs-12 col-sm-4 col-md-3 col-lg-2">
										<Media height="110px" object src={process.env.PUBLIC_URL + '/logo512.png'} alt="REACT_FRONTEND" />
									</Media>
									<Media body className="col">
										<Media heading>
											React - Frontend
										</Media>
										<p>The ReactJS is used for frontend. Read or fork the code from github. Github link below</p>
										<div>
											<a className="btn btn-social-icon btn-github" rel="noopener noreferrer" target="_blank" href="https://github.com/coderpd/react-django-jwt-auth-frontend"><i className="fa fa-github fa-lg"></i></a>
										</div>
									</Media>
								</Media>
							</Fade>
						</div>
						<div className="container component-body-container body-wide">
							<Fade in>
								<Media tag="li" id="backend" className="row mt-3 mb-4">
									<Media left className="col-xs-12 col-sm-4 col-md-3 col-lg-2">
										<Media height="110px" object src={process.env.PUBLIC_URL + '/django.webp'} alt="DJANGO_BACKENED" />
									</Media>
									<Media body className="col">
										<Media heading>
											Django - Backend
										</Media>
										<p>The Django Framework is used for backend. Read or fork the code from github. Github link below</p>
										<div>
											<a className="btn btn-social-icon btn-github" target="_blank" rel="noopener noreferrer" href="https://github.com/coderpd/react-django-jwt-auth-backened"><i className="fa fa-github fa-lg"></i></a>
										</div>
									</Media>
								</Media>
							</Fade>
						</div>
					</Media>
				</Stagger>
			</Fade>
		</div>
	);
}

export default Code;