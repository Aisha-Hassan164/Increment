

// this main project tasbiix //
let intialvalue =0;
let value =document.querySelector(".value")
let increment=document.querySelector(".increment")
let rest =document.querySelector(".rest")
let deg =document.querySelector(".deg")
let body=document.querySelector("body")
increment.addEventListener("click",()=>{
    intialvalue++;
    value.innerHTML=intialvalue;

    if(intialvalue ==10)
    {
     value.style.color="blue";
    
    }
    else if(intialvalue)
    value.style.color="black";
    
     if(intialvalue==2)
    body.style.backgroundColor="green"
    else if(intialvalue==3)
    body.style.backgroundColor="blue";
    else if(intialvalue==4)
    body.style.backgroundColor="orange";
    else if(intialvalue==5)
    body.style.backgroundColor="red";

    else if(intialvalue)
    body.style.backgroundColor="rgb(165, 224, 224)"
    
     if(intialvalue>=5 && intialvalue<=10)
    increment.style.backgroundColor="red"
    
    else 
    {increment.style.backgroundColor="white"
}
   
    // if(intialvalue>=5 && intialvalue<=10)
    // increment.style.fontSize ="30px"

   
})
rest.addEventListener("click",()=>{
    intialvalue = 0;
    value.style.color="red";
    value.innerHTML=intialvalue;
 
})
deg.addEventListener("click", ()=>{
   if (intialvalue>0)
   { intialvalue--;
    value.innerHTML=intialvalue;}

    if(intialvalue ==10)
    {
     value.style.color="blue";
    
    }
    else if(intialvalue)
    value.style.color="black"

    
    else if  (intialvalue==0)
    value.style.color="red";

    else if(intialvalue)
    value.style.color="black"



    if(intialvalue==2)
    body.style.backgroundColor="green"
    else if(intialvalue==3)
    body.style.backgroundColor="blue";
    else if(intialvalue==4)
    body.style.backgroundColor="orange";
    else if(intialvalue==5)
    body.style.backgroundColor="red";

    else if(intialvalue)
    body.style.backgroundColor="rgb(165, 224, 224)"

    if(intialvalue>=5 && intialvalue<=10)
    increment.style.backgroundColor="red"

})