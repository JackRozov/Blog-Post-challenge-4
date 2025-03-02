const submmitBtn = document.querySelector('#button');
const formSubmit = function (event) {
    // Slash refresh
    event.preventDefault()
    // Capturing values of inputs
    const userName = document.querySelector('#username').value.trim();
    const title = document.querySelector('#title').value.trim();
    const content = document.querySelector('#content').value.trim();
    // console.log(`Username: `+userName)
    // console.log(`Title: `+ title)
    // console.log(`Content: `+ content)


    if (userName == "" || userName.trim() == " ") {
        alert("Incomplete, please fill out the form");
    } else if (title == "" || title.trim() == " ") {
        alert("Incomplete, please fill out the form");
    } else if (content == "" || content.trim() == " ") {
        alert("Incomplete, please fill out the form");
    } else { alert("Form submitted successfully");

        let newTab = document.createElement('a');
        newTab.href = "./blog.html";
        newTab.target = "_blank";
        newTab.click();
}

// create object to store in local storage
const objective = {
    userName: userName,
    title: title,
    content: content,
}

// console.log(objective)
storeData(objective)
}
const storeData = function (data) {
    // console.log(data)
    const existingPost = readData()
    existingPost.push(data)
    // console.log(existingPost)
    const stringedData = JSON.stringify(existingPost);
    console.log(stringedData)
    localStorage.setItem('dataArray', stringedData)
}

submmitBtn.addEventListener('click', formSubmit)