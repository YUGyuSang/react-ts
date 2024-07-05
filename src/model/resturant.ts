// let data = {
//     name: '규상이네 식당',
//     category: 'western',
//     address:{
//       city:'osan',
//       detail:'somewhere',
//       zipCode:1234
//     },
//     menu:[{
//       name:'susi',
//       price:1000,
//       category:'japan'
//     },
//     {
//       name:'bibibba',
//       price:2000,
//       category:'korean'
//     },
//     {
//       name:'burgar',
//       price:3000,
//       category:'newyork'
//     }]
//   }

// 이런식으로 객체를 타입을 지정해 줄 수 있다.
export type Resturan = {
    name:string;
    category:string;
    // Address 타입을 따로 만든 후 address에 적용한 것이다.
    address:Address;
    menu:Menu[]
}

//Address 타입을 따로 만들었다.
export type Address = {
    city:string;
    detail:string;
    zipCode:Number;
}

export type Menu = {
    name:string;
    price:number;
    category:string;
}

// Address 타입에 zipCode를 빼고싶을 때 Omit을 사용하면 된다.
// Omit<빼고싶은 타입명, 빼고싶은 타입> 
export type AddressWithoutZip = Omit<Address,'zipCode'>
// Pick 말 그대로 원래 있던 타입에서 사용하고 싶은것만 Pick 하는 것이다.
export type ResaurantOnlyCategor = Pick<Resturan,'category'>

// Api값을 불럴 올 때 사용하는 타입이다. 이런식으로 제네릭 문법을 사용하여 data가 언제든지 타입을 바뀔 수 있게 도와준다.
export type ApiRsponse<T> = {
    data:T[],
    totalPage:number,
    page:number
}
// 제네릭을 사용하여 이 타입을 넣는 것이다.
export type ResturantResponse = ApiRsponse<Resturan>
export type MenuResponse = ApiRsponse<Menu>