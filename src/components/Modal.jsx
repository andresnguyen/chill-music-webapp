import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import classNames from 'classnames'
import Login from 'features/Auth/pages/Login'
import { changeValue } from 'features/Auth/userSlice'
import Register from 'features/Auth/pages/Register'

function Modal(props) {
  const isModalOpen = useSelector((state) => state.user.isModalOpen)
  const mode = useSelector((state) => state.user.mode)
  const dispatch = useDispatch()

  const handleCloseClick = () => {
    dispatch(changeValue({ name: 'isModalOpen', value: false }))
  }

  return (
    <div className={classNames('modal-theme grid', mode, { open: isModalOpen })}>
      <div className="modal-container">
        <div className="modal__close-btn" onClick={handleCloseClick}>
          <i className="bi bi-x-lg close close__btn-icon"></i>
        </div>
        <div className="theme__header">
          <h3 className="theme__header-title">
            <span className={classNames({ active: mode === 'LOGIN' })}>Đăng nhập</span>
            <span className={classNames({ active: mode === 'REGISTER' })}>Đăng ký</span>
          </h3>
        </div>
        <div className="theme__content">
          <div className="grid theme__container">
            {/* <Login /> */}
            <Register />
          </div>
        </div>
      </div>
    </div>
  )
}

Modal.propTypes = {}

export default Modal
