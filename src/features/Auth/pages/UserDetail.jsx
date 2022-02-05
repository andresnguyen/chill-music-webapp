import { message } from 'antd'
import userAPI from 'api/userAPI'
import React from 'react'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { useSelector } from 'react-redux'
import UserForm from '../components/UserForm'

function UserDetail(props) {
  const queryClient = useQueryClient()

  const user = useSelector((state) => state.user.current)
  const { data: { data = {} } = {}, isLoading, isError } = useQuery(['user-detail', user], () => userAPI.get(user._id))

  const { mutate, isLoading: updateLoading } = useMutation(({ id, data }) => userAPI.update(id, data), {
    onSuccess: () => {
      message.success('Cập nhật thành công!')
    },

    onError: () => {
      message.error('Cập nhật thất bại!')
    },

    onSettled: () => {
      queryClient.invalidateQueries('user-detail')
    },
  })

  const handleUpdate = async (id, data) => {
    mutate({ id, data })
  }

  return (
    <div className="app__container tab--explore">
      <div className="app__container-content">
        <div className="explore__container">
          <div className="grid">
            <div className="row container__section">
              <div className="col l-12 m-12 c-12 my-account">
                <UserForm data={data} onUpdate={handleUpdate} updateLoading={updateLoading} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

UserDetail.propTypes = {}

export default UserDetail
