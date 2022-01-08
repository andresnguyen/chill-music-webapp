import { LockOutlined, UserOutlined, GoogleOutlined, FacebookOutlined } from '@ant-design/icons'
import { unwrapResult } from '@reduxjs/toolkit'
import { Button, Form, Input, message, Select, DatePicker, Descriptions, Card } from 'antd'
import { genderList } from 'constants/user'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

function Register(props) {
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
    <div className="register-container">
      <Form form={form} onFinish={handleFinish} className="login-form">
        <Card>
          <Descriptions column={1} bordered>
            <Descriptions.Item label={<b>ĐĂNG KÝ</b>}>
              <Form.Item
                name="fullName"
                rules={[
                  { required: true, message: 'Vui lòng nhập trên đăng nhập!' },
                  {
                    type: 'email',
                    message: 'Vui lòng nhập đúng định dạng email!',
                  },
                ]}
              >
                <Input size="large" placeholder="Tên đầy đủ" />
              </Form.Item>
              <Form.Item
                name="email"
                rules={[
                  { required: true, message: 'Vui lòng nhập trên đăng nhập!' },
                  {
                    type: 'email',
                    message: 'Vui lòng nhập đúng định dạng email!',
                  },
                ]}
              >
                <Input size="large" placeholder="Email" />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  { required: true, message: 'Vui lòng nhập mật khẩu!' },
                  { min: 6, message: 'Mật khẩu tổi thiểu là 6 kí tự!' },
                ]}
              >
                <Input.Password size="large" type="password" placeholder="Mật khẩu" />
              </Form.Item>

              <Form.Item
                name="re-password"
                rules={[
                  { required: true, message: 'Vui lòng nhập mật khẩu!' },
                  { min: 6, message: 'Mật khẩu tổi thiểu là 6 kí tự!' },
                ]}
              >
                <Input.Password size="large" type="password" placeholder="Nhập lại mật khẩu" />
              </Form.Item>

              <Form.Item name="gender" rules={[{ required: true }]}>
                <Select size="large" placeholder="Giới tính của bạn là gì?" allowClear>
                  {genderList.map((gender) => (
                    <Select.Option value={gender.id}>{gender.name}</Select.Option>
                  ))}
                </Select>
              </Form.Item>

              <Form.Item name="dateOfBirth" rules={[{ required: true }]}>
                <DatePicker size="large" style={{ width: '100%' }} placeholder="Chọn ngày tháng năm sinh của bạn" />
              </Form.Item>

              <Form.Item>
                <Button size="large" type="primary" htmlType="submit" className="login-form-button" block>
                  Đăng ký
                </Button>
              </Form.Item>
            </Descriptions.Item>
          </Descriptions>
        </Card>
      </Form>
    </div>
  )
}

Register.propTypes = {}

export default Register
