let today = moment().format("MMM Do YY");

$("#currentDay").text(today)

console.log(today)

hours.forEach(hour => {
    let $planner = $(`
    <div class="container align-center">
    <div class="row">
        <div id="hour" class="col-md-2 hour">${hour.hourText} </div>
        <div id="task" class="col-md-9 description p-0">planner </div>
        <div id="Btn" class="col-md-1 saveBtn">save </div>
    </div>
    </div>
    `);



});













let hours = [{
        id: "0",
        hourText: "9 am",
        time: "9",
        task: ""
    },
    {
        id: "1",
        hourText: "10 am",
        time: "10",
        task: ""
    },
    {
        id: "2",
        hourText: "11 am",
        time: "11",
        task: ""
    },
    {
        id: "3",
        hourText: "12 pm",
        time: "12",
        task: ""
    },
    {
        id: "4",
        hourText: "01 pm",
        time: "13",
        task: ""
    },
    {
        id: "5",
        hourText: "02 pm",
        time: "14",
        task: ""
    },
    {
        id: "6",
        hourText: "03 pm",
        time: "15",
        task: ""
    },
    {
        id: "7",
        hourText: "04 pm",
        time: "16",
        task: ""
    },
    {
        id: "8",
        hourText: "05 pm",
        time: "17",
        task: ""
    },
]