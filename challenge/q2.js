function findInSortedList(tab, num){
    half = parseInt(tab.length / 2)
    secondHalf = length - half
    
    if (num <= tab[half]) {
        for (let i = 0; i < half; i++) {
            if(tab[i] === num){
                return i
            }  
        }   
    }else {
        for (let j = half; j < tab.length; j++) { 
            if(tab[j] === num){
                return j
            }    
        }
    }
    return -1    
}

// TESTS

// console.log(findInSortedList([1,2,4,7,9], 9));

