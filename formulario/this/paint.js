//pintar en el html el template 

//seleccionar el card de estudiante 
const cardEstudiante = document.querySelector("#cardsEstudiantes");
//seleccionar card del profesor
const cardProfesor = document.querySelector("#cardsProfesores");

//seleccionar select
//const select = document.getElementById("select").value;
//console.log(select);

const form = document.getElementById("fmContact");


const addStudent=(name,lastName, mail, tele, msn) =>{
    //creamos un objeto
    let person ={
        pname: name,
        plastName : lastName,
        pmail: mail,
        ptele:tele,
        pmsn: msn
    };

    //esto se pasara al modal 
    let text = `se ha agregado ${person.pname} ${person.plastName} `;

    modalAlert(text, "aceptar", person);
}



function modalAlert(cad, tipo, persona){
  
    const alerta= document.createElement('div');
    const texto = document.createElement("p");
    const btnCerrar = document.createElement("input");
 
    alerta.setAttribute("id", "alerta" )
    alerta.setAttribute("class", "alerta" )
    texto.setAttribute("class", "textAlerta");
    texto.innerHTML= `<strong>${cad}</strong>;`
    btnCerrar.setAttribute("type", "button");
    btnCerrar.setAttribute("class", "btnAlerta");
    btnCerrar.setAttribute("value", "cerrar");

    alerta.appendChild(texto);
    alerta.appendChild(btnCerrar);

    if(tipo==="aceptar"){
        
        const btnEnviar = document.createElement("input");
        btnEnviar.setAttribute("type", "button");
        btnEnviar.setAttribute("class", "btnAlerta");
        btnEnviar.setAttribute("value", "Enviar");
        alerta.appendChild(btnEnviar);
        document.body.appendChild(alerta);
        btnEnviar.onclick=function(){
         paintCard(persona, "");
          document.getElementById("alerta").remove();
            
        }
    }else{
        
        document.body.appendChild(alerta);
    }

    //removcer la alerta
    btnCerrar.onclick=function(){

        document.getElementById("alerta").remove();
    }

}


const paintCard = (datos, tipo) =>{

    const select = document.getElementById("select").value;
   
   
    tipo = select.toUpperCase();
    
    
    const fragmento = document.createDocumentFragment();
    //solo se quiere el contenido del template no toda la etiqueta
    const tempEstudiante = document.getElementById("templateEstudiante").content;
    //solo se requiere el contenido del template del profesor 
    const tempProfesor = document.getElementById("templateProfesor").content;   
    
    if(tipo === "ESTUDIANTE"){
        //se colnara temEstudiante
        let tempTemplate = tempEstudiante.cloneNode(true);
        tempTemplate.querySelector('.title-card').innerHTML = 'DATOS DEL PQR ESTUDIANTE <hr>';
        tempTemplate.querySelector('.data-card').innerHTML = `NOMBRES Y APELLIDOS: ${datos.pname} ${datos.plastName}`;
        tempTemplate.querySelector('.text-mail').innerHTML = `CORREO ELECTRONICO: ${datos.pmail} `;
        tempTemplate.querySelector('.text-telefono').innerHTML = `TELEFONO: ${datos.ptele} `;
        tempTemplate.querySelector('.text-msn').innerHTML = `MENSAJE: ${datos.pmsn} `;
        
        fragmento.appendChild(tempTemplate);
        
        cardEstudiante.appendChild(fragmento);
    }
        fragmento.appendChild(tempTemplateP);
      
    }

   
    form.reset();


export {addStudent, modalAlert};