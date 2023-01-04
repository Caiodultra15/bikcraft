//Ativar Link do Menu
const links = document.querySelectorAll('.header-menu a')
function ativarlink(link){
  const url  = location.href
  const href = link.href
  if(url.includes(href))
  link.classList.add("ativo")

}

links.forEach(ativarlink)

//Ativar Itens do Orçamento

const parametros = new URLSearchParams(location.search) 
function AtivarProduto(parametro){
  const elemento = document.getElementById(parametro)
  if(elemento){
  elemento.checked = true;
  }
}
parametros.forEach(AtivarProduto);

//Perguntas Frequentes
const perguntas =   document.querySelectorAll('.perguntas-container button')
function ativarPergunta(event){
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute('aria-controls')
  const resposta = document.getElementById(controls)
  
 
  resposta.classList.toggle("ativa")
  const ativa = resposta.classList.contains("ativa");
  pergunta.setAttribute("aria-expanded", "true");
}  

function eventoPergunta(pergunta){
    pergunta.addEventListener('click', ativarPergunta)

  }

perguntas.forEach(eventoPergunta)


//Galeria de Bicicletas

const galeria = document.querySelectorAll('.nimbus-imagens img')
const galeriaContainer = document.querySelector('.nimbus-imagens')

function trocarImagem(event){
  const img = event.currentTarget;
  const media =matchMedia('(min-width:1000px)').matches
    if(media){
      galeriaContainer.prepend(img);
    }
}

function eventoGaleria(img){
  img.addEventListener('click' , trocarImagem)
  }


galeria.forEach(eventoGaleria)

//Animação
if(window.SimpleAnime){
new SimpleAnime()
}