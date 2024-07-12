
const body = document.body

const estiloTopo =
    " display: flex;" +
    " justify-content: space-between;" +
    " align-items: center;" +
    " background-color: #eee;"

const topo = document.createElement("div")
topo.setAttribute("id", "topo")
topo.setAttribute("style", estiloTopo)
body.prepend(topo) //Anexa no inicio

const estiloImg = "width: 150px;"

const logo =
    "<div id='logo' class='logo'>" +
    "<img src='logo.jpg' title='Aula de javascript' style='" + estiloImg + "'/>" +
    "</div>"

topo.innerHTML += logo

const login =
    "<div id='login' class='login'>" +
    "<p id='matricula'>Matricula:<span></span></p>" +
    "<p id='nome'>Nome:<span></span></p>"
"</div>"

topo.innerHTML += login