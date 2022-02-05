import { message } from 'antd'
import userAPI from 'api/userAPI'
import React from 'react'
import { useMutation } from 'react-query'
import ChangePassForm from '../components/ChangePassForm'

function ChangePassword(props) {
  const { mutate, isLoading } = useMutation(({ data }) => userAPI.changePassword(data), {
    onSuccess: () => {
      message.success('Cập nhật mật khẩu thành công!')
    },

    onError: () => {
      message.error('Cập nhật mật khẩu thất bại!')
    },
  })

  const handleUpdate = async (data) => {
    mutate({ data })
  }

  return (
    <div className="app__container tab--explore">
      <div className="app__container-content">
        <div className="explore__container">
          <div className="grid">
            <div className="row container__section">
              <div className="col l-12 m-12 c-12 my-account">
                <ChangePassForm onSubmit={handleUpdate} isLoading={isLoading} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

ChangePassword.propTypes = {}

export default ChangePassword
