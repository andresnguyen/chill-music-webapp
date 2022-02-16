import collectionAPI from 'api/collectionAPI'
import ArtistList from 'components/ArtistList'
import EmptyBox from 'components/EmptyBox'
import SectionSkeletonV1 from 'features/Explore/components/SectionSkeletonV1'
import React from 'react'
import { useQuery } from 'react-query'

function ArtistTab(props) {
  const { data: favoriteArtistList = [], isLoading: artistLoading } = useQuery(
    ['favorite-artist-list'],
    () => collectionAPI.getFavoriteArtistList(),
    {
      select: (value) => value?.data,
    }
  )

  return (
    <div className="grid container__tab tab-artist">
      <div className="container__section row">
        <div className="col l-12 m-12 c-12 mb-10">
          <div className="container__header">
            <a href="#" className="container__header-title">
              <h3>Nghệ Sĩ&nbsp;</h3>
            </a>
          </div>
        </div>
        <div className="col l-12 m-12 c-12">
          {favoriteArtistList.length > 0 && <ArtistList data={favoriteArtistList} />}
          {!artistLoading && favoriteArtistList.length === 0 && <EmptyBox />}
          {artistLoading && <SectionSkeletonV1 hiddenTitle />}
        </div>
      </div>
    </div>
  )
}

ArtistTab.propTypes = {}

export default ArtistTab
