let today = moment().format("MMMM Do YYYY");

$("#currentDay").text(today)

console.log(today)
let hoursSaved = JSON.parse(localStorage.getItem("hours"));
let hours = [{
        id: "0",
        hourText: "9 am",
        time: "09",
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
        hourText: "1 pm",
        time: "13",
        task: ""
    },
    {
        id: "5",
        hourText: "2 pm",
        time: "14",
        task: ""
    },
    {
        id: "6",
        hourText: "3 pm",
        time: "15",
        task: ""
    },
    {
        id: "7",
        hourText: "4 pm",
        time: "16",
        task: ""
    },
    {
        id: "8",
        hourText: "5 pm",
        time: "17",
        task: ""
    },
]
loadDayPlanner()

function loadDayPlanner() {
    if (hoursSaved === null) {
        for (let i = 0; i < hours.length; i++) {
            const hour = hours[i];
            //adding class based off time.
            let txtClass = ''
            if (hour.time < moment().format("HH") - 4) { txtClass = "past"; } else if (parseInt(hour.time) === moment().format("HH") - 4) { txtClass = "present"; } else if (hour.time > moment().format("HH") - 4) { txtClass = "future" }

            //adding each time slot 
            let hourID = hour.id
            let $planner = $(`
      <form class="row">
        <div id="hour" class="col-md-2 hour">${hour.hourText} </div>
        <div id="task" class="col-md-9 description p-0"><textarea id="${hourID}" class="${txtClass}">${hour.task}</textarea></div>
        <button id="sbtn" class="col-md-1 saveBtn"><i class="far fa-save fa-lg  "></i> </button>
    </form>
    `);

            console.log(hour.time)
            console.log(moment().format("HH") - 4)

            $("#container").append($planner);

        };

    } else {
        for (let i = 0; i < hoursSaved.length; i++) {
            const hour = hoursSaved[i];
            //adding class based off time.
            let txtClass = ''
            if (hour.time < moment().format("HH") - 4) { txtClass = "past"; } else if (parseInt(hour.time) === moment().format("HH") - 4) { txtClass = "present"; } else if (hour.time > moment().format("HH") - 4) { txtClass = "future" }

            //adding each time slot 
            let hourID = hour.id
            let $planner = $(`
      <form class="row">
        <div id="hour" class="col-md-2 hour">${hour.hourText} </div>
        <div id="task" class="col-md-9 description p-0"><textarea id="${hourID}" class="${txtClass}">${hour.task}</textarea></div>
        <button id="sbtn" class="col-md-1 saveBtn"><i class="far fa-save fa-lg  "></i> </button>
    </form>
    `);

            console.log(hour.time)
            console.log(moment().format("HH") - 4)

            $("#container").append($planner);

        };

    }
};

function displayTask() {

    hours.forEach(function(hour) {
        $(`#${hour.id}`).val(hour.task);
    })
    console.log(hours[0])
};

function saveTask() {
    localStorage.setItem("hours", JSON.stringify(hours));
}

$(".saveBtn").on("click", function(event) {
    event.preventDefault();
    var i = $(this).siblings(".description").children("textarea").attr("id");
    hours[i].task = $(this).siblings(".description").children("textarea").val();
    localStorage.setItem("hours", JSON.stringify(hours));

    // saveTask();
    displayTask();
})