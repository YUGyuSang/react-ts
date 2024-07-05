import React,{FC, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Store from './Store';
import { Address, Resturan } from './model/resturant';
import BestMenu from './BestMenu';



let data:Resturan = {
  name: '규상이네 식당',
  category: 'western',
  address:{
    city:'osan',
    detail:'somewhere',
    zipCode:1234
  },
  menu:[{
    name:'susi',
    price:1000,
    category:'japan'
  },
  {
    name:'bibibba',
    price:2000,
    category:'korean'
  },
  {
    name:'burgar',
    price:3000,
    category:'newyork'
  }]
}
const App:FC = ()=> {
  //제네릭 문법 useState<> 타입지정
  const [myRestaurant, setMyRestaurant] = useState<Resturan>(data)
  const changeAdrress = (address:Address)=>{
    setMyRestaurant({...myRestaurant,address:address})
  }
  const showBestMenuName = (name:string)=>{
    return name
  }
  return (
    <div className="App">
      <h1>리액트 타입스크립트 공부</h1>
      <Store info={myRestaurant} changeAdrress={changeAdrress}/>
      <BestMenu name="susi" category="fish" showBestMenuName={showBestMenuName}/>
    </div>
  );
}

export default App;
