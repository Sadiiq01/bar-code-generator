let btn = document.querySelector(".gnt")
let slcOne = document.querySelector(".select-1")
let slcTwo = document.querySelector(".select-2")
let inp = document.querySelector("input")
let prt = document.querySelector(".prt")

btn.addEventListener("click" , ()=>{
   if(slcOne.value==="" & slcTwo.value===""){
    alert ("please enter the other ")
   } else{
    let text = inp.value
    let text2 = slcOne.value
    let text3 = slcTwo.value
    JsBarcode("#barcode",text , {
        format: text2,
        lineColor: "#0aa",
        width: 3,
        height: 40,
        displayValue: text3
      });
   }
})
