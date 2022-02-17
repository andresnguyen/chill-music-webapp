import albumAPI from 'api/albumAPI'
import categoryAPI from 'api/categoryAPI'
import AlbumList from 'components/AlbumList'
import React from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'

function CategoryDetail(props) {
  const { id } = useParams()

  const { data: dataCategory, isLoading: categoryLoading } = useQuery(['category-detail'], () => categoryAPI.get(id), {
    select: (value) => value?.data,
  })

  const { data, isLoading } = useQuery(
    ['album-list'],
    () =>
      albumAPI.getAll({
        limit: 100,
        noArtist: true,
        categoryId: id,
      }),
    {
      select: (value) => value?.data,
    }
  )

  return (
    <div className="grid container__tab tab-home active">
      <div className="container__section row">
        <div className="col l-12 m-12 c-12 mb-16">
          <div className="container__header">
            <a href="#" className="container__header-title">
              <h3>{dataCategory?.name || 'Thể loại'}&nbsp;</h3>
              {/* <i className="bi bi-chevron-right container__header-icon"></i> */}
            </a>
          </div>
        </div>
        <div className="col l-12 m-12 c-12">
          <AlbumList data={data} />
        </div>
      </div>
    </div>
  )
}

CategoryDetail.propTypes = {}

export default CategoryDetail
