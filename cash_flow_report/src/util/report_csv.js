import fs from "fs";

function generateText(array){
    let text = "";
    array.forEach(element => {
        text+=element+"\n";
    });
    return text;
}

export default async function generateCSV(transactions, allCredit, allDebit, total){

    transactions.push(allCredit);
    transactions.push(allDebit);
    transactions.push(total);

    const arrayElements = transactions.map((element)=>{
        return Object.values(element);
    });         

    const text = generateText(arrayElements);

    return text;
}