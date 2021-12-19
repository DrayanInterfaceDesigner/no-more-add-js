function contact (name, number, link, arrayToPush) {
    this.c_name = name
    this.c_number = number
    this.c_link = link
    this.arrToPush = arrayToPush
    // this.check = true

    this.init = function () {
        let ul = document.getElementById('list')
        let li = document.createElement('li')
        let checkbox = document.createElement('input') //cbx
        let info = document.createElement('div') // info
        let name = document.createElement('p')//contact-name
        let number = document.createElement('p')//contact-number
        let button = document.createElement('a') //send-message
        
        let check = false
        let checkBool = false 
        let arr = this.arrToPush
        let listItem = {
            name: this.c_name.value,
            number: this.c_number.value,
            link: this.c_link,
            marked: check
        }

        ul.appendChild(li)
        li.appendChild(checkbox)
        li.appendChild(info)
        info.appendChild(name)
        info.appendChild(number)
        li.appendChild(button)

        checkbox.classList.add('cbx')
        info.classList.add('info')
        name.classList.add('contact-name')
        number.classList.add('contact-number')
        button.classList.add('send-message')

        name.innerText = this.c_name.value
        number.innerText = this.c_number.value
        button.innerText = '>';

        button.setAttribute('href', this.c_link)
        button.setAttribute('target', 'blank')
        checkbox.setAttribute('type', 'checkbox')

        function changeCheckState() {
            for (var i in arr) {
              if (arr[i].name == listItem.name) {
                arr[i].marked = check;
                break;
              }
            }
        }

        function isChecked() {
            if(checkBool == true) {
                li.style.textDecorationLine = 'line-through'
                li.style.color = '#a8a7a7'
                name.style.color = '#a8a7a7'
                number.style.color = '#a8a7a7'
                checkBool = false
                check = true
            } else {
                li.style.textDecorationLine = 'none'
                li.style.removeProperty('color')
                name.style.removeProperty('color')
                number.style.removeProperty('color')
                checkBool = true
                check = false
            }
        }
        isChecked()

        checkbox.addEventListener('click', () => {
            isChecked()
            changeCheckState()
        })

        this.arrToPush.push(listItem)
    }
}