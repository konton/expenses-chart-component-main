<script
src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.js">
</script>


async function getapi(data){
    const response = await fetch(data)

    var data = await response.json();
    console.log(data);
    bar(data);
}

getapi("data.json")


function bar() {
    document.querySelector('.day').style.display = 'none';
}


