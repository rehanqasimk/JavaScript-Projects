// Getting the DOM Elements
const main = $("#main")[0];
const addUserButton = $(".add-user")[0];
const doubleButton = $(".double")[0];
const millionairesButton = $(".millionaires")[0];
const sortButton = $(".sortbyRichest")[0];
const calWealthButton = $(".calculatetotalWealth")[0];

let data = [];

// Getting random Userdata using Asyn Await
async function getRandomUser() {
       const res = await fetch("https://randomuser.me/api/");
       const data2 = await res.json();
    //    console.log(data)
       const user = {
           username: `${data2.results[0].name.first} ${data2.results[0].name.last}`,
           balance: Math.floor(Math.random() * 1000000)
       };
    //    console.log(data);
    //    console.log(user.length , user);
    //    console.log(data.results);
    //    console.log(data.results[0].name);
    
    AddUser(user);
}

// Function to Currency format 

const currencyFormat = (string) => {
    string = string.toFixed(2);
    return string.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
}

//  Adding User to the Data Array
const AddUser = (newUser) => {
    data.push(newUser);
    // console.log(data);
    updateDom();
}

//  function to double the wealth
const doubleWealth = () => {
        data = data.map(item => {
            // console.log(item);
            return {...item, balance:item.balance*2}
        })
    updateDom();
    }

// function to filter the millionaires ..

const filterMillionaires = () => {
    data = data.filter( item => {
        return item.balance >= 1000000;})
    updateDom();
}

//  sortByRichist function 
const sortByRichist = () => {
    data.sort((a,b) => a.balance > b.balance ? -1: 1 );
    // console.log(data);
    updateDom();
}
//  Calculate Total Wealth
const calTotalWealth= () =>{
    const h2 = document.createElement("h3");
    const Totalwealth = data.reduce( (acc,item) => {
            return acc + item.balance;
    },0);
    h2.innerHTML = `<strong>Total Wealth</strong> ${currencyFormat(Totalwealth)}`;
    h2.classList.add("user");
    main.appendChild(h2);    
}


// Now Updating DOM 
const updateDom = (par = data) =>{
    main.innerHTML = '<h2><strong>Name</strong> Net Worth</h2>';
    // console.log("par", par);
    par.forEach(i => {
        const h2 = document.createElement("h3");
        // console.log("objec here", i);
        h2.innerHTML = `<strong>${i.username}</strong> ${currencyFormat(i.balance)}`;
        h2.classList.add("user");
        main.appendChild(h2);
    })
}

getRandomUser();
getRandomUser();
getRandomUser();
// 1- Adding EventListener to the Add User button
addUserButton.addEventListener("click", getRandomUser);

// 2- Adding EventListener to the doubleButton button
doubleButton.addEventListener("click", doubleWealth);

// 3- Adding EventListener to filter the millionaires ..
millionairesButton.addEventListener("click", filterMillionaires);

// 4- Adding Event Listener to the sortButton button
sortButton.addEventListener('click', sortByRichist);

// 5- Add EventListener to the calTotalWealth button
calWealthButton.addEventListener('click', calTotalWealth);