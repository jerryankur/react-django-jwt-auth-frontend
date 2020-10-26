import React, { Component } from "react";
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Button, Modal, ModalHeader, ModalBody, Label } from "reactstrap";
import { NavLink } from "react-router-dom";
import { Control, Errors, Form} from "react-redux-form";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => !(val) || (val.length >= len);

class Header extends Component {

	constructor(props) {
		super(props);

		this.state = {
			isNavOpen : false,
			isLogInModalOpen : false,
			isSignUpModalOpen: false
		}
		this.toggleNav = this.toggleNav.bind(this);
		this.toggleLogInModal = this.toggleLogInModal.bind(this);
		this.toggleSignUpModal = this.toggleSignUpModal.bind(this);
		this.handleLogIn = this.handleLogIn.bind(this);
		this.handleSignUp = this.handleSignUp.bind(this);
	}

	toggleNav() {
		this.setState({
			isNavOpen: !this.state.isNavOpen
		});
	}

	toggleLogInModal() {
		if (this.props.loggedIn)
			this.setState({
				isLogInModalOpen: false
			});
		else this.setState({
			isLogInModalOpen: !this.state.isLogInModalOpen
		});
	}

	toggleSignUpModal() {
		if (this.props.loggedIn)
			this.setState({
				isSignUpModalOpen: false
			});
		else this.setState({
			isSignUpModalOpen: !this.state.isSignUpModalOpen
		});
	}

	handleLogIn(values, event) {
		this.toggleLogInModal();
		this.props.logIn(values.username, values.password);
		event.preventDefault();
	}

	handleSignUp(values, event) {
		this.toggleSignUpModal();
		this.props.signUp(values.username, values.password);
		event.preventDefault();
	}

	render() {  //using <React.Fragement> </React.Fragement> short form = <>  </>, may not be understand by every browser
		return (
			<React.Fragment>
				<Navbar dark expand="md">
					<div className="container">
						<NavbarToggler onClick={this.toggleNav} />
						<NavbarBrand className="mr-auto" href="/">
							<img src={process.env.PUBLIC_URL + '/logo512.png'} height="40" width="40" alt="MY PAGE" />
						</NavbarBrand>
						<Collapse isOpen={this.state.isNavOpen} navbar>
							<Nav navbar>
								<NavItem>
									<NavLink className="nav-link" to="/home">
										<span className="fa fa-home fa-lg"></span> Home
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink className="nav-link" to="/about">
										<span className="fa fa-info fa-lg"></span> About Me
									</NavLink>
								</NavItem>
							</Nav>
							{!this.props.loggedIn &&
							<Nav className="ml-auto" navbar>
								<NavItem>
									<Button outline onClick={this.toggleLogInModal}>
										<span className="fa fa-sign-in fa-lg"></span> LogIn
									</Button>
								</NavItem>
							</Nav>
							}
							{!this.props.loggedIn &&
								<Nav className="ml-md-3" navbar>
									<NavItem>
										<Button outline onClick={this.toggleSignUpModal}>
											<span className="fa fa-user-plus fa-lg"></span> SignUp
										</Button>
									</NavItem>
								</Nav>
							}
							{this.props.loggedIn &&
							<Nav className="ml-auto" navbar>
								<NavItem>
									<h5>Hi {this.props.username}</h5>
								</NavItem>
							</Nav>
							}
							{this.props.loggedIn &&
							<Nav className="ml-3" navbar>
								<NavItem>
									<Button outline onClick={this.props.logOut}>
										<span className="fa fa-sign-out fa-lg"></span> LogOut
									</Button>
								</NavItem>
							</Nav>
							}
						</Collapse>
					</div>
				</Navbar>

				<Modal isOpen={this.state.isLogInModalOpen} toggle={this.toggleLogInModal}>
					<ModalHeader toggle={this.toggleLogInModal}>Log In</ModalHeader>
					<ModalBody>
						<Form model="account" name="account" onSubmit={this.handleLogIn}>
							<div className="form-group">
								<Label htmlFor="username">Username</Label>
								<Control.text className="form-control"
								              model=".username"
								              id="username"
								              name="username"
								              placeholder="User Name"
								              validators={{
									              required, minLength: minLength(2), maxLength: maxLength(15)
								              }}
								/>
								<Errors
									className="text-danger"
									model=".username"
									show="touched"
									messages={{
										required: 'Required',
										minLength: 'Must be 2 characters or more',
										maxLength: 'Must be 15 characters or less'
									}}
								/>
							</div>
							<div className="form-group">
								<Label htmlFor="password">Password</Label>
								<Control.password className="form-control"
								                  model=".password"
								                  id="password"
								                  name="password"
									              placeholder="Password"
									              validators={{
										              required, minLength: minLength(2), maxLength: maxLength(15)
									              }}
								/>
								<Errors
									className="text-danger"
									model=".password"
									show="touched"
									messages={{
										required: 'Required',
										minLength: 'Must be 2 characters or more',
										maxLength: 'Must be 15 characters or less'
									}}
								/>
							</div>
							<div className="form-group">
								<Label check>
									<Control.checkbox
										model=".remember"
										id="remember"
										name="remember"
									/>
									<text> Remember me</text>
								</Label>
							</div>
							<Button type="submit" value="submit" color="primary">LogIn</Button>
						</Form>
					</ModalBody>
				</Modal>

				<Modal isOpen={this.state.isSignUpModalOpen} toggle={this.toggleSignUpModal}>
					<ModalHeader toggle={this.toggleSignUpModal}>Sign Up</ModalHeader>
					<ModalBody>
						<Form model="account" onSubmit={this.handleSignUp}>
							<div className="form-group">
								<Label htmlFor="username">Username</Label>
								<Control.text className="form-control"
								              model=".username"
								              id="username"
								              name="username"
								              placeholder="User Name" validators={{
									required, minLength: minLength(2), maxLength: maxLength(15)
								}}
								/>
								<Errors
									className="text-danger"
									model=".username"
									show="touched"
									messages={{
										required: 'Required',
										minLength: 'Must be 2 characters or more',
										maxLength: 'Must be 15 characters or less'
									}}
								/>
							</div>
							<div className="form-group">
								<Label htmlFor="password">Password</Label>
								<Control.password className="form-control"
								                  model=".password"
								                  id="password"
								                  name="password" placeholder="Password"
								                  validators={{
									                  required, minLength: minLength(2), maxLength: maxLength(15)
								                  }}
								/>
								<Errors
									className="text-danger"
									model=".password"
									show="touched"
									messages={{
										required: 'Required',
										minLength: 'Must be 2 characters or more',
										maxLength: 'Must be 15 characters or less'
									}}
								/>
							</div>
							<Button type="submit" value="submit" color="primary">SignUp</Button>
						</Form>
					</ModalBody>
				</Modal>

			</React.Fragment>
		);
	}
}

export default Header;