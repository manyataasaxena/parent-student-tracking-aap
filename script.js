// CHART

const ctx = document.getElementById('marksChart');

new Chart(ctx, {
  type: 'bar',

  data: {
    labels: [
      'Math',
      'Physics',
      'Chemistry',
      'English',
      'Computer'
    ],

    datasets: [{
      label: 'Student Marks',

      data: [92, 85, 80, 88, 96],

      borderWidth: 1
    }]
  },

  options: {
    responsive: true,

    scales: {
      y: {
        beginAtZero: true,
        max: 100
      }
    }
  }
});
let totalClasses = document.querySelectorAll("#attendanceTable tr").length;

let presentClasses = document.querySelectorAll(
  "#attendanceTable .present"
).length;

// ATTENDANCE SYSTEM



function addAttendance(){

  let date = document.getElementById("date").value;

  let subject = document.getElementById("subject").value;

  let status = document.getElementById("status").value;

  if(date === "" || subject === ""){
    alert("Please fill all fields");
    return;
  }

  let table = document.getElementById("attendanceTable");

  let row = document.createElement("tr");

  let statusClass = "";

  if(status === "Present"){
    statusClass = "present";
    presentClasses++;
  }

  else if(status === "Absent"){
    statusClass = "absent";
  }

  else{
    statusClass = "late";
  }

  totalClasses++;

  row.innerHTML = `
    <td>${date}</td>
    <td>${subject}</td>
    <td class="${statusClass}">${status}</td>
  `;

  table.appendChild(row);

  updateAttendance();

  document.getElementById("date").value = "";
  document.getElementById("subject").value = "";
}


// UPDATE ATTENDANCE %
function updateAttendance(){

  let percent = ((presentClasses / totalClasses) * 100).toFixed(1);

  // Attendance section update
  document.getElementById("attendancePercent").innerText =
    percent + "%";

  // Dashboard card update
  document.getElementById("attendanceCard").innerText =
    percent + "%";
}