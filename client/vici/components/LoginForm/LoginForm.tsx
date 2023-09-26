"use client";

import React, { useState } from 'react'

type Props = {}

const LoginForm = (props: Props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = async () => {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/login`,
            {
              method: "POST",
              headers: { "content-type": "application/json" },
              credentials: 'include',
              body: JSON.stringify({
                email,
                password
              }),
            },
          );
          const resData = await response.json();
          if (resData.user) {
            console.log('user');
          } else {
            console.log('user');
          }
    }

  return (
    <button onClick={login}>Login</button>
  )
}

export default LoginForm