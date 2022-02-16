import collectionAPI from 'api/collectionAPI'
import AlbumList from 'components/AlbumList'
import EmptyBox from 'components/EmptyBox'
import SectionSkeletonV1 from 'features/Explore/components/SectionSkeletonV1'
import React from 'react'
import { useQuery } from 'react-query'

function AlbumTab(props) {
  const { data: favoriteAlbumList = [], isLoading: albumLoading } = useQuery(
    ['favorite-album-list'],
    () => collectionAPI.getFavoriteAlbumList(),
    {
      select: (value) => value?.data,
    }
  )

  return (
    <div className="grid container__tab tab-album">
      <div className="container__section row">
        <div className="col l-12 m-12 c-12 mb-16">
          <div className="container__header">
            <a href="#" className="container__header-title">
              <h3>Album&nbsp;</h3>
            </a>
          </div>
        </div>
        <div className="col l-12 m-12 c-12">
          {favoriteAlbumList.length > 0 && <AlbumList data={favoriteAlbumList} />}
          {!albumLoading && favoriteAlbumList.length === 0 && <EmptyBox />}
          {albumLoading && <SectionSkeletonV1 hiddenTitle />}
        </div>
      </div>
    </div>
  )
}

AlbumTab.propTypes = {}

export default AlbumTab
