import { FacebookOutlined } from '@ant-design/icons'
import { Button, message, Tabs } from 'antd'
import songAPI from 'api/songAPI'
import fallbackImage from 'assets/images/fallback.jpg'
import SongCardList from 'components/SongCardList'
import { changeMusicPlayerValue, pushToSongList } from 'features/MusicPlayer/musicPlayerSlice'
import moment from 'moment'
import React from 'react'
import { useQuery } from 'react-query'
import { useDispatch, useSelector } from 'react-redux'
import { useRouteMatch } from 'react-router-dom'
import { FacebookShareButton } from 'react-share'
import { renderArtistFromList } from 'utils'
import Lyric from '../component/Lyric'
import CommentTab from './CommentTab'

function DetailPage(props) {
  const {
    params: { id },
  } = useRouteMatch()

  const dispatch = useDispatch()

  const isPlaying = useSelector((state) => state.musicPlayer.playing)

  const { data, isLoading, isError } = useQuery(['song-detail', id], () => songAPI.get(id), {
    select: (value) => value?.data,
  })

  const { data: recommendList, isLoading: recommendLoading } = useQuery(
    ['song-recommend', data?.categoryId],
    () => songAPI.getRecommend(data?.categoryId),
    {
      enabled: Boolean(data?.categoryId),
      select: (value) => value?.data,
    }
  )

  const { name, imageURL, artistList, view = 0 } = data || {}

  const handlePlayPauseAllClick = () => {
    if (isPlaying) {
      dispatch(changeMusicPlayerValue({ name: 'playing', value: false }))
      return
    }

    dispatch(pushToSongList(data))
  }

  return (
    <div className="grid container__tab tab-home active">
      <div class="container__header"></div>
      <div className="container__control row">
        <div className="col l-12 m-12 c-12">
          <div className="container__playmusic" style={{ height: 'auto' }}>
            <div
              style={{
                margin: '0 auto',
                alignItems: 'flex-start',
                width: '300px',
                marginRight: '60px',
                marginTop: 23,
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  background: `url('${imageURL}'), url('${fallbackImage}')`,
                }}
                className="container__slide-img bg-song bg-song-custom"
              ></div>
              <h3 className="album-name">{name}</h3>
              <div style={{ color: 'var(--text-secondary)', fontSize: 14, marginTop: 3 }}>
                {renderArtistFromList(artistList)}
              </div>

              <div style={{ color: 'var(--text-secondary)', fontSize: 12, marginTop: 3 }}>{view} lượt nghe</div>

              <div className="container__header-actions container__header-actions-custom mt-20">
                <span></span>
                <button
                  className="button is-small button-primary container__header-btn btn--play-all"
                  onClick={handlePlayPauseAllClick}
                >
                  <i className={`bi bi-play-fill container__header-icon`}></i>
                  <span>Phát ngay</span>
                </button>
                <span></span>
              </div>
            </div>
            <div className="container__playlist">
              <div className="playlist__list music-list-drawer">
                <Tabs
                  defaultActiveKey="0"
                  onChange={(value) => {
                    if (value == 1 || value == 3) {
                      message.warn('Tính năng đang được phát triển')
                    }
                  }}
                >
                  <Tabs.TabPane tab="Bình luận" key="0">
                    <CommentTab songId={data?._id} />
                  </Tabs.TabPane>
                  <Tabs.TabPane tab="Lời bài hát" key="1">
                    <Lyric />
                  </Tabs.TabPane>
                  <Tabs.TabPane tab="Mô tả bài hát" key="3">
                    <h4>Ngày phát hành: {moment(data?.createdAt).format('DD/MM/YYYY')}</h4>
                    <h4 style={{ maxWidth: 800 }}>
                      Mô tả: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique eligendi aliquid
                      repellendus doloremque asperiores itaque alias blanditiis reiciendis possimus, a quae excepturi
                      deleniti odit nam omnis odio cupiditate impedit ab.
                    </h4>
                  </Tabs.TabPane>
                  <Tabs.TabPane tab="Chia sẻ lên mạng xã hội" key="4">
                    <FacebookShareButton url={`${window.location.origin}/songs/${data?._id}`}>
                      <Button
                        icon={<FacebookOutlined />}
                        size="large"
                        type="primary"
                        htmlType="submit"
                        className="login-form-facebook"
                        block
                      >
                        Chia sẻ lên Facebook
                      </Button>
                    </FacebookShareButton>
                  </Tabs.TabPane>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
        <div className="col l-12 m-12 c-12 mb-16">
          <div className="container__header">
            <a href="#" className="container__header-title">
              <h3>Bài hát liên quan&nbsp;</h3>
            </a>
            <h3 className="container__header-subtitle">Playlist</h3>
          </div>
        </div>
        <div className="col l-12 m-12 c-12">{recommendList?.length > 0 && <SongCardList data={recommendList} />}</div>
      </div>
    </div>
  )
}

DetailPage.propTypes = {}

export default DetailPage
