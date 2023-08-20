var dataActivity = {

}


// Lấy id từ query params
function getID() {
    const url = window.location.href;
    const params = new URL(url).searchParams;
    const id = params.get('id');
    if(id) 
        return id
    else 
        return null;
}


// Tải dữ liệu chi tiết hoạt động
function loadActivity() {
    var activityNameElem = document.querySelector(".main-detail .name");
    var activityOrganizerElem = document.querySelector(".main-detail .organizer");
    var activityDescriptionElem = document.querySelector(".main-detail .description p");
    var activityTimeElem = document.querySelector(".main-detail .time .value");
    var activityPointElem = document.querySelector(".main-detail .point .value");

    activityNameElem.innerText = dataActivity.name
    activityOrganizerElem.innerText = dataActivity.organizer
    activityDescriptionElem.innerText = dataActivity.description
    activityPointElem.innerText = "+" + dataActivity.point + " Điểm rèn luyện"
    activityTimeElem.innerText = dataActivity.start + " - " + dataActivity.end
}


window.onload = () => {
    if(getID()) {
        dataActivity = activities.find( act => act.id === getID())
        loadActivity()
    }
}