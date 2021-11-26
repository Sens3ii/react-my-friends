import React, { Component } from "react";
import styled from "styled-components";

const HomePageBlock = styled.div`
	color: #fff;
`;

export default class HomePage extends Component {
	render() {
		return (
			<HomePageBlock className="d-flex flex-row align-items-center my-4 pt-4">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-md-12 text-center">
							<span className="display-3 d-block mb-4">Welcome to the homepage!</span>
							{/* <div className="mb-2 lead">You are not authed! Please login in to the system</div> */}
						</div>
					</div>
				</div>
			</HomePageBlock>
		);
	}
}
