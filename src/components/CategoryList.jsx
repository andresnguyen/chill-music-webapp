import React from 'react'
import Category from './Category'

function CategoryList({ data }) {
  return (
    <div className="row playlist--container">
      {data?.map((item) => (
        <Category data={item} />
      ))}
    </div>
  )
}

CategoryList.propTypes = {}
export default CategoryList
