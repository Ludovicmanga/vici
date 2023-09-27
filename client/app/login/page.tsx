import LoginForm from '@/components/AuthForm/AuthForm';
import React from 'react'

type Props = {}

const Login = async (props: Props) => {
  return (
    <LoginForm type='login' />
  )
}

export default Login