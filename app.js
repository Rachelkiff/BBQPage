let emailCollectorForm = document.getElementById("Email-Collector")
emailCollectorForm.addEventListener("submit", event => {
    event.preventDefault()

    let ourFormData = new FormData(event.target)

    let userFirstName = ourFormData.get("firstName")

    let emailAddress = ourFormData.get("emailAddress")


    let updatedHtmlContent = `
    <h2>Congratulations, ${userFirstName}! </h2>
    
    <p>You're on your way to becoming a BBQ Master!</p>

        
        <p class="fine-print">You will get weekly BBQ tips sent to: ${emailAddress} </p> 
         
         `
        let ourMainContent = document.getElementById("Main-Content")
        ourMainContent.innerHTML = updatedHtmlContent
    
})