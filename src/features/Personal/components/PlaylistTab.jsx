import collectionAPI from 'api/collectionAPI'
import AlbumList from 'components/AlbumList'
import EmptyBox from 'components/EmptyBox'
import React, { useEffect, useState } from 'react'

function PlaylistTab(props) {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState({})
  let isMount = false

  useEffect(() => {
    isMount = true
    try {
      ;(async () => {
        setLoading(true)
        const { data } = await collectionAPI.getInfo()
        setData(data)
        setLoading(false)
      })()
    } catch (error) {
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
          {[...playlistList, ...favoritePlaylistList].length > 0 && (
            <AlbumList playlist data={[...playlistList, ...favoritePlaylistList]} />
          )}
          {isMount && !loading && [...playlistList, ...favoritePlaylistList].length === 0 && <EmptyBox />}
        </div>
      </div>
    </div>
  )
}

PlaylistTab.propTypes = {}

export default PlaylistTab
