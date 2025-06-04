'use strict';

const table = document.querySelector('table');
const rows = table.rows;

const dataToAppend = [];

for (let i = 0; i < rows.length; i++) {
  const cell = rows[i].cells[1];

  dataToAppend.push(cell ? cell.textContent.trim() : '');
}

let maxColumns = 0;

for (let i = 0; i < rows.length; i++) {
  maxColumns = Math.max(maxColumns, rows[i].cells.length);
}

const insertIndex = maxColumns - 1;

for (let i = 0; i < rows.length; i++) {
  if (rows[i].cells.length < maxColumns) {
    rows[i].insertCell(-1);
  }

  const newCell = rows[i].insertCell(insertIndex);

  if (i === 0 || i === rows.length - 1) {
    newCell.outerHTML = `<th>${dataToAppend[i]}</th>`;
  } else {
    newCell.textContent = dataToAppend[i];
  }
}
