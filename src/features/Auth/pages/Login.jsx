import { FacebookOutlined, GoogleOutlined, LockOutlined, UserOutlined } from '@ant-design/icons'
import { unwrapResult } from '@reduxjs/toolkit'
import { Button, Card, Descriptions, Form, Input, message } from 'antd'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { login } from '../userSlice'

function Login(props) {
  const history = useHistory()
  const dispatch = useDispatch()
  const [form] = Form.useForm()
  const [loading, setLoading] = useState(false)

  const handleFinish = async (values) => {
    try {
      setLoading(true)
      const result = await dispatch(login(values))
      unwrapResult(result)
      history.push({
        pathname: '/',
      })
      setLoading(false)
    } catch (error) {
      message.error('Đăng nhập không thành công')
      form.setFieldsValue({ password: undefined })
      setLoading(false)
    }
  }

  return (
    <div className="login-container">
      <Form
        form={form}
        onFinish={handleFinish}
        initialValues={{ email: 'thuongnguyen.it78@gmail.com', password: '123456a@' }}
        className="login-form"
      >
        <Card>
          <Descriptions column={1} bordered>
            <Descriptions.Item label={<b>ĐĂNG NHẬP</b>}>
              <Form.Item
                name="email"
                rules={[
                  { required: true, message: 'Vui lòng nhập email' },
                  {
                    type: 'email',
                    message: 'Vui lòng nhập đúng định dạng email',
                  },
                ]}
              >
                <Input size="large" prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  { required: true, message: 'Vui lòng nhập mật khẩu' },
                  { min: 6, message: 'Mật khẩu tổi thiểu là 6 kí tự' },
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
                <Button
                  size="large"
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                  block
                  loading={loading}
                  disabled={loading}
                >
                  Đăng nhập
                </Button>
              </Form.Item>
              <div className="text-end">
                <Link className="text-decoration-underline" to="/auth/forgotten-password">
                  Quên mật khẩu
                </Link>
              </div>
              {/* <Button
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
              </Button> */}
            </Descriptions.Item>
          </Descriptions>
        </Card>
      </Form>
    </div>
  )
}

Login.propTypes = {}

export default Login
