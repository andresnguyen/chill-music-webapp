import { message, Modal, Typography } from 'antd'
import playlistAPI from 'api/playlistAPI'
import { changeValueCommon } from 'features/Common/commonSlice'
import React from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { useDispatch, useSelector } from 'react-redux'

function PlaylistModalUpdate() {
  const queryClient = useQueryClient()
  const dispatch = useDispatch()

  const setVisible = (value) => {
    dispatch(
      changeValueCommon({
        name: 'playlistDeleteOpen',
        value: value,
      })
    )
  }

  const visible = useSelector((state) => state.common.playlistDeleteOpen)
  const data = useSelector((state) => state.common.playlistDeleteData)

  const { mutate, isLoading } = useMutation(() => playlistAPI.delete(data._id), {
    onSuccess: () => {
      message.success('Xóa playlist thành công')
    },

    onError: () => {
      message.error('Xóa playlist thất bại')
    },

    onSettled: () => {
      queryClient.invalidateQueries('my-playlist-list')
      setVisible(false)
    },
  })

  return (
    <Modal
      title="Xóa playlist"
      visible={visible}
      onCancel={() => setVisible(false)}
      onOk={mutate}
      okText="Đồng ý"
      cancelText="Hủy bỏ"
      confirmLoading={isLoading}
    >
      <Typography.Title level={5}> Bạn chắc chắc muốn xóa playlist này?</Typography.Title>
    </Modal>
  )
}

PlaylistModalUpdate.propTypes = {}

export default PlaylistModalUpdate
