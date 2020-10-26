import React, { Component } from 'react';
import Header from "./HeaderComponent";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import {
	logIn, logOut, signUp, verifyUser
} from "../redux/ActionCreators";
import { actions } from "react-redux-form";
import Home from "./HomeComponent";
import About from "./AboutComponent";
import Code from "./CodeComponent";

const mapStateToProps = state => {    // convert state to props
	return {
		username: state.userData.username,
		processing: state.userData.processing,
		errMess: state.userData.errMess,
		loggedIn: state.userData.loggedIn,
	};
}

const mapDispatchToProps = (dispatch) => ({
	logIn: (username, password) => dispatch(logIn(username, password)),
	logOut: () => dispatch(logOut()),
	signUp: (username, password) => dispatch(signUp(username, password)),
	verifyUser: (token) => dispatch(verifyUser(token)),
	resetForm: () => dispatch(actions.reset('feedback')),
});

class Main extends Component {

	componentDidMount() {
		if (this.props.loggedIn)
			this.props.verifyUser(localStorage.getItem('token'))
	}

	render() {

		return (
			<div>
				<Header
					logIn = {this.props.logIn}
					signUp = {this.props.signUp}
					logOut = {this.props.logOut}
					loggedIn = {this.props.loggedIn}
					resetForm = {this.props.resetForm}
					formField = {this.props.formField}
					username = {this.props.username}
				/>
				<Switch>
					<Route path="/home" component={() => <Home processing={this.props.processing} loggedIn={this.props.loggedIn} username={this.props.username} />} />
					<Route path="/about" component={About}/>
					<Route path="/code" component={Code} />
					<Redirect to="/home" />
				</Switch>
			</div>
		);
	}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
