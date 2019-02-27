import Mock from 'mockjs' //引入mockjs
let data = [
    {id: 1, age: 18, name: '柳建聪'},
    {id: 2, age: 19, name: 'A'},
    {id: 3, age: 21, name: 'B'},
    {id: 4, age: 22, name: 'C'},
    {id: 5, age: 23, name: 'D'},
    {id: 6, age: 24, name: 'E'},
]
Mock.mock('/mock/getData', 'post', data)