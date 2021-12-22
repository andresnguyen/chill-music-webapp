import { unwrapResult } from '@reduxjs/toolkit';
import { register } from 'features/Auth/userSlice';
import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';

Register.propTypes = {
  closeDialog: PropTypes.func,
};

function Register(props) {
  const dispatch = useDispatch();

  const handleSubmit = async (values) => {
    try {
      const action = register(values);
      const resultAction = await dispatch(action);
      unwrapResult(resultAction);
    } catch (error) {}
  };

  return <div></div>;
}

export default Register;
