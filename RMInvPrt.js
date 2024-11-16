"usage strict";






 //empty table head
    const tHead = document.querySelector('thead');
    const tRows = tHead.querySelectorAll("tr");
    const tbody = document.getElementById("prtTableBody");
    const Trows = tbody.rows;
    
//   while (tRows.item(0).lastChild) {
//     tRows.item(0).removeChild(tRows.item(0).lastChild);
//   };
  //fill table header
  tableArr= JSON.parse(window.parent.localStorage.getItem("rminvTableArray"));
  hdrArray = tableArr.shift(0);
//   for (const tHdr of hdrArray) {
//     const th = document.createElement("th");
//     th.innerText = tHdr.trim().replace(/^"|"$/g, "");
//     tRows.item(0).appendChild(th);
//   };
  //empty the table body

  for (i = 0; i < Trows.length; i++) {
    while (Trows.item(i).lastChild) {
      Trows.item(i).removeChild(Trows.item(i).lastChild);
    };
  };

  while (tbody.lastChild) { tbody.removeChild(tbody.lastChild) };

  //fill the table body 
  for (let i = 0; i < tableArr.length; i++) {
    const row = document.createElement("tr");
    // for (let j = 0; j < tableArr[i].length; j++) {
// todo: 
                    //Nominal Size 2
    const cell0 = document.createElement("td");
    cell0.innerText = tableArr[i][2].trim().replace(/^"|"$/g, "");
    row.appendChild(cell0);
                    // Grade 3
    const cell1 = document.createElement("td");
    cell1.innerText = tableArr[i][3].trim().replace(/^"|"$/g, "");
    row.appendChild(cell1);
                    // Width 4
    const cell2 = document.createElement("td");
    cell2.innerText = tableArr[i][4].trim().replace(/^"|"$/g, "");
    row.appendChild(cell2);
                    // Depth 5
    const cell3 = document.createElement("td");
    cell3.innerText = tableArr[i][5].trim().replace(/^"|"$/g, "");
    row.appendChild(cell3);
                    // Length 6
    const cell4 = document.createElement("td");
    cell4.innerText = tableArr[i][6].trim().replace(/^"|"$/g, "");
    row.appendChild(cell4);
                    // Quantity in Stock 10
    const cell5 = document.createElement("td");
    //cell5.innerText = tableArr[i][10].trim().replace(/^"|"$/g, "");
    cell5.innerText = " ";
    row.appendChild(cell5);
                    // Quantity on Order 11
    const cell7 = document.createElement("td");
    //cell7.innerText = tableArr[i][11].trim().replace(/^"|"$/g, "");
    cell7.innerText = " ";
    row.appendChild(cell7);
                    // Rec.Num. 1 
    const cell8 = document.createElement("td");
    cell8.innerText = tableArr[i][1].trim().replace(/^"|"$/g, "");
    row.appendChild(cell8);
                    // Cost Each 12
    const cell9 = document.createElement("td");
    //cell9.innerText = tableArr[i][12].trim().replace(/^"|"$/g, "");
    cell9.innerText = " ";
    row.appendChild(cell9);
    //};
    tbody.appendChild(row);
  };
  document.addEventListener("DOMContentLoaded",(eval) => {
  window.print();
  });
