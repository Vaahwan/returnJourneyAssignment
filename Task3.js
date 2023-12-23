// Logical Operations

// There are two functions here time complexity of first one is log(n^2) and of second one is log(n)

const findCommonElements = (arr,brr)=>{
    let arrayOfCommonElements = [];

    for(let i=0; i<arr.length; i++){
        let isCommon = false;

        // checking if current element is already in arrayOfCommonElements
        for(let j=0; j<arrayOfCommonElements.length; j++){
            if(arr[i]==arrayOfCommonElements[j]){
                isCommon = true;
                break;
            }
        }

        // if current element is not in arrayOfCommonElements then:
        if(!isCommon){
            for(let k=0; k<brr.length; k++){
                if(arr[i]==brr[k]){
                    arrayOfCommonElements.push(arr[i]);
                }
            }
        }
    }

    return arrayOfCommonElements;
}


// solving the same problem with log(n) time complexity

const findCommonElements2 = (arr,brr)=>{
    let arrayOfCommonElements = [];
    let map = {};

    // put element of arr in map
    for(let i=0; i<arr.length; i++){
        map[arr[i]] = true;
    }

    // check for common element in brr
    for(let i=0; i<brr.length; i++){
        if(map[brr[i]]){
            arrayOfCommonElements.push(brr[i]);
            // set value to false to avoid duplicate elements in result
            map[brr[i]] = false;
        }
    }

    return arrayOfCommonElements;
}

let arr = [1,6,3,4,5,6];
let brr = [9,8,7,6,5,4];

console.log(findCommonElements(arr,brr));
console.log(findCommonElements2(arr,brr));