const lista = document.querySelector('#Familia');

fetch('./data_1.json')
    .then((res)=>res.json())
    .then((data)=>{
        data.forEach((familia)=>{
            const li=document.createElement('li')
            li.innerHTML=`
            <h4> Nombre: ${familia.nombre}</h4>
            <p> Edad: ${familia.edad}</p>
            <p> Ocupacion: ${familia.ocupacion}</p>
            <hr/>`
            lista.append(li)
        })
    })