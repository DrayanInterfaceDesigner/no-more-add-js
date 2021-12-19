var contactList = [];

let name_input = document.getElementById('contact-name')
let number_input = document.getElementById('contact-number')
let send = document.getElementById('send')

send.addEventListener('click', ()=> {
    let ctt = new Contact(name_input, number_input, contactList)
    ctt.Init()
})