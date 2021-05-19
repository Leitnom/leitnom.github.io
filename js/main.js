function Solicitar(valor){
	switch (valor){
		case 1:
		var servicio ={
			asunto: "Landing Page",
			mensaje: "Diseños orientados a empresas o profesionales que necesiten realizar marketing online o tener presencia en internet."
		}
		document.getElementById('Asunto').value = `${servicio.asunto}`;
		document.getElementById('Mensaje').value = `${servicio.mensaje}`;
		break
		case 2:
		var servicio ={
			asunto: "Web Development",
			mensaje: "Me encargo de crear tu tienda online de forma ágil y profesional para que abras tu negocio online y empieces a vender"
		}
		document.getElementById('Asunto').value = `${servicio.asunto}`;
		document.getElementById('Mensaje').value = `${servicio.mensaje}`;
		break
		case 3:
		var servicio ={
			asunto: "Responsive Design",
			mensaje: "Constantemente estamos conectados a internet desde diferentes dispositivos como tabletas televisores y dispositivos móviles, Te ayudo a adaptarte a las nuevas tecnologías!"
		}
		document.getElementById('Asunto').value = `${servicio.asunto}`;
		document.getElementById('Mensaje').value = `${servicio.mensaje}`;
		break
		case 4:
		var servicio ={
			asunto: "Desktop Development",
			mensaje: "Para estudiante universitario y necesitas ayuda con tus proyectos Java, Sql Server, MySQL o POO."
		}
		document.getElementById('Asunto').value = `${servicio.asunto}`;
		document.getElementById('Mensaje').value = `${servicio.mensaje}`;
		break
	}
}

const txtAsunto = document.getElementById('Asunto');
const txtNombre = document.getElementById('Nombre');
const txtEmail = document.getElementById('Email');
const txtMensaje = document.getElementById('Mensaje');

function limpiar(){
	if (txtAsunto.value != "" ||
		txtNombre.value != "" || 
		txtEmail.value != "" ||
		txtMensaje.value != "") {
		
		txtAsunto.value = "";
		txtEmail.value = "" ;
		txtNombre.value = "";
		txtMensaje.value  = "";
	}
}

const btnSwitch = document.querySelector('#switch');
btnSwitch.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  btnSwitch.classList.toggle('active');

  //Guardamos en localstorage
if(document.body.classList.contains('dark')){
    localStorage.setItem('dark-mode', 'true');
  } else {
    localStorage.setItem('dark-mode', 'false');
  }
});

// Obtenemos el modo actual.
if(localStorage.getItem('dark-mode') === 'true'){
  document.body.classList.add('dark');
  btnSwitch.classList.add('active');
} else {
  document.body.classList.remove('dark');
  btnSwitch.classList.remove('active');
}

particlesJS('particles-js',
  
  {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);