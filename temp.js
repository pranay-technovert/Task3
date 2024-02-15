function addEmployee(event) {
    event.preventDefault();
    let form = document.getElementsByClassName("employee-form")[0];
    let formInput=form.getElementsByTagName('input');
    for(let key in formInput){
      let element=formInput[key]
      if(element.type!="file"){
        if(element.name!='dob'){
          if(element.value==""){
            showValidInput(element,`&#9888; this is required field`)    
            return;
          }
        }
        else if (element.value==""){
          showValidInput(element.parentElement,`&#9888; this is required field`)
          return;
        }
    }
    }
    let newObject = {};
    let image = document.getElementById("empl-img").files[0];
    const formElements = Array.from(form.elements);
    for(let key in formElements){
      let element=formElements[key];
      if (element.type == "date") {
        let value = element.value.split("-");
        newObject[element.name] = `${value[2]}/${value[1]}/${value[0]}`;
      } else if (element.type == "file") {
        if (image) {
          var url = URL.createObjectURL(image);
          newObject[element.name] = url;
        }
      } else if(element.name == "empNo") {
        let empNo = element.value;
        if (empNo.startsWith("TZ")) {
          let allEmployee = getAllEmployee();
          for (let i = 0; i < allEmployee.length; i++) {
            if (allEmployee[i].empNo == empNo) {
              showValidInput(element,"EmployeeId already taken")
              return;
            }
          }
          newObject[element.name] = element.value;
        } else {
          showValidInput(element,"employee Id Should start with TZ")
          return;
        }
      }
      else if (element.tagName.toLowerCase() == "select") {
        let optionText = element.options[element.selectedIndex].innerText;
        newObject[element.name] = optionText;
      }
      else if (element.type == "email") {
        let email = element.value.toLowerCase();
        if (!email.endsWith('technovert.com')) {
          showValidInput(element,"Email should be of technovert")
          return;
        }
        else
          newObject[element.name] = email;
      }
      else if (element.type != "submit") {
        newObject[element.name] = element.value;
      }
      
    }
      console.log(newObject);
      insertEmployee(newObject);
      let allEmps = JSON.parse(localStorage.getItem("employees"));
      allEmps.push(newObject);
      localStorage.setItem("employees", JSON.stringify(allEmps));
      let row = document.getElementsByClassName("three-dots");
      row[row.length - 1].addEventListener("click", toggleEditOption);
      let rowDelete = document.getElementsByClassName("row-delete");
      rowDelete[rowDelete.length - 1].addEventListener("click", deleteEmployeeRow);
      let rowStatus = document.getElementsByClassName("status-change");
      rowStatus[rowStatus.length - 1].addEventListener("click", toggleStatus);
      let rowEditForm = document.getElementsByClassName("row-edit");
      rowEditForm[rowEditForm.length - 1].addEventListener(
        "click",
        editEmployeeForm
      );
      checkStatus();
      closeEmployeeForm();
  }



  function showValidInput(element,message){
    element.style.outlineColor="red";
    let parentDiv=element.parentElement;
    let span=parentDiv.querySelector('span');
    if(span){
    span.innerHTML=message;
    span.style.color="red";
    }
  }