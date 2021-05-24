// document.body.onload = addElement;
window.onload = async function() {
    // document.getElementById('lanzar_alerta').onclick = function () {
    //     alert('hola mundo!');
    // }
    // let res = fetch(http://api.weatherstack.com/current?access_key=bd1bf848d75fad335c1c3c9fc4e6f688&query=New%20York)
//     fetch('http://api.weatherstack.com/current?access_key=bd1bf848d75fad335c1c3c9fc4e6f688&query=New%20York')
//   .then(response => response.json())
//   .then(data => console.log(data));
    let res = await fetch('http://api.weatherstack.com/current?access_key=bd1bf848d75fad335c1c3c9fc4e6f688&query=New%20York')
    res = await res.json();
    const body = document.getElementsByTagName('body');
    const ele = document.createElement('div')
    ele.className = 'container';
    body[0].append(ele);
}

