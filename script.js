let userInput = document.getElementById("date");

// Todays date and past date
userInput.max = new Date().toISOString().split("T")[0];

let result = document.getElementById("result");

// Function to calculating the age
function calculateAge(){
    let birthDate = new Date(userInput.value);  // value is stored in birthDate

    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth() + 1; // moth is starting from zero ; jan=0 but adding 1 gives jan=1
    let y1 = birthDate.getFullYear();

    let today = new Date();

    let d2 = today.getDate();
    let m2 = today.getMonth() + 1;
    let y2 = today.getFullYear();

    // 3 variables to store difference
    let d3 , m3 , y3;

    y3 = y2 - y1;
    
    if (m2 >= m1){
        m3 = m2 - m1;
    }else{
        y3--;
        m3 = 12 + m2 -m1;
    }

    if(d2 >= d1){
        d3 = d2 -d1;
    }else{
        m3--;
        d3 = getDaysInMonth(y1, m1) + d2 -d1;
    }
    if(m3<0){
        m3 = 11;
        y3--;
    }
    console.log(y3,m3,d3);
    
    result.innerHTML = `You are <span>${y3}</span> years , <span>${m3}</span> months and </span>${d3}<span> days old`;
}

function getDaysInMonth(year , getMonth){
    return new Date(year, month, 0).getDate();
}