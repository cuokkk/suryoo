const limitInput = document.getElementById("limit-input");
const startButton = document.getElementById("start-btn");
const eventnumberdiv = document.getElementById("even-number")
const oddtnumberdiv = document.getElementById("odd-number")

startButton.addEventListener("click", ()=>{
    const limit = parseInt(limitInput.value);

    //memastikan input bilangan positif
    if (isNaN(limit) || limit <= 0){
        alert('plase enter a positive number.');
        return;
    }    

    //kosongkan tampilan sebelumnya
    eventnumberdiv.textContent = "even numbers: "
    oddtnumberdiv.textContent = "odd numbers: "
    
    //loopong dari 1 sampai limit 
    for (let i = 1; i <= limit; i++) {
        if(i % 2 === 0) {
            eventnumberdiv.textContent += i + ' ';
        } else {
            oddtnumberdiv.textContent += i + ' ';
        }
    } 
})