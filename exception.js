
console.log("Cashback App Started")

function getCashBack(luckyNumber){
    let cashbacks = [20, 34, 12, 44, 56, 67, 89, 90, 88 ]

    if (cashbacks[luckyNumber]) {
        return cashbacks[luckyNumber];
   }   
   else {
       // return 0;
       let error = Error("Invalid Lucky Number")
       throw error;
   }
}

try{
    let cashBackEarned = getCashBack(13);
    console.log("Cashback Earned: " + cashBackEarned);
} catch(error){
    console.log("Something went wrong")
}



console.log("Cashback App Finished")