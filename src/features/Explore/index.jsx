import siteAPI from 'api/siteAPI'
import React, { Fragment } from 'react'
import { useQuery } from 'react-query'
import Partner from './components/Partner'
import Section from './components/Section'
import SectionSkeletonV1 from './components/SectionSkeletonV1'
import Slider from './components/Slider'
import SliderSection from './components/SliderSection'

function ExploreFeature(props) {
  const { data = {}, isLoading, isError } = useQuery(['home'], () => siteAPI.home())
  return (
    <div className="app__container tab--explore">
      <div className="app__container-content">
        <div className="explore__container">
          <div className="grid">
            <div className="row container__section">
              <div className="col l-12 m-12 c-12">
                <Slider />
              </div>
            </div>
            {data.data &&
              data.data.map((item, index) => (
                <Fragment>
                  <Section key={item._id} data={item} />
                  {index === 3 && <SliderSection />}
                  {index === 7 && <Partner />}
                </Fragment>
              ))}

            {(isLoading || isError) && [1, 2, 3, 4, 5].map((item) => <SectionSkeletonV1 key={item} />)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExploreFeature
