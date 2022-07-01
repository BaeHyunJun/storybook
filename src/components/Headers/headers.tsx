import 'antd/dist/antd.css';

import React from "react"
import { Avatar, Button, Col, Dropdown, Image, Layout, Menu, Row, Typography } from 'antd';

import { UserOutlined } from '@ant-design/icons';

const { Header } = Layout;
const {Text} = Typography;

export interface props {
	logo?: any;
	
	username?: string;
	menuItems?: any[];
	subMenuItem?: any[];
	
	handlerMenu: () => void;
}

function Headers( { logo, username, menuItems, subMenuItem, handlerMenu }: props) {
	return (
		<Header className="header">
			<Row gutter={16}>
				<Col className="gutter-row" span={3}>
					<div className="logo">
						<Image src={ logo } />
					</div>
				</Col>
				<Col className="gutter-row" span={15}>
					<Menu
						theme="dark"
						mode="horizontal"
						defaultOpenKeys={["dashboard"]}
						defaultSelectedKeys={["dashboard"]}
						items={menuItems}
						onClick={handlerMenu}
					/>
				</Col>
				<Col className="gutter-row" span={6}>
					<Dropdown
						overlay={
							<Menu
								theme="dark"
								style={{ marginTop: "-6px" }}
								items={subMenuItem}
								onClick={handlerMenu}
							/>
						}
						placement="bottom"
					>
						<Button
							type="text"
							style={{
								padding: "0",
								lineHeight: "inherit",
								height: "auto",
							}}
						>
							<Row gutter={16}>
								<Col>
									<Avatar icon={<UserOutlined />} />
								</Col>
								<Col>
									<Text style={{ color: "white" }}>{ username } 님</Text>
								</Col>
							</Row>
						</Button>
					</Dropdown>
				</Col>
			</Row>
		</Header>
	)
}

export default Headers;