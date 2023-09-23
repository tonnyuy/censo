const nombre = document.getElementById("user")
const email= document.getElementById("email")
const contrasena = document.getElementById("contrasena")
const form= document.getElementById("form")
const warnings = document.getElementById("warnings")

form.addEventListener("submit", e=>{
  e.preventDefault()
let warnings =""
let entrar =false
let regexemail= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
if(nombre.ariaValueMax.length <6){
warnings += `El email no es valido <br>`
entrar = true
}
if (!regexemail.test(email.value)){
  warnings += `el email no es valido <br>`
  entrar= true

}
}
)