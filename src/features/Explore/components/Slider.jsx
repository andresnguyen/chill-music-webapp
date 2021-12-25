import React, { useEffect, useRef } from 'react'

function Slider(props) {
  const containerRef = useRef(null)
  const autoMoveSlideId = useRef(null)
  useEffect(() => {
    const slideMove = document.querySelector('.explore__slide--container .explore__slide-move')

    const prev = () => {
      const container = containerRef.current
      const slideMoveItems = Array.from(container.querySelectorAll('.explore__slide-item'))

      container.querySelector('.explore__slide-item.next').classList.remove('next')
      container.querySelector('.explore__slide-item.prev').classList.remove('prev')
      const firstSlide = container.querySelector('.explore__slide-item.first')
      const secondSlide = container.querySelector('.explore__slide-item.second')
      const thirdSlide = container.querySelector('.explore__slide-item.third')
      const fourthSlide = container.querySelector('.explore__slide-item.fourth')
      const sixthSlide = container.querySelector('.explore__slide-item.sixth')

      const fifthSlideIndex =
        slideMoveItems.indexOf(sixthSlide) === 0 ? slideMoveItems.length - 1 : slideMoveItems.indexOf(sixthSlide) - 1
      const fifthSlide = slideMoveItems[fifthSlideIndex]

      firstSlide.classList.replace('first', 'second')
      secondSlide.classList.replace('second', 'third')
      thirdSlide.classList.add('prev')
      thirdSlide.classList.replace('third', 'fourth')
      fourthSlide.classList.replace('fourth', 'fifth')
      fifthSlide.classList.replace('fifth', 'sixth')
      sixthSlide.classList.add('next')
      sixthSlide.classList.replace('sixth', 'first')
    }
    const next = () => {
      const container = containerRef.current
      const slideMoveItems =  Array.from(container.querySelectorAll('.explore__slide-item'))

      container.querySelector('.explore__slide-item.next').classList.remove('next')
      container.querySelector('.explore__slide-item.prev').classList.remove('prev')
      const firstSlide = container.querySelector('.explore__slide-item.first')
      const secondSlide = container.querySelector('.explore__slide-item.second')
      const thirdSlide = container.querySelector('.explore__slide-item.third')
      const fourthSlide = container.querySelector('.explore__slide-item.fourth')
      const sixthSlide = container.querySelector('.explore__slide-item.sixth')
      const fifthSlideIndex =
        slideMoveItems.indexOf(fourthSlide) === slideMoveItems.length - 1 ? 0 : slideMoveItems.indexOf(fourthSlide) + 1
      const fifthSlide = slideMoveItems[fifthSlideIndex]

      firstSlide.classList.add('prev')
      firstSlide.classList.replace('first', 'sixth')
      secondSlide.classList.replace('second', 'first')
      thirdSlide.classList.replace('third', 'second')
      fourthSlide.classList.add('next')
      fourthSlide.classList.replace('fourth', 'third')
      fifthSlide.classList.replace('fifth', 'fourth')
      sixthSlide.classList.replace('sixth', 'fifth')
    }

    const run = () => {
      next()
      slideMove.onclick = (e) => {
        const prevBtn = e.target.closest('.slide__move-btn.btn--prev')
        const nextBtn = e.target.closest('.slide__move-btn.btn--next')

        if (prevBtn) {
          prev()
          clearTimeout(autoMoveSlideId.current)
          autoMoveSlideId.current = setTimeout(run, 4000)
        }

        if (nextBtn) {
          next()
          clearTimeout(autoMoveSlideId.current)
          autoMoveSlideId.current = setTimeout(run, 4000)
        }
      }
    }
    run()
  }, [])

  return (
    <div class="row explore__slide--container" ref={containerRef}>
      <div class="explore__slide-move">
        <div class="slide__move-btn btn--prev">
          <i class="bi bi-chevron-left"></i>
        </div>
        <div class="slide__move-btn btn--next">
          <i class="bi bi-chevron-right"></i>
        </div>
      </div>
      <div class="col l-4 m-4 c-6 explore__slide-item fourth">
        <div class="row__item-display">
          <div
            class="explore__slide-img row__item-img img--rec"
            style={{
              background:
                "url('https://vikdang.github.io/Code_web_music_player/assets/img/tabExplore/slides/slide1.jpg') no-repeat center center / cover",
            }}
          ></div>
        </div>
      </div>

      <div class="col l-4 m-4 c-6 explore__slide-item fifth">
        <div class="row__item-display">
          <div
            class="explore__slide-img row__item-img img--rec"
            style={{
              background:
                "url('https://vikdang.github.io/Code_web_music_player/assets/img/tabExplore/slides/slide2.jpg') no-repeat center center / cover",
            }}
          ></div>
        </div>
      </div>

      <div class="col l-4 m-4 c-6 explore__slide-item fifth">
        <div class="row__item-display">
          <div
            class="explore__slide-img row__item-img img--rec"
            style={{
              background:
                "url('https://vikdang.github.io/Code_web_music_player/assets/img/tabExplore/slides/slide3.jpg') no-repeat center center / cover",
            }}
          ></div>
        </div>
      </div>

      <div class="col l-4 m-4 c-6 explore__slide-item fifth">
        <div class="row__item-display">
          <div
            class="explore__slide-img row__item-img img--rec"
            style={{
              background:
                "url('https://vikdang.github.io/Code_web_music_player/assets/img/tabExplore/slides/slide4.jpg') no-repeat center center / cover",
            }}
          ></div>
        </div>
      </div>

      <div class="col l-4 m-4 c-6 explore__slide-item sixth prev">
        <div class="row__item-display">
          <div
            class="explore__slide-img row__item-img img--rec"
            style={{
              background:
                "url('https://vikdang.github.io/Code_web_music_player/assets/img/tabExplore/slides/slide5.jpg') no-repeat center center / cover",
            }}
          ></div>
        </div>
      </div>

      <div class="col l-4 m-4 c-6 explore__slide-item first">
        <div class="row__item-display">
          <div
            class="explore__slide-img row__item-img img--rec"
            style={{
              background:
                "url('https://vikdang.github.io/Code_web_music_player/assets/img/tabExplore/slides/slide6.jpg') no-repeat center center / cover",
            }}
          ></div>
        </div>
      </div>

      <div class="col l-4 m-4 c-6 explore__slide-item second">
        <div class="row__item-display">
          <div
            class="explore__slide-img row__item-img img--rec"
            style={{
              background:
                "url('https://vikdang.github.io/Code_web_music_player/assets/img/tabExplore/slides/slide7.jpg') no-repeat center center / cover",
            }}
          ></div>
        </div>
      </div>

      <div class="col l-4 m-4 c-6 explore__slide-item third next">
        <div class="row__item-display">
          <div
            class="explore__slide-img row__item-img img--rec"
            style={{
              background:
                "url('https://vikdang.github.io/Code_web_music_player/assets/img/tabExplore/slides/slide8.jpg') no-repeat center center / cover",
            }}
          ></div>
        </div>
      </div>
    </div>
  )
}

Slider.propTypes = {}

export default Slider