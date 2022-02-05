import { Button, Card, Descriptions, Form, Input } from 'antd'
import React from 'react'
import { requiredLabel } from 'utils'

function ChangePassForm({ onSubmit, isLoading }) {
  const [form] = Form.useForm()

  const handleSubmit = (values) => {
    onSubmit(values)
    form.resetFields()
  }

  const handleCancelClick = () => {
    form.resetFields()
  }

  return (
    <Form form={form} initialValues={{}} onFinish={handleSubmit} className="change-pw-form">
      <Card title="Đổi mật khẩu">
        <Descriptions column={1} bordered>
          <Descriptions.Item label={requiredLabel('Mật khẩu hiện tại')}>
            <Form.Item
              block
              name="currentPassword"
              rules={[
                {
                  required: true,
                  message: 'Vui lòng điền mật khẩu hiện tại',
                },
              ]}
              hasFeedback
            >
              <Input.Password />
            </Form.Item>
          </Descriptions.Item>

          <Descriptions.Item label={requiredLabel('Mật khẩu mới')}>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Vui lòng điền mật khẩu mới',
                },
              ]}
              hasFeedback
            >
              <Input.Password />
            </Form.Item>
          </Descriptions.Item>

          <Descriptions.Item label={requiredLabel('Nhập lại mật khẩu mới')}>
            <Form.Item
              name="rePassword"
              dependencies={['password']}
              hasFeedback
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

          <Descriptions.Item>
            <div style={{ display: 'flex', justifyContent: 'flex-end  ' }}>
              <Button danger onClick={handleCancelClick}>
                Hủy bỏ
              </Button>
              <Button type="primary" htmlType="submit" style={{ marginLeft: 12 }} loading={isLoading}>
                Cập nhật
              </Button>
            </div>
          </Descriptions.Item>
        </Descriptions>
      </Card>
    </Form>
  )
}

ChangePassForm.propTypes = {}

export default ChangePassForm
