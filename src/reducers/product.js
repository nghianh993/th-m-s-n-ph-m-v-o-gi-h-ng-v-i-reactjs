/*Khởi tạo một state cho product reducer*/
var initialState = [
    {
        id: 1,
        name : 'Iphone 7 Plus',
        image : '',
        description : 'Apple',
        price : 500,
        inventory : 10
    },
    {
        id: 2,
        name : 'Samsung galaxy S7',
        image : '',
        description : 'Samsung',
        price : 400,
        inventory : 15
    },
    {
        id: 2,
        name : 'Oppo F1s',
        image : '',
        description : 'Oppo',
        price : 200,
        inventory : 5
    }
]
// khai báo một reducer bao gồm 2 thành phần state và action ([...state] copy state ra một state mới mà không tham chiếu tới địa chỉa của state cũ)
const product = (state = initialState, action) => {
    switch(action.type) {
        default: return [...state];
    }
} 

export default product;