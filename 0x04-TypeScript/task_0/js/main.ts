interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }
  const student1: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    location: "CityA",
  };

  const student2: Student = {
    firstName: "Jane",
    lastName: "Doe",
    age: 22,
    location: "CityB",
  };
  
  const studentsList: Student[] = [student1, student2];

  const table = document.getElementById("studentTable");

  if (table instanceof HTMLTableElement) {
    // Create table header
    const headerRow = table.createTHead().insertRow(0);
    const headerCell1 = headerRow.insertCell(0);
    const headerCell2 = headerRow.insertCell(1);
    headerCell1.textContent = "First Name";
    headerCell2.textContent = "Location";
  
    // Populate the table with student data
    studentsList.forEach((student, index) => {
      const row = table.insertRow(index + 1);
      const cell1 = row.insertCell(0);
      const cell2 = row.insertCell(1);
      cell1.textContent = student.firstName;
      cell2.textContent = student.location;
    });
  }