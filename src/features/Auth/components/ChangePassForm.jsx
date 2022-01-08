import { Button, Card, Descriptions, Form, Input } from 'antd'
import React from 'react'

function ChangePassForm(props) {
  const handleChangePasswordSubmit = (values) => {}

  return (
    <Form
      onSubmit={handleChangePasswordSubmit}
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      className="change-pw-form"
    >
      <Card>
        <Descriptions column={1} bordered>
          <Descriptions.Item label={<Button type="primary">Đổi mật khẩu</Button>}>
            <Form.Item
              name="current-password"
              label="Mật khẩu hiện tại"
              rules={[
                {
                  required: true,
                  message: 'Vui lòng điền mật khẩu hiện tại!',
                },
              ]}
              hasFeedback
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              name="password"
              label="Mật khẩu mới"
              rules={[
                {
                  required: true,
                  message: 'Vui lòng điền mật khẩu mới!',
                },
              ]}
              hasFeedback
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="confirm"
              label="Nhập lại mật khẩu mới"
              dependencies={['password']}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: 'Vui lòng điền nhập lại mật khẩu mới!',
                },
                ({ getFieldValue }) => ({
                  validator(rule, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve()
                    }
                    return Promise.reject('Phải nhập đúng với mật khẩu trước đó!')
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>
          </Descriptions.Item>
          
          <Descriptions.Item>
            <div style={{ display: 'flex', justifyContent: 'flex-end  ' }}>
              <Button type="default">Hủy bỏ</Button>
              <Button type="primary" htmlType="submit" style={{ marginLeft: 12 }}>
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
