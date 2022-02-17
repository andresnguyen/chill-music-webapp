import categoryAPI from 'api/categoryAPI'
import CategoryList from 'components/CategoryList'
import React from 'react'
import { useQuery } from 'react-query'

function PageList() {
  const { data, isLoading } = useQuery(['category-list'], () => categoryAPI.getAll({ limit: 100 }), {
    select: (value) => value?.data,
  })

  return (
    <div className="grid container__tab tab-home active">
      <div className="container__section row">
        <div className="col l-12 m-12 c-12 mb-16">
          <div className="container__header">
            <a href="#" className="container__header-title">
              <h3>Thể loại&nbsp;</h3>
              <i className="bi bi-chevron-right container__header-icon"></i>
            </a>
          </div>
        </div>
        <div className="col l-12 m-12 c-12">
          <CategoryList data={data} />
        </div>
      </div>
    </div>
  )
}

PageList.propTypes = {}

export default PageList
