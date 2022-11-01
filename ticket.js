

function calcularticket() {

    let costo=200

    let cantidad=document.getElementById("cantidad").value
    
    let categoria=document.getElementById("Categoria").value

    let porcentaje=[80*costo*cantidad/100 , 50*costo*cantidad/100, 15*costo*cantidad/100]

    let total=0

    if (categoria==1){
        total=cantidad*costo-porcentaje[0]
        document.getElementById("total").className="bg-info"
    } else if (categoria==2){
        total=cantidad*costo-porcentaje[1]
        
        document.getElementById("total").className="bg-success" 
    } else {
        total=cantidad*costo-porcentaje[2]
        
         document.getElementById("total").className="bg-warning"
    }
    document.getElementById("total").innerHTML=`Total a Pagar: $${total}`

}

function fun(){
    document.getElementById("myFormulario").reset();
}

   

