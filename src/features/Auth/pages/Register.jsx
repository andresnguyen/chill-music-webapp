import { unwrapResult } from '@reduxjs/toolkit'
import { Button, Card, DatePicker, Descriptions, Form, Input, message, Select } from 'antd'
import userAPI from 'api/userAPI'
import { genderList } from 'constants/user'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

function Register(props) {
  const history = useHistory()
  const [loading, setLoading] = useState(false)
  const [form] = Form.useForm()

  const handleFinish = async (values) => {
    try {
      setLoading(true)
      const result = await userAPI.register(values)
      unwrapResult(result)

      setLoading(false)
      message.success('Đăng ký thành công. Chuyển về trang login sau 2s')
      setTimeout(
        () =>
          history.push({
            pathname: '/auth/login',
          }),
        2000
      )
    } catch (error) {
      setLoading(false)
      message.error('Đăng ký không thành công.')
      form.setFieldsValue({ password: undefined, rePassword: undefined })
    }
  }
  return (
    <div className="register-container">
      <Form form={form} onFinish={handleFinish} className="login-form">
        <Card>
          <Descriptions column={1} bordered>
            <Descriptions.Item label={<b>ĐĂNG KÝ</b>}>
              <Form.Item name="fullName" rules={[{ required: true, message: 'Vui lòng nhập tên đầy đủ' }]}>
                <Input size="large" placeholder="Tên đầy đủ" />
              </Form.Item>
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
                <Input size="large" placeholder="Email" />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  { required: true, message: 'Vui lòng nhập mật khẩu' },
                  { min: 6, message: 'Mật khẩu tổi thiểu là 6 kí tự' },
                ]}
              >
                <Input.Password size="large" type="password" placeholder="Mật khẩu" />
              </Form.Item>

              <Form.Item
                name="rePassword"
                rules={[
                  { required: true, message: 'Vui lòng nhập mật khẩu' },
                  { min: 6, message: 'Mật khẩu tổi thiểu là 6 kí tự' },
                  ({ getFieldValue }) => ({
                    validator(rule, value) {
                      if (!value || getFieldValue('password') === value) {
                        return Promise.resolve()
                      }
                      return Promise.reject('Phải nhập đúng với mật khẩu trước đó')
                    },
                  }),
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
                <Button size="large" type="primary" htmlType="submit" className="login-form-button" block loading={loading} disabled={loading}>
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
