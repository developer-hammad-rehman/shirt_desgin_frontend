import { StaticImageData } from "next/image"
import { Dispatch, SetStateAction } from "react"

export interface IFormdata{
    email : string
    password : string
} 


export interface IContext{
    id:number|null,
    setId : Dispatch<SetStateAction<number |null>>
}


export interface IOrdersData{
    id : number
    item : string
    price:string
    user_id:number
}

export  interface IShopData{
    id: number  , 
    image:string,
    title : string
    price : number
}


export interface ICardProps{
    image:string,
    title : string
    price : number
}


export interface IParamsShop{
    id:number
}

export interface I3d_View{
    id : number
    color:string
    url : string
}