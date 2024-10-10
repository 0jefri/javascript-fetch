document.getElementById("loadUsers").addEventListener("click", async function () {
  try {
    const response = await fetch("https://reqres.in/api/users?page=2");
    const data = await response.json();

    if (data && data.data) {
      const userList = document.getElementById("userList");
      userList.innerHTML = "";

      // throw new Error("Data Tidak Valid");

      data.data.forEach(user => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
                  <strong>${user.first_name} ${user.last_name}</strong>
                  <button onclick="loadUserDetail(${user.id})">Detail</button>
              `;
        userList.appendChild(listItem);
      });
    } else {
      console.log("No users found");
    }
  } catch (error) {
    console.error("Error fetching users:", error);
  }
});

async function loadUserDetail(userId) {
  try {
    const response = await fetch(`https://reqres.in/api/users/${userId}`);
    const userDetail = await response.json();

    if (userDetail && userDetail.data) {
      const userDetailDiv = document.getElementById("userDetail");
      userDetailDiv.style.display = "block";
      userDetailDiv.innerHTML = `
              <h2>User</h2>
              <p><strong>ID:</strong> ${userDetail.data.id}</p>
              <p><strong>Name:</strong> ${userDetail.data.first_name} ${userDetail.data.last_name}</p>
              <p><strong>Email:</strong> ${userDetail.data.email}</p>
              <img src="${userDetail.data.avatar}" alt="${userDetail.data.first_name}'s avatar" width="100">
          `;
    } else {
      console.log("User detail not found");
    }
  } catch (error) {
    console.error("Error fetching user detail:", error);
  }
}
