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

/* -------------------------------------------------------------------------- */
/*                           2. Customer Operations:                          */
/* -------------------------------------------------------------------------- */

const customerOperations = {
    searchCustomer: nameOrId => {
        const customer = carMarket.customers.find((customer) =>  customer.name === nameOrId || customer.id === nameOrId)
        if(customer){
        console.log(customer)
        return customer
        }
        return console.log("customer not found plese enter a vaild agency name or agency ID")
        },
    retrieve: () => {
        const allCustomers = carMarket.customers.map(({name}) => name);
        console.log(allCustomers)
        return allCustomers;
        }, 
    cahngeCash: function (customer,cash) {
        const name = this.searchCustomer(customer)
            if(name){
                name.cash = cash
                console.log(`${customer} corrent cash: ${cash}`)
                return name.cash
            }
        return "Some of the ditails wrong or missing pay attantion!"
    },
    getCustomerTotalCarValue: function (customer) {
        const customerCarValue = carMarket.customers.map(({name,cars}) => ({name: name, cars: cars.length}))
        return customerCarValue
    }   
}

// console.log(customerOperations.searchCustomer("BGzHhjnE8"))
// customerOperations.retrieve()
console.log(customerOperations.getCustomerTotalCarValue())