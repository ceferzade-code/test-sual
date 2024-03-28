let clik = document.getElementById('submit');
clik.onclick = function () {

    if (document.getElementById('86years').nextElementSibling.innerHTML == "86 years") {
        document.getElementById('86years').previousElementSibling.innerHTML = "How many rings are on the Olympic flag?";
        document.getElementById('86years').nextElementSibling.innerHTML = "4";
        document.getElementById('49years').nextElementSibling.innerHTML = "7";
        document.getElementById('17years').nextElementSibling.innerHTML = "5";
        document.getElementById('142years').nextElementSibling.innerHTML = "3";
    } else if (document.getElementById('86years').nextElementSibling.innerHTML == "4") {
        document.getElementById('86years').previousElementSibling.innerHTML = "How many holes are on a standard bowling ball";
        document.getElementById('86years').nextElementSibling.innerHTML = "2";
        document.getElementById('49years').nextElementSibling.innerHTML = "3";
        document.getElementById('17years').nextElementSibling.innerHTML = "5";
        document.getElementById('142years').nextElementSibling.innerHTML = "10";
    } else if (document.getElementById('86years').nextElementSibling.innerHTML == "2") {
        document.getElementById('86years').previousElementSibling.innerHTML = "What are the main colors on the flag of Spain?";
        document.getElementById('86years').nextElementSibling.innerHTML = "Black and Yellow";
        document.getElementById('49years').nextElementSibling.innerHTML = "Blue and White";
        document.getElementById('17years').nextElementSibling.innerHTML = "Green and White";
        document.getElementById('142years').nextElementSibling.innerHTML = "Red and Yellow";
        document.getElementById('submit').value = "Submit"
    }

};

let x = document.getElementById('submit').style
x.width = '60px';
x.height = "45px"
x.borderEndEndRadius = '20px'
x.borderStartStartRadius = '20px'
x.backgroundColor = 'black'
x.color = 'red'
x.fontSize= ' 18px'
x. border = '1px solid red'

console.log(
    document.getElementById('86years')
)