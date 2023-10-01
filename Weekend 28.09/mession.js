const carMarket =  require("./obj.js");
// console.log(carMarket.sellers[0])

/* -------------------------------------------------------------------------- */
/*                            1. Agency Operations:                           */
/* -------------------------------------------------------------------------- */

const agencyOperations  = {
    search: function (agencyOrId) {
            const ifAgency = carMarket.sellers.find((sellers) =>  sellers.agencyName === agencyOrId)
            if(ifAgency){
            console.log(ifAgency)
            return ifAgency
        }
            const ifId = carMarket.sellers.find(({agencyId}) => agencyOrId === agencyId)
            if(ifId){
            return console.log(ifId)
            }
        return console.log("Agency not found plese enter a vaild agency name or agency ID")
        },

    retrieve: () => {
        const allAgences = carMarket.sellers.map(({agencyName}) => agencyName)
        return console.log(allAgences)
     },
    addNewCar: function (agencyToAdd,carBrand,newCar) {
        const ifAgency = carMarket.sellers.find((sellers) =>  sellers.agencyName === agencyToAdd)
        if (ifAgency) {
           let ifnewBrand = ifAgency.cars.find((cars) => cars.brand === carBrand)
           if (!ifnewBrand) {
            ifnewBrand = {
                brand: carBrand,
                models:[]
            };
            console.log(ifAgency.cars.push(ifnewBrand))
            console.log(`New brand ${carBrand}`)
            };
            ifnewBrand.models.unshift(newCar)
            console.log(`Added ${carBrand} - ${newCar.name} under ${agencyToAdd}`)
          return;
        } 
        return "Some of the ditails wrong or missing pay attantion!" 
    },
    removeCar: function (agencyTo,carBrand,removeCar) {
        const ifAgency = carMarket.sellers.find((sellers) =>  sellers.agencyName === agencyTo)
        const ifnewBrand = ifAgency.cars.find((cars) => cars.brand === carBrand)
        delete ifnewBrand.models.find((models) => models.carNumber === removeCar)   
        console.log(` ${carBrand} - ${newCar.name} under ${agencyToAdd} as removed`)
    },
     
}


// car1 = {
//     name: "007",
//     year: 2222,
//     price: 1137000,
//     carNumber: "BBBBB",
//     ownerId: "dude",
//   }
// agencyOperations.addNewCar('Best Deal',"DADA",car1)  
// // agencyOperations.search('Best Deal')
// // agencyOperations.retrieve()
// console.log(carMarket.sellers[0].cars[5])
