"use client";

import { ReactNode, useEffect } from "react";
import { Provider } from 'react-redux'
import { store } from '@/redux/store'

type Props = {
    children: ReactNode
}

const ReduxProvider = (props: Props) => {
  
  return (
    <Provider store={store}>{props.children}</Provider>
  )
}

export default ReduxProvider