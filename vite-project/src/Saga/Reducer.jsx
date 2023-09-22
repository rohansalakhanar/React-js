import { ADD_TO_CART, DECRMENT_QUNTITY, INCRMENT_QUNTITY, REMOVE_TO_CART } from "./Type";

let cartData = (data = [], action) => {
    switch(action.type){
        case ADD_TO_CART:
            console.log(data)
            return [action.data, ...data]

        case REMOVE_TO_CART:
            let removeItem = data.filter((item) => item.id !== action.data)
            return [...removeItem]

        case INCRMENT_QUNTITY:
            let incrmenyItem = data.filter((item) => {
                if(item.id === action.data){
                    let quntity = item.quntity+=1;
                    let price = item.Price+=item.proce;

                    return [price, quntity]
                }
                else{
                    return item;
                }
            })
            return [...incrmenyItem];

        case DECRMENT_QUNTITY:
            let decrmentItem = data.filter((item) => {
                if(item.id === action.data){
                   if(item.quntity !== 1){
                        let quntity = item.quntity-=1;
                        let price = item.Price-=item.proce;

                        return [price, quntity]
                   }
                   else{
                    return item;
                   }
                }
                else{
                    return item;
                }
            })
            return [...decrmentItem];

        default:
            return data
    }
}

export default cartData