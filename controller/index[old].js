// let number, send, answer;
// const util = new Utilities();

// number = document.getElementById("number")
// send = document.getElementById("send")
// answer = document.getElementById("answer")

// send.addEventListener("click", ()=> {
//     let link = `//api.whatsapp.com/send/?phone=55${number.value}&text&app_absent=0`;
//     answer.href = link;
// })
let warning_text = document.getElementById('error_warning')
let name_input = document.getElementById('contact-name')
let number_input = document.getElementById('contact-number')
let send = document.getElementById('send')
let objs = [];
let cookieToObj = [];

function equalEntities () {
    let check;
    objs.forEach(obj => {
        if(name_input.value == obj.name) {
            if (objs.length > 0) {
                return check = true
            }
        } else {
            return check = false
        }
    })
    if (check == true) return true;
    else return false;
}

function updateCookies() {
    document.cookie = `contacts="list":${JSON.stringify(objs)}; expires=18 Dec 2020 12:00:00 UTC; path=/`;
}

window.onload = () => {
    let cookies = document.cookie
    let cookiesStr = `{${cookies.slice(9, cookies.length)}}`;
    //console.log(JSON.parse(cookiesStr))
    let parsedCookies = JSON.parse(cookiesStr)
    let test = [] //{list: [{obj : 'obj1'}, {obj: 'obj2'}]}
    parsedCookies.list.forEach(obj => {
        let ctt = new contact(obj.name, obj.number, obj.link, objs)
        ctt.init();
        console.log(obj.name)
    })
    //let parseCookies = JSON.parse(cookies.slice(9, cookies.length));
}

send.addEventListener('click', ()=> {
    let ctt, link;
    link = `//api.whatsapp.com/send/?phone=55${number_input.value}&text&app_absent=0`
    if(equalEntities() == true) {
        warning_text.innerText = `Já existe um contato com esse nome!`
    } else {
        warning_text.innerText = ''
        ctt = new contact(name_input, number_input, link, objs)
        ctt.init();
        updateCookies()
    }
})
