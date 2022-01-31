import { LoadingOutlined, PlusOutlined } from '@ant-design/icons'
import { Button, Card, DatePicker, Descriptions, Form, Input, message, Select, Upload } from 'antd'
import { genderList } from 'constants/user'
import React, { useEffect, useRef, useState } from 'react'
import { requiredLabel } from 'utils/common'

function Detail({ data, onUpdate }) {
  const [form] = Form.useForm()
  const [avatarLoading, setAvatarLoading] = useState(false)
  const [avatarURL, setAvatarURL] = useState(null)

  const dataRef = useRef(null)
  const [changedData, setChangedData] = useState({})

  useEffect(() => {
    form.setFieldsValue(data)
    dataRef.current = data
  }, [data])

  const handleValuesChange = (changedValues, allValues) => {
    // const changedValue = differentObject(allValues, dataRef.current)
    // setChangedData(changedValue)
  }

  const handleUpdateClick = () => {
    setChangedData({})
    onUpdate(data.id, changedData)
  }

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
      setAvatarLoading(true)
      return
    }

    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (imageUrl) => {
        setAvatarLoading(false)
        setAvatarURL(imageUrl)
      })
    }
  }

  const getBase64 = (img, callback) => {
    const reader = new FileReader()
    reader.addEventListener('load', () => callback(reader.result))
    reader.readAsDataURL(img)
  }

  const uploadButton = (
    <div>
      {avatarLoading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  )

  return (
    <Form form={form} initialValues={data} onValuesChange={handleValuesChange}>
      <Card title="Thông tin cá nhân">
        <Descriptions column={1} bordered>
          <Descriptions.Item label={requiredLabel('Ảnh đại diện')}>
            <Form.Item className="mb-0" name="avatarURL">
              <Upload
                name="avatar"
                listType="picture-card"
                className="avatar-uploader"
                showUploadList={false}
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                beforeUpload={beforeUpload}
                onChange={handleChange}
              >
                {avatarURL ? <img src={avatarURL} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
              </Upload>
            </Form.Item>
          </Descriptions.Item>

          <Descriptions.Item label={requiredLabel('Email')}>
            <Form.Item name="email">
              <Input placeholder="Email" disabled />
            </Form.Item>
          </Descriptions.Item>

          <Descriptions.Item label={requiredLabel('Họ và tên')}>
            <Form.Item name="fullName">
              <Input placeholder="Họ và tên" />
            </Form.Item>
          </Descriptions.Item>

          <Descriptions.Item label={requiredLabel('Giới tính')}>
            <Form.Item name="gender">
              <Select placeholder="Giới tính" allowClear>
                {genderList.map((gender) => (
                  <Select.Option value={gender.id}>{gender.name}</Select.Option>
                ))}
              </Select>
            </Form.Item>
          </Descriptions.Item>

          <Descriptions.Item label={requiredLabel('Ngày sinh')}>
            <Form.Item name="dateOfBirth">
              <DatePicker placeholder="Ngày sinh" style={{ display: 'block' }} />
            </Form.Item>
          </Descriptions.Item>

          {/* {Object.keys(changedData).length > 0 && (
            <Descriptions.Item>
              <div className="d-flex justify-content-end">
                <Button type="default" className="me-2">
                  Hủy bỏ
                </Button>
                <Button type="primary" onClick={handleUpdateClick}>
                  Cập nhật
                </Button>
              </div>
            </Descriptions.Item>
          )} */}

          {false && (
            <Descriptions.Item>
              <div style={{ display: 'flex', justifyContent: 'flex-end  ' }}>
                <Button type="default" className="me-2">
                  Hủy bỏ
                </Button>
                <Button type="primary" onClick={handleUpdateClick} style={{ marginLeft: 12 }}>
                  Cập nhật
                </Button>
              </div>
            </Descriptions.Item>
          )}
        </Descriptions>
      </Card>
    </Form>
  )
}

Detail.propTypes = {}

export default Detail
