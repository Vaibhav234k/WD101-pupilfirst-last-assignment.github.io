
    //date picker restriction
    const dob2 = document.getElementById("dob");
    const today = new Date().toISOString().slice(4, 10);

    const year = new Date().getFullYear();

    dob2.min = `${year - 55}${today}`;
    dob2.max = `${year - 18}${today}`;

    let UserEntries = [];
    let flag = true;

    function submitListener(event) {
      event.preventDefault();
      document.getElementById("showData").innerHTML = "";
      var name = document.getElementById("name").value;
      var email = document.getElementById("email").value;
      var password = document.getElementById("password").value;
      var dob = document.getElementById("dob").value;
      var acceptTerms = document.getElementById("acceptTerms").checked;

      var entries = {
        name,
        email,
        password,
        dob,
        acceptTerms,
      };
      if (flag) {
        var users = [];
        users = JSON.parse(localStorage.getItem("user-entries")) || [];
        for (var i = 0; i < users.length; i++) {
          UserEntries.push(users[i]);
        }
        flag = false;
      }
      UserEntries.push(entries);
      localStorage.setItem("user-entries", JSON.stringify(UserEntries));
      showData();
    }
    function showData() {
      var users = JSON.parse(localStorage.getItem("user-entries")) || [];
      for (var i = 0; i < users.length; i++) {
        let res = `<tr>
        <td class="py-3 px-2">${users[i].name}</td>
        <td class="py-3 px-2">${users[i].email}</td>
        <td class="py-3 px-2">${users[i].password}</td>
        <td class="py-3 px-2">${users[i].dob}</td>
        <td class="py-3 px-2">${users[i].acceptTerms}</td>
      </tr>`;
        document.getElementById("showData").innerHTML += res;
      }
    }
    showData();
