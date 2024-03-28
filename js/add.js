let clik = document.getElementById('submit');
let y86 = document.getElementById('86years').nextElementSibling;
let y49 = document.getElementById('49years').nextElementSibling;
let y17 = document.getElementById('17years').nextElementSibling;
let y142 = document.getElementById('142years').nextElementSibling;

clik.onclick = function () {

    if (y86.innerHTML == "86 years") {
        document.getElementById('86years').previousElementSibling.innerHTML = "How many rings are on the Olympic flag?";
        y86.innerHTML = "4";
        y49.innerHTML = "7";
        y17.innerHTML = "5";
        y142.innerHTML = "3";

        let nameClik = document.getElementsByName('years').nextElementSibling;
        nameClik.onclick = function () {
            if (nameClik.innerHTML == '7') {
                y49.style.backgroundColor = 'green'
            }
            else {
                nameClik.style.backgroundColor = 'red'
            }
        }
    } else if (y86.innerHTML == "4") {
        document.getElementById('86years').previousElementSibling.innerHTML = "How many holes are on a standard bowling ball";
        y86.innerHTML = "2";
        y49.innerHTML = "3";
        y17.innerHTML = "5";
        y142.innerHTML = "10";
    } else if (document.getElementById('86years').nextElementSibling.innerHTML == "2") {
        document.getElementById('86years').previousElementSibling.innerHTML = "What are the main colors on the flag of Spain?";
        y86.innerHTML = "Black and Yellow";
        y49.innerHTML = "Blue and White";
        y17.innerHTML = "Green and White";
        y142.innerHTML = "Red and Yellow";
        document.getElementById('submit').value = "Submit"
    }

};


let x = document.getElementById('submit').style
x.width = '72px';
x.height = "45px"
x.borderEndEndRadius = '20px'
x.borderStartStartRadius = '20px'
x.backgroundColor = 'black'
x.color = 'red'
x.fontSize = ' 18px'
x.border = '1px solid red'
x.cursor = 'not-allowed'
// x.paddingInline = "8px"

console.log(
    document.getElementById('86years')
)