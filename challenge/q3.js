
// cette fonction prends en param un tableau et un element et
// retourne true si l'element est un doublon dans le tableau
function isDuplicate(tab, elem){
    let find = false
    let compt = 0
    
    for (let i = 0; i < tab.length; i++) {
        if(tab[i].getTime() === elem.getTime()){
            compt++
        } 
    }

    if(compt > 1 ){ //si compt > 1 alors on a un doublon!
        find = true 
    }
    return find
}

function merge_ranges(tab){
    let deconstruct = [];
    let noDuplicate = [];
    let result = []
    let DateRange = {}

    //on deconstruit chaque objet DateRange
    for (let i = 0; i < tab.length; i++) {
        let n = tab[i].start

        //
        do{
            //on crée un objet Date equivalent à un clone de n
            deconstruct.push(new Date(n.getTime()))
            n.setDate(n.getDate() + 1);

        }while(n <= tab[i].end)   
           
    }

    //on laisse les doublons et on conserve les elements uniques!
    for (let i = 0; i < deconstruct.length; i++) {
        if(!(isDuplicate(deconstruct, deconstruct[i]))){
            noDuplicate.push(deconstruct[i])
        }   
    }

    for (let i = 0; i < noDuplicate.length; i++) {
        
        if(i % 2 === 0){
            DateRange.start = noDuplicate[i]// les elements start sont à des positions paires 
        }else{
            DateRange.end = noDuplicate[i]// les elements ends sont à des positions  impaires
        }

        //si l'objet DateRange contient à la fois l'atttribut start et l'attribut end on l'ajoute a result!
        if (DateRange.start && DateRange.end) {
            result.push(DateRange)
            DateRange= {}// nettoyer l'objet DateRange
        }
    }

    return result
}

// TESTS

// console.log(merge_ranges( 
//     [{start: new Date("2021-03-1"), end: new Date("2021-03-3")}, 
//     {start: new Date("2021-03-2"), end: new Date("2021-03-4")}
// ]) );

// console.log(
//     merge_ranges(
//     [{start: new Date("2021-03-1"), end: new Date("2021-03-3")},
//     {start: new Date("2021-03-2"), end: new Date("2021-03-5")},
//     {start: new Date("2021-03-4"), end: new Date("2021-03-6")}
// ]) );

// console.log(
//     merge_ranges( [{start: new Date("2021-03-1"), end: new Date("2021-03-2")},
//     {start: new Date("2021-03-3"), end: new Date("2021-03-5")},
//     {start: new Date("2021-03-4"), end: new Date("2021-03-6")}
// ]) );







