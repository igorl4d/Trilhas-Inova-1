var isScrolling;

//Esconde nav-bar enquanto scroll acontece
window.addEventListener(
  'scroll',
  function (event) {
    document.querySelector('#header').style.top = '-150px';

    window.clearTimeout(isScrolling);

    isScrolling = setTimeout(function () {
      document.querySelector('#header').style.top = '0px';
    }, 160);
  },
  false
);

//Funções da nav-bar para dar scroll
//para determinado ponto da página

function goInicial() {
  document.querySelector('.inicial-sect').scrollIntoView();
}

function goSobre() {
  document.querySelector('.scroll-sobre').scrollIntoView();
}

function goartigos() {
  document.querySelector('.artigos-sect').scrollIntoView();
}

function goPasseios() {
  document.querySelector('.passeios-sect').scrollIntoView();
}

function goContato() {
  document.querySelector('footer').scrollIntoView();
}

//Calcula valor do elemento em relação ao scroll da página
function getCoords(elem) {
  // crossbrowser version
  var box = elem.getBoundingClientRect();

  var body = document.body;
  var docEl = document.documentElement;

  var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
  var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;

  var clientTop = docEl.clientTop || body.clientTop || 0;
  var clientLeft = docEl.clientLeft || body.clientLeft || 0;

  var top = box.top + scrollTop - clientTop;
  var left = box.left + scrollLeft - clientLeft;

  return { top: Math.round(top), left: Math.round(left) };
}

//Função para atualizar highlight na navbar
window.addEventListener('scroll', (event) => {
  let scroll = this.scrollY;
  var inicialSect = getCoords(document.querySelector('.inicial-sect'));
  var sobreSect = getCoords(document.querySelector('.butao-sobre'));
  var artigosSect = getCoords(document.querySelector('.container-3-pontos'));
  var passeiosSect = getCoords(document.querySelector('.list-passeios'));
  var contatoSect = getCoords(document.querySelector('.contato-sect'));
  if (scroll < sobreSect.top && scroll < 300) {
    document.querySelector('#sobre').classList.remove('nav-select2');
    document.querySelector('#passeios').classList.remove('nav-select4');
    document.querySelector('#inicial').classList.add('nav-select');
    document.querySelector('#artigos').classList.remove('nav-select3');
  }
  if (scroll > 300 && scroll < artigosSect.top) {
    document.querySelector('#sobre').classList.add('nav-select2');
    document.querySelector('#inicial').classList.remove('nav-select');
    document.querySelector('#artigos').classList.remove('nav-select3');
  }

  if (scroll > sobreSect.top && scroll < passeiosSect.top) {
    document.querySelector('#sobre').classList.remove('nav-select2');
    document.querySelector('#artigos').classList.add('nav-select3');
    document.querySelector('#passeios').classList.remove('nav-select4');
    document.querySelector('#inicial').classList.remove('nav-select');
  }

  if (scroll > artigosSect.top && scroll < contatoSect.top) {
    document.querySelector('#artigos').classList.remove('nav-select3');
    document.querySelector('#passeios').classList.add('nav-select4');
    document.querySelector('#contato').classList.remove('nav-select5');
    document.querySelector('#inicial').classList.remove('nav-select');
  }

  if (scroll > passeiosSect.top) {
    document.querySelector('#contato').classList.add('nav-select5');
    document.querySelector('#inicial').classList.remove('nav-select');
    document.querySelector('#passeios').classList.remove('nav-select4');
  }
});

//Funções da artigos
var tituloartigos = document.querySelector('#titulo-artigos');
var textoartigos = document.querySelector('#texto-artigos');
var linkartigos = document.querySelector('#link-artigos');
var imagemartigos = document.querySelector('#imagem-artigos');
var ponto1 = document.querySelector('#ponto1');
var ponto2 = document.querySelector('#ponto2');
var ponto3 = document.querySelector('#ponto3');

function funcPonto1() {
  ponto1.classList.add('selecionado');
  ponto2.classList.remove('selecionado');
  ponto3.classList.remove('selecionado');
  tituloartigos.innerHTML = 'CULINÁRIA MARANHENSE';
  textoartigos.innerHTML =
    'Que tal conhecer mais um pouco sobre a deliciosa culinária maranhense? Com muita tradição e iguarias, a culinária maranhense é uma das mais consagradas culinárias brasileiras, representando bem a região nordestina e todo o Brasil!. Desde o Arroz de cuchá à peixada Maranhense a nossa culinária é incrivél e vai te surpreender! ';
  linkartigos.setAttribute(
    'href',
    'https://www.todamateria.com.br/bumba-meu-boi/'
  );
  imagemartigos.src = 'assets/culinaria.jpg';
}

function funcPonto2() {
  ponto2.classList.add('selecionado');
  ponto1.classList.remove('selecionado');
  ponto3.classList.remove('selecionado');
  tituloartigos.innerHTML = 'BUMBA MEU BOI';
  textoartigos.innerHTML =
    'O Bumba meu boi, também chamado de Boi-Bumbá, é uma dança tradicional brasileira típica das regiões norte e nordeste. Que tal conhecer um pouco mais do Bumba meu Boi do Maranhão? Em 2012, o Bumba meu boi foi incluído na lista de Patrimônio Cultural do Brasil pelo Instituto do Patrimônio Histórico e Artístico Nacional (IPHAN).';
  linkartigos.setAttribute(
    'href',
    'https://www.todamateria.com.br/bumba-meu-boi/'
  );
  imagemartigos.setAttribute(
    'alt',
    'Boi de pano tématico da festa de bumba meu boi, com bandeirinhas e pessoas fantasiadas dançando ao fundo desfocado'
  );
  imagemartigos.src = 'assets/bumba-boi.jpg';
}

function funcPonto3() {
  ponto1.classList.remove('selecionado');
  ponto2.classList.remove('selecionado');
  ponto3.classList.add('selecionado');
  tituloartigos.innerHTML = 'REGGAE MARANHENSE';
  textoartigos.innerHTML =
    'A história do reggae com São Luís começa na década de 1970. As explicações para a chegada do ritmo no Maranhão são muitas, mas talvez a tese mais conhecida seja a de que marinheiros que chegavam ao porto de São Luís e de Cururupu deixavam discos trazidos da Jamaica nas zonas de prostituição para pagar pelos serviços';
  linkartigos.setAttribute(
    'href',
    'http://g1.globo.com/ma/maranhao/noticia/2015/09/sao-luis-se-tornou-capital-do-reggae-na-decada-de-80.html'
  );
  imagemartigos.setAttribute(
    'alt',
    'Mesa de DJ com um disco de reggae, ao fundo um fone de ouvido desfocado'
  );
  imagemartigos.src = 'assets/reggae.jpg';
}
