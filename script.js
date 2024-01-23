let wt=document.getElementById("weight");
let ft=document.querySelector("#feet");
let inch=document.querySelector("#inch");

const setData=()=>{
      let newWeight=wt.value;
      console.log("weight : ",newWeight);
      let newFeet=ft.value;
      console.log("feet :",newFeet);
      console.log(newWeight);
      let newInch=inch.value;
      console.log("inch : ",newInch);
      let height=((newFeet*12+newInch)*2.54)/100;
      console.log(height);
      let bmi=(newWeight/(height*height));
      console.log(bmi);
      document.getElementById("result").innerText=bmi;
      console.log("thank you");
}
let btn=document.querySelector("#btn");
console.log(btn);
btn.addEventListener("click",setData);

