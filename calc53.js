// namespaced elements
const my_convert = document.getElementById("my_convert");
const my_display = document.getElementById("my_display");
const my_list = document.getElementById("MyNumberList");
const My_ol = document.getElementById("MyNumberList");
const last_x = document.getElementById("last_x");
const DecFt_n = document.getElementById("DecFt");
const DecIn_n = document.getElementById("DecIn");
const DecSx_n = document.getElementById("DecSx");
const DecMeter_n = document.getElementById("DecMeter");
const Dec_mm_n = document.getElementById("Dec_mm");
const UnitEx_n = document.getElementById("UnitExp_");
const OutNumU_n = document.getElementById("OutNumU");
const invFlag = document.getElementById("inv");
const last_Unit = document.getElementById("lastUnit");
const btn = document.getElementById("buttons");
const Stack = document.getElementById("stack");
 const fisData=""; 
 const mmData="";
// hover end overwrite
btn.addEventListener("touchend", (event) =>{
  const hovBtn=document.getElementById(event.target.id);
  hovBtn.style.backgroundColor = "silver";
  hovBtn.style.borderColor = "black";
// console.log(event.target.id);
});
// list click selection
  Stack.addEventListener("click", (event) => {
    const ListSel = document.getElementById(event.target.id);
   my_display.value = ListSel.innerText;
    my_display.focus();
    fis_convert();
    convert_entry();
  });

//  get keyboard events
// my_display.addEventListener("keydown", (event) => {
//  event.preventDefault();
    //alert(event.key); 
//  add_to_display(event.key);
// });
 my_convert.addEventListener("input", (event) => {
  event.preventDefault();
  fis_convert();
  convert_entry();
  my_convert.focus();
 });

// fis  data  entry  non-unit units chk (display units)
function chk_units() {
  const x = document.getElementsByName("fis");
  x.forEach(chk_fis_unit);
  my_display.focus();
}
function chk_fis_unit(element) {
  if (element.checked) chk_fis_unit.value = element.id;
}
chk_units();
// add_to_display
function add_to_display(data) {
  let a = my_display.value;
  if (a.length == 0){a=0};
  let n = 1;
  let w = my_display.value.trim();
  //let z = document.createElement("li");
  let u = w.split(" ");
  w = u.join("");
  w = w.trim();
  my_display.value = w;
  a = w;
  let x = w;

  // trap adding digits/units to end of /\*\*\-?d+$/ string
  // if btn value is number,unit,decimal point
  if (
    data == "1" ||
    data == "2" ||
    data == "3" ||
    data == "4" ||
    data == "5" ||
    data == "6" ||
    data == "7" ||
    data == "8" ||
    data == "9" ||
    data == "0" ||
    data == "."
  ) {
    my_display.value = a + data;
  }
  //filter keyboard keys
  if (data == "f") {
    data = "ft";
  }
  if (data == "i") {
    data = "in";
  }
  if (data == "s") {
    data = "sx";
  }
  if (data == "m") {
    data = "m";
  }
  if (data == "Backspace") {
    data = "c";
  }
  if (data == "ft" || data == "in" || data == "sx" || data == "m" || data == "mm"){
    last_Unit.value = data;
  }
  // validate input units--

  if (data == "ft" || data == "in" || data == "sx" || data == "m") {
    if (a.search(/mm/) == -1 && a.endsWith("m") && data == "m") {
      a = my_display.value;
      my_display.value = a + "m";
      a = my_display.value;
    } else if (
      a.endsWith("ft") ||
      a.endsWith("in") ||
      a.endsWith("sx") ||
      a.endsWith("m") ||
      a.includes("**")
    ) {
    } else {
      a = my_display.value;
      my_display.value = a + data;
    }
  }
  if (data == "Enter") {
    //display_unit conversions
    if (my_display.value == "ft") {
      if (My_ol.hasChildNodes()) {
        w = My_ol.lastElementChild.innerText;
        if (w.length > 0) {
          my_display.value = w;
          last_x.value = w;
          fis_convert();
          convert_entry();
          let z = "";
          if (w.includes("**")) {
            z = "ft**" + UnitEx_n.value;
          } else {
            z = "ft";
          }
          my_display.value = DecFt_n.value + z;
          My_ol.removeChild(My_ol.lastElementChild);
        }
      }
    }
    if (my_display.value == "in") {
      if (My_ol.hasChildNodes()) {
        w = My_ol.lastElementChild.innerText;
        if (w.length > 0) {
          my_display.value = w;
          last_x.value = w;
          fis_convert();
          convert_entry();
          let z = "";
          if (w.includes("**")) {
            z = "in**" + UnitEx_n.value;
          } else {
            z = "in";
          }
          my_display.value = DecIn_n.value + z;
          My_ol.removeChild(My_ol.lastElementChild);
        }
      }
    }
    if (my_display.value == "sx") {
      if (My_ol.hasChildNodes()) {
        w = My_ol.lastElementChild.innerText;
        if (w.length > 0) {
          my_display.value = w;
          last_x.value = w;
          fis_convert();
          convert_entry();
          let z = "";
          if (w.includes("**")) {
            z = "sx**" + UnitEx_n.value;
          } else {
            z = "sx";
          }
          my_display.value = DecSx_n.value + z;
          My_ol.removeChild(My_ol.lastElementChild);
        }
      }
    }
    if (my_display.value == "mm") {
      if (My_ol.hasChildNodes()) {
        w = My_ol.lastElementChild.innerText;
        if (w.length > 0) {
          my_display.value = w;
          last_x.value = w;
          fis_convert();
          convert_entry();
          let z = "";
          if (w.includes("**")) {
            z = "mm**" + UnitEx_n.value;
          } else {
            z = "mm";
          }
          my_display.value = Dec_mm_n.value + z;
          My_ol.removeChild(My_ol.lastElementChild);
        }
      }
    } else {
      if (my_display.value == "m") {
        if (My_ol.hasChildNodes()) {
          w = My_ol.lastElementChild.innerText;
          if (w.length > 0) {
            my_display.value = w;
            last_x.value = w;
            fis_convert();
            convert_entry();
            let z = "";
            if (w.includes("**")) {
              z = "m**" + UnitEx_n.value;
            } else {
              z = "m";
            }
            my_display.value = DecMeter_n.value + z;
            My_ol.removeChild(My_ol.lastElementChild);
          }
        }
      }
    }
    fis_convert();
    convert_entry();
    if (OutNumU_n.value == "") {
    } else {
      w = my_display.value.trim();
      last_x.value = w.trim();
      fis_convert();
      convert_entry();

      //move to stack
      z = document.createElement("li");
      z.innerText = OutNumU_n.value;
      z.id = "LItem" + My_ol.getElementsByTagName("li").length;  
      My_ol.appendChild(z);
      my_display.value = ""; //update display
      my_convert.value = 0; //reset  converter
    }
  }
  if (data == "c" || data == "C" || data == "Backspace") {
    //add break for 0ft0in0sx
    if (w.includes("**")) {
      let v = w.indexOf("**");
      u = w.slice(0, v);
      w = u.trim();
      my_display.value = w;
    }
    if (w.length == 0 || w.value == "") {
      if (My_ol.hasChildNodes()) {
        w = My_ol.lastElementChild.innerText;
        u = w.split(" ");
        w = u.join("");
        w = w.trim();
        my_display.value = w;
        my_convert.value = w;
        My_ol.removeChild(My_ol.lastElementChild);
      }
    } else {
      w = my_display.value;
      if (w.length > 0) {
        n = 1;
        if (w.search(/[f-x]{1,2}/i) > -1) {
          const wArr = w.match(/-?\d*(\.\d*)?[f-x]{1,2}$/i);
          if (wArr != null) {
            let y = wArr.shift();
            y = y.trim();
            n = y.length;
          }
        }
        // delete ft,etc. as unit
        x = w.slice(0, w.length - n);
        my_display.value = x.trim();
        fis_convert();
        convert_entry();
      }
      if ((my_display.length = 0 || my_display.value == "")) {
      }
    }
  }
  //delete
  if (data == "CE") {
    if (w.length > 0) {
      my_display.value = "";
      //  w = my_display.value.trim();
    }
    if (w.length == 0 || w.value == "") {
      if (My_ol.hasChildNodes()) {
        w = My_ol.lastElementChild.innerText;
        my_display.value = w;
        My_ol.removeChild(My_ol.lastElementChild);
      }
    }
  }
  // return lastX value to display
  if (data == "LastX" || data == "L" || data == "l") {
    my_display.value = last_x.value;
  }
  //operators
  oops2: if (data == "+") {
    x = OutNumU_n.value;
    if (x.length == 0) {x="0"};
    if (My_ol.hasChildNodes()) {
      w = My_ol.lastElementChild.innerText;

      if (w.includes("**") || x.includes("**")) {
        if (w.includes("**") && x.includes("**")) {
          //verify same exponent
          const xArr = x.match(/-?\d*(\.\d*)?$/i);
          const wArr = w.match(/-?\d*(\.\d*)?$/i);

          if (wArr.length && wArr && xArr.length && xArr) {
            let y = wArr.shift();
            y = Number(y.trim()); // exponent value
            let z = xArr.shift();
            z = Number(z.trim()); // exponent value
            if (y == z) {
              let k = w.replace("**" + y, "");
              k = k.trim();
              const rArr = k.match(/^(-?\d*(\.\d*)?)(\e[+|-]?\d*(\.\d*)?)?/); // operand value
              let r = Number(rArr.shift());
              const sArr = k.match(/[f-x]{1,2}$/i); // operand unit
              s = sArr.shift();
              s = s.trim();
              if (s == "ft") {
                x = Number(DecFt_n.value);
              }
              if (s == "in") {
                x = Number(DecIn_n.value);
              }
              if (s == "sx") {
                x = Number(DecSx_n.value);
              }
              if (s == "m") {
                x = Number(DecMeter_n.value);
              }
              if (s == "mm") {
                x = Number(Dec_mm_n.value);
              }
              x = x + r;
              x = Number(parsFlat(x, 8)).toPrecision();
              x = x + s + "**" + y;
              my_display.value = x;
              fis_convert();
              convert_entry();
              My_ol.removeChild(My_ol.lastElementChild);
            } else {
              alert("Needs matching Units");
              data = "";
              break oops2;
            }
          }
        } else {
          alert("Needs matching Units");
          data = "";
          break oops2;
        }
      } else {
        //no exponents

        if (x.search(/([f-x]{1,2})/i) > -1 && w.search(/([f-x]{1,2})/i) > -1) {
          //both have units
          x = OutNumU_n.value;
          if (My_ol.hasChildNodes()) {
            w = My_ol.lastElementChild.innerText;
            if (w == "" || w.length <= 0) {
              w = "0";
            }
            w = w + "" + x;
            u = w.split(" ");
            w = u.join("");
            w = w.trim();
            my_display.value = w;
            My_ol.removeChild(My_ol.lastElementChild);
            fis_convert();
            convert_entry();
            my_display.value = OutNumU_n.value;
          }
        }
      }
      if (x.search(/([f-x]{1,2})/i) > -1 && w.search(/([f-x]{1,2})/i) == -1) {
        alert(" must be same units");
      } //one has  units
      if (x.search(/([f-x]{1,2})/i) == -1 && w.search(/([f-x]{1,2})/i) > -1) {
        alert(" must be same units");
      } //other has units

      if (x.search(/([f-x]{1,2})/i) == -1 && w.search(/([f-x]{1,2})/i) == -1) {
        // neither have units
        last_x.value = x.trim();
        if (x.search(/[f-x]{1,2}/i) == -1 && chk_fis_unit.value == "units") {
          if (x.includes(".")) {
          } else {
            x = x + ".";
          }
        }
        fis_convert();
        convert_entry();
        z = Number(x) + Number(w);
        z = Number(parsFlat(z, 8)).toPrecision();
        if (z.includes(".")) {
        } else {
          z = z + ".";
        }
        My_ol.removeChild(My_ol.lastElementChild);
        my_display.value = z;
        fis_convert();
        convert_entry();
      }
      z = document.createElement("li");
      z.innerText = OutNumU_n.value;
      z.id = "LItem" + My_ol.getElementsByTagName("li").length;  
      My_ol.appendChild(z);
      my_display.value = ""; //update display
      my_convert.value = 0; //reset  converter
    }
  }
  oops3: 
  if (data == "-") {
    x = OutNumU_n.value;
    if (x.length == 0){x="0"};
    last_x.value = x.trim();

    if (My_ol.hasChildNodes()) {
      w = My_ol.lastElementChild.innerText;

      if (w.includes("**") || x.includes("**")) {
        if (w.includes("**") && x.includes("**")) {
          //verify same exponent
          const xArr = x.match(/-?\d*(\.\d*)?$/i);
          const wArr = w.match(/-?\d*(\.\d*)?$/i);

          if (wArr.length && wArr && xArr.length && xArr) {
            let y = wArr.shift();
            y = Number(y.trim()); // exponent value
            let z = xArr.shift();
            z = Number(z.trim()); // exponent value
            if (y == z) {
              let k = w.replace("**" + y, "");
              k = k.trim();
              const rArr = k.match(/^(-?\d*(\.\d*)?)(\e[+|-]?\d*(\.\d*)?)?/); // operand value
              let r = Number(rArr.shift());
              const sArr = k.match(/[f-x]{1,2}$/i); // operand unit
              s = sArr.shift();
              s = s.trim();
              if (s == "ft") {
                l = Number(DecFt_n.value);
              }
              if (s == "in") {
                l = Number(DecIn_n.value);
              }
              if (s == "sx") {
                l = Number(DecSx_n.value);
              }
              if (s == "m") {
                l = Number(DecMeter_n.value);
              }
              if (s == "mm") {
                l = Number(Dec_mm_n.value);
              }
              l = r - l;
              l = parsFlat(l, 8);
              l = Number(l).toPrecision();
              l = l + s + "**" + y;
              my_display.value = l;
              fis_convert();
              convert_entry();
              My_ol.removeChild(My_ol.lastElementChild);
            } else {
              alert("Needs matching Units");
              data = "";
              break oops3;
            }
          }
        } else {
          alert("Needs matching Units");
          data = "";
          break oops3;
        }
      } else {
        if (x.search(/([f-x]{1,2})/i) > -1 && w.search(/([f-x]{1,2})/i) > -1) 
        {
          //both have units
          n = 1;
          z = "";
         l=DecFt_n.value;
         my_display.value = My_ol.lastElementChild.innerText
         My_ol.removeChild(My_ol.lastElementChild);
         fis_convert();
         convert_entry();
         k=DecFt_n.value;
         j=k-l;
         j=parsFlat(Number(j),8);
         my_display.value = j + "ft";
         fis_convert();
         convert_entry();
        }
        if (x.search(/([f-x]{1,2})/i) > -1 && w.search(/([f-x]{1,2})/i) == -1) {
          alert(" must be same units");
        } //one has  units
        if (x.search(/([f-x]{1,2})/i) == -1 && w.search(/([f-x]{1,2})/i) > -1) {
          alert(" must be same units");
        } //other has units

        if (
          x.search(/([f-x]{1,2})/i) == -1 &&
          w.search(/([f-x]{1,2})/i) == -1
        ) {
          //simple math add, neither have units

          z = Number(w) - Number(x);
          z = parsFlat(Number(z), 8);
          if (z.toString().includes(".")) {
          } else {
            z = z + ".";
          }
          My_ol.removeChild(My_ol.lastElementChild);
          my_display.value = z;
          fis_convert();
          convert_entry();
        }
      }
      z = document.createElement("li");
      z.innerText = OutNumU_n.value;
      z.id = "LItem" + My_ol.getElementsByTagName("li").length;  
      My_ol.appendChild(z);
      my_display.value = ""; //update display
      my_convert.value = 0; //reset  converter
    }
  }
  if (data == "x**2") {
    let j = 0;
    let k = 0;
    let l = 0;
    let q = 0;
    let r = 0;
    let s = 0;
    let z = 0;

    x = OutNumU_n.value.trim();
    if (x.length==0) {x="0"};
    if (x.search(/([f-x]{1,2})/i) > -1) {
      //both have units
      j = DecFt_n.value.trim();
      q = UnitEx_n.value.trim();
      j = Number(j);
      q = Number(q);
      l = j * j;
      l = Number(parsFlat(l, 8)).toPrecision();
      if (l.toString().includes(".")) {
      } else {
        l = l + ".";
      }
      s = q + q;
      s = Number(s);
      s = s.toPrecision();
      if (s == "" || s == 0 || s == "0" || s == "0") {
        my_display.value = l;
      }
      if (s == "1" || s == 1 || s == "1") {
        my_display.value = l + "ft";
      }
      if (s != 0 && s != 1) {
        my_display.value = l + "ft" + "**" + s;
      }

      fis_convert();
      convert_entry();
    }

    if (x.search(/([f-x]{1,2})/i) == -1) {
      // neither have units
      l = Number(x) * Number(x);
      l = parsFlat(Number(l), 8).toPrecision();
      if (l.toString().includes(".")) {
      } else {
        l = l + ".";
      }
      my_display.value = l;
      fis_convert();
      convert_entry();
    }
    if (chk_fis_unit.value == "fis" && x.search(/([f-x]{1,2})/i) > -1) {
      l = Number(parsFlat(l, 8)).toPrecision();
      if (l.toString().includes(".")) {
      } else {
        l = l + ".";
      }
      s = UnitEx_n.value;
      s = Number(s);
      s = s.toPrecision();
      if (s == "" || s == 0 || s == "0" || s == "0") {
        my_display.value = l;
      } else {
        if (DecFt_n.value > 1) {
          l = DecFt_n.value;
          l = parsFlat(l, 8);
          l = Number(l).toPrecision();
          z = "ft";
        } else if (DecIn_n.value > 1) {
          l = DecIn_n.value;
          l = parsFlat(l, 8);
          l = Number(l).toPrecision();
          z = "in";
        } else if (DecSx_n.value > 1) {
          l = DecSx_n.value;
          l = parsFlat(l, 8);
          l = Number(l).toPrecision();
          z = "sx";
        } else {
          l = DecFt_n.value;
          l = parsFlat(l, 8);
          l = Number(l).toPrecision();
          z = "ft";
        }
      }
      if (s == "1" || s == 1 || s == "1") {
        my_display.value = l + z;
      }
      if (s != 0 && s != 1) {
        my_display.value = l + z + "**" + s;
      }
    } else if (chk_fis_unit.value == "mm" && x.search(/([f-x]{1,2})/i) > -1) {
      l = Number(parsFlat(l, 8)).toPrecision();
      if (l.toString().includes(".")) {
      } else {
        l = l + ".";
      }
      s = UnitEx_n.value;
      s = Number(s);
      s = s.toPrecision();
      if (s == "" || s == 0 || s == "0" || s == "0") {
        my_display.value = l;
      } else {
        if (DecMeter_n.value > 1) {
          l = DecMeter_n.value;
          l = parsFlat(l, 8);
          l = Number(l).toPrecision();
          z = "m";
        } else {
          l = Dec_mm_n.value;
          l = parsFlat(l, 8);
          l = Number(l).toPrecision();
          z = "mm";
        }
      }
      if (s == "1" || s == 1 || s == "1") {
        my_display.value = l + z;
      }
      if (s != 0 && s != 1) {
        my_display.value = l + z + "**" + s;
      }
    }
    fis_convert();
    convert_entry();
    z = document.createElement("li");
    z.innerText = OutNumU_n.value;
    z.id = "LItem" + My_ol.getElementsByTagName("li").length;  
    My_ol.appendChild(z);
    my_display.value = ""; //update display
    my_convert.value = 0; //reset  converter
  }

  if (data == "*") {
    let j = 0;
    let k = 0;
    let l = 0;
    let q = 0;
    let r = 0;
    let s = 0;
    let z = 0;

    x = OutNumU_n.value;
    if (x.length==0){x="0"};
    if (My_ol.hasChildNodes()) {
      w = My_ol.lastElementChild.innerText;
      x = OutNumU_n.value.trim();
      w = w.trim();

      if (x.search(/([f-x]{1,2})/i) > -1 && w.search(/([f-x]{1,2})/i) > -1) {
        //both have units
        j = DecFt_n.value.trim();
        q = UnitEx_n.value.trim();
        my_display.value = w.trim();
        fis_convert();
        convert_entry();
        k = DecFt_n.value.trim();
        r = UnitEx_n.value.trim();
        j = Number(j);
        k = Number(k);
        q = Number(q);
        r = Number(r);
        l = j * k;
        l = Number(parsFlat(l, 8)).toPrecision();
        if (l.toString().includes(".")) {
        } else {
          l = l + ".";
        }
        s = q + r;
        s = Number(s);
        s = s.toPrecision();
        if (s == "" || s == 0 || s == "0" || s == "0") {
          my_display.value = l;
        }
        if (s == "1" || s == 1 || s == "1") {
          my_display.value = l + "ft";
        }
        if (s != 0 && s != 1) {
          my_display.value = l + "ft" + "**" + s;
        }

        fis_convert();
        convert_entry();
      }

      if (x.search(/([f-x]{1,2})/i) > -1 && w.search(/([f-x]{1,2})/i) == -1) {
        //x has  units
        j = Dec_mm_n.value.trim();
        q = UnitEx_n.value.trim();
        my_display.value = Number(w.trim());
        fis_convert();
        convert_entry();
        j = Number(j);
        k = Number(w);
        q = Number(q);
        r = 0;
        l = j * k;
        l = Number(parsFlat(l, 8)).toPrecision();
        if (l.toString().includes(".")) {
        } else {
          l = l + ".";
        }
        s = q + r;
        s = Number(s);
        s = s.toPrecision();
        if (s == "" || s == 0 || s == "0" || s == "0") {
          my_display.value = l;
        }
        if (s == "1" || s == 1 || s == "1") {
          my_display.value = l + "mm";
        }
        if (s != 0 && s != 1) {
          my_display.value = l + "mm" + "**" + s;
        }
        fis_convert();
        convert_entry();
      }
      if (x.search(/([f-x]{1,2})/i) == -1 && w.search(/([f-x]{1,2})/i) > -1) {
        // w has units
        my_display.value = w.trim();
        fis_convert();
        convert_entry();
        k = Dec_mm_n.value.trim();
        r = UnitEx_n.value.trim();
        j = Number(x);
        k = Number(k);
        q = 0;
        r = Number(r);
        l = j * k;
        l = Number(parsFlat(l, 8)).toPrecision();
        if (l.toString().includes(".")) {
        } else {
          l = l + ".";
        }
        s = q + r;
        UnitEx_n.value = s;
        s = Number(s);
        s = s.toPrecision();
        if (s == "" || s == 0 || s == "0" || s == "0") {
          my_display.value = l;
        }
        if (s == "1" || s == 1 || s == "1") {
          my_display.value = l + "mm";
        }
        if (s != 0 && s != 1) {
          my_display.value = l + "mm" + "**" + s;
        }
        fis_convert();
        convert_entry();
      }
      if (x.search(/([f-x]{1,2})/i) == -1 && w.search(/([f-x]{1,2})/i) == -1) {
        // neither have units
        l = Number(x) * Number(w);
        l = Number(parsFlat(l, 8)).toPrecision();
        if (l.toString().includes(".")) {
        } else {
          l = l + ".";
        }
        my_display.value = l;
        fis_convert();
        convert_entry();
      }
      if (
        chk_fis_unit.value == "fis" &&
        (x.search(/([f-x]{1,2})/i) > -1 || w.search(/([f-x]{1,2})/i) > -1)
      ) {
        l = Number(parsFlat(l, 8)).toPrecision();
        if (l.toString().includes(".")) {
        } else {
          l = l + ".";
        }
        s = UnitEx_n.value;
        s = Number(s);
        s = s.toPrecision();
        if (s == "" || s == 0 || s == "0" || s == "0") {
          my_display.value = l;
        } else {
          if (DecFt_n.value > 1) {
            l = DecFt_n.value;
            l = parsFlat(l, 8);
            l = Number(l).toPrecision();
            z = "ft";
          } else if (DecIn_n.value > 1) {
            l = DecIn_n.value;
            l = parsFlat(l, 8);
            l = Number(l).toPrecision();
            z = "in";
          } else if (DecSx_n.value > 1) {
            l = DecSx_n.value;
            l = parsFlat(l, 8);
            l = Number(l).toPrecision();
            z = "sx";
          } else {
            l = DecFt_n.value;
            l = parsFlat(l, 8);
            l = Number(l).toPrecision();
            z = "ft";
          }
        }
        if (s == "1" || s == 1 || s == "1") {
          my_display.value = l + z;
        }
        if (s != 0 && s != 1) {
          my_display.value = l + z + "**" + s;
        }
      } else if (
        chk_fis_unit.value == "mm" &&
        (x.search(/([f-x]{1,2})/i) > -1 || w.search(/([f-x]{1,2})/i) > -1)
      ) {
        l = Number(parsFlat(l, 8)).toPrecision();
        if (l.toString().includes(".")) {
        } else {
          l = l + ".";
        }
        s = UnitEx_n.value;
        s = Number(s);
        s = s.toPrecision();
        if (s == "" || s == 0 || s == "0" || s == "0") {
          my_display.value = l;
        } else {
          if (DecMeter_n.value > 1) {
            l = DecMeter_n.value;
            l = parsFlat(l, 8);
            l = Number(l).toPrecision();
            z = "m";
          } else {
            l = Dec_mm_n.value;
            l = parsFlat(l, 8);
            l = Number(l).toPrecision();
            z = "mm";
          }
        }
        if (s == "1" || s == 1 || s == "1") {
          my_display.value = l + z;
        }
        if (s != 0 && s != 1) {
          my_display.value = l + z + "**" + s;
        }
      }
      fis_convert();
      convert_entry();
      My_ol.removeChild(My_ol.lastElementChild);
      z = document.createElement("li");
      z.innerText = OutNumU_n.value;
      z.id = "LItem" + My_ol.getElementsByTagName("li").length;  
      My_ol.appendChild(z);
      my_display.value = ""; //update display
      my_convert.value = 0; //reset  converter
    }
  }
  if (data == "/") {
    let j = 0;
    let k = 0;
    let l = 0;
    let q = 0;
    let r = 0;
    let s = 0;
    let z = "";

    x = OutNumU_n.value.trim();
    if (x.length == 0){x="0"};

    if (My_ol.hasChildNodes()) {
      w = My_ol.lastElementChild.innerText;
      w = w.trim();

      if (x.search(/([f-x]{1,2})/i) > -1 && w.search(/([f-x]{1,2})/i) > -1) {
        //both have units
        z = w.match(/([f-x]{1,2})/i);
        z = z.shift();
        j = DecFt_n.value.trim();
        q = UnitEx_n.value.trim();
        my_display.value = w.trim();
        fis_convert();
        convert_entry();
        k = DecFt_n.value.trim();
        r = UnitEx_n.value.trim();
        j = Number(j);
        k = Number(k);
        q = Number(q);
        r = Number(r);
        l = parsFlat(k / j, 8);
        if (l.toString().includes(".")) {
        } else {
          l = l + ".";
        }
        s = r - q;
        s = s.toPrecision();
        if (s == "" || s == 0 || s == "0" || s == "0") {
          my_display.value = l;
        }
        if (s == "1" || s == 1 || s == "1") {
          my_display.value = l + "ft";
        }
        if (s != 0 && s != 1) {
          my_display.value = l + "ft" + "**" + s;
        }
        fis_convert();
        convert_entry();
      }
      if (x.search(/([f-x]{1,2})/i) > -1 && w.search(/([f-x]{1,2})/i) == -1) {
        //x has  units
        z = x.match(/([f-x]{1,2})/i);
        z = z.shift();
        z = z.trim();
        j = DecFt_n.value.trim();
        q = UnitEx_n.value.trim();
        my_display.value = Number(w);
        fis_convert();
        convert_entry();
        j = Number(j);
        k = Number(w);
        q = Number(q);
        r = 0;
        l = parsFlat(k / j, 8);
        if (l.toString().includes(".")) {
        } else {
          l = l + ".";
        }
        s = r - q;
        s = s.toPrecision();
        if (s == "" || s == 0 || s == "0" || s == "0") {
          my_display.value = l;
        }
        if (s == "1" || s == 1 || s == "1") {
          my_display.value = l + "ft";
        }
        if (s != 0 && s != 1) {
          my_display.value = l + "ft" + "**" + s;
        }
        fis_convert();
        convert_entry();
      }
      if (x.search(/([f-x]{1,2})/i) == -1 && w.search(/([f-x]{1,2})/i) > -1) {
        // w has units
        z = w.match(/([f-x]{1,2})/i);
        z = z.shift();
        z = z.trim();
        j = Number(x);
        my_display.value = w.trim();
        fis_convert();
        convert_entry();
        k = DecFt_n.value.trim();
        r = UnitEx_n.value.trim();
        k = Number(k);
        q = 0;
        r = Number(r);
        s = r - q;
        UnitEx_n.value = s;
        l = parsFlat(k / j, 8);
        if (l.toString().includes(".")) {
        } else {
          l = l + ".";
        }
        s = Number(s);
        s = s.toPrecision();
        if (s == "" || s == 0 || s == "0" || s == "0") {
          my_display.value = l;
        }
        if (s == "1" || s == 1 || s == "1") {
          my_display.value = l + "ft";
        }
        if (s != 0 && s != 1) {
          my_display.value = l + "ft" + "**" + s;
        }
        fis_convert();
        convert_entry();
      }
      if (x.search(/([f-x]{1,2})/i) == -1 && w.search(/([f-x]{1,2})/i) == -1) {
        // neither have units
        l = Number(w) / Number(x);
        l = parsFlat(l, 8);
        if (l.toString().includes(".")) {
        } else {
          l = l + ".";
        }
        my_display.value = l;
        fis_convert();
        convert_entry();
      }
      if (
        chk_fis_unit.value == "fis" &&
        (x.search(/([f-x]{1,2})/i) > -1 || w.search(/([f-x]{1,2})/i) > -1)
      ) {
        l = Number(parsFlat(l, 8)).toPrecision();
        if (l.toString().includes(".")) {
        } else {
          l = l + ".";
        }
        s = UnitEx_n.value;
        //s=s.toPrecision() ;
        if (s == "" || s == 0 || s == "0" || s == "0") {
          my_display.value = l;
        } else if (DecFt_n.value > 1) {
          l = DecFt_n.value;
          l = parsFlat(l, 8);
          l = Number(l).toPrecision();
          z = "ft";
        } else if (DecIn_n.value > 1) {
          l = DecIn_n.value;
          l = parsFlat(l, 8);
          l = Number(l).toPrecision();
          z = "in";
        } else if (DecSx_n.value > 1) {
          l = DecSx_n.value;
          l = parsFlat(l, 8);
          l = Number(l).toPrecision();
          z = "sx";
        } else {
          l = Number(DecFt_n.value);
          if (l <= 0.1) {
            l = Number(l).toExponential(8);
          }
          l = parsFlat(l, 8);
          l = Number(l).toPrecision();
          z = "ft";
        }
        if (s == "1" || s == 1 || s == "1") {
          my_display.value = l + z;
        }
        if (s != 0 && s != 1) {
          my_display.value = l + z + "**" + s;
        }
      } else if (
        chk_fis_unit.value == "mm" &&
        (x.search(/([f-x]{1,2})/i) > -1 || w.search(/([f-x]{1,2})/i) > -1)
      ) {
        if (l.toString().includes(".")) {
        } else {
          l = l + ".";
        }
        l = Number(parsFlat(l, 8)).toPrecision();
        s = UnitEx_n.value;
        //s=s.toPrecision() ;
        if (s == "" || s == 0 || s == "0" || s == "0") {
          my_display.value = l;
        } else {
          if (Number(DecMeter_n.value) > 1) {
            l = parseFlat(DecMeter_n.value, 8);
            l = Number(l).toPrecision();
            z = "m";
          } else {
            l = parsFlat(Dec_mm_n.value, 8);
            l = Number(l).toPrecision();
            z = "mm";
          }
          if (s == "1" || s == 1 || s == "1") {
            my_display.value = l + z;
          }
          if (s != 0 && s != 1) {
            my_display.value = l + z + "**" + s;
          }
        }
      }

      fis_convert();
      convert_entry();
      My_ol.removeChild(My_ol.lastElementChild);
      z = document.createElement("li");
      z.innerText = OutNumU_n.value;
      z.id = "LItem" + My_ol.getElementsByTagName("li").length;  
      My_ol.appendChild(z);
      my_display.value = ""; //update display
      my_convert.value = 0; //reset  converter
    }
  }
  //single  operand
  if (data == "+/-" || data == ",") {
    w = my_display.value.trim();
    if (w.includes("**")) {
      w.replace("**", "**-");
      my_display.value = w;
    } else {
      if (w.search(/[f-x]{1,2}/i) > -1) {
        x = "";
        while (
          w.search(/^(-?\d*(\.\d*)?)(\e[+|-]?\d*(\.\d*)?)?([f-x]{1,2})/i) > -1
        ) {
          const wArr = w.match(
            /^(-?\d*(\.\d*)?)(\e[+|-]?\d*(\.\d*)?)?([f-x]{1,2})/i
          );
          let y = wArr.shift();
          y = y.trim();
          let xx = w.replace(y, "");
          w = xx.trim();
          y = y.toString();
          if (y.startsWith("-")) {
            y = y.replace("-", "");
          } else {
            y = "-" + y;
          }
          if (
            w.search(/^(-?\d*(\.\d*)?)(\e[+|-]?\d*(\.\d*)?)?([f-x]{1,2})/i) > -1
          ) {
          } else {
            w = "";
          }
          x = x + "" + y;
        }
        my_display.value = x.trim();
        fis_convert();
        convert_entry();
      } else {
        let y = my_display.value.trim();
        if (y.startsWith("-")) {
          y = y.replace("-", "");
        } else {
          y = "-" + y;
        }
        my_display.value = y;
        fis_convert();
        convert_entry();
      }
    }
  }
  oops: if (data == "y**x" || data == "y") {
    x = OutNumU_n.value;
    if (x.includes(".")) {
    } else {
      x = x + ".";
    }
    let y = 0;
    UnitEx_n.value = Number(x);

    if (My_ol.hasChildNodes()) {
      w = My_ol.lastElementChild.innerText;
    } else {
      w = "0";
    }
    if (x.includes("**")) {
      alert("integer with decimal point only");
      data = "";
      break oops;
    }
    if (w.includes("**")) {
      alert("single unit only");
      data = "";
      break oops;
    }
    if (x.search(/[f-x]{1,2}/i) > -1) {
      alert("integer with decimal point only");
      data = "";
      break oops;
    }
    if (w.search(/[f-x]{1,2}/i) > -1) {
      if (My_ol.hasChildNodes()) {
        w = My_ol.lastElementChild.innerText;
        if (w == "" || w.length <= 0) {
          w = "0";
        }
        u = w.split(" ");
        w = u.join("");
        w = w.trim();
        my_display.value = w;
        fis_convert();
        convert_entry();
        My_ol.removeChild(My_ol.lastElementChild);
        const wArr = w.match(
          /^(-?\d*(\.\d*)?)(\e[+|-]?\d*(\.\d*)?)?([f-x]{1,2})/i
        );
        let y = wArr.shift();
        y = y.trim();
        const sArr = y.match(/[f-x]{1,2}$/i);
        s = sArr.shift();
        s = s.trim();

        if (s == "ft") {
          y = Number(DecFt_n.value);
        }
        if (s == "in") {
          y = Number(DecIn_n.value);
        }
        if (s == "sx") {
          y = Number(DecSx_n.value);
        }
        if (s == "m") {
          y = Number(DecMeter_n.value);
        }
        if (s == "mm") {
          y = Number(Dec_mm_n.value);
        }
        y = y;
        my_display.value = y + s + "**" + x;
        OutNumU_n.value = my_display.value;
        fis_convert();
        convert_entry();
      }
    }
    if (w.search(/[f-x]{1,2}/i) == -1) {
      let y = Math.pow(Number(w), Number(x));
      y = parsFlat(y, 8);
      y = Number(y).toPrecision();
      if (y.includes(".")) {
      } else {
        y = y + ".";
      }
      my_display.value = y;
      if (My_ol.hasChildNodes()) {
        My_ol.removeChild(My_ol.lastElementChild);
      }
    }
  }
  oops4: if (data == "1/x") {
    x = OutNumU_n.value;
    if(x.length==0){x="0"};
    if (x == "" || x == 0) {
      data = "";
      break oops4;
    }
    s = Number(UnitEx_n.value);
    if (Math.sign(s) >= 0) {
      s = 0 - s;
    } else {
      s = Math.abs(s);
    }

    if (x.search(/[f-x]{1,2}/i) == -1) {
      //no units number only
      x = 1 / x ;
      x = parsFlat(Number(x),8);
      if (x.toString().includes(".")) {
      } else {
        x = x + ".";
      }
      my_display.value = x;
      fis_convert();
      convert_entry();
    } else if (x.includes("**") && x.search(/[f-x]{1,2}/i) > -1) {
      // single unit exponent
      z = x.match(/[f-x]{1,2}/i);
      r = z.shift();
      z = r.trim();
      if (z == "ft") {
        y = Number(DecFt_n.value);
      }
      if (z == "in") {
        y = Number(DecIn_n.value);
      }
      if (z == "sx") {
        y = Number(DecSx_n.value);
      }
      if (z == "m") {
        y = Number(DecMeter_n.value);
      }
      if (z == "mm") {
        y = Number(Dec_mm_n.value);
      }
      w = y;
      w = parsFlat(1 / Number(w), 8);
      w = Number(w).toPrecision();
      s = s.toPrecision();
      l = w;
      if (s == "" || s == 0 || s == "0" || s == "0") {
        my_display.value = l;
      }
      if (s == "1" || s == 1 || s == "1") {
        my_display.value = l + z;
      }
      if (s != 0 && s != 1) {
        my_display.value = l + z + "**" + s;
      }

      fis_convert();
      convert_entry();
    } else if (x.search(/[f-x]{1,2}/i) > -1 && x.search(/\*\*/) == -1) {
      z = x.match(/[f-x]{1,2}/i);
      r = z.shift();
      z = r.trim();
      if (z == "ft") {
        y = Number(DecFt_n.value);
      }
      if (z == "in") {
        y = Number(DecIn_n.value);
      }
      if (z == "sx") {
        y = Number(DecSx_n.value);
      }
      if (z == "m") {
        y = Number(DecMeter_n.value);
      }
      if (z == "mm") {
        y = Number(Dec_mm_n.value);
      }
      w = y;
      w = parsFlat(1 / Number(w), 8);
      w = Number(w).toPrecision();
      s = s.toPrecision();
      l = w;
      if (s == "" || s == 0 || s == "0" || s == "0") {
        my_display.value = l;
      }
      if (s == "1" || s == 1 || s == "1") {
        my_display.value = l + z;
      }
      if (s != 0 && s != 1) {
        my_display.value = l + z + "**" + s;
      }
      fis_convert();
      convert_entry();
    }
    z = document.createElement("li");
    z.innerText = OutNumU_n.value;
    z.id = "LItem" + My_ol.getElementsByTagName("li").length;  
    My_ol.appendChild(z);
    my_display.value = ""; //update display
    my_convert.value = 0; //reset  converter
  }
  oops5: if (data == "sqrt") {
    x = OutNumU_n.value;
    if (x.length == 0){x="0"};
    s = Number(UnitEx_n.value);
    let NegS = 0;
    if (x == "" || x == 0) {
      data = "";
      break oops5;
    }
    if (x.startsWith("-")) {
      data = "";
      alert("Keep it REAL");
      break oops5;
    }
    if (x.search(/[f-x]{1,2}/i) == -1) {
      //no units number only
      x = parsFlat(Math.sqrt(Number(x)), 8);
      x = Number(x).toPrecision();
      if (x.toString().includes(".")) {
      } else {
        x = x + ".";
      }
      my_display.value = x;
      fis_convert();
      convert_entry();
    } else if (x.includes("**") && x.search(/[f-x]{1,2}/i) > -1) {
      // single unit exponent
      z = x.match(/[f-x]{1,2}/i);
      r = z.shift();
      z = r.trim();
      if (z == "ft") {
        y = Number(DecFt_n.value);
      }
      if (z == "in") {
        y = Number(DecIn_n.value);
      }
      if (z == "sx") {
        y = Number(DecSx_n.value);
      }
      if (z == "m") {
        y = Number(DecMeter_n.value);
      }
      if (z == "mm") {
        y = Number(Dec_mm_n.value);
      }
      w = y;
      w = parsFlat(Math.sqrt(Number(w)), 8);
      w = Number(w).toPrecision();
      s = Number(parsFlat(s / 2, 8)).toPrecision();
      l = w;
      if (s == "" || s == 0 || s == "0" || s == "0") {
        my_display.value = l;
      }
      if (s == "1" || s == 1 || s == "1") {
        my_display.value = l + z;
      }
      if (s != 0 && s != 1) {
        my_display.value = l + z + "**" + s;
      }

      fis_convert();
      convert_entry();
    } else if (x.search(/[f-x]{1,2}/i) > -1 && x.search(/\*\*/) == -1) {
      z = x.match(/[f-x]{1,2}/i);
      r = z.shift();
      z = r.trim();
      if (z == "ft") {
        y = Number(DecFt_n.value);
      }
      if (z == "in") {
        y = Number(DecIn_n.value);
      }
      if (z == "sx") {
        y = Number(DecSx_n.value);
      }
      if (z == "m") {
        y = Number(DecMeter_n.value);
      }
      if (z == "mm") {
        y = Number(Dec_mm_n.value);
      }
      w = y;
      w = parsFlat(Math.sqrt(Number(w)), 8);
      w = Number(w).toPrecision();
      s = Number(parsFlat(s / 2, 8)).toPrecision();
      l = w;
      if (s == "" || s == 0 || s == "0" || s == "0") {
        my_display.value = l;
      }
      if (s == "1" || s == 1 || s == "1") {
        my_display.value = l + z;
      }
      if (s != 0 && s != 1) {
        my_display.value = l + z + "**" + s;
      }
      fis_convert();
      convert_entry();
    }
    z = document.createElement("li");
    z.innerText = OutNumU_n.value;
    z.id = "LItem" + My_ol.getElementsByTagName("li").length;  
    My_ol.appendChild(z);
    my_display.value = ""; //update display
    my_convert.value = 0; //reset  converter
  }
  if (data == "inv") {
  }
  oops6: if (data == "sin") {
    x = my_display.value;
    if (x.length == 0){x="0"};
    x = x.trim();
    if (x == "") {
      data = "";
      break oops6;
    }
    if (x.search(/[f-x]{1,2}/i) == -1) {
      //no units number only
      if (x.toString().includes(".")) {
      } else {
        x = x + ".";
      }
      if (invFlag.checked == true) {
        if (-1 <= Number(x) <= 1) {
          x = parsFlat(Math.asin(Number(x)), 8);
          x = parsFlat(((Number(x) * 180) / Math.PI),8);
        } else {
          alert("Between -1 and 1");
          data = "";
          break oops6;
        }
      } else {
        if (-180 <= Number(x) <= 180) {
          x = parsFlat(Math.sin(Number((x * Math.PI) / 180)), 8);
        } else {
          alert("Between -180 and 180 degrees");
          data = "";
          break oops6;
        } // trig in degrees
      }

      x = Number(x).toPrecision();
      if (x.toString().includes(".")) {
      } else {
        x = x + ".";
      }
      my_display.value = x;
      fis_convert();
      convert_entry();
      z = document.createElement("li");
      z.innerText = OutNumU_n.value;
      z.id = "LItem" + My_ol.getElementsByTagName("li").length;  
      My_ol.appendChild(z);
      my_display.value = ""; //update display
      my_convert.value = 0;
      invFlag.checked = false; //reset  converter
    }
  }
  oops7: if (data == "cos") {
    x = my_display.value;
    if (x.length == 0){x="0"};
    x = x.trim();
    if (x == "") {
      data = "";
      break oops7;
    }
    if (x.search(/[f-x]{1,2}/i) == -1) {
      //no units number only
      if (x.toString().includes(".")) {
      } else {
        x = x + ".";
      }
      if (invFlag.checked == true) {
        if (-1 <= Number(x) <= 1) {
          x = parsFlat(Math.acos(Number(x)), 8);
          x = parsFlat(((Number(x) * 180) / Math.PI),8);
        } else {
          alert("Between -1 and 1");
          data = "";
          break oops7;
        }
      } else {
        if (-180 <= Number(x) <= 180) {
          x = parsFlat(Math.cos(Number((x * Math.PI) / 180)), 8);
        } else {
          alert("Between -180 and 180 degrees");
          data = "";
          break oops7;
        } // trig in degrees
      }

      x = Number(x).toPrecision();
      if (x.toString().includes(".")) {
      } else {
        x = x + ".";
      }
      my_display.value = x;
      fis_convert();
      convert_entry();
      z = document.createElement("li");
      z.innerText = OutNumU_n.value;
      z.id = "LItem" + My_ol.getElementsByTagName("li").length;  
      My_ol.appendChild(z);
      my_display.value = ""; //update display
      my_convert.value = 0;
      invFlag.checked = false; //reset  converter
    }
  }
  oops8: if (data == "tan") {
    x = my_display.value;
    if (x.length == 0){x="0"};
    x = x.trim();
    if (x == "") {
      data = "";
      break oops8;
    }
    if (x.search(/[f-x]{1,2}/i) == -1) {
      //no units number only
      if (x.toString().includes(".")) {
      } else {
        x = x + ".";
      }
      if (invFlag.checked == true) {
        x = parsFlat(Math.atan(Number(x)), 8);
        x = parsFlat(((Number(x) * 180) / Math.PI),8);
      } else {
        if (-180 <= Number(x) <= 180) {
          x = parsFlat(Math.tan(Number((x * Math.PI) / 180)), 8);
        } else {
          alert("Between -180 and 180 degrees");
          data = "";
          break oops8;
        } // trig in degrees
      }

      x = Number(x).toPrecision();
      if (x.toString().includes(".")) {
      } else {
        x = x + ".";
      }
      my_display.value = x;
      fis_convert();
      convert_entry();
      z = document.createElement("li");
      z.innerText = OutNumU_n.value;
      z.id = "LItem" + My_ol.getElementsByTagName("li").length;  
      My_ol.appendChild(z);
      my_display.value = ""; //update display
      my_convert.value = 0;
      invFlag.checked = false; //reset  converter
    }
  }
  fis_convert();
  convert_entry();
  my_display.focus();
}

function fis_convert() {
  my_convert.value = my_display.value;
}

function parsFlat(x, pF) {
     
      if (Math.abs(x) < 0.1) {pF = pF + 1 };
      if (Math.abs(x) < 0.01) {pF = pF + 2 };
      if (Math.abs(x) < 0.001) { pF = pF + 3};
      if (Math.abs(x) < 0.0001) {pF = pF + 4};
      if (Math.abs(x) < 0.00001) {pF = pF + 5};
  pF = Math.round(Number(pF));
  if (0 < pF < 100) {} else { pF = 8 };
  if (pF == NaN) {pF = 8};
    let y = Number(x);
  function parsIt() 
  {
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
function fisChange(fisData,mmData) {



  return fisData,mmData;
}

function convert_entry() {
  let x = my_convert.value;
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
    if (chk_fis_unit.value == "units")  {
      s=lastUnit.value; 
      switch(s) {
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
            x.search(/^(-?\d*(\.\d*)?)(\e[+|-]?\d*(\.\d*)?)?([f-x]{1,2})/i) == -1) 
            {
            x = "";
          }
        }
      }
      if (n == 1) {
        OutUnit = s;
        if ((s == "ft") && (chk_fis_unit.value == "fis"))
        { OutUnit= "fis"}; 
        if ((s == "mm") && (chk_fis_unit.value == "mm"))
        { OutUnit= "metric"};
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
        OutNumU_n.value = my_convert.value;
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
                DecFt_n.value = parsFlat(l + ( k / 12) + (j / 16 / 12), 8);
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
            OutNum("fis");
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
          if (chk_fis_unit.value == "units") {
            x = my_display.value;
            if (
              x.search(/[f-x]{1,2}/i) == -1 &&
              chk_fis_unit.value == "units"
            ) {
              if (x.includes(".")) {
              } else {
                x = x + ".";
              }
              OutNumU_n.value = x;
            }
          }
        }
      }
    }
    my_display.focus();
  }
  if (OutNumU_n.value == 0 || OutNumU_n.value == "") {
    OutNumU_n.value = my_convert.value;
    UnitEx_n.value = 0;
  }
}

function shuffle() {
  DecIn_n.value = parsFlat((Number(DecFt_n.value) * 12),8);
  DecSx_n.value = parsFlat((Number(DecFt_n.value) * 12 * 16), 8);
  DecMeter_n.value = parsFlat((Number(DecFt_n.value) * 0.3048),8);
  Dec_mm_n.value = parsFlat((Number(DecFt_n.value) * 0.3048 * 1000), 8);
}
function OutNum(s) {
  if (s == "fis") {
    z = "";
    let NegS = Math.sign(Number(DecFt_n.value));
    if (NegS == 1 || NegS == 0) {
      NegS = "";
    }
    if (NegS == -1) {
      NegS = "-";
    }
    let DecOutFt = Math.abs(Number(DecFt_n.value));
    OutFt = Math.trunc(DecOutFt);
    let DecOutIn= parsFlat(((Number(DecOutFt) - Number(OutFt)) * 12),8);
    let OutIn =Math.trunc(DecOutIn);
    let DecOutSx = Number(parsFlat(((Number(DecOutIn) - Number(OutIn)) * 16),8)).toFixed(2);
    let OutSx =  Math.round(DecOutSx);
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
    OutNumU_n.value = z;
  }
  if (s == "metric" ) {
    z = "";
    let OutM = Math.trunc(Number(DecMeter_n.value));
    let OutMm = Number(
      parsFlat(Number((DecMeter_n.value - Math.trunc(DecMeter_n.value)) * 1000),8));
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
  if ( chk_fis_unit.value == "units") {s=lastUnit.value}
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
