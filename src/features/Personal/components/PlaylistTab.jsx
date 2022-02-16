import collectionAPI from 'api/collectionAPI'
import EmptyBox from 'components/EmptyBox'
import PlaylistList from 'components/PlaylistList'
import SectionSkeletonV1 from 'features/Explore/components/SectionSkeletonV1'
import React from 'react'
import { useQuery } from 'react-query'

function PlaylistTab(props) {
  const { data: favoritePlaylistList = [], isLoading: playlistLoading } = useQuery(
    ['favorite-playlist-list'],
    () => collectionAPI.getFavoritePlaylistList(),
    {
      select: (value) => value?.data,
    }
  )

  const { data: myPlaylistList = [], isLoading: myPlaylistLoading } = useQuery(
    ['my-playlist-list'],
    () => collectionAPI.getMyPlaylistList(),
    {
      select: (value) => value?.data,
    }
  )

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
          {[...favoritePlaylistList, ...myPlaylistList].length > 0 && (
            <PlaylistList playlist data={[...myPlaylistList, ...favoritePlaylistList]} />
          )}
          {!playlistLoading && !myPlaylistLoading && [...myPlaylistList, ...favoritePlaylistList].length === 0 && (
            <EmptyBox />
          )}
          {playlistLoading && myPlaylistLoading && <SectionSkeletonV1 hiddenTitle />}
        </div>
      </div>
    </div>
  )
}

PlaylistTab.propTypes = {}

export default PlaylistTab
