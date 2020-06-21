'use strict';

var allPerf = [];
function Perfum(perfumName, quantity, randomN) {
    this.perfumName = perfumName;
    this.quantity = quantity;
    this.randomN = randomN;
    allPerf.push(this);
}

function randomNumber(max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function renderTable() {
    for (var i = 0; i < allPerf.length; i++) {
        var trow = document.createElement('tr');
        tablePerf.appendChild(trow);

        var tdata1 = document.createElement('td');
        trow.appendChild(tdata1);
        tdata1.textContent = `${allPerf[i].perfumName}`;

        var tdata2 = document.createElement('td');
        trow.appendChild(tdata2);
        tdata2.textContent = `${allPerf[i].quantity}`;

       
        var tdata3 = document.createElement('td');
        trow.appendChild(tdata3);
        tdata3.textContent = `${allPerf[i].randomN * 2} $`;

        var tdata4 = document.createElement('td');
        trow.appendChild(tdata4);
        tdata4.id = i;
        tdata4.textContent = `X`;

    }
}

var perfumForm = document.querySelector('#form1');
perfumForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    var perfumName = event.target.perfumName.value;
    var quantity = event.target.quantity.value;
    var random1 = randomNumber(270, 120);
    console.log(random1);

    var newPerf = new Perfum(perfumName, quantity, random1);

    deleteTable();
    tableHeader();
    renderTable();
    storeData();

    console.log(allPerf);

}

var tablePerf = document.querySelector('#tableperfume');

var tableInfo = ['perfume', 'Quantity', 'Price', 'Remove'];

function tableHeader() {

    var trow1 = document.createElement('tr');
    tablePerf.appendChild(trow1);

    for (var i = 0; i < tableInfo.length; i++) {
        var tableH = document.createElement('th');
        trow1.appendChild(tableH);
        tableH.textContent = tableInfo[i];
    }
}
tableHeader();

tablePerf.addEventListener('click', remmoveX);

function remmoveX() {
    if (event.target.textContent == 'X') {
        allPerf.splice(event.target.id, 1);

        deleteTable();
        tableHeader();
        renderTable();
        storeData();

    }
}

function deleteTable() {
    document.getElementById('tableperfume').innerHTML = "";
}

function storeData() {
    var store = JSON.stringify(allPerf);
    localStorage.setItem('perf', store);
}

function getData() {
    var store = localStorage.getItem('perf');
    if (store) {
        allPerf = JSON.parse(store);
    }
}

getData();
renderTable();
