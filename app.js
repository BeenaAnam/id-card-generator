function generate() {
  let name = document.getElementById("name").value;
  let Fname = document.getElementById("Fname").value;
  let edu = document.getElementById("edu").value;
  let course = document.getElementById("course").value;
  let email = document.getElementById("email").value;
  let image = document.getElementById("image").files[0];

  let imageURL = image ? URL.createObjectURL(image) : "";

  // Image first
  let output = "";
  if (imageURL) {
    output += `<img src="${imageURL}" alt="Profile Image">`;
  }
  output += `
  <h2 class="info">Name: ${name}</h2>
  <h2 class="info">Father Name: ${Fname}</h2>
  <h2 class="info">Education: ${edu}</h2>
  <h2 class="info">Course: ${course}</h2>
  <h2 class="info">Email: ${email}</h2>
`;

//   output += `<h2>Name: ${name}</h2> <h2>Father Name: ${Fname}</h2> <h2>Education: ${edu}</h2>
//         <h2>Job: ${job}</h2> <h2>Email: ${email}</h2>`;

  document.getElementById("data").innerHTML = output;
}
