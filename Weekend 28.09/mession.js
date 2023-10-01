const carMarket =  require("./obj.js");
// console.log(carMarket.sellers[0])

/* -------------------------------------------------------------------------- */
/*                            1. Agency Operations:                           */
/* -------------------------------------------------------------------------- */

const agencyOperations  = {
    searchAgency: agencyOrId => {
        const agency = carMarket.sellers.find((sellers) =>  sellers.agencyName === agencyOrId || sellers.agencyId === agencyOrId)
        if(agency){
        console.log(agency)
        return agency
        }
        return console.log("Agency not found plese enter a vaild agency name or agency ID")
        },
    searchBrand:function (agency,carBrand) {
        if (agency) {
           const brand = agency.cars.find((cars) => cars.brand === carBrand)
           console.log(brand)
           return brand
        }
    
    },        
    retrieve: () => {
        const allAgences = carMarket.sellers.map(({agencyName}) => agencyName)
        return console.log(allAgences)
     },
    addNewCar:function (agencyToAdd,carBrand,newCar)  {
        const agency = this.searchAgency(agencyToAdd)
        if (agency) {
           let brand = this.searchBrand(agency,carBrand);
           console.log(brand)
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
            return
        } 
        return "Some of the ditails wrong or missing pay attantion!" 
    },
    
    removeCar: function (agencyToRemove,carBrand,carNumber) {
        const agency = this.searchAgency(agencyToRemove);
        if (agency) {
            let brand = this.searchBrand(agency,carBrand);
            console.log(brand)
            if (brand) {
                const carIndex = brand.models.findIndex((models) => models.carNumber === carNumber)
                brand.models.splice(carIndex, 1)
                console.log(` ${carBrand}, ${carNumber} form ${agencyToRemove} agency as removed`)
                return
            }
        }
        return "Some of the ditails wrong or missing pay attantion!"
    },
    cahngeCash: function (agencyTo,cash) {
        const agency = this.searchAgency(agencyTo)
            if(agency){
                agency.cash = cash
                console.log(`corrent cash: ${cash}`)
                return agency.cash
            }
        return "Some of the ditails wrong or missing pay attantion!"
    },
    changeCradit: function (agencyTo,credit) {
        const agency = this.searchAgency(agencyTo)
            if(agency){
                agency.credit = credit
                console.log(`corrent cash: ${credit}`)
                return agency.credit
            }
        return "Some of the ditails wrong or missing pay attantion!"
    },
    updateCarPrice: function (agencyTo,carBrand,carNumber,newPrice) {
        const agency = this.searchAgency(agencyTo)
        if(agency){  
            const brand  = this.searchBrand(agencyTo,carBrand);
            if (brand) {  
                if (brand) {
                    const carIdNum = brand.models.find((models) => models.carNumber === carNumber)
                    carIdNum.price = newPrice
                    console.log(`${agencyTo}: new price update  - ${carBrand}, ${carIdNum.name} is now ${carIdNum.price}`)
                    return
                }
            }         
        }
        return "Some of the ditails wrong or missing pay attantion!"
    },
    getTotalAgencyRevenue: function name(params) {
        
    },
    transferCarBetweenAgencies: function (oldAgency,carBrand,carNumber,newAgency) {
        const agency = this.searchAgency(oldAgency)
        const brand  = this.searchBrand(agency,carBrand);
            if (brand) {
                const car = brand.models.find((models) => models.carNumber === carNumber)
                console.log(car)
                this.addNewCar(newAgency,carBrand,car)
                this.removeCar(oldAgency,carBrand,carNumber)
                console.log(car)
                
            }
        }
}

// agencyOperations.transferCarBetweenAgencies('Best Deal','bmw','AZJZ4','CarMax')
// agencyOperations.removeCar('Best Deal','bmw','AZJZ4')
  
// car1 = {
//     name: "007",
//     year: 2222,
//     price: 1137000,
//     carNumber: "BBBBB",
//     ownerId: "dude",
//   }
// agencyOperations.updateCarPrice('Best Deal',"bmw","AZJZ4",989898);  

// agencyOperations.retrieve()
// console.log(carMarket.sellers[0].cash)
// agencyOperations.addNewCar('CarMax','bmw',car1)
// console.log(carMarket.sellers[0].cars[0])
// agencyOperations.removeCar('Best Deal',"bDADA",'BBBBB')
// console.log(carMarket.sellers[0].cars[5])
