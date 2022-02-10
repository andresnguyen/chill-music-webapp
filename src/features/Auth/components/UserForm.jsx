import { LoadingOutlined, PlusOutlined } from '@ant-design/icons'
import { Button, Card, DatePicker, Descriptions, Form, Input, message, Select, Upload } from 'antd'
import { genderList } from 'constants/user'
import React, { useEffect, useRef, useState } from 'react'
import { requiredLabel } from 'utils/common'
import { differentObject } from 'utils'
import moment from 'moment'
import { IMAGE_API_URL } from 'config'

function Detail({ data, updateLoading, onUpdate }) {
  const [form] = Form.useForm()
  const [avatarLoading, setAvatarLoading] = useState(false)
  const [avatarURL, setAvatarURL] = useState(null)

  const dataRef = useRef(null)
  const [changedData, setChangedData] = useState({})

  useEffect(() => {
    setFieldsValue(data)
    dataRef.current = data
  }, [data])

  useEffect(() => {
    setAvatarURL(data.avatarURL)
  }, [data])

  const handleValuesChange = (changedValues, allValues) => {
    const changedValue = differentObject(changedValues, dataRef.current)
    if (changedValues.dateOfBirth && moment(changedValues.dateOfBirth).isSame(dataRef.current.dateOfBirth)) {
      delete changedValue.dateOfBirth
    }
    setChangedData(changedValue)
  }

  const handleUpdateClick = () => {
    const payload = { ...changedData }
    setChangedData({})
    if (payload.avatarURL) {
      payload.avatarURL = payload.avatarURL.fileList.slice(-1)[0].response.data.path
    }

    onUpdate(data._id, payload)
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
      const avatarURL = info.file?.response?.data?.path
      setAvatarURL(avatarURL)
      setAvatarLoading(false)
      // getBase64(info.file.originFileObj, (imageURL) => {
      //   form.setFieldsValue({ imageURL: imageURL })
      // })
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

  const isActionDisable = !Boolean(Object.keys(changedData).length > 0) || avatarLoading

  const handleCancelClick = () => {
    setFieldsValue(data)
    setChangedData({})
  }

  const setFieldsValue = (values) => {
    form.setFieldsValue({ ...values, dateOfBirth: moment(values.dateOfBirth) })
  }

  return (
    <Form form={form} onValuesChange={handleValuesChange}>
      <Card title="Thông tin cá nhân">
        <Descriptions column={1} bordered>
          <Descriptions.Item label={requiredLabel('Ảnh đại diện')}>
            <Form.Item className="mb-0" name="avatarURL">
              <Upload
                name="image"
                listType="picture-card"
                className="avatar-uploader"
                showUploadList={false}
                action={`${IMAGE_API_URL}images`}
                beforeUpload={beforeUpload}
                onChange={handleChange}
              >
                {avatarURL && !avatarLoading ? (
                  <img src={avatarURL} alt="avatar" style={{ width: '100%' }} />
                ) : (
                  uploadButton
                )}
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
              <Select placeholder="Giới tính">
                {genderList.map((gender) => (
                  <Select.Option value={gender.id}>{gender.name}</Select.Option>
                ))}
              </Select>
            </Form.Item>
          </Descriptions.Item>

          <Descriptions.Item label={requiredLabel('Ngày sinh')}>
            <Form.Item name="dateOfBirth">
              <DatePicker
                disabledDate={(value) => {
                  if (value.valueOf() > moment().valueOf()) {
                    return true
                  }
                }}
                placeholder="Ngày sinh"
                style={{ display: 'block' }}
                format="DD/MM/YYYY"
                allowClear={false}
              />
            </Form.Item>
          </Descriptions.Item>

          <Descriptions.Item>
            <div style={{ display: 'flex', justifyContent: 'flex-end  ' }}>
              <Button danger className="me-2" disabled={isActionDisable} onClick={handleCancelClick}>
                Hủy bỏ
              </Button>
              <Button
                type="primary"
                disabled={isActionDisable}
                onClick={handleUpdateClick}
                style={{ marginLeft: 12 }}
                loading={updateLoading}
              >
                Cập nhật
              </Button>
            </div>
          </Descriptions.Item>
        </Descriptions>
      </Card>
    </Form>
  )
}

Detail.propTypes = {}

export default Detail
