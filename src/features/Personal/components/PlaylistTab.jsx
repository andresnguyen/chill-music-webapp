import React from 'react'
import PropTypes from 'prop-types'
import AlbumList from 'components/AlbumList'
import { useState } from 'react'
import { useEffect } from 'react'
import collectionAPI from 'api/collectionAPI'
import EmptyBox from 'components/EmptyBox'

function PlaylistTab(props) {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState({})

  useEffect(() => {
    try {
      ;(async () => {
        setLoading(true)
        const { data } = await collectionAPI.getInfo()
        setData(data)
      })()
    } catch (error) {
      console.log('Failed to fetch')
    } finally {
      setLoading(false)
    }
  }, [])

  const { playlistList = [], favoritePlaylistList = [] } = data || {}
  return (
    <div className="grid container__tab tab-playlist">
      <div className="container__section row">
        <div className="col l-12 m-12 c-12 mb-16">
          <div className="container__header">
            <a href="#" className="container__header-title">
              <h3>Playlist&nbsp;</h3>
            </a>
            <h3 className="container__header-subtitle">Playlist</h3>
          </div>
        </div>
        <div className="col l-12 m-12 c-12">
          <AlbumList playlist data={[...playlistList, ...favoritePlaylistList]} />
          {!loading && [...playlistList, ...favoritePlaylistList].length === 0 && <EmptyBox />}
        </div>
      </div>
    </div>
  )
}

PlaylistTab.propTypes = {}

export default PlaylistTab
