

async function getapi(data){
    const response = await fetch(data)

    var data = await response.json();
    console.log(data);
    data.forEach((data) =>{
        output = `
        <div class="bar ${data.day}" data-tooltip="$${data.amount}">
            <span class="day">${data.day}</span>
        </div>
        `;
      document.querySelector(".graphs").innerHTML += output;
    })
}

getapi("data.json")


