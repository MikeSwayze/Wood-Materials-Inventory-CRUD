"usage strict";






 //empty table head
    const tHead = document.querySelector('thead');
    const tRows = tHead.querySelectorAll("tr");
    const tbody = document.getElementById("PricedPrtTableBody");
    const Trows = tbody.rows;
    const Onhand = document.getElementById("Onhand");
    const OnOrder = document.getElementById("OnOrder");
    Onhand.value=0;
    OnOrder.value=0;
//   while (tRows.item(0).lastChild) {
//     tRows.item(0).removeChild(tRows.item(0).lastChild);
//   };
  //fill table header
  tableArr= JSON.parse(localStorage.getItem("rminvTableArray"));
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
                        // Rec.Num. 1 
    const cell8 = document.createElement("td");
    cell8.innerText = tableArr[i][1].trim().replace(/^"|"$/g, "");
    row.appendChild(cell8);
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
                    // Cost Each 12
    const cell9 = document.createElement("td");
    cell9.innerText = tableArr[i][12].trim().replace(/^"|"$/g, "");
      if (cell9.innerText == ""||cell9.innerText == null) {
        cell9.innerText = 0
      };
    row.appendChild(cell9);
                    // Quantity in Stock 10
    const cell5 = document.createElement("td");
    cell5.innerText = tableArr[i][10].trim().replace(/^"|"$/g, "");
      if (cell5.innerText == ""||cell5.innerText == null) {
        cell5.innerText = 0
      };
    row.appendChild(cell5);
    // stk Quantity priced
        const cell10 = document.createElement("td");
    cell10.innerText = Number(tableArr[i][10].trim().replace(/^"|"$/g, ""))*Number(tableArr[i][12].trim().replace(/^"|"$/g, ""));
      if (cell10.innerText == ""||cell10.innerText == null) {
        cell10.innerText = 0
      };
      Onhand.value = Number(Onhand.value) + Number(cell10.innerText.trim().replace(/^"|"$/g, ""));
    row.appendChild(cell10);
                    // Quantity on Order 11
    const cell7 = document.createElement("td");
    cell7.innerText = tableArr[i][11].trim().replace(/^"|"$/g, "");
      if (cell7.innerText == ""||cell7.innerText == null) {
        cell7.innerText = 0
      };
    row.appendChild(cell7);
    // ord Quantity priced
        const cell11 = document.createElement("td");
    cell11.innerText = Number(tableArr[i][11].trim().replace(/^"|"$/g, ""))*Number(tableArr[i][12].trim().replace(/^"|"$/g, ""));
      if (cell11.innerText == ""||cell11.innerText == null) {
        cell11.innerText = 0
      };
      OnOrder.value =Number(OnOrder.value) +  Number(cell11.innerText.trim().replace(/^"|"$/g, ""));
    row.appendChild(cell11);

    //};
    tbody.appendChild(row);
  };

  // sum columns to totals
  Onhand.value=Number(Math.round(Number(Onhand.value)*100)/100).toFixed(2);
  OnOrder.value=Number(Math.round(Number(OnOrder.value)*100)/100).toFixed(2);
  Onhand.value="$"+Onhand.value;
  OnOrder.value="$"+OnOrder.value;