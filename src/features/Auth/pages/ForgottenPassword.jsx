import { UserOutlined } from '@ant-design/icons'
import { Button, Card, Descriptions, Form, Input, message, Steps } from 'antd'
import userAPI from 'api/userAPI'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { requiredLabel } from 'utils'

const { Step } = Steps

function ForgottenPassword(props) {
  const [current, setCurrent] = useState(0)
  const [loading, setLoading] = useState(false)
  const [infoForm] = Form.useForm()
  const [codeForm] = Form.useForm()
  const [passForm] = Form.useForm()
  const history = useHistory()

  const handleInfoSubmit = async (values) => {
    try {
      setLoading(true)
      const result = await userAPI.forgottenPasswordS1(values)
      message.success(`Vui lòng kiểm tra mã code trong hộp thư email: ${values.email}`)
      setCurrent(1)
      setLoading(false)
    } catch (error) {
      message.error('Email không hợp lệ')
      setLoading(false)
    }
  }

  const handleCodeSubmit = async (values) => {
    const email = infoForm.getFieldValue('email')
    try {
      setLoading(true)
      const result = await userAPI.forgottenPasswordS2({ ...values, email })
      message.success('Nhập password mới để hoàn tất')
      setCurrent(2)
      setLoading(false)
    } catch (error) {
      message.error('Mã code không hợp lệ')
      setLoading(false)
    }
  }

  const handleDoneSubmit = async (values) => {
    const email = infoForm.getFieldValue('email')
    const code = codeForm.getFieldValue('code')
    try {
      setLoading(true)
      const result = await userAPI.forgottenPasswordS3({ ...values, code, email })
      message.success('Cập nhật mật khẩu thành công')
      setTimeout(() => {
        history.push({
          pathname: '/',
        })
      }, 3000)
      setLoading(false)
    } catch (error) {
      message.error('Thay đổi thất bại')
      setLoading(false)
    }
  }

  return (
    <div className="forgotten-container">
      <Card title="Quên mật khẩu">
        <Steps current={current} size="small" className="site-navigation-steps mb-30">
          <Step status={current === 0 ? 'process' : 'wait'} title="Nhập thông tin" />
          <Step status={current === 1 ? 'process' : 'wait'} title="Nhập mã code" />
          <Step status={current === 2 ? 'process' : 'wait'} title="Nhập mật khẩu mới" />
        </Steps>

        {current === 0 && (
          <Form form={infoForm} onFinish={handleInfoSubmit} className="forgotten-form">
            <Descriptions column={1} bordered>
              <Descriptions.Item label={requiredLabel('Nhập email')}>
                <Form.Item
                  name="email"
                  rules={[
                    { required: true, message: 'Vui lòng nhập email' },
                    {
                      type: 'email',
                      message: 'Vui lòng nhập đúng định dạng email',
                    },
                  ]}
                  className="mb-0"
                >
                  <Input
                    size="large"
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="Email"
                    type="email"
                  />
                </Form.Item>
              </Descriptions.Item>
            </Descriptions>
            <div className="d-f-justify-end">
              <Button
                size="large"
                type="primary"
                htmlType="submit"
                className="login-form-button mt-20"
                loading={loading}
              >
                Tiếp tục
              </Button>
            </div>
          </Form>
        )}

        {current === 1 && (
          <Form form={codeForm} onFinish={handleCodeSubmit} className="forgotten-form">
            <Descriptions column={1} bordered>
              <Descriptions.Item label={requiredLabel('Nhập mã code')}>
                <Form.Item name="code" rules={[{ required: true, message: 'Vui lòng nhập mã code' }]} className="mb-0">
                  <Input
                    size="large"
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="Mã code"
                    type="text"
                  />
                </Form.Item>
              </Descriptions.Item>
            </Descriptions>
            <div className="d-f-justify-end">
              <Button
                size="large"
                type="primary"
                htmlType="submit"
                className="login-form-button mt-20"
                loading={loading}
              >
                Tiếp tục
              </Button>
            </div>
          </Form>
        )}

        {current === 2 && (
          <Form form={passForm} onFinish={handleDoneSubmit} className="forgotten-form">
            <Descriptions column={1} bordered>
              <Descriptions.Item label={requiredLabel('Mật khẩu mới')}>
                <Form.Item
                  className="mb-0"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: 'Vui lòng điền mật khẩu mới',
                    },
                  ]}
                >
                  <Input.Password />
                </Form.Item>
              </Descriptions.Item>

              <Descriptions.Item label={requiredLabel('Nhập lại mật khẩu mới')}>
                <Form.Item
                  className="mb-0"
                  name="rePassword"
                  dependencies={['password']}
                  rules={[
                    {
                      required: true,
                      message: 'Vui lòng điền nhập lại mật khẩu mới',
                    },
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
                  <Input.Password />
                </Form.Item>
              </Descriptions.Item>
            </Descriptions>
            <div className="d-f-justify-end">
              <Button
                size="large"
                type="primary"
                htmlType="submit"
                className="login-form-button mt-20"
                loading={loading}
              >
                Tiếp tục
              </Button>
            </div>
          </Form>
        )}
      </Card>
    </div>
  )
}

ForgottenPassword.propTypes = {}

export default ForgottenPassword
