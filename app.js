function pedido(event){
    event.preventDefault()
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let cedula = document.getElementById("cedula").value;
    let pedido = document.getElementById("pedid").value;
    let cantidad = document.getElementById("cant").value;
    let direccion = document.getElementById("dir").value;

    if (age>=18){
        alert("Eres mayor de edad, puedes hacer el pedido😄👍")
        alert(`Datos:
            Nombre: ${name}
            Edad: ${age}
            Cedula: ${cedula}
            Pedido: ${pedido}
            Cantidad: ${cantidad}
            Direccion: ${direccion}`)
    }else{
        alert("Eres menor de edad, no pueder hacer el pedido 👎😢")
    }

    let confirmar = confirm("¿Quieres seguir haciendo el pedido?")
    if (confirmar == true){
        alert("Pedido enviado ✅")
    }else{
        alert("Pedido rechazado ❌")
    }
}

function mostrarmenu(){
    let menu = document.getElementById("menu-resposive");
    menu.style.display = "block"
}

