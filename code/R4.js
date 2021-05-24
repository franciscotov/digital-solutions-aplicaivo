// document.body.onload = addElement;
// window.onload = async function() {
//     // document.getElementById('lanzar_alerta').onclick = function () {
//     //     alert('hola mundo!');
//     // }
//     // let res = fetch(http://api.weatherstack.com/current?access_key=bd1bf848d75fad335c1c3c9fc4e6f688&query=New%20York)
// //     fetch('http://api.weatherstack.com/current?access_key=bd1bf848d75fad335c1c3c9fc4e6f688&query=New%20York')
// //   .then(response => response.json())
// //   .then(data => console.log(data));
//     let res = await fetch('http://api.weatherstack.com/current?access_key=bd1bf848d75fad335c1c3c9fc4e6f688&query=New%20York')
//     res = await res.json();
//     const body = document.getElementsByTagName('body')[0];
//     const ele = document.createElement('div');
//     const input = document.createElement('input');
//     ele.className = 'container';
//     body.append(ele);
//     body.append(input)
// }
$(document).ready(function() {
    $('#search').click(function(){
        // obtenemos el valor del input con id 'input'
        let value = $('#input');
        // console.log(value , 'iaisiais');
        // hacemos la peticion get con el url concatenando el valor del input(la ciudad)
        $.get(`http://api.weatherstack.com/current?access_key=bd1bf848d75fad335c1c3c9fc4e6f688&query=${value.val()}`, async function(data){
            // console.log('ppppppppppp', data);
            const containerTable = $(".table");
            containerTable.empty();
            // // seleccionamos el span para la ciudad
            const citySpan = $("#city");
            citySpan.empty();
            // // removemos la clase pasada como argumento si existe
            citySpan.removeClass("text-danger");
            // obtenemos el dato de nombre devuelto por la api, en caso de no existir renderizamos un texto de aviso
            let text = null, datos= null, table = null, dataList = 
            ['humidity','visibility', 'precip', 'temperature', 'country', 'name', 'lat', 'lon', 'uv_index'];
            if(data?.location?.name){
                text =  `Buscaste la cuidad con el nombre: ${data?.location?.name}`;
                table= $("<table></table>");
                let trHead = $("<tr></tr>"), trBody = $("<tr></tr>");
                // iteramos por todas las propiedades del objeto data que nos interesan
                [...Object.entries(data.location), ...Object.entries(data.current)].map((ele, i) =>{
                    if(dataList.includes(ele[0])) {
                        trHead.append(`<th>${ele[0]}<th>`);
                        trBody.append(`<td>${ele[1]}<td>`);
                    }
                });
                // insertamos tanto las celdas de cabecera como las del body
                table.append(trHead);
                table.append(trBody);
            }
            else {
                // texto pde aviso para ciudad incorrecta
                text = 'introduzca un nombre de ciudad correcto correcto';
                citySpan.addClass("text-danger");
            }
            // si se introdujo un nombre incorrecto se avisa con texto en rojo
            // let text = data?.location?.name ? 
            // `Buscaste la cuidad con el nombre: ${data?.location?.name}`: 
            // `introduzca un nombre de ciudad correcto correcto`;
            // if(text == 'introduzca un nombre de ciudad correcto') citySpan.addClass("text-danger");
            citySpan.text(text);
            containerTable.append(table ? table: '')
            // establecemos la entrada del input como vacia
            value.val('');
        });
    });
});
