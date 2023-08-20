const activitiesElem = document.querySelector(".activity-list-inner")


function showOn(id) {
    var column = document.querySelector(`#col-${id}`);
    console.log(`#col-${id}`)
    console.log(column)
    if(column) 
        column.classList.add("highlight")
        
}

function showOff(id) {
    var column = document.querySelector(`.highlight`);
    if(column)
        column.classList.remove("highlight")
}

// Tải danh sách hoạt động
function loadActivities() {
    var activitiesInner = ""
    activities.map(activity => {
        activitiesInner += `
            <div class="student-activity-item" onmouseover="showOn('${activity.id}')" onmouseout="showOff('${activity.id}')">
                <p>${activity.name}</p>
                <p>${activity.completed}</p>
            </div>
        `
    })
    activitiesElem.innerHTML = activitiesInner
}


window.onload = () => {
    loadActivities();
}