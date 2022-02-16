import { message, Modal, Typography } from 'antd'
import songAPI from 'api/songAPI'
import { changeValueCommon } from 'features/Common/commonSlice'
import React from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { useDispatch, useSelector } from 'react-redux'

function SongModalUpdate() {
  const queryClient = useQueryClient()
  const dispatch = useDispatch()

  const setVisible = (value) => {
    dispatch(
      changeValueCommon({
        name: 'songDeleteOpen',
        value: value,
      })
    )
  }

  const visible = useSelector((state) => state.common.songDeleteOpen)
  const data = useSelector((state) => state.common.songDeleteData)

  const { mutate, isLoading } = useMutation(() => songAPI.delete(data._id), {
    onSuccess: () => {
      message.success('Xóa bài hát thành công')
    },

    onError: () => {
      message.error('Xóa bài hát thất bại')
    },

    onSettled: () => {
      queryClient.invalidateQueries('home-tab')
      setVisible(false)
    },
  })

  return (
    <Modal
      title="Xóa bài hát"
      visible={visible}
      onCancel={() => setVisible(false)}
      onOk={mutate}
      okText="Đồng ý"
      cancelText="Hủy bỏ"
      confirmLoading={isLoading}
    >
      <Typography.Title level={5}> Bạn chắc chắc muốn xóa bài hát này?</Typography.Title>
    </Modal>
  )
}

SongModalUpdate.propTypes = {}

export default SongModalUpdate
