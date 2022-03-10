function pop(townAsStrings){
let objTowns = {};
for(const towns of townAsStrings){
    const tokens = towns.split(' <-> ');
    const town = tokens[0];
    const population = tokens[1];

    if(objTowns[town] == undefined ){
        objTowns[town] = Number(population);
    }else{
        objTowns[town] += Number(population);
    }
}

    for(const town in objTowns){
        console.log(`${town} : ${objTowns[town]}`)
    }
}
pop(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']
)