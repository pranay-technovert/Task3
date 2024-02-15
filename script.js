let isCollapsed = false;
let statusEmployeeFn = false;
let statusTopbar = false;

document.addEventListener("DOMContentLoaded", function () {
    // storeTableDataToSessionStorage();
});
function saveToSessionStorage(employee) {
    let savedEmployees = JSON.parse(sessionStorage.getItem("employeesTableDetail")) || [];
    savedEmployees.push(employee);
    sessionStorage.setItem("employeesTableDetail", JSON.stringify(savedEmployees));
}

function sideBarClose() {
    const icon = document.getElementsByClassName("collapse-btn");
    const mainBody = document.getElementById("main-body");
    var updateBlock = document.getElementsByClassName('install-update')[0];
    var sideBarOptionsName = document.getElementsByClassName('text');
    var sideBarOptions = document.getElementsByClassName('side-bar-options');
    var functioName = document.getElementsByClassName('function-name');
    var downArrow = document.querySelectorAll('.side-bar-options .arrow');
    var iconImage = document.querySelectorAll('.lock-icon img');
    var all = document.getElementsByClassName('all')[0];
    var fullLogo = document.querySelector('.tezo-logo img');
    fullLogo.style.display = "none";
    var logo = document.querySelector(".logo-icon img");
    logo.style.display = "block";
    for (let i = 0; i < iconImage.length; i++) {
        iconImage[i].style.height = "1.5rem";
        iconImage[i].style.marginBottom = ".5rem";
        iconImage[i].style.marginTop = ".5rem";
    }
    for (let i = 0; i < downArrow.length; i++) {
        downArrow[i].style.display = "none";
    }
    for (let i = 0; i < sideBarOptions.length; i++) {
        sideBarOptions[i].style.gridTemplateColumns = '1fr';
    }
    for (var i = 0; i < functioName.length; i++) {
        functioName[i].style.display = "none";
    }
    for (var i = 0; i < sideBarOptionsName.length; i++) {
        sideBarOptionsName[i].style.display = "none";
    }
    mainBody.style.gridTemplateColumns = "1fr 15fr";
    icon[0].style.transform = "rotate(180deg)";
    updateBlock.style.display = "none";
    isCollapsed = !isCollapsed;
}

function collapseSection1() {
    const icon = document.getElementsByClassName("collapse-btn");

    const searchBar = document.getElementsByClassName("search-bar");
    const employeeBody = document.getElementsByClassName("employees-detail");
    var updateBlock = document.getElementsByClassName('install-update')[0];
    const mainBody = document.getElementById("main-body");
    if (isCollapsed == false) {
        sideBarClose();
        icon[0].style.left = "-1%";
    }
    else {
        var sideBarOptions = document.getElementsByClassName('side-bar-options');
        for (let i = 0; i < sideBarOptions.length; i++) {
            sideBarOptions[i].style.gridTemplateColumns = '1fr 3fr 1fr';
        }

        var downArrow = document.querySelectorAll('.side-bar-options .arrow');
        for (let i = 0; i < downArrow.length; i++) {
            downArrow[i].style.display = "flex";
        }
        var functioName = document.getElementsByClassName('function-name');
        for (var i = 0; i < functioName.length; i++) {
            functioName[i].style.display = "block";
        }
        var sideBarOptionsName = document.getElementsByClassName('text');
        for (var i = 0; i < sideBarOptionsName.length; i++) {
            sideBarOptionsName[i].style.display = "block";
        }

        var iconImage = document.querySelectorAll('.lock-icon img');
        for (let i = 0; i < iconImage.length; i++) {
            iconImage[i].style.height = "50%";
            iconImage[i].style.marginBottom = "0rem";
            iconImage[i].style.marginTop = "0rem";
        }


        var fullLogo = document.querySelector('.tezo-logo img');
        fullLogo.style.display = "block";
        var logo = document.querySelector(".logo-icon img");
        logo.style.display = "none";
        mainBody.style.gridTemplateColumns = "1fr 5fr";
        icon[0].style.transform = "rotate(0deg)";
        icon[0].style.left = "-2%";
        employeeBody[0].style.paddingLeft = "2%";
        searchBar[0].style.marginLeft = "0rem"
        updateBlock.style.display = "block";
        isCollapsed = !isCollapsed;
    }
}

function collapseSection2() {
    const icon = document.getElementsByClassName("collapse-btn");

    const searchBar = document.getElementsByClassName("search-bar");

    const mainBody = document.getElementById("main-body");
    const employeeBody = document.getElementsByClassName("employees-detail");
    if (isCollapsed == false) {
        mainBody.style.gridTemplateColumns = "2fr 5fr";
        icon[0].style.transform = "rotate(0deg)";
        icon[0].style.left = "-4%";
        employeeBody[0].style.paddingLeft = "2%";
        isCollapsed = !isCollapsed;
        searchBar[0].style.marginLeft = "2rem"
    }
    else {
        sideBarClose();

        icon[0].style.left = "-2%";
    }
}
var widths = [1080, 1400];
function collapseSection() {
    if (window.innerWidth >= widths[0]) {
        collapseSection1();
    }
    else {
        collapseSection2();
    }
}

function collapseEmployee() {
    const employeeSubOption = document.getElementById("employees-sub-options");
    if (statusEmployeeFn == false) {
        employeeSubOption.style.display = "block";
        statusEmployeeFn = !statusEmployeeFn;
    }
    else {

        employeeSubOption.style.display = "none";
        statusEmployeeFn = !statusEmployeeFn;

    }
}

function collapseDropdownTopbar() {
    const icon = document.getElementsByClassName("collapse-btn");

    const dropdownTopbarBlock = document.getElementById("topbar");
    if (statusTopbar == false) {
        dropdownTopbarBlock.style.display = "block";
        icon[1].style.transform = "rotate(90deg)";
        statusTopbar = !statusTopbar;
    }
    else {
        dropdownTopbarBlock.style.display = "none";
        icon[1].style.transform = "rotate(-90deg)";
        statusTopbar = !statusTopbar;
    }
}

function showFilter() {
    let filterStatus = false;
    const alphabetFilter = document.getElementsByClassName("a-to-z-filter")[0];
    const filterBar = document.getElementsByClassName("filter-bar")[0];
    if (filterStatus) {
        filterBar.style.display = "flex";
        alphabetFilter.style.display = "flex";
        alphabetFilter.style.marginTop = "1rem";
        alphabetFilter.style.height = "1.7rem";
        filterStatus = !filterStatus;
    }
    else {
        filterBar.style.display = "none";
        alphabetFilter.style.display = "none";
        filterStatus = !filterStatus;
    }
}

function addRow(employee) {
    const employeeTableBody = document.getElementsByTagName('tbody')[0];
    let tr = document.createElement('tr');
    let checkbox = document.createElement('td');
    checkbox.className = 'check-box-col';
    let inputCheckbox = document.createElement('input');
    inputCheckbox.type = 'checkbox';
    inputCheckbox.classList.add('select');
    inputCheckbox.addEventListener("click", activateDeleteButton);
    checkbox.appendChild(inputCheckbox);
    tr.appendChild(checkbox);
    let listProfileName = document.createElement('div');
    let listProfileMail = document.createElement('div');
    listProfileName.className = 'list-profile-name';
    listProfileMail.classList.add('list-profile-mail', 'grey-color');
    listProfileName.textContent = employee.name;
    listProfileMail.textContent = employee.email;
    let listProfileDiv = document.createElement('div');
    listProfileDiv.appendChild(listProfileName);
    listProfileDiv.appendChild(listProfileMail);
    let profileImage = document.createElement('img');
    profileImage.src = employee.img;
    profileImage.alt = "profile";
    let listProfile = document.createElement('td');
    listProfile.classList.add('list-profile', 'flex');
    listProfile.appendChild(profileImage);
    listProfile.appendChild(listProfileDiv);
    tr.appendChild(listProfile);

    let location = document.createElement('td');
    location.classList.add('col', 'col-location');
    location.textContent = employee.location;
    tr.appendChild(location);

    let department = document.createElement('td');
    department.classList.add('col', 'col-department');
    department.textContent = employee.dept;
    tr.appendChild(department);

    let role = document.createElement('td');
    role.classList.add('col-role', 'col');
    role.textContent = employee.role;
    tr.appendChild(role);

    let empNum = document.createElement('td');
    empNum.classList.add('col-emp-no', 'col');
    empNum.textContent = employee.empNo;
    tr.appendChild(empNum);

    let activeBtn = document.createElement('div');
    activeBtn.textContent = employee.status;
    if (employee.status.toUpperCase() != 'ACTIVE') {
        activeBtn.className = 'btn-inactive';
    }
    else {
        activeBtn.className = 'btn-active';
    }
    let activeStatus = document.createElement('td');
    activeStatus.classList.add('col-status', 'col');
    activeStatus.appendChild(activeBtn);
    tr.appendChild(activeStatus);

    let joinDate = document.createElement('td');
    joinDate.classList.add('col-join-dt', 'col');
    joinDate.textContent = employee.joinDate;
    tr.appendChild(joinDate);

    let dot = document.createElement('i');
    dot.classList.add('fa-solid', 'fa-ellipsis');
    let more = document.createElement('td');
    more.classList.add('three-dots', 'col');
    more.appendChild(dot);
    tr.appendChild(more);
    employeeTableBody.appendChild(tr);
}

function activateDeleteButton() {
    let employeeTable = document.getElementById("employee-table");
    let tr = employeeTable.querySelectorAll('tr');
    let deleteBtn = document.getElementsByClassName("delete-btn")[0];
    for (i = 1; i < tr.length; i++) {
        let currentCheckbox = tr[i].getElementsByClassName('check-box-col')[0];
        let select = currentCheckbox.getElementsByTagName('input')[0];

        if (select.checked == true) {
            deleteBtn.style.backgroundColor = "#f44848";
            // deleteBtn.addEventListener(click,openDeleteConfirmation);
            return;
        }
    }
    deleteBtn.style.backgroundColor = "#f89191";
}

function setAlphabeticFilter() {
    var alphabetFilterParent = document.querySelector('.a-to-z-filter');
    var aplhabets = alphabetFilterParent.querySelectorAll('div:not(:first-child)');
    aplhabets.forEach(function (child) {
        child.onclick = function () {
            applyAlphabeticFilter(this);
        };
    });
}
function unpoplateTable() {
    let tbody = document.getElementsByTagName('tbody')[0];
    while (tbody.hasChildNodes())
        tbody.removeChild(tbody.lastChild);
}

function populateFilteredTable(filteredEmployees) {
    unpoplateTable();
    sessionStorage.setItem('FilteredEmployeesDetail', JSON.stringify(filteredEmployees));
    const employees = JSON.parse(sessionStorage.getItem('FilteredEmployeesDetail')) || [];
    if (employees && employees.length > 0) {
        employees.forEach(employee => {
            addRow(employee);
        });
    } else {
        console.log('No employee data available.');
    }
}

function applyAlphabeticFilter(event) {
    let filteredEmployees = [];
    if (event.classList.contains('selected')) {
        resetFilter();
        return;
    }
    let input = event.textContent;
    let rows = employeeDetails();
    let profileName;
    for (i = 1; i < rows.length; i++) {
        profileName = rows[i].name;

        if (profileName[0].toUpperCase() == input) {
            filteredEmployees.push(rows[i]);
        }
    }
    var alphabetFilterParent = document.querySelector('.a-to-z-filter');
    var allAlphabets = alphabetFilterParent.querySelectorAll('div:not(:first-child)');
    var filterIcon = document.getElementById('filter-icon');
    console.log(filterIcon);
    allAlphabets.forEach(x => x.classList.remove('selected'));
    event.classList.add('selected');
    filterIcon.classList.add('selected');
    populateFilteredTable(filteredEmployees);
}
function employeeDetails() {
    const employees = JSON.parse(sessionStorage.getItem('employeesTableDetail'));
    return employees;
}

function populateTable() {
    const employees = JSON.parse(sessionStorage.getItem('employeesTableDetail'));
    if (employees && employees.length > 0) {
        employees.forEach(employee => {
            addRow(employee);
        });
    } else {
        console.log('No employee data available.');
    }
}

function displayStatusFilter() {
    var status = document.querySelector("#status-filter .status-dropdown");
    if (status.classList.contains('hide'))
        status.classList.remove('hide');
    else
        status.classList.add('hide');
}
function displayLocationFilter() {
    var location = document.querySelector("#location-filter .location-dropdown");
    if (location.classList.contains('hide'))
        location.classList.remove('hide');
    else
        location.classList.add('hide');
}

function displayDepartmentFilter() {
    var department = document.querySelector("#department-filter .department-dropdown");
    if (department.classList.contains('hide'))
        department.classList.remove('hide');
    else
        department.classList.add('hide');
}

function checkStatusFilter(employee) {
    let Status = document.getElementById('status-filter');
    var status = Status.querySelectorAll("input");
    let selectedStatus = [];
    for (var i = 0; i < status.length; i++) {
        if (status[i].checked == true) {
            x = status[i].parentElement.textContent;
            x = x.split(" ").join("");
            selectedStatus.push(x.toLowerCase())
        }
    }
    if (selectedStatus.length == 0)
        return true;
    var empStatus = employee.toLowerCase();
    for (let i = 0; i < selectedStatus.length; i++) {
        if (selectedStatus[i] == empStatus)
            return true;
    }
    return false;
}

function checkLocationFilter(employee) {
    let Location = document.getElementById('location-filter');
    var location = Location.querySelectorAll("input");
    let selectedLocation = [];

    for (var i = 0; i < location.length; i++) {
        if (location[i].checked == true) {
            x = location[i].parentElement.textContent;
            x = x.split(" ").join("");
            selectedLocation.push(x.toLowerCase())
        }
    }
    if (selectedLocation.length == 0)
        return true;
    var employeeLocation = employee.toLowerCase();
    for (let i = 0; i < selectedLocation.length; i++) {
        if (selectedLocation[i] == employeeLocation)
            return true;
    }
    return false;
}

function checkDepartmentFilter(employee) {
    let Department = document.querySelector("#department-filter .department-dropdown");
    var department = Department.querySelectorAll("input");

    let selectedDept = [];
    for (var i = 0; i < department.length; i++) {
        if (department[i].checked == true) {
            x = department[i].parentElement.textContent;
            x = x.split(" ").join("");
            selectedDept.push(x.toLowerCase())
        }
    }
    if (selectedDept.length == 0)
        return true;
    var employeeDepartment = employee.split(" ").join("").toLowerCase();
    for (let i = 0; i < selectedDept.length; i++) {
        if (selectedDept[i] == employeeDepartment.toLowerCase())
            return true;
    }
    return false;
}

function applyFilter() {
    let filteredEmployees = [];
    let status, location, department;
    let rows = employeeDetails();
    for (var i = 1; i < rows.length; i++) {
        status = checkStatusFilter(rows[i].status);
        location = checkLocationFilter(rows[i].location);
        department = checkDepartmentFilter(rows[i].dept);
        if (status && location && department) {
            filteredEmployees.push(rows[i]);
        }
    }
    populateFilteredTable(filteredEmployees);
}

function resetFilter() {
    populateTable();
    let check = document.querySelectorAll('.filter-options-container input');
    for (let i = 0; i < check.length; i++) {
        check[i].checked = false;
    }
    applyFilter();
    var alphabetFilterParent = document.querySelector('.a-to-z-filter');
    var allAlphabets = alphabetFilterParent.querySelectorAll('div:not(:first-child)');
    allAlphabets.forEach(x => x.classList.remove('selected'));
    var filterIcon = document.getElementById('filter-icon');
    filterIcon.classList.remove('selected');
    disableFilterBtn();
}

function selectAllRow() {
    var checkbox = document.querySelectorAll('.check-box-col input');
    if (checkbox[0].checked == true) {
        for (var i = 1; i < checkbox.length; i++) {
            checkbox[i].checked = true;
        }
    }
    else {
        for (var i = 1; i < checkbox.length; i++) {
            checkbox[i].checked = false;
        }
    }
    activateDeleteButton();
}

function deleteFromSessionStorage(employee) {
    let savedEmployees = JSON.parse(sessionStorage.getItem("employeesTableDetail")) || [];
    selectedEmployee = employee.querySelector('.col-emp-no').textContent;
    savedEmployees = savedEmployees.filter((savedEmployee) => savedEmployee.empNo != selectedEmployee);
    sessionStorage.setItem("employeesTableDetail", JSON.stringify(savedEmployees));
}

function confirmDelete(){

}
function openDeleteConfirmation() {
    var deleteConfirmation = document.getElementsByClassName('delete-confirmation')[0];
    deleteConfirmation.classList.add('show-delete-confirmation');
}
function closeDeleteConfirmation(){
    var deleteConfirmation = document.getElementsByClassName('delete-confirmation')[0];
    deleteConfirmation.classList.remove('show-delete-confirmation');
}
function deleteRow() {
    const employeeTable = document.getElementById("employee-table");
    var rows = employeeTable.getElementsByTagName('tr');
    var checkbox = document.querySelectorAll('.check-box-col input');
    for (var i = 1; i < rows.length; i++) {
        if (checkbox[i].checked) {

            deleteFromSessionStorage(rows[i]);
        }
    }
    closeDeleteConfirmation();
    window.location.reload();

}

function tableToCSV() {
    let employees = employeeDetails();
    console.log(employees);
    let csvContent = arrayToCSV(employees);
    console.log(csvContent);
    downloadCSVFile(csvContent);
}

function arrayToCSV(objArray) {
    const array = typeof objArray !== 'object' ? JSON.parse(objArray) : objArray;
    let headers = Object.keys(array[0]).filter(header => header !== "img");
    //     let str = `${headers.map(value => `"${value}"`).join(",")}\r\n`;
    let str = '"NAME","EMAIL","LOCATION","DEPARTMENT","ROLE","EMPLOYEE NO","STATUS","JOIN-DATE"\r\n';
    return array.reduce((str, next) => {
        str += `${headers.map(header => `"${next[header]}"`).join(",")}\r\n`;
        return str;
    }, str);
}

function downloadCSVFile(csv_data) {
    CSVFile = new Blob([csv_data], { type: "csv" });
    let temp_link = document.createElement('a');
    temp_link.download = "employeeTable.csv";
    let url = window.URL.createObjectURL(CSVFile);
    temp_link.href = url;
    temp_link.style.display = "none";
    document.body.appendChild(temp_link);
    temp_link.click();
    document.body.removeChild(temp_link);
}

function sortEmployeeTable() {
    let employeeTable = document.getElementById('employee-table');
    let tableHeaders = employeeTable.getElementsByTagName('th');
    for (let i = 1; i < tableHeaders.length - 1; i++) {
        tableHeaders[i].addEventListener("click", sortColumn.bind(this, tableHeaders[i]));
    }
}

let asc = false;
function sortColumn(column){
    let employees=employeeDetails();
    let value=column.textContent.trim().split(" ").join("").toLowerCase();
    let columnName=""
    switch (value) {
        case "user":columnName= "name"; 
            break;
        case "location":columnName= "location"; 
            break;
        case "department":columnName= "dept"; 
            break;
        case "role":columnName= "role"; 
            break;
        case "empno":columnName= "empNo"; 
            break;
        case "joindt":columnName= "joinDate"; 
            break;
    }
    sortArrayByKey(employees,columnName);
    sessionStorage.setItem("employeesTableDetail",JSON.stringify(employees));
    unpoplateTable();
    populateTable();
    asc=!asc;
}

function sortArrayByKey(arr, key) {
    return arr.sort((a, b) => {
      const x = a[key]; 
      const y = b[key];
      if(!asc){
        if (x < y) {
            return -1;
          }
          if (x > y) {
            return 1;
          }
      }
      else{
        if (x > y) {
            return -1;
          }
          if (x < y) {
            return 1;
          }
      }
      return 0;
    });
  }
  
function displayImagePreview(event) {
    let image = document.getElementById("profileImageInput").files[0];
    if (image) {
        var url = URL.createObjectURL(image);
        document.querySelector('#profileImagePreview').src = url;
    }

}
function showValidInput(element, message) {
    element.style.outlineColor = "red";
    let parentDiv = element.parentElement;
    let span = parentDiv.querySelector('span');
    if (span) {
        span.innerHTML = message;
        span.style.color = "red";
    }
}
function handleFormSubmit(event) {
    event.preventDefault();
    let employees = employeeDetails();
    const form = document.getElementById("employeeForm");
    let formInput = form.getElementsByTagName('input');
    let formSelect = form.getElementsByTagName('select');
    let flag = true
    for (let i = 1; i < formInput.length; i++) {
        let element = formInput[i]
        if (element.name == 'dob') {
            continue;
        }
        else if (element.name == 'empNo') {
            if (element.value == "") {
                showValidInput(element, `&#9888; this is required field`)
                flag = false;
            }
            if (element.value != "") {
                showValidInput(element, ``)
            }
            for (let i = 0; i < employees.length; i++) {
                if (employees[i].empNo == element.value) {
                    showValidInput(element, `&#9888; Employee ID already exists!`)
                    flag = false;
                    break;
                }
            }

        }
        else if (element.name == 'mobileNumber') {
            if (element.value == "") {
                showValidInput(element, `&#9888; this is required field`)
                flag = false;
            }
            else if (element.value.toString().length != 10) {
                showValidInput(element, `&#9888; Enter valid number`)
                flag = false;
            }
            else {
                showValidInput(element, ``);
            }
        }
        else if (element.name == 'firstName' || element.name == 'lastName') {
            if (element.value == "") {
                showValidInput(element, `&#9888; this is required field`)
                flag = false;
            }
            else if (element.value != "") {
                showValidInput(element, ``);
            }
        }
        else if (element.name == 'email') {
            let emailRegex = /^[a-zA-Z0-9._]+@[a-zA-Z0-9.]+\.[a-zA-Z]{2,}$/;

            if (element.value == "") {
                showValidInput(element, `&#9888; this is required field`)
                flag = false;
            }
            else if (element.value != "") {
                if( !emailRegex.test(element.value)) {
                    showValidInput(element, "&#9888; Invalid Email Address")
                    flag=false;
                }
                else {
                    showValidInput(element, ``);
                }
            }
        }
        else if (element.name == 'joiningDate') {
            if (element.value == "") {
                showValidInput(element, `&#9888; this is required field`)
                flag = false;
            }
            else if (element.value != "") {
                showValidInput(element, ``);
            }
        }

    }

    for (let i = 0; i < formSelect.length; i++) {
        let element = formSelect[i];
        if (element.value == '') {
            console.log(i);
            showValidInput(element, `&#9888; this is required field`);
            flag = false;
        }
        else {
            showValidInput(element, ``);
        }
    }

    if (!flag)
        return




    const formData = new FormData(form);
    const empNo = formData.get("empNo");
    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const email = formData.get("email");
    let joiningDate = formData.get("joiningDate");
    const location = formData.get("location");
    const jobTitle = formData.get("jobTitle");
    const department = formData.get("department");
    const profileImageFile = formData.get("profileImage");
    const name = firstName + ' ' + lastName;
    console.log(empNo);
    let value = joiningDate.split('-');
    joiningDate = `${value[2]}/${value[1]}/${value[0]}`;
    let newEmployeeDetails = {
        "dept": department,
        "email": email,
        "empNo": empNo,
        "img": "",
        "joinDate": joiningDate,
        "location": location,
        "name": name,
        "role": jobTitle,
        "status": "Active"
    };
    let profileImageBase64 = "";
    if (profileImageFile) {
        const reader = new FileReader();
        reader.readAsDataURL(profileImageFile);
        reader.onload = function () {
            profileImageBase64 = reader.result;
            newEmployeeDetails["img"] = profileImageBase64;
            saveToSessionStorage(newEmployeeDetails);
            form.reset();
            alert("Employee data has been stored !");
        };
    } else {
        saveToSessionStorage(newEmployeeDetails);
        form.reset();
        alert("Employee data has been stored !");
    }
    console.log(newEmployeeDetails);
    closeAddEmployeeModal();
}

function createEllipsisMenu(employee) {
    var ellipsisParent = document.createElement('div');
    ellipsisParent.classList.add('ellipsis-menu', 'hide-ellipsis-menu', 'flex-column');

    var moreDetails = document.createElement('div');
    var edit = document.createElement('div');
    var dlt = document.createElement('div');

    moreDetails.classList.add('child');
    moreDetails.textContent = "More Details"
    edit.classList.add('child');
    edit.textContent = 'Edit';
    dlt.classList.add('child');
    dlt.textContent = "delete";
    ellipsisParent.appendChild(moreDetails);
    ellipsisParent.appendChild(edit);
    ellipsisParent.appendChild(dlt);
    ellipsis = employee.lastChild;
    ellipsis.appendChild(ellipsisParent);
}
function addEllipsisMenuToAll() {
    var employeeTable = document.getElementById('employee-table');
    var rows = employeeTable.querySelectorAll("tr");

    for (let i = 1; i < rows.length; i++) {
        createEllipsisMenu(rows[i]);
    }
}

function openAddEmployeeModal() {
    var AddEmployeeModal = document.getElementsByClassName('add-employee-form')[0];
    AddEmployeeModal.classList.add('show-addEmployee-form');
}
function closeAddEmployeeModal() {
    location.reload();
    var AddEmployeeModal = document.getElementsByClassName('add-employee-form')[0];
    AddEmployeeModal.classList.remove('show-addEmployee-form');
}

function disableFilterButton() {
    let input = document.querySelectorAll('.filter-options-container input');
    for (let i = 0; i < input.length; i++) {
        input[i].addEventListener('click', checkdisableFilterButton);
    }
}
function checkdisableFilterButton() {
    let input = document.querySelectorAll('.filter-options-container input');
    let count = 0
    for (let i = 0; i < input.length; i++) {
        if (input[i].checked == true)
            count += 1;
    }
    if (count <= 0)
        disableFilterBtn();
    else
        enableFilterBtn();
}
function enableFilterBtn() {
    let applyButton = document.getElementsByClassName('apply-btn')[0];
    let resetButton = document.getElementsByClassName('reset-btn')[0];
    applyButton.classList.add('active');
    resetButton.classList.add('active');
}
function disableFilterBtn() {
    let applyButton = document.getElementsByClassName('apply-btn')[0];
    let resetButton = document.getElementsByClassName('reset-btn')[0];
    if (applyButton.classList.contains('active'))
        applyButton.classList.remove('active');
    if (resetButton.classList.contains('active'))
        resetButton.classList.remove('active');
}