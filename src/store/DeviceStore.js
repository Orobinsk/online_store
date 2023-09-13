import {makeAutoObservable} from "mobx";

export default class DeviceStore{
    constructor() {
        this._types=[
            {id:1, name:'fridge'},
            {id:2, name:'smartphone'},
            {id:3, name:'ноутбуки'},
            {id:4, name:'телевизоры'},
        ]
        this._brands=[
            {id:1, name:'samsung'},
            {id:2, name:'apple'},
            {id:3, name:'apple'},
            {id:4, name:'apple'},
            {id:5, name:'apple'},
        ]
        this._devices=[
            {id:1, name:'iphone 12', price:25000, rating:5, img:'https://storage.yandexcloud.net/the-istore.ru-backup/iblock/0a2/0a26a729af9ebeb174e29b5ecd3659ef/bb08e4980fe6742b29cf2a186e47705b.jpeg'},
            {id:2, name:'iphone 12', price:25000, rating:5, img:'https://storage.yandexcloud.net/the-istore.ru-backup/iblock/0a2/0a26a729af9ebeb174e29b5ecd3659ef/bb08e4980fe6742b29cf2a186e47705b.jpeg'},
            {id:3, name:'iphone 12', price:25000, rating:5, img:'https://storage.yandexcloud.net/the-istore.ru-backup/iblock/0a2/0a26a729af9ebeb174e29b5ecd3659ef/bb08e4980fe6742b29cf2a186e47705b.jpeg'},
            {id:4, name:'iphone 12', price:25000, rating:5, img:'https://storage.yandexcloud.net/the-istore.ru-backup/iblock/0a2/0a26a729af9ebeb174e29b5ecd3659ef/bb08e4980fe6742b29cf2a186e47705b.jpeg'},
            {id:5, name:'iphone 12', price:25000, rating:5, img:'https://storage.yandexcloud.net/the-istore.ru-backup/iblock/0a2/0a26a729af9ebeb174e29b5ecd3659ef/bb08e4980fe6742b29cf2a186e47705b.jpeg'},
            {id:6, name:'iphone 12', price:25000, rating:5, img:'https://storage.yandexcloud.net/the-istore.ru-backup/iblock/0a2/0a26a729af9ebeb174e29b5ecd3659ef/bb08e4980fe6742b29cf2a186e47705b.jpeg'},
            {id:7, name:'iphone 12', price:25000, rating:5, img:'https://storage.yandexcloud.net/the-istore.ru-backup/iblock/0a2/0a26a729af9ebeb174e29b5ecd3659ef/bb08e4980fe6742b29cf2a186e47705b.jpeg'},
        ]
        this._selectedType = {}
        this._selectedBrand = {}
        makeAutoObservable(this)
    }

    setTypes(types){
        this._types=types
    }
    setBrands(brand){
        this._brand=brand
    }
    setDevices(device){
        this._device=device
    }
    setSelectedType(type){
        this._selectedType=type
    }
    setSelectedBrand(brand){
        this._selectedBrand=brand
    }

    get types(){
        return this._types
    }
    get brands(){
        return this._brands
    }
    get devices(){
        return this._devices
    }
    get selectedType(){
        return this._selectedType
    }
    get selectedBrand(){
        return this._selectedBrand
    }
}