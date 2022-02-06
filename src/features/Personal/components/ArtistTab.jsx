import collectionAPI from 'api/collectionAPI'
import ArtistList from 'components/ArtistList'
import EmptyBox from 'components/EmptyBox'
import SectionSkeletonV1 from 'features/Explore/components/SectionSkeletonV1'
import React, { useEffect, useState } from 'react'

function ArtistTab(props) {
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

  const { favoriteArtistList = [] } = data || {}

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
          {isMount && !loading && favoriteArtistList.length === 0 && <EmptyBox />}
          {loading && <SectionSkeletonV1 hiddenTitle />}
        </div>
      </div>
    </div>
  )
}

ArtistTab.propTypes = {}

export default ArtistTab
