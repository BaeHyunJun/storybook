import 'antd/dist/antd.css';

import React from "react"

import {
	Button,
	Col,
	Form,
	Input,
	Layout,
	Row, Space,
	Upload,
} from "antd";
import ImgCrop from "antd-img-crop";

import { phoneFormat } from "../../utils/functions";

export interface props {
	data: any;
	
	onPreview: () => void;
	onUploadFile: () => void;
	onCancel: () => void;
	onSubmit: () => void;
}

function CompanyForm( { data, onPreview, onUploadFile, onCancel, onSubmit }: props) {
	return data && (
		<Layout style={{padding: "50px 0"}}>
			<Form
				labelCol={{ span: 6 }}
				wrapperCol={{ span: 12 }}
				layout="horizontal"
			>
				<Row>
					<Col span={12}>
						<Form.Item name="logo" label="회사 로고">
							<ImgCrop rotate>
								<Upload
									listType="picture-card"
									fileList={[data.logo]}
									onChange={onUploadFile}
									onPreview={onPreview}
								>
									{[data.logo].length < 1 && "+ Upload"}
								</Upload>
							</ImgCrop>
						</Form.Item>
					</Col>
				</Row>
				<Row>
					<Col span={12}>
						<Form.Item
							label="회사명"
							name="b_name"
							rules={[{ required: true, message: "회사명은 필수 입력입니다." }]}
							initialValue={data.b_name}
						>
							<Input />
						</Form.Item>
					</Col>
					<Col span={12}>
						<Form.Item
							label="사업자등록번호"
							name="b_reg_number"
							rules={[{ required: true, message: "사업자등록번호는 필수 입력입니다." }]}
							initialValue={data.b_reg_number}
						>
							<Input />
						</Form.Item>
					</Col>
				</Row>
				<Row>
					<Col span={12}>
						<Form.Item
							label="법인명"
							name="c_name"
							initialValue={data.c_name}
						>
							<Input />
						</Form.Item>
					</Col>
					<Col span={12}>
						<Form.Item
							label="법인등록번호"
							name="c_reg_number"
							initialValue={data.c_reg_number}
						>
							<Input />
						</Form.Item>
					</Col>
				</Row>
				<Row>
					<Col span={12}>
						<Form.Item
							label="대표자 명"
							name="ceo"
							rules={[{ required: true, message: "대표자 명은 필수 입력입니다." }]}
							initialValue={data.ceo}
						>
							<Input />
						</Form.Item>
					</Col>
					<Col span={12}>
						<Form.Item
							label="홈페이지"
							name="website"
							initialValue={data.website}
						>
							<Input />
						</Form.Item>
					</Col>
				</Row>
				<Row>
					<Col span={12}>
						<Form.Item
							name="tel"
							label="대표 전화번호"
							rules={[
								{
									required: true,
									message: "회사 대표 번호는 필수 입력입니다.",
								},
							]}
							initialValue={phoneFormat(data.tel)}
						>
							<Input
							/>
						</Form.Item>
					</Col>
					<Col span={12}>
						<Form.Item
							name="fax"
							label="대표 팩스번호"
							rules={[
								{
									required: true,
									message: "회사 팩스 번호는 필수 입력입니다.",
								},
							]}
							initialValue={phoneFormat(data.fax)}
						>
							<Input
							/>
						</Form.Item>
					</Col>
				</Row>
				<Row>
					<Col span={24}>
						<Form.Item
							name="address"
							label="사업장 주소"
							labelCol={{ span: 3 }}
							wrapperCol={{ span: 18 }}
							rules={[{ required: true, message: "사업장 주소는 필수 입력입니다." }]}
							initialValue={data.address}
						>
							<Input />
						</Form.Item>
					</Col>
				</Row>
				<Row>
					<Col span={12}>
						<Form.Item
							name="c_reg_file1"
							label="사업자 등록증"
							// rules={[{ required: true }]}
						>
							<Upload
								listType="picture-card"
								fileList={[data.logo]}
								onChange={onUploadFile}
								onPreview={onPreview}
								>
								{[data.logo].length < 1 && "+ Upload"}
							</Upload>
						</Form.Item>
					</Col>
					<Col span={12}>
						<Form.Item
							name="c_reg_file2"
							label="여행 사업자 등록증"
						>
							<Upload
								listType="picture-card"
								fileList={[data.logo]}
								onChange={onUploadFile}
								onPreview={onPreview}
							>
								{[data.logo].length < 1 && "+ Upload"}
							</Upload>
						</Form.Item>
					</Col>
				</Row>
				<Row>
					<Col span={5} offset={19}>
						<Space align="end">
							<Button type="primary" danger onClick={onCancel}>취소</Button>
							<Button type="primary" onClick={onSubmit}>
								정보 변경
							</Button>
						</Space>
					</Col>
				</Row>
			</Form>
		</Layout>
	)
}

export default CompanyForm;