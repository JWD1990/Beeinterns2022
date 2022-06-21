let form = document.forms[0]
form.addEventListener('submit', formValidate);

function formValidate() {
    form.querySelector('input[name="hiddenInput"]').remove();
    const formData = new FormData(form)
    const values = Object.fromEntries(formData.entries())
    values.name = 'newField'
    values.value = 'customValue'

    fetch("./posturl/index.json", {
        body: JSON.stringify(values),
        method: "POST",
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
        })

    document.querySelector('.info').remove()
    let textNotificationForms =  document.createElement('div')
    textNotificationForms.innerHTML = '<p>Форма успешно отправлена</p>'
    textNotificationForms.classList.add('label')
    document.querySelector('.form-notification').append(textNotificationForms)
}





//hiddenInput