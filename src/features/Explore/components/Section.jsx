import Album from 'components/Album'
import Playlist from 'components/Playlist'
import SongCard from 'components/SongCard'
import React from 'react'

function Section({ data = {} }) {
  const renderList = (data) => {
    const firstItem = data[0]
    const isAlbum = firstItem.songList && firstItem.artistId
    const isPlaylist = firstItem.songList && !firstItem.artistId
    const isSong = firstItem.mediaURL

    if (isAlbum) return data.map((item) => <Album key={item._id} data={item} />)
    if (isPlaylist) return data.map((item) => <Playlist key={item._id} data={item} />)
    if (isSong) return data.map((item) => <SongCard key={item._id} data={item} />)
  }

  return (
    <div className="row container__section normal-playlist--section mt-30">
      <div className="col l-12 m-12 c-12 mb-16">
        <div className="container__header">
          <a href="#" className="container__header-title">
            <h3>{data.title}</h3>
          </a>
          <h3 className="container__header-subtitle">{data.title}</h3>
        </div>
      </div>

      <div className="col l-12 m-12 c-12">
        <div className="row no-wrap normal-playlist--container">{renderList(data.data)}</div>
      </div>
    </div>
  )
}

Section.propTypes = {}

export default Section
