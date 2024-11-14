
"usage strict";

// namespaced elements
const my_Convert = document.getElementById("my_Convert");
const lastUnit = document.getElementById("lastUnit");
const DecFt_n = document.getElementById("DecFt");
const DecIn_n = document.getElementById("DecIn");
const DecSx_n = document.getElementById("DecSx");
const DecMeter_n = document.getElementById("DecMeter");
const Dec_mm_n = document.getElementById("Dec_mm");
const UnitEx_n = document.getElementById("UnitExp_");
const OutNumU_n = document.getElementById("OutNumU");
const csvText = document.getElementById("csvText");

// buttons
const DelBtn = document.getElementById("DelBtn");
const UpdateTableBtn = document.getElementById("UpdateTable");
const CloneTableBtn = document.getElementById("CloneBtn");
const cancelBtn = document.getElementById("cancelBtn");

const AddBtn = document.getElementById("AddBtn");
const SaveAsCsvBtn = document.getElementById("SaveAsCsv");
const OpenFileBtn = document.getElementById("OpenFile");
const PrintTableBtn = document.getElementById("PrintTable");
const QPUpdateBtn = document.getElementById("QPUpdate");

const csvBtns = document.getElementById("csvBtns");
const lineItemsTable = document.getElementById("lineItemsTable");
const tbody = document.getElementById("tbody");
const Trows = tbody.rows;

const newUsage = document.getElementById("newUsage");
const newNomSize = document.getElementById("newNomSize");
const newGrade = document.getElementById("newGrade");
const newfisWidth = document.getElementById("newfisWidth");
const newfisLength = document.getElementById("newfisLength");
const newfisDepth = document.getElementById("newfisDepth");

const UsageCollector = document.getElementById("usageCollector");

const usage = document.getElementById("usage");
const RMInvID = document.getElementById("ID");
const nomSize = document.getElementById("nomSize");
const Grade = document.getElementById("Grade");
const fisWidth = document.getElementById("fisWidth");
const fisLength = document.getElementById("fisLength");
const fisDepth = document.getElementById("fisDepth");
const mmWidth = document.getElementById("mmWidth");
const mmDepth = document.getElementById("mmDepth");
const mmLength = document.getElementById("mmLength");
const QtyStk = document.getElementById("QtyStk");
const QtyOrd = document.getElementById("QtyOrd");
const price = document.getElementById("price");
const file = document.getElementById("file");

const cardList = ["UsageCard", "GradeCard", "NomSizeCard", "fisLengthCard", "fisDepthCard", "fisWidthCard"];
const UsageCard = document.getElementById("UsageCard");
const NomSizeCard = document.getElementById("NomSizeCard");
const GradeCard = document.getElementById("GradeCard");
const fisWidthCard = document.getElementById("fisWidthCard");
const fisDepthCard = document.getElementById("fisDepthCard");
const fisLengthCard = document.getElementById("fisLengthCard");
const inputForm = document.getElementById("inputform");
const lastCard = document.getElementById("lastCard");

const qpUpdateForm = document.getElementById("qpUpdateForm");
const QPId = document.getElementById("QPId");
const LastQPId = document.getElementById("LastQPId"); 
const qpuDescription = document.getElementById("qpuDescription");
const qpuStkQty = document.getElementById("qpuStkQty");
const qpuOrdQty = document.getElementById("qpuOrdQty");
const qpuPrice = document.getElementById("qpuPrice");
const QPUpdateTableBtn = document.getElementById("QPUpdateTable");
const QPNextBtn = document.getElementById("QPNext");
const QPExitBtn = document.getElementById("QPExit");
const PrintValTableBtn = document.getElementById("PrintValTable");

//global variables
var tableArr = [];
var usageSet = [];
var nomSizeSet = [];
var gradeSet = [];
var fisWidthSet = [];
var fisDepthSet = [];
var fisLengthSet = [];
var ThSet = [];
var hdrArray = [];


var usageTextAcc = "";
var nomSizeAcc = "";
var gradeAcc = "";
var fisWidthAcc = "";
var fisDepthAcc = "";
var fisLengthAcc = "";
//var ThAcc = "";
var ThAcc2 = "";
//var tableArrAcc = "";
var tableArrAcc2 = "";
var Tick = "";
let fileHandle;
var multiChk="";

//button click event listener
const btnElements = document.getElementsByTagName("button");
for (const el of btnElements) {
  el.addEventListener("click", (ev) => {
    BtnHandler(ev);
  });
};

OpenFileBtn.addEventListener("click", (ev) => {
  ev.preventDefault();
  openFile();
});
SaveAsCsvBtn.addEventListener("click", (ev) => {
  ev.preventDefault();
  SaveAsCsv();
});
AddBtn.addEventListener("click", (ev) => {
  ev.preventDefault();
      row=tbody.insertRow(-1); 
        for ( j=0; j<14; j++){
        row.insertCell(j);    
        };
        row.setAttribute("checked",true);
          row.addEventListener("click", (ev) => {
          selectedRow(ev);
          });
  inputForm.style.display = "flex";
  inputForm.reset();
  lastCard.style.display = "grid";
  AddBtn.style.visibility = "hidden";
  RMInvID.innerText = "";
  lineItemsTable.style.display = "none";
  csvBtns.style.display = "none";

  clrPickLists();
  pickLists();
});
PrintTableBtn.addEventListener("click", (ev) => {
  ev.preventDefault();
      tablePrint();
  clrPickLists();
  pickLists();
});
QPUpdateBtn.addEventListener("click",(ev) => {
  ev.preventDefault();
  qpUpdateForm.style.display = "flex";
  lineItemsTable.style.display = "none";
  csvBtns.style.display = "none";
  inputForm.style.display = "none";
  QPUpdateTableBtn.style.display = "none";
  QPNextBtn.style.display = "none";  
  QPId.focus();
  QPId.value = "";
  
});
PrintValTableBtn.addEventListener("click", (ev) => {
  ev.preventDefault();
      ValTablePrint();
  clrPickLists();
  pickLists();
});

DelBtn.addEventListener("click", (ev) => {
  ev.preventDefault();
  multiChk = tbody.querySelectorAll("tr[checked=true]");
  if (multiChk.length >= 1) {
    for (element of multiChk) {
      if (element.getAttribute("checked")) {
      element.parentNode.deleteRow(element.rowIndex-1)}; 
    };
    };
    clrPickLists();
  pickLists();
  var csvContent = ""; //"data:text/csv;charset=utf-8,";
  csvContent += ThAcc2;
  csvContent += tableArrAcc2;
  csvContent = csvContent.trim();
  //csvContent = csvContent.replace(" ", "");
  let text = csvContent;
  text=text.trim();
  let lines = text.split("\n");
  let tableData = [];
  for (let line of lines) {    
    line=line.trim();
    let row = line.split(",");
    tableData.push(row);
  };
  tableArr = tableData;
  localStorage.setItem("rminvtableArray", JSON.stringify(tableArr));
  
  inputForm.reset();
  RMInvID.innerText = "";
  inputForm.style.display = "none";
  lastCard.style.display = "none";
  AddBtn.style.visibility = "visible";
  lineItemsTable.style.display = "block";
  csvBtns.style.display = "flex";
  clrPickLists();
});
UpdateTableBtn.addEventListener("click", (ev) => {
  ev.preventDefault();
  //const tbody = document.getElementById("tbody");
  if (RMInvID.innerText == null || RMInvID.innerText == "") {
        //multichk RMInvIDNum-createNewTablerow
    tRows = tbody.querySelectorAll("tr");
    var max=0;
    var row;
    for (row of tRows) {
      if (max>Number(row.children[1].innerText)){
      } else {
        max=Number(row.children[1].innerText);
      };
      RMInvID.innerText = (max + 1).toString();
    };
      multiChk = tbody.querySelectorAll("tr[checked=true]");
      if (multiChk.length == 0) {
      row=tbody.insertRow(-1); 
        for ( j=0; j<14; j++){
        row.insertCell(j);    
        };
        row.setAttribute("checked",true);
          row.addEventListener("click", (ev) => {
          selectedRow(ev);
          });
      };
    };
  
  const tbRows = tbody.querySelectorAll("tr[checked=true]");
  for (let i = 0; i < tbRows.length; i++) {  
    if (tbRows[i].getAttribute("checked")) {
    //alert(tbRows[i],i);  
      tbRows[i].children[0].innerText= usage.value;
      tbRows[i].children[1].innerText=RMInvID.innerText; 
      tbRows[i].children[2].innerText=nomSize.value; 
      tbRows[i].children[3].innerText=Grade.value; 
      tbRows[i].children[4].innerText=fisWidth.value; 
      tbRows[i].children[5].innerText=fisDepth.value;
      tbRows[i].children[6].innerText=fisLength.value; 
      tbRows[i].children[7].innerText=mmWidth.value; 
      tbRows[i].children[8].innerText=mmDepth.value;  
      tbRows[i].children[9].innerText=mmLength.value;
      tbRows[i].children[10].innerText=QtyStk.value; 
      tbRows[i].children[11].innerText=QtyOrd.value;  
      tbRows[i].children[12].innerText=price.value; 
      tbRows[i].children[13].innerText=file.value; 
    };
  };
    // const tbR = tbody.querySelectorAll("tr");
    // for (let i = 0; i < tbR.length; i++) {  
    //   fisWidth.value=tbR[i].children[4].innerText; 
    //   my_Convert.value=fisWidth.value;
    //   convert_entry();
    //   mmWidth.value=(Dec_mm_n.value ).replace("mm","").trim();
    //   tbR[i].children[7].innerText=mmWidth.value; 
      
    //   fisDepth.value=tbR[i].children[5].innerText;
    //   my_Convert.value=fisDepth.value;
    //   convert_entry();
    //   mmDepth.value=(Dec_mm_n.value ).replace("mm","").trim();
    //   tbR[i].children[8].innerText=mmDepth.value;  
  
    //   fisLength.value=tbR[i].children[6].innerText; 
    //   my_Convert.value=fisLength.value;
    //   convert_entry();
    //   mmLength.value=(Dec_mm_n.value ).replace("mm","").trim();
    //   tbR[i].children[9].innerText=mmLength.value; 
    // };

    inputForm.reset();
  RMInvID.innerText = "";
  inputForm.style.display = "none";
  lastCard.style.display = "none";
  AddBtn.style.visibility = "visible";
  lineItemsTable.style.display = "block";
  csvBtns.style.display = "flex";
    multiChk = tbody.querySelectorAll("tr[checked=true]");
  if (multiChk.length >= 1) {
    for (element of multiChk) {
        for (var i = 0; i < Trows.length; i++) {
      if (element.getAttribute("checked")) { element.setAttribute("checked", false) };
    };
  };
};
 for (cardName of cardList) {
//    alert(cardName);
  document.querySelector(`#${cardName}`).style.display = "none"; 
//    document.querySelector(`#${cardName}Btn`).style.display = "none"; 
clrPickLists(); 
  pickLists(); 
}

   var csvContent = ""; //"data:text/csv;charset=utf-8,";
  csvContent += ThAcc2;
  csvContent += tableArrAcc2;
  csvContent = csvContent.trim();
  //csvContent = csvContent.replace(" ", "");
  //csvText.value = csvContent;
  //console.log(csvContent);
  let text = csvContent;
  text=text.trim();
  let lines = text.split("\n");
  let tableData = [];
  for (let line of lines) {    
    line=line.trim();
    let row = line.split(",");
    tableData.push(row);
  };
  tableArr = tableData;
  localStorage.setItem("rminvtableArray", JSON.stringify(tableArr));
  //alert("tableArray");

});
CloneTableBtn.addEventListener("click", (ev) => {
  ev.preventDefault();
    tRows = tbody.querySelectorAll("tr");
    var max=0;
    var row;
    for (row of tRows) {
      if (max>Number(row.children[1].innerText)){
      } else {
        max=Number(row.children[1].innerText);
      };
      RMInvID.innerText = (max + 1).toString();
    };
      // clear checked flags(all)    
    multiChk = tbody.querySelectorAll("tr[checked=true]");
  if (multiChk.length >= 1) {
    for (element of multiChk) {
      for (var i = 0; i < Trows.length; i++) {
        if (element.getAttribute("checked")) 
          { element.setAttribute("checked", false) };
      };
    };
    // add new row ,checked flag true
    multiChk = tbody.querySelectorAll("tr[checked=true]");
    if (multiChk.length == 0) {
      row=tbody.insertRow(-1); 
        for ( j=0; j<14; j++){
        row.insertCell(j);    
        };
        row.setAttribute("checked",true);
          row.addEventListener("click", (ev) => {selectedRow(ev)});
    }else {alert("checked row error")};
  };
  for (cardName of cardList) {
  //    alert(cardName);
  document.querySelector(`#${cardName}`).style.display = "none"; 
  //    document.querySelector(`#${cardName}Btn`).style.display = "none"; 
  clrPickLists(); 
  pickLists(); 
  };
});
cancelBtn.addEventListener("click", (ev) => {
  ev.preventDefault();
  multiChk = tbody.querySelectorAll("tr[checked=true]");
  if (multiChk.length >= 1) {
    for (element of multiChk) {
    if (element.getAttribute("checked")) { element.setAttribute("checked", false)};
    };
  tRows = tbody.querySelectorAll("tr");
    var max=0;
    var row;
    for (row of tRows) {
      if (RMInvID.innerText.length >0){}else{element.remove()};
    };
  };
  inputForm.reset();
  RMInvID.innerText = "";
  inputForm.style.display = "none";
  lastCard.style.display = "none";
  AddBtn.style.visibility = "visible";
  lineItemsTable.style.display = "block";
  csvBtns.style.display = "flex";
  for (cardName of cardList) {
//    alert(cardName);
  document.querySelector(`#${cardName}`).style.display = "none"; 
//    document.querySelector(`#${cardName}Btn`).style.display = "none"; 
clrPickLists(); 
  pickLists(); 
};
});
my_Convert.addEventListener("input", (event) => {
  event.preventDefault();
  //console.log(event.target.id);
  //fis_convert();
  convert_entry();
  //my_Convert.focus();
});

newUsage.addEventListener("input", (event) => {
  event.preventDefault();
  event.target.parentNode.children[0].lastChild.innerHTML =
    `<input type="checkbox" id="chkBox" checked="true"> ${newUsage.value}`;

  multiChk = event.target.parentNode.querySelectorAll("li input[type=checkbox]:checked");

  UsageCollector.value = "";
  for (Element of multiChk) {
    UsageCollector.value += " " + Element.parentNode.innerText;
  };

  newUsage.focus();
});
newNomSize.addEventListener("input", (event) => {
  event.preventDefault();
  event.target.parentNode.children[0].lastChild.innerHTML =
    `<input type="checkbox" id="chkBox" checked="true"> ${newNomSize.value}`;

  multiChk = event.target.parentNode.querySelectorAll("li input[type=checkbox]:checked");
  if (multiChk.length >= 1) {
    for (element of multiChk) {
      if (element.getAttribute("checked")) { element.setAttribute("checked", false) };
    };
  };

  UsageCollector.value = "";
  for (Element of multiChk) {
    UsageCollector.value += " " + Element.parentNode.innerText;
  };

  newNomSize.focus();
});
newGrade.addEventListener("input", (event) => {
  event.preventDefault();
  event.target.parentNode.children[0].lastChild.innerHTML =
    `<input type="checkbox" id="chkBox" checked="true"> ${newGrade.value}`;

  multiChk = event.target.parentNode.querySelectorAll("li input[type=checkbox]:checked");
  if (multiChk.length >= 1) {
    for (element of multiChk) {
      if (element.getAttribute("checked")) { element.setAttribute("checked", false) };
    };
  };

  UsageCollector.value = "";
  for (Element of multiChk) {
    UsageCollector.value += " " + Element.parentNode.innerText;
  };

  newGrade.focus();
});
newfisWidth.addEventListener("input", (event) => {
  event.preventDefault();
  event.target.parentNode.children[0].lastChild.innerHTML =
    `<input type="checkbox" id="chkBox" checked="true"> ${newfisWidth.value}`;

  multiChk = event.target.parentNode.querySelectorAll("li input[type=checkbox]:checked");
  if (multiChk.length >= 1) {
    for (element of multiChk) {
      if (element.getAttribute("checked")) { element.setAttribute("checked", false) };
    };
  };

  UsageCollector.value = "";
  for (Element of multiChk) {
    UsageCollector.value += " " + Element.parentNode.innerText;
  };
// "mmWidth"
  newfisWidth.focus();
});
newfisDepth.addEventListener("input", (event) => {
  event.preventDefault();
  event.target.parentNode.children[0].lastChild.innerHTML =
    `<input type="checkbox" id="chkBox" checked="true"> ${newfisDepth.value}`;

  multiChk = event.target.parentNode.querySelectorAll("li input[type=checkbox]:checked");
  if (multiChk.length >= 1) {
    for (element of multiChk) {
      if (element.getAttribute("checked")) { element.setAttribute("checked", false) };
    };
  };

  UsageCollector.value = "";
  for (Element of multiChk) {
    UsageCollector.value += " " + Element.parentNode.innerText;
  };
// "mmDepth"
  newfisDepth.focus();
});
newfisLength.addEventListener("input", (event) => {
  event.preventDefault();
  event.target.parentNode.children[0].lastChild.innerHTML =
    `<input type="checkbox" id="chkBox" checked="true"> ${newfisLength.value}`;

  multiChk = event.target.parentNode.querySelectorAll("li input[type=checkbox]:checked");
  if (multiChk.length >= 1) {
    for (element of multiChk) {
      if (element.getAttribute("checked")) { element.setAttribute("checked", false) };
    };
  };

  UsageCollector.value = "";
  for (Element of multiChk) {
    UsageCollector.value += " " + Element.parentNode.innerText;
  };
// "mmLength"
  newfisLength.focus();
});
qpUpdateForm.addEventListener("click", (ev) =>{
  ev.preventDefault();
  QPId.focus();
});
QPId.addEventListener("input", (event) => {
  event.preventDefault();

  QPUpdateTableBtn.style.display = "none";
  QPNextBtn.style.display = "none";
  rminvIdLookup();
});
QPUpdateTableBtn.addEventListener("click", (ev) => {
  let rminvtableArray = JSON.parse(localStorage.getItem("rminvtableArray"));
  tableArr=rminvtableArray;
  hdrArray=tableArr.shift(0);
  let QPIdChk = '"' + QPId.value + '"';  
  for (row of tableArr) {
    // console.log(QPIdChk,row[1]);
    if (QPIdChk == row[1]) {    
      // qpuDescription.value= "" + row[2].replace(/\"/g,"") + " " + row[3].replace(/\"/g,"");
      row[10]=qpuStkQty.value.replace(/\"/g,"");
      row[11]=qpuOrdQty.value.replace(/\"/g,"");
      row[12]=qpuPrice.value.replace(/\"/g,"");
    };
  };
    LastQPId.value=QPId.value;
  //console.log(LastQPId.value,QPId.value);
    NewtableArr = tableArr.slice(0,tableArr.length);
    NewtableArr.unshift("");
    NewtableArr[0] = hdrArray;
    localStorage.setItem("QPLastId", JSON.stringify(LastQPId.value));
    localStorage.setItem("rminvtableArray", JSON.stringify(NewtableArr));
    qpUpdateForm.reset(); 
    csv2HtmlTable();
    pickLists(); 
  QPUpdateTableBtn.style.display = "none";
  QPNextBtn.style.display = "flex";
  QPId.focus();
});
QPNextBtn.addEventListener("click", (ev) => {
  ev.preventDefault();
    LastQPId.value = JSON.parse(localStorage.getItem("QPLastId"));
  //console.log(LastQPId.value);
    let QPIdNxt = Number(LastQPId.value.replace(/\"/g,"")) + 1;
    let rminvtableArray = JSON.parse(localStorage.getItem("rminvtableArray"));
  tableArr=rminvtableArray;
  hdrArray=tableArr.shift(0);
  let QPIdChk = '"' + QPIdNxt + '"';  
  var max=0;
  for (row of tableArr) {
    // console.log(QPIdChk,row[1]);
    if (QPIdChk == row[1]) {    
      if (max>Number(row[1].replace(/\"/g,""))){
      } else {max=Number(row[1].replace(/\"/g,""))};
    };
  };
//console.log(max,QPIdNxt);
  if (max >= QPIdNxt){
    QPId.value=QPIdNxt ;
  QPUpdateTableBtn.style.display = "flex";
  QPNextBtn.style.display = "none";
  rminvIdLookup()
  };
    QPId.focus();
});
QPExitBtn.addEventListener("click", (ev) => {
  ev.preventDefault();
  qpUpdateForm.style.display = "none";
  lineItemsTable.style.display = "block";
  csvBtns.style.display = "flex";
  inputForm.style.display = "none";
  QPUpdateTableBtn.style.display = "none";
  QPNextBtn.style.display = "none";
  
});
usage.addEventListener("click", (ev) => {
  ev.preventDefault();
  UsageCard.style.display = "flex";
  newUsage.style.display = "flex";
  document.getElementById("card-container").style.display = "flex";
  usage.focus();
  usageArray = usage.value.split(" ");
  //show ,populate chkBox inputs,
  multiChk = UsageCard.querySelectorAll("li input[type=checkbox]"); //:checked"); 
  for (itemText of usageArray) {
    for (Element of multiChk) {
      if (Element.parentNode.innerText.toString() == itemText.toString()) {
        // console.log(Element.parentNode,Element.parentNode.innerText);
        Element.parentNode.setAttribute("checked", true);
        Element.parentNode.firstChild.setAttribute("checked", true);
      };
    };
  };
});
nomSize.addEventListener("click", (event) => {
  event.preventDefault();
  NomSizeCard.style.display = "flex";
  newNomSize.style.display = "flex";
  document.getElementById("card-container").style.display = "flex";
  nomSize.focus();
  multiChk = NomSizeCard.querySelectorAll("li input[type=checkbox]");
  if (multiChk.length >= 1) {
    for (element of multiChk) {
      if (element.getAttribute("checked")) { element.setAttribute("checked", false) };
    };
  };

  for (Element of multiChk) {
    if (Element.parentNode.innerText.toString() == nomSize.value.toString()) {
      Element.parentNode.setAttribute("checked", true);
      Element.parentNode.firstChild.setAttribute("checked", true);
    };
  };
});
Grade.addEventListener("click", (event) => {
  event.preventDefault();
  GradeCard.style.display = "flex";
  newGrade.style.display = "flex";
  Grade.focus();
  multiChk = GradeCard.querySelectorAll("li input[type=checkbox]");
  if (multiChk.length >= 1) {
    for (element of multiChk) {
      if (element.getAttribute("checked")) { element.setAttribute("checked", false) };
    };
  };

  for (Element of multiChk) {
    if (Element.parentNode.innerText.toString() == Grade.value.toString()) {
      Element.parentNode.setAttribute("checked", true);
      Element.parentNode.firstChild.setAttribute("checked", true);
    };
  };

});
fisWidth.addEventListener("click", (event) => {
  event.preventDefault();
  fisWidthCard.style.display = "flex";
  newfisWidth.style.display = "flex";
  fisWidth.focus();
  multiChk = fisWidthCard.querySelectorAll("li input[type=checkbox]");
  if (multiChk.length >= 1) {
    for (element of multiChk) {
      if (element.getAttribute("checked")) { element.setAttribute("checked", false) };
    };
  };

  for (Element of multiChk) {
    if (Element.parentNode.innerText.toString() == fisWidth.value.toString()) {
      Element.parentNode.setAttribute("checked", true);
      Element.parentNode.firstChild.setAttribute("checked", true);
    };
  };
});
fisDepth.addEventListener("click", (event) => {
  event.preventDefault();
  fisDepthCard.style.display = "flex";
  newfisDepth.style.display = "flex";
  fisDepth.focus();
  multiChk = fisDepthCard.querySelectorAll("li input[type=checkbox]");
  if (multiChk.length >= 1) {
    for (element of multiChk) {
      if (element.getAttribute("checked")) { element.setAttribute("checked", false) };
    };
  };

  for (Element of multiChk) {
    if (Element.parentNode.innerText.toString() == fisDepth.value.toString()) {
      Element.parentNode.setAttribute("checked", true);
      Element.parentNode.firstChild.setAttribute("checked", true);
    };
  };
});
fisLength.addEventListener("click", (event) => {
  event.preventDefault();
  fisLengthCard.style.display = "flex";
  newfisLength.style.display = "flex";
  fisLength.focus();
  multiChk = fisLengthCard.querySelectorAll("li input[type=checkbox]");
  if (multiChk.length >= 1) {
    for (element of multiChk) {
      if (element.getAttribute("checked")) { element.setAttribute("checked", false) };
    };
  };


  for (Element of multiChk) {
    if (Element.parentNode.innerText.toString() == fisLength.value.toString()) {
      Element.parentNode.setAttribute("checked", true);
      Element.parentNode.firstChild.setAttribute("checked", true);
    };
  };

});

// "mmWidth"
// "mmDepth" 
// "mmDepth"
// "mmLength"
// "QtyStk"
// "QtyOrd" 
// "price"
// "file" 
// fis 

function tableClicks() {
  for (var i = 0; i < Trows.length; i++) {
    Trows.item(i).addEventListener("click", (ev) => {selectedRow(ev)});
    let columns = Trows.item(i).querySelectorAll("td");
    for (var j = 0; j < columns.length; j++) {
      columns.item(j).addEventListener("click", (event) => {
        event.preventDefault();
      });
    };//end of j loop td
  };//end of i loop td
};
async function selectedRow(ev) {    //Row.classList.remove("selected");
  ev.preventDefault();
  targetA = ev.target.parentNode;
  tagCell = ev.target.cellIndex;
  tagRow = ev.target.parentNode.rowIndex;

  if (targetA.getAttribute("checked") == "true") {
    targetA.setAttribute("checked", false);
    inputForm.style.display = "none";
    lastCard.style.display = "none";
    UsageCard.style.display = "none";
    AddBtn.style.visibility = "visible";
    lineItemsTable.style.display = "block";
    csvBtns.style.display = "flex";
  } else {
    for (element of targetA.parentNode.children) {
      element.setAttribute("checked", false);
    };


    targetA.setAttribute("checked", true);
    inputForm.style.display = "flex";
    lastCard.style.display = "grid";
    AddBtn.style.visibility = "visible";
    lineItemsTable.style.display = "block";
    csvBtns.style.display = "flex";
    inputForm.reset();

    usage.value = (targetA.children[0].innerText);
    RMInvID.innerText = (targetA.children[1].innerText);
    nomSize.value = (targetA.children[2].innerText);
    Grade.value = (targetA.children[3].innerText);
    fisWidth.value = (targetA.children[4].innerText);
    fisDepth.value = (targetA.children[5].innerText);
    fisLength.value = (targetA.children[6].innerText);
    mmWidth.value = (targetA.children[7].innerText);
    mmDepth.value = (targetA.children[8].innerText);
    mmLength.value = (targetA.children[9].innerText);
    QtyStk.value = (targetA.children[10].innerText);
    QtyOrd.value = (targetA.children[11].innerText);
    price.value = (targetA.children[12].innerText);
    file.value = (targetA.children[13].innerText);
    //hide add button,
    DelBtn.style.display = "flex";
    UpdateTableBtn.style.display = "flex";
    cancelBtn.style.display = "flex";
    lineItemsTable.style.display = "none";
    csvBtns.style.display = "none";
  };
 // console.log(tagRow, tagCell); // tr td
};
// card lists items event listener
function cardLisner() {
  const olElements = document.getElementsByTagName("li");
  for (const el of olElements) {
    el.addEventListener("click", (ev) => {
      clickChkBox(ev)
    });
  };//end  of for of ol loop
};//end of cardLisner function
function clickChkBox(ev) {
  ev.preventDefault();
  const target = ev.target;
  const cardName = (target.parentNode.id);
  //console.log(target);
  const chkTag = target.firstChild;
  var multiChk = target.parentNode.querySelectorAll("li input[type=checkbox]:checked");

  //const UsageCollector = document.getElementById("usageCollector");
  switch (cardName) {
    case "usageList":
      if (chkTag.checked == false) {
        chkTag.checked = true;
        target.setAttribute("checked", true);
        target.style.backgroundColor = "red";
      } else {
        chkTag.checked = false;
        target.setAttribute("checked", false);
        target.style.backgroundColor = "grey";
      }; //multiselect listItem
      if (target.innerText == "New") {
        document.getElementById("newUsage").style.visibility = "visible";
        document.getElementById("newUsage").focus();
        //  document.getElementById("newNomSize").style.visibility="collapse";  
      };
      // add checked items to input 
      multiChk = target.parentNode.querySelectorAll("li input[type=checkbox]:checked");
      UsageCollector.value = "";
      for (Element of multiChk) {
        UsageCollector.value += " " + Element.parentNode.innerText;
      };
      break;
    case "GradeList":
      //alert("grade");

      const newGrade = document.getElementById("newGrade");
      if (newGrade.closest("input[type=checkbox]:checked")) { alert("grade") };
     // console.log(newGrade.closest("input[type=checkbox]:checked"));

      if (multiChk.length >= 1) {
        chkTag.checked = false;
        target.setAttribute("checked", false);
        target.style.backgroundColor = "grey";
      } else {
        if (chkTag.checked == false) {
          chkTag.checked = true;
          target.setAttribute("checked", true);
          target.style.backgroundColor = "red";
        } else {
          chkTag.checked = false;
          target.setAttribute("checked", false);
          target.style.backgroundColor = "grey";
        };
      };
      if (target.innerText == "New") {
        document.getElementById("newGrade").style.visibility = "visible";
        //  document.getElementById("newNomSize").style.visibility="collapse";  
        newGrade.focus();
      };

      //only one checkbox:checked in list-rows
      break;
    case "nomSizeList":
      //alert("nomSize");

      if (multiChk.length >= 1) {
        chkTag.checked = false;
        target.setAttribute("checked", false);
        target.style.backgroundColor = "grey";
      } else {
        if (chkTag.checked == false) {
          chkTag.checked = true;
          target.setAttribute("checked", true);
          target.style.backgroundColor = "red";
        } else {
          chkTag.checked = false;
          target.setAttribute("checked", false);
          target.style.backgroundColor = "grey";
        };
      };
      if (target.innerText == "New") {
        document.getElementById("newNomSize").style.visibility = "visible";
        //  document.getElementById("newNomSize").style.visibility="collapse";  
        newNomSize.focus();
      };

      //only one checkbox:checked in list-rows
      break;
    case "fisLengthList":
      //alert("fisLength");
      if (multiChk.length >= 1) {
        chkTag.checked = false;
        target.setAttribute("checked", false);
        target.style.backgroundColor = "grey";
      } else {
        if (chkTag.checked == false) {
          chkTag.checked = true;
          target.setAttribute("checked", true);
          target.style.backgroundColor = "red";
        } else {
          chkTag.checked = false;
          target.setAttribute("checked", false);
          target.style.backgroundColor = "grey";
        };
      };
      if (target.innerText == "New") {
        document.getElementById("newfisLength").style.visibility = "visible";
        //  document.getElementById("newNomSize").style.visibility="collapse";  
      };
      newfisLength.focus();
      //only one checkbox:checked in list-rows
      break;
    case "fisDepthList":
      //alert("fisDepth");
      if (multiChk.length >= 1) {
        chkTag.checked = false;
        target.setAttribute("checked", false);
        target.style.backgroundColor = "grey";
      } else {
        if (chkTag.checked == false) {
          chkTag.checked = true;
          target.setAttribute("checked", true);
          target.style.backgroundColor = "red";
        } else {
          chkTag.checked = false;
          target.setAttribute("checked", false);
          target.style.backgroundColor = "grey";
        };
      };
      if (target.innerText == "New") {
        document.getElementById("newfisDepth").style.visibility = "visible";
        //  document.getElementById("newNomSize").style.visibility="collapse";  
      };
      newfisDepth.focus();
      //only one checkbox:checked in list-rows
      break;
    case "fisWidthList":
      //alert("fisWidth");
      if (multiChk.length >= 1) {
        chkTag.checked = false;
        target.setAttribute("checked", false);
        target.style.backgroundColor = "grey";
      } else {
        if (chkTag.checked == false) {
          chkTag.checked = true;
          target.setAttribute("checked", true);
          target.style.backgroundColor = "red";
        } else {
          chkTag.checked = false;
          target.setAttribute("checked", false);
          target.style.backgroundColor = "grey";
        };
      };
      if (target.innerText == "New") {
        document.getElementById("newfisWidth").style.visibility = "visible";
        //  document.getElementById("newNomSize").style.visibility="collapse";  
      };
      newfisWidth.focus();
      //only one checkbox:checked in list-rows
      break;
    default:
      //alert("Unknown CardList");
      break;
  };
};
function chk_units() {
  const x = document.getElementsByName("fis");
  x.forEach(chk_fis_unit);
  // my_display.focus();
}
function chk_fis_unit(element) {
  if (element.checked == true) {
  chk_fis_unit.value = element.id;
  // console.log(element.id);
  };
};
function BtnHandler(ev) {  //ok buttons
  ev.preventDefault();
  if (ev.target == null) { return };
  const cardName = (ev.target.parentNode.id);
  switch (cardName) {
    case "UsageCard":
      multiChk = ev.target.parentNode.querySelectorAll("li input[type=checkbox]:checked");
      UsageCollector.value = "";
      for (Element of multiChk) {
        UsageCollector.value += " " + Element.parentNode.innerText;
      };
      if (UsageCollector.size > 0) {
        UsageCollector.value=UsageCollector.value.replace('"',"");
        UsageCollector.value=UsageCollector.value.replace(",","");
        UsageCollector.value=UsageCollector.value.replace("#","");
        UsageCollector.value=UsageCollector.value.replace('\ ',"");
        usage.value = UsageCollector.value;
        newUsage.style.display = "none";
        UsageCard.style.display = "none";
        usage.focus();
      } else { };
      // nomSize.click();
      break;
    case "GradeCard":
      multiChk = ev.target.parentNode.querySelectorAll("li input[type=checkbox]:checked");
      if (multiChk.length >= 1) {
        for (element of multiChk) {
          if (element.getAttribute("checked")) { element.setAttribute("checked", false) };
        };
      };

      UsageCollector.value = "";
      for (Element of multiChk) {
        UsageCollector.value += " " + Element.parentNode.innerText;
      };
      if (UsageCollector.size > 0) {
        UsageCollector.value=UsageCollector.value.replace('"',"");
        UsageCollector.value=UsageCollector.value.replace(",","");
        UsageCollector.value=UsageCollector.value.replace("#","");
        UsageCollector.value=UsageCollector.value.replace('\ ',"");

        Grade.value = UsageCollector.value;
        newGrade.style.display = "none";
        GradeCard.style.display = "none";
        Grade.focus();
      } else { };
      // fisWidth.click();
      break;
    case "NomSizeCard":
      multiChk = ev.target.parentNode.querySelectorAll("li input[type=checkbox]:checked");
      if (multiChk.length >= 1) {
        for (element of multiChk) {
          if (element.getAttribute("checked")) { element.setAttribute("checked", false) };
        };
      };

      UsageCollector.value = "";
      for (Element of multiChk) {
        UsageCollector.value += " " + Element.parentNode.innerText;
      };
      if (UsageCollector.size > 0) {
        UsageCollector.value=UsageCollector.value.replace('"',"");
        UsageCollector.value=UsageCollector.value.replace(",","");
        UsageCollector.value=UsageCollector.value.replace("#","");
        UsageCollector.value=UsageCollector.value.replace('\ ',"");

        nomSize.value = UsageCollector.value;
        newNomSize.style.display = "none";
        NomSizeCard.style.display = "none";
        nomSize.focus();
      } else { };
      //Grade.click();
      break;
    case "fisLengthCard":
      multiChk = ev.target.parentNode.querySelectorAll("li input[type=checkbox]:checked");
      if (multiChk.length >= 1) {
        for (element of multiChk) {
          if (element.getAttribute("checked")) { element.setAttribute("checked", false) };
        };
      };


      UsageCollector.value = "";
      for (Element of multiChk) {
        UsageCollector.value += " " + Element.parentNode.innerText;
      };
      if (UsageCollector.size > 0) {  
        UsageCollector.value=UsageCollector.value.replace('"',"");
        UsageCollector.value=UsageCollector.value.replace(",","");
        UsageCollector.value=UsageCollector.value.replace("#","");
        UsageCollector.value=UsageCollector.value.replace('\ ',"");
      
        newfisLength.style.display = "none";
        fisLengthCard.style.display = "none";
        fisLength.focus();
      } else { };

      // mm calcs to fill
      my_Convert.value = UsageCollector.value;
      convert_entry();
      fisLength.value = OutNumU_n.value.replace(" ","");
      mmLength.value = (Dec_mm_n.value ).replace("mm","").trim();

      break;
    case "fisDepthCard":
      multiChk = ev.target.parentNode.querySelectorAll("li input[type=checkbox]:checked");
      if (multiChk.length >= 1) {
        for (element of multiChk) {
          if (element.getAttribute("checked")) { element.setAttribute("checked", false) };
        };
      };

      UsageCollector.value = "";
      for (Element of multiChk) {
        UsageCollector.value += " " + Element.parentNode.innerText;
      };
      if (UsageCollector.size > 0) {
        UsageCollector.value=UsageCollector.value.replace('"',"");
        UsageCollector.value=UsageCollector.value.replace(",","");
        UsageCollector.value=UsageCollector.value.replace("#","");
        UsageCollector.value=UsageCollector.value.replace('\ ',"");

        newfisDepth.style.display = "none";
        fisDepthCard.style.display = "none";
        fisDepth.focus();
      } else { };
       // mm calcs to fill
      my_Convert.value = UsageCollector.value;
      convert_entry();
      fisDepth.value = OutNumU_n.value.replace(" ","");
      mmDepth.value = (Dec_mm_n.value ).replace("mm","").trim();

      break;
    case "fisWidthCard":
      multiChk = ev.target.parentNode.querySelectorAll("li input[type=checkbox]:checked");
      if (multiChk.length >= 1) {
        for (element of multiChk) {
          if (element.getAttribute("checked")) { element.setAttribute("checked", false) };
        };
      };

      UsageCollector.value = "";
      for (Element of multiChk) {
        UsageCollector.value += " " + Element.parentNode.innerText;
      };
      if (UsageCollector.size > 0) {
        UsageCollector.value=UsageCollector.value.replace('"',"");
        UsageCollector.value=UsageCollector.value.replace(",","");
        UsageCollector.value=UsageCollector.value.replace("#","");
        UsageCollector.value=UsageCollector.value.replace('\ ',"");

        newfisWidth.style.display = "none";
        fisWidthCard.style.display = "none";
        fisWidth.focus();
      } else { };
       // mm calcs to fill
      my_Convert.value = UsageCollector.value;
      convert_entry();
      fisWidth.value = OutNumU_n.value.replace(" ","");
      mmWidth.value = (Dec_mm_n.value ).replace("mm","").trim();

      break;
    default:
      break;
  };
};
function pickLists() {
  var arr1 = [];
  var arr2 = [];
  let usageTextAcc = "";
  let nomSizeAcc = "";
  let gradeAcc = "";
  let fisWidthAcc = "";
  let fisDepthAcc = "";
  let fisLengthAcc = "";
  multiChk="";
  UsageCollector.value="";
  const tHead = document.getElementById("thead");
  const Throws = tHead.rows;
  const th_ol_Element = tHead.querySelectorAll("th");
  const rowsTh = th_ol_Element.length;
  ThAcc2 = "";
  tableArrAcc2 = "";
  //table head to array to  set
  for (var i = 0; i < rowsTh; i++) {
    if (i == "13") { Tick = "\n" } else { Tick = "," };
    ThAcc2 += ('"' + (th_ol_Element.item(i).innerText) + '"' + Tick);  
     };  //end of table headList loop          // make it one array list
  ThSet = new Set("ThAcc2");//console.log(ThAcc2);

  for (var i = 0; i < Trows.length; i++) {
    let columns = Trows.item(i).querySelectorAll("td");
    for (var j = 0; j < columns.length; j++) {                  
      if (j == "13") { Tick = "\n" } else { Tick = " " };
      if (j == "0") {
        usageTextAcc += (columns.item(j).innerText + Tick);
        Tick = (",");
        //   tableArrAcc += ((i + 1) + ", " + (j) + ", " + '"' + (columns.item(j).innerText) + '"' + Tick);
        tableArrAcc2 += ('"' + (columns.item(j).innerText) + '"' + Tick);
      } else {
        if (j == "13") { Tick = "\n" } else { Tick = "," };
        tableArrAcc2 += ('"' + (columns.item(j).innerText) + '"' + Tick);
        if (j == "2") { nomSizeAcc += (columns.item(j).innerText) + " " };
        if (j == "3") { gradeAcc += (columns.item(j).innerText + " ") };
        if (j == "4") { fisWidthAcc += (columns.item(j).innerText + " ") };
        if (j == "5") { fisDepthAcc += (columns.item(j).innerText + " ") };
        if (j == "6") { fisLengthAcc += (columns.item(j).innerText + " ") };
      };
    };//end of j loop  columns td  
  };//end of i loop  end of row tr
  //usage card to array
  const olElement = document.getElementById("usageList").getElementsByTagName("li");
  const rows1 = olElement.length;
  for (var i = 0; i < rows1; i++) {
    var oleStr = (" " + olElement.item(i).innerText);
    if (oleStr.includes(",")) {
      oleStr = olElement.item(i).innerText.replace(",", " ");
    };
    usageTextAcc += (oleStr);
    usageTextAcc = usageTextAcc.trimEnd();
    usageTextAcc = usageTextAcc.replace("  ", " ");
  };//end of usageList loop          // make it one array
  arr = usageTextAcc.split(" ");
  usageSet = new Set(arr);
  const ulistElement = document.getElementById("usageList").getElementsByTagName("li");
  var ulElem = document.getElementById("usageList")
  while (ulElem.hasChildNodes()) { ulElem.removeChild(ulElem.firstChild) };
  i = 0;
  usageSet.values().forEach(iValue => {

    const usageLiAdd = document.createElement("li");
    document.getElementById("usageList").appendChild(usageLiAdd);

    let uVal = document.createTextNode(iValue);

    usageChkAdd = document.createElement('input');
    usageChkAdd.type = "checkbox";
    usageChkAdd.id = "chkbox";
    ulistElement.item(i).appendChild(usageChkAdd);
    ulistElement.item(i).appendChild(uVal);
    i++;
  }); //return usageSet;

  //nomSizeCard to array
  const nsolElement2 = document.getElementById("nomSizeList").getElementsByTagName("li");
  const rows2 = nsolElement2.length;
  for (var i = 0; i < rows2; i++) {
    var nsoleStr = (" " + nsolElement2.item(i).innerText);
    if (nsoleStr.includes(",")) {
      nsoleStr = nsolElement2.item(i).innerText.replace(",", " ");
    };
    nomSizeAcc = nomSizeAcc.trimEnd();
    nomSizeAcc += nsoleStr;
    nomSizeAcc = nomSizeAcc.trimEnd();
  };
  arr = nomSizeAcc.split(" ");
  nomSizeSet = new Set(arr);
  const nslistElement = document.getElementById("nomSizeList").getElementsByTagName("li");
  var nslElem = document.getElementById("nomSizeList")
  while (nslElem.hasChildNodes()) { nslElem.removeChild(nslElem.firstChild) };
  i = 0;
  nomSizeSet.values().forEach(iValue => {

    const nomSizeLiAdd = document.createElement("li");
    document.getElementById("nomSizeList").appendChild(nomSizeLiAdd);
    let nsVal = document.createTextNode(iValue);

    nomSizeChkAdd = document.createElement('input');
    nomSizeChkAdd.type = "checkbox";
    nomSizeChkAdd.id = "chkbox";
    nslistElement.item(i).appendChild(nomSizeChkAdd);
    nslistElement.item(i).appendChild(nsVal);
    i++;
    //return nomSizeSet;
  });


  //gradeCard to array 
  const olElement3 = document.getElementById("GradeList").getElementsByTagName("li");
  const rows3 = olElement3.length;
  for (var i = 0; i < rows3; i++) {
    var goleStr = (" " + olElement3.item(i).innerText);
    if (goleStr.includes(",")) {
      goleStr = olElement3.item(i).innerText.replace(",", " ");
    };
    gradeAcc = gradeAcc.trimEnd();
    gradeAcc += goleStr;
    gradeAcc = gradeAcc.trimEnd();
  };
  arr = gradeAcc.split(" ");
  gradeSet = new Set(arr);

  const glistElement = document.getElementById("GradeList").getElementsByTagName("li");
  var glElem = document.getElementById("GradeList")
  while (glElem.hasChildNodes()) { glElem.removeChild(glElem.firstChild) };
  i = 0;
  gradeSet.values().forEach(iValue => {
    const gradeLiAdd = document.createElement("li");
    document.getElementById("GradeList").appendChild(gradeLiAdd);
    let gVal = document.createTextNode(iValue);
    gradeChkAdd = document.createElement('input');
    gradeChkAdd.type = "checkbox";
    gradeChkAdd.id = "chkbox";
    glistElement.item(i).appendChild(gradeChkAdd);
    glistElement.item(i).appendChild(gVal);
    i++;
    //return gradeSet;
  });

  //fisWidthCard to array
  const olElement4 = document.getElementById("fisWidthList").getElementsByTagName("li");
  const rows4 = olElement4.length;
  for (var i = 0; i < rows4; i++) {
    var fiswoleStr = (" " + olElement4.item(i).innerText);
    if (fiswoleStr.includes(",")) {
      fiswoleStr = olElement4.item(i).innerText.replace(",", " ");
    };
    fisWidthAcc = fisWidthAcc.trimEnd();
    fisWidthAcc += fiswoleStr;
    fisWidthAcc = fisWidthAcc.trimEnd();
  };
  arr = fisWidthAcc.split(" ");
  fisWidthSet = new Set(arr);

  const fiswlistElement = document.getElementById("fisWidthList").getElementsByTagName("li");
  var fiswlElem = document.getElementById("fisWidthList")
  while (fiswlElem.hasChildNodes()) { fiswlElem.removeChild(fiswlElem.firstChild) };
  i = 0;
  fisWidthSet.values().forEach(iValue => {
    const fiswLiAdd = document.createElement("li");
    document.getElementById("fisWidthList").appendChild(fiswLiAdd);
    let fiswVal = document.createTextNode(iValue);
    fiswChkAdd = document.createElement('input');
    fiswChkAdd.type = "checkbox";
    fiswChkAdd.id = "chkbox";
    fiswlistElement.item(i).appendChild(fiswChkAdd);
    fiswlistElement.item(i).appendChild(fiswVal);
    i++;

  });   // return fisWidthSet;

  //fisDepthCard to array
  const olElement5 = document.getElementById("fisDepthList").getElementsByTagName("li");
  const rows5 = olElement5.length;
  for (var i = 0; i < rows5; i++) {
    var fisdoleStr = (" " + olElement5.item(i).innerText);
    if (fisdoleStr.includes(",")) {
      fisdoleStr = olElement5.item(i).innerText.replace(",", " ");
    };
    fisDepthAcc = fisDepthAcc.trimEnd();
    fisDepthAcc += fisdoleStr;
    fisDepthAcc = fisDepthAcc.trimEnd();
  };
  arr = fisDepthAcc.split(" ");
  fisDepthSet = new Set(arr);

  const fisdlistElement = document.getElementById("fisDepthList").getElementsByTagName("li");
  var fisdlElem = document.getElementById("fisDepthList")
  while (fisdlElem.hasChildNodes()) { fisdlElem.removeChild(fisdlElem.firstChild) };
  i = 0;
  fisDepthSet.values().forEach(iValue => {
    const fisdLiAdd = document.createElement("li");
    document.getElementById("fisDepthList").appendChild(fisdLiAdd);
    let fisdVal = document.createTextNode(iValue);
    fisdChkAdd = document.createElement('input');
    fisdChkAdd.type = "checkbox";
    fisdChkAdd.id = "chkbox";
    fisdlistElement.item(i).appendChild(fisdChkAdd);
    fisdlistElement.item(i).appendChild(fisdVal);
    i++;

  });   //return fisDepthSet;

  //fisLengthCard to array
  const olElement6 = document.getElementById("fisLengthList").getElementsByTagName("li");
  const rows6 = olElement6.length;
  for (var i = 0; i < rows6; i++) {
    var fisLoleStr = (" " + olElement6.item(i).innerText);
    if (fisLoleStr.includes(",")) {
      fisLoleStr = olElement6.item(i).innerText.replace(",", " ");
    };
    fisLengthAcc = fisLengthAcc.trimEnd();
    fisLengthAcc += fisLoleStr;
    fisLengthAcc = fisLengthAcc.trimEnd();
  };
  arr = fisLengthAcc.split(" ");
  fisLengthSet = new Set(arr);

  const fisLlistElement = document.getElementById("fisLengthList").getElementsByTagName("li");
  var fisLlElem = document.getElementById("fisLengthList")
  while (fisLlElem.hasChildNodes()) { fisLlElem.removeChild(fisLlElem.firstChild) };
  i = 0;
  fisLengthSet.values().forEach(iValue => {
    const fisLLiAdd = document.createElement("li");
    document.getElementById("fisLengthList").appendChild(fisLLiAdd);
    let fisLVal = document.createTextNode(iValue);
    fisLChkAdd = document.createElement('input');
    fisLChkAdd.type = "checkbox";
    fisLChkAdd.id = "chkbox";
    fisLlistElement.item(i).appendChild(fisLChkAdd);
    fisLlistElement.item(i).appendChild(fisLVal);
    i++;
  });  //  return fisLengthSet
  cardLisner();
}; // end of function
//linked list of sorted rowIndex column values)
function clrPickLists() {
 // const cardList = ["UsageCard", "GradeCard", "NomSizeCard", "fisLengthCard", "fisDepthCard", "fisWidthCard"];
  
 for (cardName of cardList) {
    multiChk = document.getElementById(cardName).querySelectorAll("li input[type=checkbox]:checked");
    if (multiChk.length >= 1) {
        for (element of multiChk) {
        element.checked = false};
    };
  };
  UsageCollector.value="";
let usageTextAcc = "";
let nomSizeAcc = "";
let gradeAcc = "";
let fisWidthAcc = "";
let fisDepthAcc = "";
let fisLengthAcc = "";
multiChk="";
};
async function tableRowSort() { 
      let rminvtableArray = JSON.parse(localStorage.getItem("rminvtableArray"));
    tableArr=rminvtableArray;
  hdrArray=tableArr.shift(0);
  // table Row Sort 

  tableArr.sort((a, b)=>{
   // console.log(a[3],b[3]);
  if (a[3]>b[3]){
    return 1;
  } else {
    if (a[3]<b[3]){
      return -1;
    } else 
    //return 0;
      if(typeof a[7] === "number"){
        return a[7]-b[7]||a[8]-b[8]||a[9]-b[9] ? 1 : -1;
      }else{
        return 0;
      };
  };
  });
};
function tablePrint() {
  const PrtWdw=window.open("RMInvPrt.html","_blank","toolbar=no,location=yes,directories=yes,status=no,menubar=no,scrollbars=yes,resizable=no");
  PrtWdw.location.href = "RMInvPrt.html";
  PrtWdw.print()
};//"toolbar=yes, location=yes, directories=no, status=no, menubar=no, scrollbars=yes, resizable=no, copyhistory=yes, width=400, height=400"
function ValTablePrint() {
  const ValPrtWdw=window.open("PricedRMInvPrt.html","_blank","toolbar=no,location=yes,directories=yes,status=no,menubar=no,scrollbars=yes,resizable=no");
  ValPrtWdw.location.href = "PricedRMInvPrt.html";
  ValPrtWdw.print();
};
const options = {
    // options-starting directory path, file extension
  id: 'foo',
  startIn: 'downloads',
  types: [{ accept: { 'text/csv': '.csv' } },],
  excludeAcceptAllOption: true,
  suggestedName: "raw_materials_inventory.csv",
  accept: 'text/csv',
  multiple: false,
  filters: [{ name: 'CSV Files', extensions: ['csv'] },],
};
async function openFile() {
  // options-starting directory path, file extension 
  [fileHandle] = await window.showOpenFilePicker(options);
  let fileData = await fileHandle.getFile();
  let text = await fileData.text();
  text=text.trim();
  let lines = text.split("\n");
  let tableData = [];
  for (let line of lines) {    
    line=line.trim();
    let row = line.split(",");
    tableData.push(row);
  };
  tableArr = tableData;
  localStorage.setItem("rminvtableArray", JSON.stringify(tableArr));
  //alert("tableArray");  
  csv2HtmlTable();
};
function csv2HtmlTable() {  //headers,rows 
  //empty table head
  const tHead = document.querySelector('thead');
  const tRows = tHead.querySelectorAll("tr");
  while (tRows.item(0).lastChild) {
    tRows.item(0).removeChild(tRows.item(0).lastChild);
  };
  //fill table header
  tableArr= JSON.parse(localStorage.getItem("rminvtableArray"));
  hdrArray = tableArr.shift(0);
  //console.log(hdrArray);
  tableRowSort();
  for (const tHdr of hdrArray) {
    const th = document.createElement("th");
    th.innerText = tHdr.trim().replace(/^"|"$/g, "");
    tRows.item(0).appendChild(th);
  };
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
    for (let j = 0; j < tableArr[i].length; j++) {
      const cell = document.createElement("td");
      cell.innerText = tableArr[i][j].trim().replace(/^"|"$/g, "");
      row.appendChild(cell);
    }
    tbody.appendChild(row);
  };  
  // tableArr.unshift("");
  // tableArr[0]=hdrArray;
  // console.log(tableArr);
  tableClicks();
  pickLists();
};
async function SaveAsCsv() {
  await pickLists();
  fileHandle = await window.showSaveFilePicker(options);
  var csvContent = ""; //"data:text/csv;charset=utf-8,";
  csvContent += ThAcc2;
  csvContent += tableArrAcc2;
  csvContent = csvContent.trim();
  csvContent = csvContent.replace(" ", "");
  //csvText.value = csvContent;
  //console.log(csvContent);
  let text = csvContent;
  text=text.trim();
  let lines = text.split("\n");
  let tableData = [];
  for (let line of lines) {    
    line=line.trim();
    let row = line.split(",");
    tableData.push(row);
  };
  tableArr = tableData;
  localStorage.setItem("rminvtableArray", JSON.stringify(tableArr));
  //alert("tableArray");

  if (fileHandle) {
    const stream = await fileHandle.createWritable({
      keepExistingData: "false",
      mode: "exclusive",
    });
    await stream.write(csvContent);
    await stream.close();
  };

};
function loadCalculator() {
  let win = window.open("calc53.html", null,
    "popup,width=250,height=550,left=50%,top=50%,right=50%");
};
// <div id="calc">
//     <object class="calculator" type="text/html" data="calc53.html" height="550px" width="250px" style="overflow-y:visible">
//     </object>
//             <!--<embed src="calc53.html" height="550px">-->
// "https://mikeswayze.github.io/rpncalc/index.html"

// </div>
function rminvIdLookup(){ 
  let IDBool = false;
  let rminvtableArray = JSON.parse(localStorage.getItem("rminvtableArray"));
  tableArr=rminvtableArray;
  hdrArray=tableArr.shift(0);
  let QPIdChk = '"' + QPId.value + '"';
  for (row of tableArr) {
    // console.log(QPIdChk,row[1]);
    if (QPIdChk == row[1]) {    
      qpuDescription.value= "" + row[2].replace(/\"/g,"") + " " + row[3].replace(/\"/g,"");
      qpuStkQty.value =row[10].replace(/\"/g,"");
      qpuOrdQty.value = row[11].replace(/\"/g,"");
      qpuPrice.value = row[12].replace(/\"/g,"");
      IDBool = true;
      QPUpdateTableBtn.style.display = "flex";
      QPId.focus();
    };
  };
  if (!IDBool) {
      qpuDescription.value= "";
      qpuStkQty.value ="";
      qpuOrdQty.value ="";
      qpuPrice.value ="";
      QPUpdateTableBtn.style.display = "none";
      QPId.focus();
  };
};
function parsFlat(x, pF) {

  if (Math.abs(x) < 0.1) { pF = pF + 1 };
  if (Math.abs(x) < 0.01) { pF = pF + 2 };
  if (Math.abs(x) < 0.001) { pF = pF + 3 };
  if (Math.abs(x) < 0.0001) { pF = pF + 4 };
  if (Math.abs(x) < 0.00001) { pF = pF + 5 };
  pF = Math.round(Number(pF));
  if (0 < pF < 100) { } else { pF = 8 };
  if (pF == NaN) { pF = 8 };
  let y = Number(x);
  function parsIt() {
    y = y * Math.pow(10, pF);
    y = Math.round(y);
    y = y / Math.pow(10, pF);
    y = Number(y);
  }
  if (y.toString().includes("00000")) {
    pF = Number(y.toString().lastIndexOf("00000"));
    parsIt();
  }
  if (y.toString().includes("0000")) {
    pF = Number(y.toString().lastIndexOf("0000"));
    parsIt();
  }

  if (y.toString().includes("99999")) {
    pF = Number(y.toString().lastIndexOf("99999"));
    parsIt();
  }
  if (y.toString().includes("9999")) {
    pF = Number(y.toString().lastIndexOf("9999"));
    parsIt();
  }
  if (y.toString().includes("666666")) {
    pF = Number(y.toString().lastIndexOf("666666"));
    parsIt();
  }
  if (y.toString().includes("333333")) {
    pF = Number(y.toString().lastIndexOf("333333"));
    parsIt();
  }
  if (y.toString().includes("00000")) {
    pF = Number(y.toString().lastIndexOf("00000"));
    parsIt();
  }

  return y;
}
function convert_entry() {
  let x = my_Convert.value.toLowerCase();
  let a = x.trim();
  let A = a.split(" ");
  a = A.join("");
  x = a;
  let r = 0;
  let b = a.length;
  DecMeter_n.value = 0;
  DecFt_n.value = 0;
  shuffle();
  OutNumU_n.value = 0;
  UnitEx_n.value = 0;

  if (a.length < 0) {
    alert("booger");
  }
  if (a.includes("**")) {
    const wArr = x.match(/-?\d*(\.\d*)?$/i);
    if (wArr.length && wArr) {
      let y = wArr.shift();
      y = y.trim();
      UnitEx_n.value = Number(y);
      let k = x.replace("**" + y, "");
      k = k.trim();
      const rArr = k.match(/^(-?\d*(\.\d*)?)((\e[+|-]?\d*)(\.\d*)?)?/i);
      r = rArr.shift();
      const sArr = k.match(/[f-x]{1,2}$/i);
      s = sArr.shift();
      s = s.trim();
      r = Number(parsFlat(r, 8)).toPrecision();
    } else {
      alert();
    }

    if (s == "ft") {
      DecFt_n.value = Number(r);
      DecIn_n.value = DecFt_n.value * Math.pow(12, UnitEx_n.value);
      DecSx_n.value = DecFt_n.value * Math.pow(12 * 16, UnitEx_n.value);
      DecMeter_n.value = DecFt_n.value * Math.pow(0.3048, UnitEx_n.value);
      Dec_mm_n.value = DecFt_n.value * Math.pow(304.8, UnitEx_n.value);
      OutNumU_n.value =
        Number(parsFlat(DecFt_n.value, 8)).toPrecision() +
        s +
        "**" +
        UnitEx_n.value;
    }
    if (s == "in") {
      DecIn_n.value = Number(r);
      DecFt_n.value = DecIn_n.value * Math.pow(1 / 12, UnitEx_n.value);
      DecSx_n.value = DecFt_n.value * Math.pow(12 * 16, UnitEx_n.value);
      DecSx_n.value = DecSx_n.value;
      DecMeter_n.value = DecFt_n.value * Math.pow(0.3048, UnitEx_n.value);
      Dec_mm_n.value = DecMeter_n.value * Math.pow(1000, UnitEx_n.value);
      Dec_mm_n.value = Dec_mm_n.value;
      OutNumU_n.value =
        Number(parsFlat(DecIn_n.value, 8)).toPrecision() +
        s +
        "**" +
        UnitEx_n.value;
    }
    if (s == "sx") {
      DecSx_n.value = Number(r);
      DecSx_n.value = DecSx_n.value;
      DecIn_n.value = DecSx_n.value * Math.pow(1 / 16, UnitEx_n.value);
      DecFt_n.value = DecSx_n.value * Math.pow(1 / 12 / 16, UnitEx_n.value);
      DecMeter_n.value = DecFt_n.value * Math.pow(0.3048, UnitEx_n.value);
      Dec_mm_n.value = DecMeter_n.value * Math.pow(1000, UnitEx_n.value);
      Dec_mm_n.value = Dec_mm_n.value;
      OutNumU_n.value =
        Number(parsFlat(DecSx_n.value, 8)).toPrecision() +
        s +
        "**" +
        UnitEx_n.value;
    }
    if (s == "m") {
      DecMeter_n.value = Number(r);
      DecFt_n.value = DecMeter_n.value * Math.pow(1 / 0.3048, UnitEx_n.value);
      DecIn_n.value = DecFt_n.value * Math.pow(12, UnitEx_n.value);
      DecSx_n.value = DecFt_n.value * Math.pow(12 * 16, UnitEx_n.value);
      DecSx_n.value = DecSx_n.value;
      Dec_mm_n.value = DecMeter_n.value * Math.pow(1000, UnitEx_n.value);
      Dec_mm_n.value = Dec_mm_n.value;
      OutNumU_n.value =
        Number(parsFlat(DecMeter_n.value, 8)).toPrecision() +
        s +
        "**" +
        UnitEx_n.value;
    }
    if (s == "mm") {
      Dec_mm_n.value = Number(r);
      Dec_mm_n.value = Dec_mm_n.value;
      DecMeter_n.value = Dec_mm_n.value * Math.pow(1 / 1000, UnitEx_n.value);
      DecFt_n.value = DecMeter_n.value * Math.pow(1 / 0.3048, UnitEx_n.value);
      DecIn_n.value = DecFt_n.value * Math.pow(12, UnitEx_n.value);
      DecSx_n.value = DecFt_n.value * Math.pow(12 * 16, UnitEx_n.value);
      DecSx_n.value = DecSx_n.value;
      OutNumU_n.value =
        Number(parsFlat(Dec_mm_n.value, 8)).toPrecision() +
        s +
        "**" +
        UnitEx_n.value;
    }
    if (chk_fis_unit.value == "units") {
      s = lastUnit.value;
      switch (s) {
        case "ft":
          OutNumU_n.value =
            Number(parsFlat(DecFt_n.value, 8)).toPrecision() +
            s + "**" + UnitEx_n.value;
          break;
        case "in":
          OutNumU_n.value =
            Number(parsFlat(DecIn_n.value, 8)).toPrecision() +
            s + "**" + UnitEx_n.value;
          break;
        case "sx":
          OutNumU_n.value =
            Number(parsFlat(DecSx_n.value, 8)).toPrecision() +
            s + "**" + UnitEx_n.value;
          break;
        case "m":
          OutNumU_n.value =
            Number(parsFlat(DecMeter_n.value, 8)).toPrecision() +
            s + "**" + UnitEx_n.value;
          break;
        case "mm":
          OutNumU_n.value =
            Number(parsFlat(Dec_mm_n.value, 8)).toPrecision() +
            s + "**" + UnitEx_n.value;
          break;
        default:
          break;
      }

    }
  } else {
    if (a == "ft" || a == "in" || a == "sx" || a == "m" || a == "mm") {
    } else if (
      a.search(/^(-?\d*(\.\d*)?)(\e[+|-]?\d*(\.\d*)?)?([f-x]{1,2})/i) > -1
    ) {
      let OutUnit = "";
      UnitEx_n.value = 1;
      let k = 0;
      let n = 1;
      let y = "";
      x = x.trim();
      y = x.split(" ");
      x = y.join("");

      while (
        x.search(/^(-?\d*(\.\d*)?)(\e[+|-]?\d*(\.\d*)?)?([f-x]{1,2})/i) > -1
      ) {
        const wArr = x.match(
          /^(-?\d*(\.\d*)?)(\e[+|-]?\d*(\.\d*)?)?([f-x]{1,2})/i
        );
        let y = wArr.shift();
        y = y.trim();
        const rArr = y.match(/^(-?\d*(\.\d*)?)(\e[+|-]?\d*(\.\d*)?)?/);
        let r = rArr.shift();
        r = r.trim();
        j = Number(r);
        const sArr = y.match(/[f-x]{1,2}$/i); // w{1,2}$/i);
        s = sArr.shift();
        s = s.trim();

        if (s == "ft") {
          k = j + k;
        }
        if (s == "in") {
          k = j / 12 + k;
        }
        if (s == "sx") {
          k = j / 12 / 16 + k;
        }
        if (s == "mm") {
          k = j / 0.3048 / 1000 + k;
        }
        if (s == "m") {
          k = j / 0.3048 + k;
        }
        k = Number(k);
        DecFt_n.value = parsFlat(k, 8);
        DecMeter_n.value = parsFlat(k * 0.3048, 8);
        let z = "";
        z = r + "" + s;
        z = z.trim();
        let xx = x.replace(z, "");
        x = xx.trim();
        if (
          x.search(/^(-?\d*(\.\d*)?)(\e[+|-]?\d*(\.\d*)?)?([f-x]{1,2})/i) > -1
        ) {
          n = n + 1;
        } else {
          if (
            x.search(/^(-?\d*(\.\d*)?)(\e[+|-]?\d*(\.\d*)?)?([f-x]{1,2})/i) == -1) {
            x = "";
          }
        }
      }
      if (n == 1) {
        OutUnit = s;
        if ((s == "ft") && (chk_fis_unit.value == "fis")) { OutUnit = "fis" };
        if ((s == "mm") && (chk_fis_unit.value == "mm")) { OutUnit = "metric" };
      } else {
        OutUnit = chk_fis_unit.value;
      }
      // if (chk_fis_unit == "units" && n >1) {OutUnit="metric"}
      shuffle();
      OutNum(OutUnit);
    }
    if (a.search(/[f-x]{1,2}/i) > -1) {
    } else {
      if (a.includes(".")) {
        OutNumU_n.value = my_Convert.value;
        UnitEx_n.value = 0;
      }
      if (a.includes(".") || a.search(/[f-x]{1,2}/i) > -1 || a.includes("**")) {
      } else {
        if (a.length > 0) {
          b = a.length;
          UnitEx_n.value = 1;
          let j = 0;
          let k = 0;
          let l = 0;
          let NegS = "";
          if (a.startsWith("-")) {
            a = Math.abs(Number(a));
            a = a.toString().trim();
            NegS = "-";
            b = a.length;
          }

          if (chk_fis_unit.value == "fis") {
            switch (b) {
              case 1: //ft
                k = Number(a);
                DecFt_n.value = parsFlat(k, 8);
                DecMeter_n.value = parsFlat(0.3048 * Number(DecFt_n.value), 8);
                break;
              case 2: //ft
                k = Number(a);
                DecFt_n.value = parsFlat(k, 8);
                DecMeter_n.value = parsFlat(0.3048 * Number(DecFt_n.value), 8);
                break;
              case 3: //in sx
                k = a.slice(b - 2, b);
                l = a.slice(0, b - 2);
                k = Number(k);
                l = Number(l);
                DecFt_n.value = parsFlat(l / 12 + k / 16 / 12, 8);
                DecMeter_n.value = parsFlat(0.3048 * Number(DecFt_n.value), 8);
                break;
              case 4:
                k = a.slice(b - 2, b);
                l = a.slice(0, b - 2);
                k = Number(k);
                l = Number(l);
                DecFt_n.value = parsFlat(l / 12 + k / 16 / 12, 8);
                DecMeter_n.value = parsFlat(0.3048 * Number(DecFt_n.value), 8);
                break;
              case 5: //ft in sx
                j = a.slice(b - 2, b);
                k = a.slice(b - 4, b - 2);
                l = a.slice(0, b - 4);
                j = Number(j);
                k = Number(k);
                l = Number(l);
                DecFt_n.value = parsFlat(l + (k / 12) + (j / 16 / 12), 8);
                DecMeter_n.value = parsFlat(0.3048 * Number(DecFt_n.value), 8);
                break;
              case 6: //ft in sx
                j = a.slice(b - 2, b);
                k = a.slice(a.length - 4, a.length - 2);
                l = a.slice(0, b - 4);
                j = Number(j);
                k = Number(k);
                l = Number(l);
                DecFt_n.value = parsFlat(l + k / 12 + j / 16 / 12, 8);
                DecMeter_n.value = parsFlat(0.3048 * Number(DecFt_n.value), 8);
                break;
              default: //ft in sx
                j = a.slice(a.length - 2);
                k = a.slice(a.length - 4, a.length - 2);
                l = a.slice(0, b - 4);
                j = Number(j);
                k = Number(k);
                l = Number(l);
                DecFt_n.value = parsFlat(l + k / 12 + j / 16 / 12, 8);
                DecMeter_n.value = parsFlat(0.3048 * Number(DecFt_n.value), 8);
                break;
            }
            j = NegS + "" + DecFt_n.value;
            DecFt_n.value = j;
            j = NegS + "" + DecMeter_n.value;
            DecMeter_n.value = j;
            shuffle();
            OutUnit = chk_fis_unit.value;
            OutNum(OutUnit);
          }
          if (chk_fis_unit.value == "mm") {
            switch (b) {
              case 1:
              case 2:
              case 3: //mm
                l = Number(a);
                DecMeter_n.value = parsFlat(l / 1000, 8);
                DecFt_n.value = parsFlat(l / 1000 / 0.3048, 8);
                break;
              default: //m mm b>3
                let j = a.slice(b - 3, b);
                let k = a.slice(0, b - 3);
                j = Number(j);
                k = Number(k);
                DecMeter_n.value = parsFlat(k + j / 1000, 8);
                DecFt_n.value = parsFlat((k + j / 1000) / 0.3048, 8);
                break;
            }
            j = NegS + "" + DecFt_n.value;
            DecFt_n.value = j;
            j = NegS + "" + DecMeter_n.value;
            DecMeter_n.value = j;
            shuffle();
            OutNum("metric");
          }
          //   if (chk_fis_unit.value == "units") {
          //     x = my_display.value;
          //     if (
          //       x.search(/[f-x]{1,2}/i) == -1 &&
          //       chk_fis_unit.value == "units"
          //     ) {
          //       if (x.includes(".")) {
          //       } else {
          //         x = x + ".";
          //       }
          //       OutNumU_n.value = x;
          //     }
        }
      }
    }
  }
  //my_display.focus();
}
function shuffle() {
  DecIn_n.value = parsFlat((Number(DecFt_n.value) * 12), 8);
  DecSx_n.value = parsFlat((Number(DecFt_n.value) * 12 * 16), 8);
  DecMeter_n.value = parsFlat((Number(DecFt_n.value) * 0.3048), 8);
  Dec_mm_n.value = parsFlat((Number(DecFt_n.value) * 0.3048 * 1000), 8);
}
function OutNum(s) {
  // console.log(s);
  if (s == "fis") {
    let z = "";
    let NegS = Math.sign(Number(DecFt_n.value));
    if (NegS == 1 || NegS == 0) {
      NegS = "";
    }
    if (NegS == -1) {
      NegS = "-";
    }
    let DecOutFt = Math.abs(Number(DecFt_n.value));
    let OutFt = Math.trunc(DecOutFt);
    let DecOutIn = parsFlat(((Number(DecOutFt) - Number(OutFt)) * 12), 8);
    let OutIn = Math.trunc(DecOutIn);
    let DecOutSx = Number(parsFlat(((Number(DecOutIn) - Number(OutIn)) * 16), 8)).toFixed(2);
    let OutSx = Math.round(DecOutSx);
    OutFt = NegS + "" + OutFt;
    OutIn = NegS + "" + OutIn;
    OutSx = NegS + "" + OutSx;
    //OutSx = Math.round(Number(OutSx));
    if (OutSx == 16) {
      OutSx = "";
      OutIn = OutIn + 1;
    }
    if (OutIn == 12) {
      OutIn = "";
      OutFt = OutFt + 1;
    }
    if (OutSx == -16) {
      OutSx = "";
      OutIn = OutIn - 1;
    }
    if (OutIn == -12) {
      OutIn = "";
      OutFt = OutFt - 1;
    }
    if (OutFt == 0) {
      OutFt = "";
      z = z + "";
    } else {
      z = z + OutFt + "ft";
    }
    if (OutIn == 0) {
      OutIn = "";
      z = z + "";
    } else {
      z = z + " " + OutIn + "in";
    }
    if (OutSx == 0) {
      OutSx = "";
      z = z + "";
    } else {
      z = z + " " + OutSx + "sx";
    }
    if (z == "") {
      z = "0ft";
    }
    OutNumU_n.value = z.replace(" ","");
    //console.log(z);
  }
  if (s == "metric") {
    z = "";
    let OutM = Math.trunc(Number(DecMeter_n.value));
    let OutMm = Number(
      parsFlat(Number((DecMeter_n.value - Math.trunc(DecMeter_n.value)) * 1000), 8));
    OutMm = Math.round(Number(OutMm));
    if (OutMm == 1000) {
      OutMm = "";
      OutM = OutM + 1;
    }
    if (OutM == 0) {
      OutM = "";
      z = z + "";
    } else {
      z = z + OutM + "m";
    }
    if (OutMm == 0) {
      OutMm = "";
      z = z + "";
    } else {
      z = z + " " + OutMm + "mm";
    }
    if (z == "") {
      z = "0m";
    }
    OutNumU_n.value = z;
  }
  if (chk_fis_unit.value == "units") { s = lastUnit.value }
  if (s == "ft") {
    OutNumU_n.value = Number(parsFlat(DecFt_n.value, 8)) + s;
  }
  if (s == "in") {
    OutNumU_n.value = Number(parsFlat(DecIn_n.value, 8)) + s;
  }
  if (s == "sx") {
    OutNumU_n.value = Number(parsFlat(DecSx_n.value, 8)) + s;
  }
  if (s == "m") {
    OutNumU_n.value = Number(parsFlat(DecMeter_n.value, 8)) + s;
  }
  if (s == "mm") {
    OutNumU_n.value = Number(parsFlat(Dec_mm_n.value, 8)) + s;
  }
}
document.addEventListener("DOMContentLoaded",(event) => {
  if(localStorage.getItem("rminvtableArray")) {
    let rminvtableArray = JSON.parse(localStorage.getItem("rminvtableArray"));
    tableArr=rminvtableArray;
     localStorage.removeItem("rminvtableArray");
  }else {
  let text = csvText.innerText;
  text=text.trim();
  let lines = text.split("\n");
  let tableData = [];
  for (let line of lines) {    
    line=line.trim();
    let row = line.split(",");
    tableData.push(row);
  };
  tableArr = tableData;
  };   
  localStorage.setItem("rminvtableArray", JSON.stringify(tableArr));
  //alert("tableArray");
  csv2HtmlTable();
});


chk_units();
pickLists();
tableClicks();

      //  // mm calcs to fill
