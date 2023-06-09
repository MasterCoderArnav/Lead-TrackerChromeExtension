let bt = document.getElementById("btn");
let text = document.getElementById("inp");
let savedElems = document.getElementById("savedEl");
// let leads = [];
let leads = (localStorage.getItem("myLeads"))!=null?JSON.parse(localStorage.getItem("myLeads")):[];
for(let i = 0; i < leads.length; i++){
    savedElems.innerHTML += `<li>
    <a target = "_blank" href = "${leads[i]}">${leads[i]}</a></li>`;
}
const render = () => {
    leads.push(text.value);
    text.value = "";
    savedElems.innerHTML += `<li>
        <a target = "_blank" href = "${leads[leads.length - 1]}">${leads[leads.length - 1]}</a></li>`;
    localStorage.setItem("myLeads", JSON.stringify(leads));
    // console.log(localStorage.getItem("myLeads"))
}

bt.addEventListener("click", () => {
    render();
});

