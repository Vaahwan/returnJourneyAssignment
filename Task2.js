// Object Operation

// constructor function for creating car objects
function Car(brand,model,year){
    this.brand = brand;
    this.model = model;
    this.year = year;
}


// function which will take two car object and will merge them
const mergeCars = (car1,car2)=>{
    const mergedCars = {};

    // merging car1
    for(property in car1){
        mergedCars[property] = [car1[property]];
    }

    // merging car2
    for(property in car2){
        if(mergedCars[property]){
            mergedCars[property].push(car2[property]);
        }
        else{
            mergedCars[property] = [car2[property]];
        }
    }

    return mergedCars;
}

const car1 = new Car("honda","city",2022);
const car2 = new Car("suzuki","baleno",2023);

console.log(mergeCars(car1,car2));