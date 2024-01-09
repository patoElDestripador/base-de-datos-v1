if(localStorage.getItem('auth') == "si"){
  let arrayDeBusqueda = []
  let contenedorCards = document.getElementById("idContenedorDeCards");
  let tabla = document.getElementById("idContenedorDetabla");
/*   let obtenerUsuario = JSON.parse(localStorage.getItem('usuario')).nick
  document.getElementById("nombreperfilusuario").innerText = (obtenerUsuario) */
  function buscarUsuario(){
    let usuario = document.getElementById("idUsuarioInpBusqueda").value;
  
    if(!usuario){
      arrayDeBusqueda = [];
      contenedorCards.innerHTML = "";
    }else{
      usuarios.map(e=> {
  
        if(e.nombre.toLowerCase().startsWith(usuario.toLowerCase())){
          console.log(e.nombre.toLowerCase())
          console.log(usuario.toLowerCase())
          let validarExistencia = arrayDeBusqueda.findIndex(elemet => elemet.nombre.toLowerCase() == e.nombre.toLowerCase())
          if(validarExistencia == -1){
            arrayDeBusqueda.push(e)
          }else if(validarExistencia != -1 && arrayDeBusqueda.length != 1) {
            arrayDeBusqueda = [];
          }
        }
      })
      contenedorCards.innerHTML="";
      for (let index = 0; index < arrayDeBusqueda.length; index++) {
        contenedorCards.innerHTML += `                    
        <div class="col-12 col-sm-5 col-md-6 col-lg-4 col-xl-3 mb-4 ms-5">
        <div class="card" style="width: 18rem;">
            <div class="avatar-card">
              <img class="avatar-card-img" src="https://imgdb.net/storage/uploads/60cd0f9f76145fc6a1fd28332d0c1b9d7918bb5848a5956acec4e5e8cd783267.png" alt="perfil" class="avatar-card">
            </div>
            <h6 class="title">${arrayDeBusqueda[index].nick}</h6>
            <h6 class="amount"></h6>
            <div class="badge">
              <span class="text-success-bg"> ${arrayDeBusqueda[index].puntuacionTotal} </span>
              <span class="badge-text text-dark">Puntaje</span>
            </div>
          </div>
        </div>`
      }
  
  
    }
  
  
  
  
  }
  function listarTodos(){
    contenedorCards.innerHTML = "";
    for (let index = 0; index < usuarios.length; index++) {
      contenedorCards.innerHTML += `                    
      <div class="col-12 col-sm-5 col-md-5 col-lg-4 col-xl-3 mb-4 ms-5">
      <div class="card" style="width: 20rem;">
          <div class="avatar-card">
            <img class="avatar-card-img" src="https://imgdb.net/storage/uploads/60cd0f9f76145fc6a1fd28332d0c1b9d7918bb5848a5956acec4e5e8cd783267.png" alt="perfil" class="avatar-card">
          </div>
          <h6 class="title">${usuarios[index].nick}</h6>
          <h6 class="amount">AKI VA EL TEXTO</h6>
          <div class="badge">
            <span class="text-success-bg"> ${usuarios[index].puntuacionTotal}</span>
            <span class="badge-text text-dark">Puntaje</span>
          </div>
        </div>
      </div>`
    }
  }
  function listarOrden(tipo){
    contenedorCards.innerHTML="";
    if(tipo == "asd"){
      listarTodos()
  
    }else if (tipo == "des"){
      console.log("holaaaaaaaaaa")
      for (let index = usuarios.length; index != 0; index--) {
        if(usuarios[index]){
          contenedorCards.innerHTML += `                    
          <div class="col-12 col-sm-5 col-md-5 col-lg-4 col-xl-3 mb-4 ms-5">
          <div class="card" style="width: 20rem;">
              <div class="avatar-card">
                <img class="avatar-card-img" src="https://imgdb.net/storage/uploads/60cd0f9f76145fc6a1fd28332d0c1b9d7918bb5848a5956acec4e5e8cd783267.png" alt="perfil" class="avatar-card">
              </div>
              <h6 class="title">${usuarios[index].nick}</h6>
              <h6 class="amount">AKI VA EL TEXTO</h6>
              <div class="badge">
                <span class="text-success-bg"> ${usuarios[index].puntuacionTotal}</span>
                <span class="badge-text text-dark">Puntaje</span>
              </div>
            </div>
          </div>`
        }
      }
    }
  
  }
  document.getElementById("idUsuarioInpBusqueda").addEventListener("keypress", e=>{
    addEventListener("keyup",e=>{
      buscarUsuario()
    })
  })
  for (let index = 0; index < usuarios.length; index++) {
    tabla.innerHTML += `
    <tr>
    <td>${usuarios[index].idUser}</td>
    <td>${usuarios[index].nick}</td>
    <td>${usuarios[index].resuelve}</td>
    <td>${usuarios[index].puntuacionTotal}</td>
    </tr>
    `
  }

  





}else{
  cerrarSesion()
}

function cerrarSesion(){
  localStorage.removeItem('auth');
  localStorage.removeItem('usuario');
  location.href = "./login.html";
}