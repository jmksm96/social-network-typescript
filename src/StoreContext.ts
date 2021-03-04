import React from 'react'
import { StoreType } from './redux/store'
// import {StoreType} from "./Typing/typing";

const StoreContext = React.createContext({} as StoreType)

export default StoreContext