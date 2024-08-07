const buttonElement = document.querySelector('button');
const paragraphElement = document.querySelector('p');
const inputElement = document.querySelector('.input')
buttonElement.addEventListener('click',()=>{
    const main = parseInt(inputElement.value);

    let count =main;
    
    const countdownInterval = setInterval(()=>{
        
            paragraphElement.textContent = count;
            count--;

            if (count<0) {
                clearInterval(countdownInterval);

                paragraphElement.textContent = 'Time is up!';
            }
    },1000)
})

