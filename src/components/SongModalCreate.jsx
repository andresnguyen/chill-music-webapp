import { LoadingOutlined, PlusOutlined } from '@ant-design/icons'
import { Button, Descriptions, Form, Input, message, Modal, Upload } from 'antd'
import songAPI from 'api/songAPI'
import { IMAGE_API_URL, UPLOAD_SONG_API_URL } from 'config'
import { changeValueCommon } from 'features/Common/commonSlice'
import React, { useRef, useState } from 'react'
import { useEffect } from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { useDispatch, useSelector } from 'react-redux'
import { requiredLabel } from 'utils'

function SongModalCreate() {
  const visible = useSelector((state) => state.common.songCreateOpen)
  const dispatch = useDispatch()
  const audioRef = useRef()

  const setVisible = (value) => {
    dispatch(
      changeValueCommon({
        name: 'songCreateOpen',
        value: value,
      })
    )
  }

  const [form] = Form.useForm()
  const [imageLoading, setImageLoading] = useState(false)
  const [mediaLoading, setMediaLoading] = useState(false)
  const [imageURL, setImageURL] = useState(null)
  const [mediaURL, setMediaURL] = useState(null)

  const queryClient = useQueryClient()

  const { mutate, isLoading } = useMutation((data) => songAPI.add({ ...data, type: 1, isActive: false }), {
    onSuccess: () => {
      message.success('Tải bài hát lên thành công')
    },

    onError: () => {
      message.error('Tải bài hát lên thất bại')
    },

    onSettled: () => {
      queryClient.invalidateQueries('my-song-list')
      setVisible(false)
      form.resetFields()
      setImageURL(null)
      setMediaURL(null)
    },
  })

  const handleResetForm = () => {
    setImageURL(null)
    setMediaURL(null)
    form.resetFields()
  }

  const handleFinish = async (values) => {
    const payload = { ...values }
    if (payload.imageURL) {
      payload.imageURL = payload.imageURL.fileList.slice(-1)[0].response.data.path
    }

    if (payload.mediaURL) {
      payload.mediaURL = payload.mediaURL.fileList.slice(-1)[0].response.data.path
    }

    payload.time = audioRef.current?.duration

    mutate(payload)
  }

  const uploadButton = (
    <div>
      {imageLoading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Tải lên</div>
    </div>
  )

  const uploadButtonMedia = (
    <div>
      {mediaLoading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Tải lên</div>
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

  const beforeUploadMedia = (file) => {
    const isVideo = file.type === 'audio/mpeg' || file.type === 'audio/ogg' || file.type === 'audio/wav'
    if (!isVideo) {
      message.error('You can only upload audio file!')
    }

    const isLt10M = file.size / 1024 / 1024 < 20
    if (!isLt10M) {
      message.error('Image must smaller than 20MB!')
    }

    return isVideo && isLt10M
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

  const handleChangeMedia = (info) => {
    if (info.file.status === 'uploading') {
      setMediaLoading(true)
      return
    }

    if (info.file.status === 'done') {
      // Get this url from response in real world.
      const mediaURL = info.file?.response?.data?.path
      setMediaURL(mediaURL)
      setMediaLoading(false)
    }
  }

  return (
    <Modal title="Tải lên bài hát" footer={null} visible={visible} onCancel={() => setVisible(false)} width={800}>
      <Form form={form} onFinish={handleFinish}>
        <Descriptions column={1} bordered className="feature-form playlist-form">
          <Descriptions.Item label={requiredLabel('Hình ảnh')}>
            <Form.Item className="mb-0" name="imageURL" rules={[{ required: true, message: 'Vui lòng chọn hình ảnh' }]}>
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

          <Descriptions.Item label={requiredLabel('Âm thanh')} className="upload-media">
            <Form.Item
              className="mb-0"
              name="mediaURL"
              rules={[{ required: true, message: 'Vui lòng tải lên âm thanh' }]}
            >
              <Upload
                name="song"
                listType="picture-card"
                className="avatar-uploader"
                showUploadList={false}
                action={`${UPLOAD_SONG_API_URL}upload-song`}
                beforeUpload={beforeUploadMedia}
                onChange={handleChangeMedia}
              >
                {mediaURL && !mediaLoading ? (
                  <audio controls ref={audioRef}>
                    <source src={mediaURL} type="audio/ogg" />
                  </audio>
                ) : (
                  uploadButtonMedia
                )}
              </Upload>
            </Form.Item>
          </Descriptions.Item>

          <Descriptions.Item label={requiredLabel('Tên')}>
            <Form.Item className="mb-0" name="name" rules={[{ required: true, message: 'Vui lòng nhập tên' }]}>
              <Input placeholder="Tên" />
            </Form.Item>
          </Descriptions.Item>

          <Descriptions.Item>
            <div className="d-flex justify-content-end">
              <Button danger className="me-2" onClick={handleResetForm} disabled={isLoading}>
                Hủy bỏ
              </Button>
              <Button type="primary" htmlType="submit" disabled={isLoading} loading={isLoading}>
                Tạo
              </Button>
            </div>
          </Descriptions.Item>
        </Descriptions>
      </Form>
    </Modal>
  )
}

SongModalCreate.propTypes = {}

export default SongModalCreate
