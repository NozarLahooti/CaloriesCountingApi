document.getElementById('Calorie Number').addEventListener('click', () =>{
    const food = document.getElementById('foodSearch').value.trim();

    if (! food) {
        document.getElementById('result').innerText = 'Plase enter your food!'
        return;
    }

})