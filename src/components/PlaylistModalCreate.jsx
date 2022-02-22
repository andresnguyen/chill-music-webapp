import { Form, Input, message, Modal } from 'antd'
import collectionAPI from 'api/collectionAPI'
import { changeValueCommon } from 'features/Common/commonSlice'
import React from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

function PlaylistModalCreate() {
  const [form] = Form.useForm()
  const queryClient = useQueryClient()
  const visible = useSelector((state) => state.common.playlistCreateOpen)
  const dispatch = useDispatch()

  const setVisible = (value) => {
    dispatch(
      changeValueCommon({
        name: 'playlistCreateOpen',
        value: value,
      })
    )
  }

  const handleCancelClick = () => {
    setVisible(false)
  }

  const handleOkClick = () => {
    form.submit()
  }

  const { mutate, isLoading } = useMutation((values) => collectionAPI.createPlaylist(values), {
    onSuccess: () => {
      message.success('Thêm playlist mới thành công')
    },

    onError: () => {
      message.error('Thêm playlist mới thất bại')
    },

    onSettled: () => {
      queryClient.invalidateQueries('my-playlist-list')
      setVisible(false)
      form.resetFields()
    },
  })

  const handleFinish = async (values) => {
    mutate(values)
  }

  return (
    <Modal
      title="Nhập tên playlist"
      visible={visible}
      onOk={handleOkClick}
      onCancel={handleCancelClick}
      okText="Tạo"
      cancelText="Hủy bỏ"
      confirmLoading={isLoading}
      width={400}
    >
      <Form form={form} onFinish={handleFinish}>
        <Form.Item name="name" rules={[{ required: true, message: 'Vui lòng nhập tên playlist' }]}>
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  )
}

PlaylistModalCreate.propTypes = {}

export default PlaylistModalCreate
