import React,{FC} from 'react'
import {Address, Resturan} from './model/resturant'

interface OwnProps {
    info: Resturan,
    // 어떤한 타입도 아무것도 없으면 void로 작성해주면 된다.
    changeAdrress(address:Address):void
}

const Store:FC<OwnProps> = ({info}) => {
  return (
    <div>
      {info.name}
    </div>
  )
}

export default Store
