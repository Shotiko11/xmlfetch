
//XML

// function getUsers() {
//     //ეს მონაცემები გადავაქციეთ ჩვეულებრივ "ობიექტად".
//     function rander() {
//         const div = document.getElementById('divi');
//         let response = this.responseText;
//         let responseData = JSON.parse(response);
//         console.log(responseData)

//         let ul = document.createElement('ul');
         
//         //"ფორ იჩის" დახმარებით გადავუარეთ ამ "დატა"-ს, და შექმნის იმდენ "ლი"-ს რამდენი ელემენტიც იქნება "დატა"-ში
//         responseData.data.forEach(eLement => {
//             let li = document.createElement('li');
//             li.innerText = eLement.name;
//             ul.appendChild(li);
            
//         });
        
//         document.getElementById('divi').appendChild(ul);

//     }

//     let requist = new XMLHttpRequest();
// requist.addEventListener('load', rander);
// requist.open("GET", "https://reqres.in/api/unknown");
// requist.send();

// }


// getUsers();

// // ეს მოსული ინფომაცია გადაგვყავს ობიექტში "json"







// FETCH

fetch("https://reqres.in/api/unknown", {
    method: "GET",
})

    .then(function (response) {
    if(response.status !== 200) {
        throw response.status
    }
    return response.json();
})

//წარმატების შემთხვევაში 
.then(function (responseData) {
    let li = document.createElement('li');
    let ul = document.createElement('ul');

    li.innerText = responseData.data[0].id;
    ul.appendChild(li);
    document.getElementById('divi').appendChild(ul);
    console.log(responseData)
})


//წარუმატებლობის შემთხევვაში 
.catch(function (error) {
    let p = document.createElement('p');
    p.innerText = "eRRor"
    document.getElementById('divi').appendChild(p);
    console.log(error)
})