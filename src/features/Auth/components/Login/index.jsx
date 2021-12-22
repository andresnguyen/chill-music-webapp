import { unwrapResult } from '@reduxjs/toolkit';
import { login } from 'features/Auth/userSlice';
import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';

Login.propTypes = {
  closeDialog: PropTypes.func,
};

function Login(props) {
  const dispatch = useDispatch();

  const handleSubmit = async (values) => {
    try {
      const action = login(values);
      const resultAction = await dispatch(action);
      unwrapResult(resultAction);
    } catch (error) {}
  };

  return <div></div>;
}

export default Login;
