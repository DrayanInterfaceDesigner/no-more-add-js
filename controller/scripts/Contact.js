class Contact {
    constructor(contactName, contactNumber, listArray) {
        this.name = contactName; 
        this.number = contactNumber;
        this.link = '';

        this.checkBool = false; // switch
        this.checkStatus = false; // status of Check object
        this.contactList = listArray; // array list to push
        this._IsChecked //bool
        this._ChangeCheck //func
        this._CreateEl //func
        this._isValid // search for irregularities in fields
        this._Parse // corrects symbols and number
        this._Clear
        this.Init // initialize All

        this.contactInfo = { // Object, go into the contactList array
            name : this.name.value,
            number : this.number.value,
            link : this.link,
            checkStatus : this.checkStatus
        }
    }

    _isValid() {
        if(this.name.value == '' || !this.name.value ) return false
        else if (this.number.value == '' || !this.number.value) return false
        else if (this.number.value.length < 11 || this.number.value.length > 14 ) {
            return false
        }
        else {
            return true
        }
    }

    _Clear() {
        this.name.value = ''
        this.number.value = ''
    }

    _Parse() {
        
        let number = this.number.value
        for(let i = 0; i <= number.length; i++) {
            console.log(number[i-1], parseInt(number[i-1]))
            if(isNaN(parseInt(number[i-1]))) {
                number = number.replace(number[i-1], '')
            }
        }
        return number
    }

    _ChangeCheck() {
        const arr = this.contactList
        const listItem = this.contactInfo

        const item = {
            name: this.getName,
            author: this.getAuthor,
            crowd: this.getCrowd
        }


        for (var i in arr) {
            if (arr[i].name == listItem.name) {
              arr[i].checkStatus = this.checkStatus;
              console.log(arr[i])
              console.log(`obj: ${item}`)
              break;
            }
        }
    }

    _IsChecked(li, name, number) {
        if(this.checkBool == false) {
            li.style.textDecorationLine = 'line-through'
            li.style.color = '#a8a7a7'
            name.style.color = '#a8a7a7'
            number.style.color = '#a8a7a7'
            this.checkBool = true
            this.checkStatus = true
        } else {
            li.style.textDecorationLine = 'none'
            li.style.removeProperty('color')
            name.style.removeProperty('color')
            number.style.removeProperty('color')
            this.checkBool = false
            this.checkStatus = false
        }
        this._ChangeCheck()
    }

    _CreateEl() {
        const ul = document.getElementById('list')
        const li = document.createElement('li')
        const checkbox = document.createElement('input') //cbx
        const info = document.createElement('div') // info
        const name = document.createElement('p')//contact-name
        const number = document.createElement('p')//contact-number
        const button = document.createElement('a') //send-message
        const wrapper = document.createElement('div')

        ul.appendChild(li)
        li.appendChild(info)
        info.appendChild(checkbox)
        info.appendChild(wrapper)
        wrapper.appendChild(name)
        wrapper.appendChild(number)
        li.appendChild(button)

        checkbox.classList.add('cbx')
        info.classList.add('info')
        name.classList.add('contact-name')
        number.classList.add('contact-number')
        button.classList.add('send-message')

        name.innerText = this.name.value
        number.innerText = this.number.value

        
        button.setAttribute('href', this.link)
        button.setAttribute('target', 'blank')
        checkbox.setAttribute('type', 'checkbox')
        
        checkbox.addEventListener('click', () => {
            this._IsChecked(li, name, number)
        })
    }
    Init() {
        if(!this._isValid()) {
            document.getElementById('error_warning').innerText=
            `Tem algum erro nas caixas de diálogo, tente um número até no máximo 14 dígitos.`
            return
        }
        this.number.value = this._Parse()
        this.link = `//api.whatsapp.com/send/?phone=+55${this._Parse()}&text&app_absent=0`
        this._CreateEl()
        this.contactList.push(this.contactInfo)
        this._Clear()
    }
}
