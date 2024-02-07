let contacts = [];

function addContact() {
    let n = document.getElementById("name").value;
    let p = document.getElementById("phone").value;
    let e = document.getElementById("email").value;

    if (n === "" || p === "" || e === "") {
        alert('Please fill in all fields');
        return;
    }
    let newContact = {
        name: n,
        phone: p,
        email: e
    };
    contacts.push(newContact);
    document.getElementById("name").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("email").value = "";
    updateContactList();
}



for (let j of contacts) {
    console.log(j.name);
}

function updateContactList() {

    let contactsList = document.getElementById("contacts");
    contactsList.textContent = "";



    for (let i of contacts) {
        let row = document.createElement("tr");
        let col1 = document.createElement("td");
        col1.textContent = i.name;
        row.appendChild(col1);
        let col2 = document.createElement("td");
        col2.textContent = i.phone;
        row.appendChild(col2);
        let col3 = document.createElement("td");
        col3.textContent = i.email;
        row.appendChild(col3);
        contactsList.appendChild(row);
    }

}
updateContactList();
for (let j of contacts) {
    console.log(j.name);
}

let updateContainer = document.getElementById("updateContainer");
let changeName = document.getElementById("cn");
let para = document.getElementById("ChangePara");


function changeContact() {

    let change = contacts.find(function(each) {
        if (each.name === changeName.value) {
            return true;
        } else {
            return false;
        }
    });
    if (change === undefined) {
        para.textContent = "Person not found in the contact List";
        para.style.color = "red";
    } else {
        para.textContent = [change.name, change.phone, change.email];
        para.style.color = "green";
    }
    updateContainer.appendChild(para);

}


let deleteContainer = document.getElementById("deleteContainer");
let inputSearch = document.getElementById("cn1");
let deletePara = document.getElementById("deletePara");

function deletion() {
    let del = contacts.findIndex(function(each) {
        if (each.name === inputSearch.value) {
            return true;
        } else {
            return false;
        }
    });
    if (del === -1) {
        deletePara.textContent = "Name not found to delete";
        deletePara.style.color = "red";

    } else {
        contacts.splice(del, 1);
        deletePara.textContent = "contact deleted successfully";
        deletePara.style.color = "green";
    }
    deleteContainer.appendChild(deletePara);
    updateContactList();
}


let updatContainer = document.getElementById("update-Container");
let checkContainer = document.getElementById("checkBox");
let Namee = document.getElementById("cn2");
let checking = document.getElementById("checking");
let namee = document.getElementById("updateName");
let phonee = document.getElementById("updatePhone");
let emaill = document.getElementById("updateEmail");
let pu = document.getElementById("updatePara");

function update() {

    let change = contacts.find(function(each) {
        if (each.name === Namee.value) {
            return true;
        } else {
            return false;
        }
    });
    console.log(change);
    let flag = 0;
    if (namee.checked) {
        flag = 1;
        let nameinput = document.createElement("input");
        nameinput.classList.add("input1");
        nameinput.type = "text";
        nameinput.id = "a1";

        let la = document.createElement("label");
        la.setAttribute("for", nameinput.id);
        la.textContent = "Enter present Name";
        checking.appendChild(la);
        checking.appendChild(nameinput);
        updatContainer.appendChild(checking);

        nameinput.addEventListener("keydown", function(event) {
            if (event.key === "Enter") {
                change.name = nameinput.value;
                console.log(change.name);
                pu.textContent = "Name Updated Successfully";
                pu.style.color = "green";
                updateContactList();
            }
        });

    }
    if (phonee.checked) {
        flag = 1;
        let nameinput = document.createElement("input");
        nameinput.classList.add("input1");
        nameinput.type = "text";
        nameinput.id = "a1";

        let la = document.createElement("label");
        la.setAttribute("for", nameinput.id);
        la.textContent = "Enter present phone Number";
        checking.appendChild(la);
        checking.appendChild(nameinput);
        updatContainer.appendChild(checking);

        nameinput.addEventListener("keydown", function(event) {
            if (event.key === "Enter") {
                change.phone = nameinput.value;
                console.log(change.phone);
                pu.textContent = "Phone Number Updated Successfully";
                pu.style.color = "green";
                updateContactList();
            }
        });

    }
    if (emaill.checked) {
        flag = 1;
        let nameinput = document.createElement("input");
        nameinput.classList.add("input1");
        nameinput.type = "text";
        nameinput.id = "a1";

        let la = document.createElement("label");
        la.setAttribute("for", nameinput.id);
        la.textContent = "Enter present Email.Id";
        checking.appendChild(la);
        checking.appendChild(nameinput);
        updatContainer.appendChild(checking);

        nameinput.addEventListener("keydown", function(event) {
            if (event.key === "Enter") {
                change.email = nameinput.value;
                console.log(change.email);
                pu.textContent = "Email Updated Successfully";
                pu.style.color = "green";
                updateContactList();
            }
        });
    }
}