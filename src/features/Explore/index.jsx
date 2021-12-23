import React from 'react'
import Partner from './components/Partner'
import Section from './components/Section'
import Slider from './components/Slider'
import SliderSection from './components/SliderSection'

function ExploreFeature(props) {
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
            <Section />
            <SliderSection />
            <Section />
            <Section />
            <Partner />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExploreFeature
