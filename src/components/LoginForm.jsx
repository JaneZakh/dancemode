import {Form, Input, Button, message} from 'antd';
import axios from "axios";
import {useState} from "react";

const LoginForm = () => {
	const [user, setUser] = useState(null)
	const [loading, setLoading] = useState(false)

	const onFinish = (values) => {
		setLoading(true)
		axios({
			method: 'POST',
			url: 'https://admin.buldov.com/wp-json/jwt-auth/v1/token',
			data: values
		}).then(res => {
			setUser(res.data)
			message.success('Hello')
		}).catch(error => message.error(error.response.data.message.replace(/<[^>]*>?/gm, '')))
		.finally(() => setLoading(false))
	};

	return user ? (
		<h1>Hello {user.user_display_name} </h1>
	) : (
		<Form onFinish={onFinish}>
			<Form.Item
				label="Username"
				name="username"
			>
				<Input />
			</Form.Item>

			<Form.Item
				label="Password"
				name="password"
			>
				<Input.Password />
			</Form.Item>

			<Form.Item>
				<Button loading={loading} type="primary" htmlType="submit">Submit</Button>
			</Form.Item>
		</Form>
	);
};
export default LoginForm

