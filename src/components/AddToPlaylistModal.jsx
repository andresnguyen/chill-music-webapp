import { Menu, message, Modal } from 'antd'
import collectionAPI from 'api/collectionAPI'
import { changeValueCommon } from 'features/Common/commonSlice'
import React from 'react'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { useDispatch, useSelector } from 'react-redux'

function AddToPlaylistModal() {
  const visible = useSelector((state) => state.common.addToPlaylistOpen)
  const song = useSelector((state) => state.common.addToPlaylistData)

  const setVisible = (value) => {
    dispatch(
      changeValueCommon({
        name: 'addToPlaylistOpen',
        value: value,
      })
    )
  }

  const dispatch = useDispatch()

  const queryClient = useQueryClient()

  const { data: myPlaylistList = [], isLoading: myPlaylistLoading } = useQuery(
    ['my-playlist-list'],
    () => collectionAPI.getMyPlaylistList(),
    {
      select: (value) => value?.data,
    }
  )

  const { mutate, isLoading } = useMutation(
    ({ playlistId, songId }) => collectionAPI.addSongToPlaylist(playlistId, songId),
    {
      onSuccess: () => {
        message.success(`Thêm bài hát ${song.name} vào playlist thành công`)
      },

      onError: () => {
        message.error(`Thêm bài hát ${song.name} vào playlist thất bại`)
      },

      onSettled: () => {
        queryClient.invalidateQueries('my-playlist-list')
      },
    }
  )

  const handleMenuClick = (item) => {
    mutate({ playlistId: item.key, songId: song._id })
  }

  return (
    <Modal
      className="add-to-playlist-modal"
      title="Thêm vào playlist"
      footer={null}
      visible={visible}
      onCancel={() => setVisible(false)}
      width={400}
    >
      <Menu onClick={handleMenuClick}>
        {myPlaylistList.map((item) => (
          <Menu.Item key={item?._id}>
            <div className="menu__item">
              <i className="bi bi-music-note-list"></i> <span>{item?.name}</span>
            </div>
          </Menu.Item>
        ))}
      </Menu>
    </Modal>
  )
}

AddToPlaylistModal.propTypes = {}

export default AddToPlaylistModal
