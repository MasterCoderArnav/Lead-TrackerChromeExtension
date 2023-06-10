let bt = document.getElementById("btn");
let bt1 = document.getElementById("btn1");
let text = document.getElementById("inp");
let savedElems = document.getElementById("savedEl");
let bt2 = document.getElementById("btn2");

const tabs = [
    {url: "https://www.linkedin.com/in/arnav-tripathi-275086245/"},
]

// let leads = [];
let leads = (localStorage.getItem("myLeads"))!=null?JSON.parse(localStorage.getItem("myLeads")):[];
for(let i = 0; i < leads.length; i++){
    savedElems.innerHTML += `<li>
    <a target = "_blank" href = "${leads[i]}">${leads[i]}</a></li>`;
}
const render = (myLeads) => {
    myLeads.push(text.value);
    text.value = "";
    savedElems.innerHTML += `<li>
        <a target = "_blank" href = "${myLeads[myLeads.length - 1]}">${myLeads[myLeads.length - 1]}</a></li>`;
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    // console.log(localStorage.getItem("myLeads"))
}

bt.addEventListener("click", () => {
    render(leads);
});

bt1.addEventListener("click", () => {
    localStorage.clear();
    leads = [];
    savedElems.innerHTML = "";
});

bt2.addEventListener("click", () => {
    leads.push(tabs[0].url);
    localStorage.setItem("myLeads", JSON.stringify(leads));
    savedElems.innerHTML += `<li>
    <a target = "_blank" href = "${leads[leads.length - 1]}">${leads[leads.length - 1]}</a></li>`;
});