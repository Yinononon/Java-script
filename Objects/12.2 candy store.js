const candyStore = {
    candies: [
    {
    name: "mint gum",
    id: "as12f",
    price: 2,
    amount: 2
    },
    {
    name: "twix",
    id: "5hd7y",
    price: 5,
    amount: 4
    },
    ],
    cashRegister: 200
    }

    function getCandy(candyStore, id){
       const candy = candyStore.candies.find(c => c.id == id )
       return (candy.name +": " + id) 
        }
  
       
    function getPrice(candyStore, id){
        const candy = candyStore.candies.find(c => c.id == id )
        return (candy.price +"$ " + id) 
         }
        //  console.log(addCandy(candyStore,'5hd7y','pop','5'))

    function addCandy(candyStore, id, name, price){
           newCandy = candyStore.candies.push( {
            name: name,
            id: id,
            price: price,
            amount: 1
           })
            return newCandy;
            }
   function buy(candyStore, id) {
    const candy = candyStore.candies.find(c => c.id == id )
    candy.amount --;
    return candyStore.cashRegister += candy.price
   } 
//    console.log(candyStore)
//    buy(candyStore, '5hd7y')
//    console.log(candyStore)