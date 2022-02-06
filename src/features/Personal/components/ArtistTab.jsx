import collectionAPI from 'api/collectionAPI'
import ArtistList from 'components/ArtistList'
import EmptyBox from 'components/EmptyBox'
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
      })()
    } catch (error) {
      console.log('Failed to fetch')
    } finally {
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
        </div>
      </div>
    </div>
  )
}

ArtistTab.propTypes = {}

export default ArtistTab
