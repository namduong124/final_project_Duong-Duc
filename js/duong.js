function changecolor(clickedId) {
    let btn = document.querySelectorAll('button.btn_change');
    let clickedBtn = document.getElementById(clickedId)
    btn.forEach(btnn => btnn.style.backgroundColor = '');
    btn.forEach(btnn => btnn.style.color = 'black');
    clickedBtn.style.backgroundColor = '#A4074D';
    clickedBtn.style.color = 'white';
}


let btnWeb = document.getElementById('btn-web');
let btnData = document.getElementById('btn-data');
let btnDesign = document.getElementById('btn-design');
let viewAll = document.getElementById('viewall');


btnWeb.addEventListener('click', function () {
    document.getElementById('second_slide_selling').style.display = 'none';
    document.getElementById('second_slide_selling_data').style.display = 'none';
    document.getElementById('second_slide_selling_web').style.display = 'flex';
})


btnDesign.addEventListener('click', function () {
    document.getElementById('second_slide_selling').style.display = 'flex';
    document.getElementById('second_slide_selling_data').style.display = 'none';
    document.getElementById('second_slide_selling_web').style.display = 'none';
})



btnData.addEventListener('click', function () {
    document.getElementById('second_slide_selling').style.display = 'none';
    document.getElementById('second_slide_selling_data').style.display = 'flex';
    document.getElementById('second_slide_selling_web').style.display = 'none';
})

viewAll.addEventListener('click', function () {
    // còn cái xoá đi phần btn bên trên
    document.getElementById('second_slide_selling').style.display = 'flex';
    document.getElementById('second_slide_selling_data').style.display = 'flex';
    document.getElementById('second_slide_selling_web').style.display = 'flex';
    const listBtn = document.querySelectorAll('.btn_change');
    listBtn.forEach(btnn => btnn.style.backgroundColor = '');
    listBtn.forEach(btnn => btnn.style.color = 'black');
})





const menuIcon = document.getElementById("menuIcon");
const menuList = document.getElementById("menuList");
menuIcon.addEventListener("click", () => {
    menuList.classList.toggle("active");
});