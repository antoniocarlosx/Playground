const employees = [
  { id: 1, name: "John Doe", age: 30, department: "IT", salary: 50000 },
  { id: 2, name: "Alice Smith", age: 28, department: "HR", salary: 45000 },
  { id: 3, name: "Bob Johnson", age: 35, department: "Finance", salary: 60000 },
  { id: 4, name: "Emily Davis", age: 31, department: "HR", salary: 48000 },
  {
    id: 5,
    name: "Michael Brown",
    age: 45,
    department: "Operations",
    salary: 68000,
  },
  { id: 6, name: "Sarah Wilson", age: 26, department: "Sales", salary: 45000 },
  { id: 7, name: "James Taylor", age: 38, department: "Legal", salary: 85000 },
  {
    id: 8,
    name: "Jessica Anderson",
    age: 33,
    department: "Finance",
    salary: 62000,
  },
  { id: 9, name: "John Thomas", age: 50, department: "IT", salary: 90000 },
  {
    id: 10,
    name: "Amanda Garcia",
    age: 29,
    department: "Marketing",
    salary: 54000,
  },
];

// Função para exibir todos os funcionários

/* Com o map itera-se por cada funcionário no array, e, para cada funcionário ele constrói uma string literal com os dados de ID, nome, departamento e salário, sendo unidos com o Join em uma string unica sem separadores. Joga isso na constante totalEmployees que mostra o resultado lá no html, mas precisamente na div com id #employeesDetails */

function displayEmployees() {
  const totalEmployees = employees
    .map(
      (employee) =>
        `<p>${employee.id}: ${employee.name} - ${employee.department} - ${employee.salary}</p>`,
    )
    .join('');

    document.getElementById('employeesDetails').innerHTML = totalEmployees
}
