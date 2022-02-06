import { Form, Input, message, Modal } from 'antd'
import collectionAPI from 'api/collectionAPI'
import React, { Fragment, useState } from 'react'

function PlaylistCreate(props) {
  const [visible, setVisible] = useState(false)
  const [loading, setLoading] = useState(false)

  console.log('first')

  const [form] = Form.useForm()

  const handleClick = () => {
    setVisible(true)
  }

  const handleCancelClick = () => {
    setVisible(false)
  }

  const handleOkClick = () => {
    form.submit()
  }

  const handleFinish = async (values) => {
    try {
      setLoading(true)
      const value = await collectionAPI.createPlaylist(values)
      message.success('Thêm playlist mới thành công')
      setLoading(false)
      setVisible(false)
      form.resetFields()
    } catch (error) {
      setLoading(false)
      setVisible(false)
      form.resetFields()
      message.error('Thêm playlist mới thất bại')
    }
  }

  return (
    <Fragment>
      <div className="col l-2-4 m-3 c-4 mb-30" onClick={handleClick}>
        <div className="row__item  playlist--create item--playlist">
          <div className="row__item-container flex--center item-create--properties">
            <i className="bi bi-plus-lg album__create-icon"></i>
            <span className="album__create-annotate text-center">Tạo playlist mới</span>
          </div>
        </div>
      </div>

      <Modal
        title="Nhập tên playlist"
        visible={visible}
        onOk={handleOkClick}
        onCancel={handleCancelClick}
        okText="Tạo"
        cancelText="Hủy bỏ"
        confirmLoading={loading}
      >
        <Form form={form} onFinish={handleFinish}>
          <Form.Item name="name" rules={[{ required: true, message: 'Vui lòng nhập tên playlist' }]}>
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </Fragment>
  )
}

PlaylistCreate.propTypes = {}

export default PlaylistCreate
