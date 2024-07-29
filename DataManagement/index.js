async function getData() {
  //fetch the data from the JSON file.
  const data = await fetch("./data.json");
  const response = await data.json();

  //organizing the information that is being acquired.
  let employee = response;
  let selectedEmployeeById = employee[0].id;
  let selectedEmployee = employee[0];

  let employeeNameList = document.querySelector(".employee-names-list");
  let employeeNameInfo = document.querySelector(".employee-names-info");

  // Add employee
  const addEmployeeModal = document.querySelector(".addEmployee");
  const createEmployeeForm = document.querySelector(".create-employee");
  const addEmployeeBtn = document.querySelector(".addEmployeeBtn");

  addEmployeeBtn.addEventListener("click", () => {
    addEmployeeModal.style.display = "flex";
  });

  addEmployeeModal.addEventListener("click", (e) => {
    if (e.target.className === "addEmployee") {
      addEmployeeModal.style.display = "none";
    }
  });

  //DOB must be over 18
  const dobInput = document.querySelector(".addEmployee-create--dob");
  const today = new Date();
  const maxDate = new Date(
    today.getFullYear() - 18,
    today.getMonth(),
    today.getDate()
  );
  // Format the date as YYYY-MM-DD to match the input date format
  const formattedDate = maxDate.toISOString().split("T")[0];
  dobInput.max = formattedDate;

  //Calculate the Age.....................

  createEmployeeForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(createEmployeeForm);

    const values = [...formData.entries()];

    let employeeObject = {};

    values.forEach((value) => {
      employeeObject[value[0]] = value[1];
    });

    employeeObject.id = employee[employee.length - 1].id + 1;
    employeeObject.age =
      new Date().getFullYear() - parseInt(employeeObject.dob.slice(0.4), 10);

    employee.imageUrl =
      employeeObject.imageUrl ||
      "https://cdn-icons-png.flaticon.com/512/0/93.png";

    employee.push(employeeObject);
    renderEmployees();
    createEmployeeForm.reset();
    addEmployeeModal.style.display = "none";
  });

  // ----------------------

  //selected Employee EventListener
  employeeNameList.addEventListener("click", (e) => {
    if (e.target.tagName === "SPAN" && selectedEmployeeById !== e.target.id) {
      selectedEmployeeById = e.target.id;
      renderEmployees();
      singleEmployee();
    }

    if (e.target.tagName === "I") {
      employee = employee.filter(
        (element) => String(element.id) !== e.target.parentNode.id
      );
    }

    if (String(selectedEmployeeById) === e.target.parentNode.id) {
      selectedEmployeeById = employee[0]?.id || -1;
      selectedEmployee = employee[0] || {};
      singleEmployee();
    }

    renderEmployees();
  });

  //render employees within the employee div element
  const renderEmployees = () => {
    employeeNameList.innerHTML = "";
    employee.forEach((em) => {
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
    if (selectedEmployeeById === -1) {
      employeeNameInfo.innerHTML = "";
      return;
    }

    employeeNameInfo.innerHTML = `<img src="${selectedEmployee?.imageUrl}"/>
     <span class="employees-single--heading">
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
