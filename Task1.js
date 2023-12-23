// Array Manupulation

// There are two functions here time complexity of first one is log(n^2) and of second one is log(n)

const findUniqueElements = (arr)=>{
    let ArrayOfUniqueElements = [];

    for(let i=0; i<arr.length; i++){
        let isUnique = true;

        for(let j=0; j<ArrayOfUniqueElements.length; j++){
            if(arr[i]==ArrayOfUniqueElements[j]){
                isUnique = false;
                break;
            }
        }

        if(isUnique){
            ArrayOfUniqueElements.push(arr[i]);
        }
    }

    return ArrayOfUniqueElements;
}


// Solving the same question in log(n) time complexity

const findUniqueElements2 = (arr)=>{
    let objectOfUniqueElements = {};
    let arrayOfUniqueElements = [];

    for(let i=0; i<arr.length; i++){

        if(!objectOfUniqueElements[arr[i]]){
            objectOfUniqueElements[arr[i]] = true;
            arrayOfUniqueElements.push(arr[i]);
        }

    }

    return arrayOfUniqueElements
}

const arr = [1,2,3,4,5,6,7,8,9,1,2];
console.log(findUniqueElements2(arr));

