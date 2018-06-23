/*Khởi tạo một state cho product reducer*/
var initialState = [
    {
        id: 1,
        name : 'Iphone X',
        image : '//cdn.fptshop.com.vn/Uploads/Originals/2017/12/8/636483223586180190_1.jpg',
        description : 'Apple',
        price : 500,
        inventory : 10,
        star: 5
    },
    {
        id: 2,
        name : 'Samsung Galaxy S9',
        image : '//cdn.fptshop.com.vn/Uploads/Originals/2018/2/26/636552331208636703_1.jpg',
        description : 'Samsung',
        price : 400,
        inventory : 15,
        star: 4
    },
    {
        id: 3,
        name : 'Oppo F1s',
        image : '//cdn.fptshop.com.vn/Uploads/Originals/2018/5/2/636608712721308701_1.jpg',
        description : 'Oppo F7s',
        price : 200,
        inventory : 5,
        star: 3
    }
]
// khai báo một reducer bao gồm 2 thành phần state và action ([...state] copy state ra một state mới mà không tham chiếu tới địa chỉa của state cũ)
const products = (state = initialState, action) => {
    switch(action.type) {
        default: return [...state];
    }
} 

export default products;