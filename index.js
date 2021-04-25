// Add your functions here
function map(array, callback) {
    const r  = []
    for (let i = 0; i < array.length; i++){
        r.push(callback(array[i])) 
    }
    return r
}

function reduce(arr, callback, starting){
    let total; 
    if (starting){
        total = starting
        for (let i = 0; i < arr.length; i++){
            total = callback(arr[i], total)
        }
        return total
    } else {
        total = arr[0];
        for (let i = 1; i < arr.length; i++) {
            total = callback(arr[i], total);    
        }
        return total
    }
}