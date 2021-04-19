function find(tab, num){
    for (let i = 0; i < tab.length; i++) {
        if(tab[i] === num){
            return i
        }  
    }
    return -1
}

// TESTS

// console.log(find([4,2,8,5], 5));