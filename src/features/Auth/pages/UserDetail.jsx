import { message } from 'antd'
import userAPI from 'api/userAPI'
import React from 'react'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { useDispatch, useSelector } from 'react-redux'
import UserForm from '../components/UserForm'
import { changeValue } from '../userSlice'

function UserDetail(props) {
  const queryClient = useQueryClient()
  const dispatch = useDispatch()

  const user = useSelector((state) => state.user.current)
  const { data: { data = {} } = {}, isLoading, isError } = useQuery(['user-detail', user], () => userAPI.get(user._id))

  const { mutate, isLoading: updateLoading } = useMutation(({ id, data }) => userAPI.update(id, data), {
    onSuccess: (data) => {
      dispatch(changeValue({ name: 'current', value: data.data }))
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
    if(updateLoading) return
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
