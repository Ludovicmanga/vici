import AuthForm from '@/components/AuthForm/AuthForm';
import React from 'react'

type Props = {}

const Login = async (props: Props) => {
  return (
    <AuthForm type='login' />
  )
}

export default Login