const carMarket =  require("./obj.js");
// console.log(carMarket.sellers[0])

/* -------------------------------------------------------------------------- */
/*                            1. Agency Operations:                           */
/* -------------------------------------------------------------------------- */

const agencyOperations  = {
    search: function (agencyOrId) {
            const agency = carMarket.sellers.find((sellers) =>  sellers.agencyName === agencyOrId)
            if(agency){
            console.log(agency)
            return agency
        }
            const ifId = carMarket.sellers.find(({agencyId}) => agencyOrId === agencyId)
            if(ifId){
            console.log(ifId)
            return ifId
            }
        return console.log("Agency not found plese enter a vaild agency name or agency ID")
        },

    retrieve: () => {
        const allAgences = carMarket.sellers.map(({agencyName}) => agencyName)
        return console.log(allAgences)
     },
    addNewCar: function (agencyToAdd,carBrand,newCar) {
        const agency = carMarket.sellers.find((sellers) =>  sellers.agencyName === agencyToAdd)
        if (agency) {
           let brand = agency.cars.find((cars) => cars.brand === carBrand)
           if (!brand) {
            brand = {
                brand: carBrand,
                models:[]
            };
            agency.cars.push(brand)
            console.log(`New brand ${carBrand}`)
            };
            brand.models.unshift(newCar)
            console.log(`Added ${carBrand} - ${newCar.name} under ${agencyToAdd}`)
        } 
        return "Some of the ditails wrong or missing pay attantion!" 
    },
    
    removeCar: function (agencyToRemove,carBrand,carNumber) {
        const agency = carMarket.sellers.find((sellers) =>  sellers.agencyName === agencyToRemove)
        if (agency) {
            const brand = agency.cars.find((cars) => cars.brand === carBrand)
            if (brand) {
                const carIndex = brand.models.findIndex((models) => models.carNumber === carNumber)
                brand.models.splice(carIndex, 1)
                console.log(` ${carBrand}, ${carNumber} form ${agencyToRemove} agency as removed`)
            }
        }
       
    },
     
}


  
car1 = {
    name: "007",
    year: 2222,
    price: 1137000,
    carNumber: "BBBBB",
    ownerId: "dude",
  }
agencyOperations.addNewCar('Best Deal',"bDADA",car1);  

// agencyOperations.retrieve()
// console.log(carMarket.sellers[0].cars[5])

console.log(carMarket.sellers[0].cars[5])
agencyOperations.removeCar('Best Deal',"bDADA",'BBBBB')
console.log(carMarket.sellers[0].cars[5])