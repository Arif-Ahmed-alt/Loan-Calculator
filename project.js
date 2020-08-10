let amount=document.getElementById("amount");
let interest=document.getElementById("interest");
let year=document.getElementById("year");
let monthly_payment=document.getElementById("monthly_payment");
let total_payment=document.getElementById("total_payment");
let total_interest=document.getElementById("total_interest");
let calculate=document.querySelector(".btn");
let contain=document.querySelector(".card-body");
let heading=document.querySelector(".card-title");
let loading=document.querySelector(".loading");
let result_field=document.querySelector(".result_filed");

let is_shown=false;

calculate.addEventListener("click",function(){
  let a=parseFloat(amount.value);
  let r=parseFloat(interest.value/100/12)
  let n=parseInt(year.value*12);
  let d=Math.pow(1+r,n);
  let m=(a*d*r)/(d-1);


    if(isFinite(m)){
      monthly_payment.value=m.toFixed(2);
      total_payment.value=(m*n).toFixed(2);
      total_interest.value=(total_payment.value-a).toFixed(2);

      if(is_shown==false){
        loading.style.display="block"
        result_field.style.display="none";
        setTimeout(function(){
          result_field.style.display="block";
          loading.style.display="none"
        },3000);

        is_shown=true;
      }else{
        loading.style.display="block"
        result_field.style.display="none";
        setTimeout(function(){
          result_field.style.display="block";
          loading.style.display="none"
        },3000);
      }


    }else{
      let div=document.createElement("div");
      div.classList="alert alert-danger";
      div.appendChild(document.createTextNode("Check Your Value"));
      contain.insertBefore(div,heading);

      setTimeout(function(){
        if(div.classList.contains("alert")){
          div.remove();
        }
      },3000)
      
    }
   


})