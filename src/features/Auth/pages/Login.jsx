import { LockOutlined, UserOutlined, GoogleOutlined, FacebookOutlined } from '@ant-design/icons'
import { unwrapResult } from '@reduxjs/toolkit'
import { Button, Form, Input, message } from 'antd'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

function Login(props) {
  const history = useHistory()
  const dispatch = useDispatch()
  const [form] = Form.useForm()

  const handleFinish = async (values) => {
    try {
      const result = await dispatch(null)
      unwrapResult(result)
      history.push({
        pathname: '/',
      })
    } catch (error) {
      message.error('Đăng nhập không thành công.')
      form.setFieldsValue({ password: undefined })
    }
  }
  return (
    <div className="login-container">
      <Form
        form={form}
        onFinish={handleFinish}
        initialValues={{ username: 'thuongnguyen@gmail.com', password: '123456a@' }}
        className="login-form"
      >
        <Form.Item
          name="username"
          rules={[
            { required: true, message: 'Vui lòng nhập trên đăng nhập!' },
            {
              type: 'email',
              message: 'Vui lòng nhập đúng định dạng email!',
            },
          ]}
        >
          <Input size="large" prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Tên đăng nhập" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            { required: true, message: 'Vui lòng nhập mật khẩu!' },
            { min: 6, message: 'Mật khẩu tổi thiểu là 6 kí tự!' },
          ]}
        >
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            size="large"
            type="password"
            placeholder="Mật khẩu"
          />
        </Form.Item>

        <Form.Item>
          <Button size="large" type="primary" htmlType="submit" className="login-form-button" block>
            Đăng nhập
          </Button>
        </Form.Item>
        <div className="text-end">
          <a className="text-decoration-underline" href="">
            Quên mật khẩu
          </a>
        </div>
        <Button
          size="large"
          type="primary"
          htmlType="submit"
          className="login-form-google"
          icon={<GoogleOutlined />}
          block
        >
          Đăng nhập bằng Google
        </Button>
        <Button
          icon={<FacebookOutlined />}
          size="large"
          type="primary"
          htmlType="submit"
          className="login-form-facebook"
          block
        >
          Đăng nhập bằng Facebook
        </Button>
      </Form>
    </div>
  )
}

Login.propTypes = {}

export default Login
