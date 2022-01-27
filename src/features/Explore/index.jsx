import siteAPI from 'api/siteAPI'
import React, { Fragment } from 'react'
import { useQuery } from 'react-query'
import Partner from './components/Partner'
import Section from './components/Section'
import Slider from './components/Slider'
import SliderSection from './components/SliderSection'

function ExploreFeature(props) {
  const { data = {}, isLoading, isError } = useQuery(['home'], () => siteAPI.home())
  return (
    <div class="app__container tab--explore">
      <div class="app__container-content">
        <div class="explore__container">
          <div class="grid">
            <div class="row container__section">
              <div class="col l-12 m-12 c-12">
                <Slider />
              </div>
            </div>
            {data.data &&
              data.data.map((item, index) => (
                <Fragment>
                  <Section data={item} />
                  {index === 3 && <SliderSection />}
                  {index === 7 && <Partner />}
                </Fragment>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExploreFeature
