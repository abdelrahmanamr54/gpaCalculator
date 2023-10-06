let inputs =document.querySelectorAll(".options select ")
let option =document.querySelectorAll(".options select option ")
let name=document.getElementById("name")
let year =document.getElementById("Department")
let tbody =document.getElementById("tbody")
let danger =document.querySelector(".danger button")
let span =document.querySelector(".countdata")
let modal=document.getElementById("layout")
 let modal_body =document.querySelector(".modal-body")
 
let count =document.getElementById("countitems")
let button=document.querySelector(".btn1")
// console.log(modal)
console.log(modal_body)
let mood="create"
let globalid
let  alldata

if(localStorage.students==null){
    alldata=[]

}else{
    alldata=JSON.parse(localStorage.students)
}


let clearall=()=>
{
    if(confirm("are you sure")){
        localStorage.clear()
alldata.splice(0)
    }
   
    displaydata()


}
danger.addEventListener("click",clearall)

let calcgpa=()=>{


let degree




let total=+inputs[0].value + +inputs[1].value  + +inputs[2].value  + +inputs[3].value
console.log(total)
totalgpa=+total / 4

count.value=totalgpa


    


}

let showmodel=()=>{
    modal.classList.toggle("none")
   
}

let openmodal=(i)=>{
    // showmodel()

    
    modal_body.innerHTML= `

  student name:  ${alldata[i].name}
    <hr>
   grade_1 : ${alldata[i].grade_1}
    <hr>
    grade_2 : ${alldata[i].grade_2}
   <hr>
   grade_3 : ${alldata[i].grade_3}
   <hr>
   grade_4 :  ${alldata[i].grade_4}
   <hr>
gpa: ${alldata[i].gpa}
   <hr>
year:   ${alldata[i].year}
    `

        
    
    
   
   


}




let createstudent=()=>{
    calcgpa()
   
  
      
    
    
    // window.alert("your gpa is"+ totalgpa)
   
    let newstudent={
     
        name : name.value,
        grade_1: inputs[0].value,
        grade_2: inputs[1].value,
        grade_3: inputs[2].value,
        grade_4: inputs[3].value,
        gpa:count.value,
        year: year.value
        

    }
   

    
    if(mood=="create"){
        alldata.push(newstudent)
    }else{
        alldata[globalid]=newstudent
        mood=="create"
        button.innerHTML="Send Data"
        count.style.display="none"
    }
  
    
    localStorage.setItem("students",JSON.stringify(alldata))
        console.log(alldata)
        displaydata()
        calcgpa()
        emptyinput()

         
        }
    
    



 





button.addEventListener("click",createstudent)

let displaydata=()=>{
let trs=""
for(let i=0;i<alldata.length;i++){
    trs+=`
    <tr>
    <td>${i+1}</td>
    <td>${alldata[i].name}</td>
    
    <td><i onclick="deleteoneitem(${i})" class="fa-solid fa-trash"></i></td>
   
    <td><i onclick="editoneitem(${i})" id="itwo"class="fa-solid fa-pen-to-square"></i></td>

    <td>  <button onclick="openmodal(${i})" type="button" class="btn btn-primary"  id="button"  data-bs-toggle="modal" data-bs-target="#exampleModal">
    show
  </button></td>
    
   
    


    </tr> 
    
    
    `
   
    

}
tbody.innerHTML=trs
span.innerHTML=alldata.length 
if(alldata.length>0){
    danger.style.display="block"
}else{
    danger.style.display="none"

}



}

displaydata()
count.style.display="none"




// pets setter connect

let deleteoneitem=(i)=>{
    alldata.splice(i,1)
    localStorage.students=JSON.stringify(alldata)
    displaydata()

}
let editoneitem=(i)=>{
    name.value=alldata[i].name
     inputs[0].value=alldata[i].grade_1
     inputs[1].value=alldata[i].grade_2
    inputs[2].value=alldata[i].grade_3
     inputs[3].value=alldata[i].grade_4
       count.value=alldata[i].gpa
     year.value=alldata[i].year
     mood="update"
     count.style.display="block"
     button.innerHTML="update student info"
     globalid=i

}
let emptyinput=()=>{
    name.value=""
    inputs[0].value=""
    inputs[1].value=""
    inputs[2].value=""
    inputs[3].value=""
    year.value=""


}