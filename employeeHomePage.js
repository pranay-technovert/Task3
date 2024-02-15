document.addEventListener("DOMContentLoaded", async function () {

    async function employeeRowsJson() {
        try {
            if (!sessionStorage.getItem('employeesTableDetail')) {
                const response = await fetch("../defaultEmployeesDetails.json");
                var employeeList = await response.json();
                for (let i = 0; i < employeeList.length; i++) {
                    saveToSessionStorage(employeeList[i]);
                }
                window.location.reload();
            }
        } catch (error) {
            console.error("Error fetching JSON:", error);
        }
    }
    let uploadProfilePic = document.getElementById('profileImageInput');
    uploadProfilePic.addEventListener('change', displayImagePreview);

    employeeRowsJson();
    populateTable();
    setAlphabeticFilter();
    sortEmployeeTable();
    addEllipsisMenuToAll();
    disableFilterButton();
    const addEmployeeForm = document.getElementsByClassName('add-employee-form')[0];
    addEmployeeForm.addEventListener("submit", handleFormSubmit);

    var employeeTable = document.getElementById('employee-table');
    var rows = employeeTable.getElementsByTagName("tr");
    for (let i = 1; i < rows.length; i++) {
        const element = rows[i].querySelector(".three-dots");
        element.addEventListener('click', toggleEditOption);
    }

    function toggleEditOption() {
        let allEllipsisMenu = document.querySelectorAll(`.ellipsis-menu`);
        let dots = this.querySelector(`.ellipsis-menu`);
        for (let i = 0; i < allEllipsisMenu.length; i++) {
            if (allEllipsisMenu[i] == dots)
                continue;
            else {
                allEllipsisMenu[i].classList.add('hide-ellipsis-menu');
            }
        }

        if (dots.classList.contains('hide-ellipsis-menu')) {
            dots.classList.remove('hide-ellipsis-menu');
        }
        else
            dots.classList.add('hide-ellipsis-menu');
    }
});
