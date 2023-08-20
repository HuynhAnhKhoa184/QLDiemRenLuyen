// Chọn student
const studentListElem = document.querySelector(".student-practise-point-list table tbody")
const activitiesElem = document.querySelector(".student-activity-list")
var studentSearchType = "mssv";


var studentSelected = null;
if (studentList.length > 0) {
    studentSelected = studentList[0]
}


// Checkbox chọn tham gia hoặc bỏ tham gia cho sinh viên
function onCheckBoxChange(id, event) {
    if (event.target.checked === true) {
        studentSelected.self_activity.push(id)
    }
    else {
        var newData = studentSelected.self_activity.filter(act => act !== id)
        studentSelected.self_activity = newData
    }
    loadStudents();
}

//Chọn sinh viên
function onSelectStudent(code) {
    const lastSelected = document.querySelector(".student-selected");
    if (lastSelected) {
        lastSelected.classList.remove("student-selected")
    }
    studentSelected = studentList.find(student => student.code === code)
    event.currentTarget.classList.add("student-selected")
    loadActivities();
}

// Tính tổng số điểm rèn luyện hiện tại
function getTotalPoint(student) {
    var totalPoint = 0;
    student.self_activity.map(sAct => {
        activities.map(act => {
            if (act.id === sAct) {
                totalPoint += act.point;
            }
        })
    })
    return totalPoint;
}

// Load dữ liệu sinh viên sthành giao diện 
function loadStudents() {
    var studenListInner = "";
    studentList.map(student => {
        var studenPoint = getTotalPoint(student);
        studenListInner += `
            <tr onclick="onSelectStudent('${student.code}')" class="${studentSelected.code === student.code ? "student-selected" : ""}" id='${student.code}'>
                <th scope="row">${student.code}</th>
                <td>${student.name}</td>
                <td>${student.class}</td>
                <td>${studenPoint} điểm</td>
            </tr>                      
        `
    })

    studentListElem.innerHTML = studenListInner;
}

// Kiểm tra tham gia hoạt động của sinh viên
function checkFinishActivity(id) {
    if (studentSelected.self_activity.find(act => act === id)) {

        return true;
    }
    else
        return false;

}

// Load dữ liệu hoạt động thành giao diện 
function loadActivities() {
    var activitiesInner = ""
    if (studentSelected) {
        activities.map(activity => {
            activitiesInner += `
                <div class="student-activity-item">
                    <div class="info">
                        <div class="name">${activity.name}</div>
                        <div class="point">
                            <p>+${activity.point}</p>
                            <p>Điểm rèn luyện</p>
                        </div>
                        <div class="join-check">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="flexCheckChecked" ${checkFinishActivity(activity.id) ? "checked" : ""} onclick="onCheckBoxChange('${activity.id}',event)">
                                <label class="form-check-label" for="flexCheckChecked">
                                    Tham gia
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            `
        })
    }


    activitiesElem.innerHTML = activitiesInner
}

// Tìm kiếm sinh viên theo tên or MSSV
function onSearchStudent() {
    var searchString = event.target.value;
    var studenListInner = "";
    studentList.map(student => {
        console.log(student.code.includes(searchString))
        if (student.code.includes(searchString) && studentSearchType === "mssv") {
            var studenPoint = getTotalPoint(student);
            studenListInner += `
                <tr onclick="onSelectStudent('${student.code}')" class="${studentSelected.code === student.code ? "student-selected" : ""}" id='${student.code}'>
                    <th scope="row">${student.code}</th>
                    <td>${student.name}</td>
                    <td>${student.class}</td>
                    <td>${studenPoint} điểm</td>
                </tr>                      
            `
        }
        if (student.name.toLowerCase().includes(searchString.toLowerCase()) && studentSearchType === "name") {
            var studenPoint = getTotalPoint(student);
            studenListInner += `
                <tr onclick="onSelectStudent('${student.code}')" class="${studentSelected.code === student.code ? "student-selected" : ""}" id='${student.code}'>
                    <th scope="row">${student.code}</th>
                    <td>${student.name}</td>
                    <td>${student.class}</td>
                    <td>${studenPoint} điểm</td>
                </tr>                      
            `
        }
    })

    studentListElem.innerHTML = studenListInner;
}

// Thay đổi cách thức tìm kiếm: Theo tên, theo mã số sinh viên
function onChangeSelectStudentSearch() {
    studentSearchType = event.target.value;
    loadStudents();
}

// Tìm kiếm hoạt động theo tên
function onSearchActivity() {
    var searchString = event.target.value;
    var activitiesInner = "";
    activities.map(activity => {
        if (activity.name.toLowerCase().includes(searchString.toLowerCase())) {
            activitiesInner += `
                <div class="student-activity-item">
                    <div class="info">
                        <div class="name">${activity.name}</div>
                        <div class="point">
                            <p>+${activity.point}</p>
                            <p>Điểm rèn luyện</p>
                        </div>
                        <div class="join-check">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="flexCheckChecked" ${checkFinishActivity(activity.id) ? "checked" : ""} onclick="onCheckBoxChange('${activity.id}',event)">
                                <label class="form-check-label" for="flexCheckChecked">
                                    Tham gia
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            `
        }
    })

    activitiesElem.innerHTML = activitiesInner

}


window.onload = () => {
    loadStudents();
    loadActivities();
}