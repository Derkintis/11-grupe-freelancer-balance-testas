function renderMonths ( List ) {
    let HTML = '';

    for ( m=0; m<List.length; m++ ) {
        const months = List[m];
        
        HTML += `<div class="table-row">
            <div class="cell"></div>
            <div class="cell">${months.months}</div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell">150.00 Eur</div>
        </div>`
    }
    
    return document.querySelector('.table-content.div').innerHTML= HTML;
}

function renderAccount ( accList ) {
    let HTML = '';

    for ( a=0; a<accList.length; a++ ) {
        const account = accList[a];
        
        HTML += `<div class="table-row">
            <div class="cell">${account.month}</div>
            <div class="cell">${months.months}</div>
            <div class="cell">${account.income}</div>
            <div class="cell">${account.expense}</div>
            <div class="cell">150.00 Eur</div>
        </div>`
    }
    
    return document.querySelector('.table-content').innerHTML= HTML;
}
