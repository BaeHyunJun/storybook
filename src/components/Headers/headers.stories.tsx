import React from "react"

import { Meta } from "@storybook/react"
import Headers  from "./headers"

import logo from '../assets/logo.png';

export default {
	title: "Components/Header",
	component: Headers,
} as Meta

const menu = [
	{ label: "대시보드", key: "dashboard", link: "/admin/" },
	{ label: "상품 관리", key: "products", link: "/admin/products" },
	{ label: "예약 관리", key: "reserve", link: "/admin/reserve" },
]

const subMenu = [
	{ label: "정보수정", key: "profile", link: "/admin/profile" },
	{ label: "로그아웃", key: "logout" },
]

const handlerMenu = (e?: any) => {
	// const { link } = menuItems.filter((f) => f.key === e.key)[0];
	//
	// router.push(link);
	
	console.log(e);
};

export const Basic = (args: any) => <Headers {...args} />
Basic.args = {
	logo: logo,
	username: 'charisma36@natour.co.kr',
	menuItems: menu,
	subMenuItem: subMenu,
	
	handlerMenu: handlerMenu,
}