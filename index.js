// code your solution here



function superbowlWin (record){
    let check = record.find( item => item.result === "W")
        if (!!check){
            return check.year

        }else{
            return undefined
    }
}





/*
function superbowWin(){
    if (record[0].result === "W"){
        return record
    }else if(record[1].result === "W") {
        console.log(`year ${record[1].year}`)
    }else if (record[2].result === "W"){
        console.log(`year ${record[2].year}`)   
    }else {
        console.log("no one wins")
    } 
    
}
superbowWin();



*/
