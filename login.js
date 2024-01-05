function validarInfo(){
    let username = document.getElementById('login-name').value;
    let password = document.getElementById('login-pass').value;
    let val = usuarios.findIndex(e=> e.nick == username)
    if(username == "admin" && password == "admin" || username == usuarios[val].nick && password == usuarios[val].idUser){
        localStorage.setItem('usuario', JSON.stringify(usuarios[val]?usuarios[val]:"admin"))
        localStorage.setItem('auth',"si");
        location.href = "./index.html";
    }else{
        alert("El correo y la contraseña no coinciden");
    }
}
document.getElementById("btnLogin").addEventListener("click", e=>{
    validarInfo()
})
