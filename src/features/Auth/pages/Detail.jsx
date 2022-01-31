import React from 'react'
import ChangePassForm from '../components/ChangePassForm'
import UserForm from '../components/UserForm'

function Detail(props) {
  return (
    <div class="app__container tab--explore">
    <div class="app__container-content">
      <div class="explore__container">
        <div class="grid">
          <div class="row container__section">
            <div class="col l-12 m-12 c-12 my-account">
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

