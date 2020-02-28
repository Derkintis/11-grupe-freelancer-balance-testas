function renderAccount () {
    let HTML = '';
    
    for ( a=0; a<account.length; a++ ) {
        
        HTML += `<div class="table-row">
            <div class="cell">${account.month}</div>
            <div class="cell">${account[months]}</div>
            <div class="cell">${account.income}</div>
            <div class="cell">${account.expense}</div>
            <div class="cell">150.00 Eur</div>
        </div>`
    }
    
    return document.querySelector('.table-content').innerHTML= HTML;
}
