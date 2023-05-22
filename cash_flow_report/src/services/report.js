export function sumAllCredit(transactions){
    let allCredit = 0;
    transactions.map((t)=>t.type === 'credit' ? allCredit+=t.value : allCredit);
    return {"type":"allCredit", "value": allCredit};
}

export function sumAllDebit(transactions){
    let allDebit = 0;
    transactions.map((t)=>t.type === 'debit' ? allDebit+=t.value : allDebit);
    return {"type":"allDebit", "value": allDebit};
}

export function total(transactions){
    let total = (sumAllCredit(transactions).value - sumAllDebit(transactions).value);
    return {"type": "total", "value": total};
}