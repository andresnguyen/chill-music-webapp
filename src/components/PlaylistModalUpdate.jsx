import { LoadingOutlined, PlusOutlined } from '@ant-design/icons'
import { Button, Descriptions, Form, Input, message, Modal, Upload } from 'antd'
import playlistAPI from 'api/playlistAPI'
import { IMAGE_API_URL } from 'config'
import { changeValueCommon } from 'features/Common/commonSlice'
import React, { useEffect, useRef, useState } from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { useDispatch, useSelector } from 'react-redux'
import { differentObject, requiredLabel } from 'utils'

function PlaylistModalUpdate() {
  const [form] = Form.useForm()
  const dataRef = useRef(null)
  const [changedData, setChangedData] = useState({})
  const [imageLoading, setImageLoading] = useState(false)
  const [imageURL, setImageURL] = useState(null)
  const queryClient = useQueryClient()
  const dispatch = useDispatch()

  const setVisible = (value) => {
    dispatch(
      changeValueCommon({
        name: 'playlistUpdateOpen',
        value: value,
      })
    )
  }

  const visible = useSelector((state) => state.common.playlistUpdateOpen)
  const data = useSelector((state) => state.common.playlistUpdateData)

  useEffect(() => {
    form.setFieldsValue(data)
    dataRef.current = data
  }, [data])

  useEffect(() => {
    setImageURL(data.imageURL)
  }, [data])

  const { mutate, isLoading } = useMutation(({ id, values }) => playlistAPI.update(id, values), {
    onSuccess: () => {
      message.success('Cập nhật playlist thành công')
    },

    onError: () => {
      message.error('Cập nhật playlist thất bại')
    },

    onSettled: () => {
      queryClient.invalidateQueries('my-playlist-list')
      setVisible(false)
      form.resetFields()
    },
  })

  const handleValuesChange = (changedValues, allValues) => {
    const changedValue = differentObject(allValues, dataRef.current)
    setChangedData(changedValue)
  }

  const handleResetForm = () => {
    setImageURL(data.imageURL)
    form.resetFields()
    setChangedData({})
  }

  const handleUpdateClick = () => {
    const payload = { ...changedData }
    setChangedData({})
    if (payload.imageURL) {
      payload.imageURL = payload.imageURL.fileList.slice(-1)[0].response.data.path
    }

    if (payload.bannerURL) {
      payload.bannerURL = payload.bannerURL.fileList.slice(-1)[0].response.data.path
    }

    mutate({ id: data._id, values: payload })
  }

  const uploadButton = (
    <div>
      {imageLoading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  )

  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!')
    }

    const isLt2M = file.size / 1024 / 1024 < 2
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!')
    }

    return isJpgOrPng && isLt2M
  }

  const handleChange = (info) => {
    if (info.file.status === 'uploading') {
      setImageLoading(true)
      return
    }

    if (info.file.status === 'done') {
      // Get this url from response in real world.
      const imageURL = info.file?.response?.data?.path
      setImageURL(imageURL)
      setImageLoading(false)
    }
  }

  return (
    <Modal
      title="Cập nhật playlist"
      footer={null}
      visible={visible}
      onCancel={() => setVisible(false)}
    >
      <Form form={form} initialValues={data} onValuesChange={handleValuesChange} onFinish={handleUpdateClick}>
        <Descriptions column={1} bordered className="feature-form playlist-form">
          <Descriptions.Item label="Hình ảnh">
            <Form.Item className="mb-0" name="imageURL">
              <Upload
                name="image"
                listType="picture-card"
                className="avatar-uploader"
                showUploadList={false}
                action={`${IMAGE_API_URL}images`}
                beforeUpload={beforeUpload}
                onChange={handleChange}
              >
                {imageURL && !imageLoading ? (
                  <img src={imageURL} alt="avatar" style={{ width: '100%' }} />
                ) : (
                  uploadButton
                )}
              </Upload>
            </Form.Item>
          </Descriptions.Item>

          <Descriptions.Item label={requiredLabel('Tên')} rules={[{ required: true, message: 'Vui lòng điền tên' }]}>
            <Form.Item className="mb-0" name="name">
              <Input placeholder="Tên" />
            </Form.Item>
          </Descriptions.Item>

          {Object.keys(changedData).length > 0 && (
            <Descriptions.Item>
              <div className="d-flex justify-content-end">
                <Button danger className="me-2" onClick={handleResetForm} disabled={isLoading}>
                  Hủy bỏ
                </Button>
                <Button type="primary" htmlType="submit" disabled={isLoading} loading={isLoading}>
                  Cập nhật
                </Button>
              </div>
            </Descriptions.Item>
          )}
        </Descriptions>
      </Form>
    </Modal>
  )
}

PlaylistModalUpdate.propTypes = {}

export default PlaylistModalUpdate
