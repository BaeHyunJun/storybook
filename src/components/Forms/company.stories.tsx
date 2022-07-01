import React from "react"

import { Meta } from "@storybook/react"

import { UploadProps } from "antd/lib/upload/interface";

import CompanyForm  from "./company"

export default {
	title: "Components/Form",
	component: CompanyForm,
} as Meta

const companyData = {
	address: "부산 사하구 장평로 432 (괴정동) 1층 나의여행",
	b_name: "나의여행",
	b_reg_number: "6428800573",
	c_code: "220001",
	c_name: "나의여행",
	c_reg_number: "6428800573",
	ceo: "하동현",
	fax: "05042308462",
	logo: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
	tel: "0517143133",
	website: "www.natour.co.kr",
}

const uploadFileChange: UploadProps["onChange"] = ({
   fileList: newFileList,
 }) => {
	console.log(newFileList);
};

export const Company = (args: any) => <CompanyForm {...args} />
Company.args = {
	data: companyData,
	uploadFileChange: uploadFileChange
}