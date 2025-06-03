'use strict';

const table = document.querySelector('table');
const rows = document.querySelectorAll('tr');

const dataToAppend = [];

for (let i = 0; i < rows.length; i++) {
  dataToAppend.push(rows[i].cells[1].textContent.trim());
}

const insertIndex = table.rows[0].cells.length - 1;

for (let i = 0; i < rows.length; i++) {
  const newCell = table.rows[i].insertCell(insertIndex);

  if (i === 0 || i === rows.length - 1) {
    newCell.outerHTML = `<th>${dataToAppend[i]}</th>`;
  } else {
    newCell.textContent = dataToAppend[i];
  }
}
