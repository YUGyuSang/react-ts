import React,{FC} from 'react'
import { Menu } from './model/resturant'

// resurant.tsx 파일에 있는 Menu 타입을 정의해준 것을 그대로 사용하면된다.
interface OwnProps extends Omit<Menu, 'price'> {
    //이런식으로 추가 해줄 수 있다.
    showBestMenuName(name:string):string
}

// type 사용방법
// type OwnProps = Menu &  {
//     showBestMenuName(name:string):string
// }

const BestMenu:FC<OwnProps> = ({name,category,showBestMenuName}) => {
  return (
    <div>
        {name}
    </div>
  )
}

export default BestMenu
