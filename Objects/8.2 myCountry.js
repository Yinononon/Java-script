
const myCountry = {

    country : 'Greece',
    capial: 'Athents',
    language: 'Greek',
    population: '10482487',
    neighbours: [
       'Albania',
       'Bulgaria',
       'Turkey'
    ],

    describe () {
        const {
            country,
            capial,
            language,
            population,
            neighbours,

        } =this;
        console.log(`${country} has ${population} people, their mother toungue is${language} they have ${neighbours.length} ${neighbours} countries and a capital called ${capial}`)
    },
    checkIsland() {
        const numNeighbours = this.neighbours.length > 0 ? "Not an island" : " It is island"
        console.log(numNeighbours)
    }


}

myCountry.describe();
myCountry.checkIsland();