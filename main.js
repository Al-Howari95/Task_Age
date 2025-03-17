
document.getElementById('Button').onclick = function (event) {
    event.preventDefault();

    let birthdaySelect = document.getElementById('birthday').value;

    
    if (birthdaySelect === '') {
        alert('Please choose your birthday');
        return;
    }

    let date = new Date();
    let Birthday = new Date(birthdaySelect);

   
    let years = date.getFullYear() - Birthday.getFullYear();

    
    let months = date.getMonth() - Birthday.getMonth();
    if (months < 0) {
        months += 12;
        years--; 
    }

    
    let days = date.getDate() - Birthday.getDate();
    if (days < 0) {
        let lastMonth = new Date(date.getFullYear(), date.getMonth(), 0);
        days += lastMonth.getDate();
        months--;
    }

  
    let hours = date.getHours() - Birthday.getHours();
    if (hours < 0) {
        hours += 24; 
        days--;
    }

   
    let minutes = date.getMinutes() - Birthday.getMinutes();
    if (minutes < 0) {
        minutes += 60;
        hours--;
    }

    
    let pharagrap = document.createElement('p');
    pharagrap.textContent = `Your age is: ${years} years, ${months} months, ${days} days, ${hours} hours, and ${minutes} minutes.`;
    let form = document.getElementById('form')
    form.appendChild(pharagrap)

    document.body.appendChild(form);
}

