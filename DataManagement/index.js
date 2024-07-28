async function getData() {
  const data = await fetch("./data.json");
  const response = await data.json();

  //select a employee
  let employee = response;
  let selectedEmployeeById = employee[0].id;
  let selectedEmployee = employee[0];

  let employeeNameList = document.querySelector(".employee-names-list");
  let employeeNameInfo = document.querySelector(".employee-names-info");

  //selected Employee EventListener

  employeeNameList.addEventListener("click", (e) => {
    if (e.target.tagName === "SPAN" && selectedEmployeeById !== e.target.id) {
      selectedEmployeeById = e.target.id;
      renderEmployees();
      singleEmployee();
    }
  });

  //render employees
  const renderEmployees = () => {
    employeeNameList.innerHTML = "";
    employee.forEach((em) => {
      //create a span element
      const employeeSpan = document.createElement("span");
      employeeSpan.classList.add("employee-names-item");

      if (parseInt(selectedEmployeeById, 10) === em.id) {
        employeeSpan.classList.add("selected");
        selectedEmployee = em;
      }

      employeeSpan.setAttribute("id", em.id);
      employeeSpan.innerHTML = `${em.firstName} ${em.lastName} <i class="employeeDelete">❌</i>`;

      employeeNameList.append(employeeSpan);
    });
  };

  //render One Single Employee

  function singleEmployee() {
    employeeNameInfo.innerHTML = `<img src="${selectedEmployee?.imageUrl}"/>
     <span class="employees__single--heading">
      ${selectedEmployee.firstName} ${selectedEmployee.lastName} (${selectedEmployee.age})
      </span>
      <span>${selectedEmployee.address}</span>
      <span>${selectedEmployee.email}</span>
      <span>Mobile - ${selectedEmployee.contactNumber}</span>
      <span>DOB - ${selectedEmployee.dob}</span>`;
  }

  selectedEmployee && singleEmployee();

  renderEmployees();
}
getData();
