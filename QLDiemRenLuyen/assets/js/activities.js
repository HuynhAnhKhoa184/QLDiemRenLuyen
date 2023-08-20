const activitiesElem = document.querySelector(".student-activity-list")

// Tải danh sách hoạt động
function loadActivities() {
    var activitiesInner = ""
    activities.map(activity => {
        activitiesInner += `
            <div class="student-activity-item">
                <a href="activity_detail.html?id=${activity.id}">
                    <div class="info">
                        <div class="name">${activity.name}</div>
                        <div class="point">
                            <p>+${activity.point}</p>
                            <p>Điểm rèn luyện</p>
                        </div>
                    </div>
                </a>
            </div>
        `
    })
    activitiesElem.innerHTML = activitiesInner
}


// Tìm kiếm hoạt động theo tên
function onSearchActivity() {
    var searchString = event.target.value;
    var activitiesInner = "";
    activities.map(activity => {
        if (activity.name.toLowerCase().includes(searchString.toLowerCase())) {
            activitiesInner += `
                <div class="student-activity-item">
                    <a href="activity_detail.html?id=${activity.id}">
                        <div class="info">
                            <div class="name">${activity.name}</div>
                            <div class="point">
                                <p>+${activity.point}</p>
                                <p>Điểm rèn luyện</p>
                            </div>
                        </div>
                    </a>
                </div>
            `
        }
    })

    activitiesElem.innerHTML = activitiesInner

}


window.onload = () => {
    loadActivities();
}