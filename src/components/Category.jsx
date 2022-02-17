import fallbackImage from 'assets/images/fallback.jpg'
import React from 'react'
import { Link, useHistory } from 'react-router-dom'

function Category({ data }) {
  const history = useHistory()

  const { bannerURL, name, _id } = data

  const handleItemClick = () => {
    history.push({
      pathname: `/categories/${_id}`,
    })
  }

  return (
    <div className="col l-2-4 m-3 c-4 mb-30">
      <div className="row__item item--playlist" onClick={handleItemClick}>
        <div className="row__item-container flex--top-left">
          <div className="row__item-display br-5">
            <div
              className="row__item-img img--square bg-song"
              style={{
                background: `url('${bannerURL}'), url('${fallbackImage}')`,
              }}
            ></div>

            <div className="overlay"></div>
          </div>
          <div className="row__item-info">
            <Link to={`/categories/${_id}`} className="row__info-name is-twoline">
              {name}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

Category.propTypes = {}

export default Category
