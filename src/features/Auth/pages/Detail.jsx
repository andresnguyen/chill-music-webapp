import React from 'react'
import PropTypes from 'prop-types'
import UserForm from '../components/UserForm'
import ChangePassForm from '../components/ChangePassForm'

function Detail(props) {
  return (
    <div class="app__container tab--explore">
    <div class="app__container-content">
      <div class="explore__container">
        <div class="grid">
          <div class="row container__section">
            <div class="col l-12 m-12 c-12">
              <UserForm />
              <ChangePassForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

Detail.propTypes = {

}

export default Detail

