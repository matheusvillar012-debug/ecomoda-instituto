const products = [
  {id:'ECM-001',name:'Vestido Recomeço',type:'Roupas',category:'roupas',price:289.90,image:'assets/produto-saia.jpg',tag:'Mais vendido',material:'Algodão e linho reaproveitados',production:'Costura artesanal em pequena escala',artisan:'Ana • equipe EcoModa',story:'Uma peça criada a partir de tecidos que seriam descartados. O corte aproveita o máximo possível de cada retalho e resulta em uma combinação que não se repete.',impact:'Reaproveitamento de tecido + geração de renda.'},
  {id:'ECM-002',name:'Jaqueta Essência',type:'Roupas',category:'roupas',price:249.90,image:'assets/produto-jaqueta.jpg',tag:'Nova',material:'Jeans reaproveitado',production:'Modelagem e acabamento artesanal',artisan:'Maria • equipe EcoModa',story:'Jeans ganha uma segunda vida em uma peça urbana, resistente e feita para ser usada por mais tempo.',impact:'Extensão da vida útil de materiais têxteis.'},
  {id:'ECM-003',name:'Turbante Raízes',type:'Acessórios',category:'acessorios',price:79.90,image:'assets/produto-camisa.jpg',tag:'Mais vendido',material:'Tecidos diversos reaproveitados',production:'Corte e acabamento manual',artisan:'Joana • equipe EcoModa',story:'Retalhos de diferentes estampas encontram uma nova função em um acessório leve e versátil.',impact:'Aproveitamento de pequenos retalhos.'},
  {id:'ECM-004',name:'Bolsa Horizonte',type:'Acessórios',category:'acessorios',price:159.90,image:'assets/produto-bolsa.jpg',tag:'Nova',material:'Tecido e couro reaproveitados',production:'Montagem artesanal',artisan:'Lúcia • equipe EcoModa',story:'Uma bolsa autoral construída a partir de materiais que já existiam, misturando textura, cor e acabamento manual.',impact:'Reutilização de materiais + produção consciente.'}
];

let cart = JSON.parse(localStorage.getItem('ecomoda-cart') || '[]');
const $ = (s) => document.querySelector(s);
const productGrid = $('#productGrid');
const cartCount = $('#cartCount');
const cartItems = $('#cartItems');
const cartTotal = $('#cartTotal');
const cartPanel = $('#cartPanel');
const modal = $('#productModal');
const modalContent = $('#modalContent');
const toast = $('#toast');

function money(v){return v.toLocaleString('pt-BR',{style:'currency',currency:'BRL'});}
function saveCart(){localStorage.setItem('ecomoda-cart',JSON.stringify(cart));}
function showToast(msg){toast.textContent=msg;toast.classList.add('show');clearTimeout(showToast.t);showToast.t=setTimeout(()=>toast.classList.remove('show'),2200);}

function renderProducts(filter='todos'){
  const list = filter==='todos' ? products : products.filter(p=>p.category===filter);
  productGrid.innerHTML=list.map(p=>`
    <article class="product-card">
      <div class="product-image"><img src="${p.image}" alt="${p.name}" loading="lazy"><span class="product-tag">${p.tag}</span><button class="heart" onclick="showToast('Peça salva nos favoritos (protótipo).')" aria-label="Favoritar ${p.name}">♡</button></div>
      <div class="product-body"><h3>${p.name}</h3><p class="product-type">${p.material}</p><div class="product-meta"><strong class="price">${money(p.price)}</strong><div class="product-actions"><button class="small-btn" onclick="showProduct('${p.id}')">História</button><button class="small-btn add" onclick="addToCart('${p.id}')">+ Sacola</button></div></div></div>
    </article>`).join('');
}

function showProduct(id){
  const p=products.find(x=>x.id===id); if(!p)return;
  modalContent.innerHTML=`<div class="modal-content-grid"><div class="modal-image"><img src="${p.image}" alt="${p.name}"></div><div class="modal-copy"><p class="kicker">${p.id} • HISTÓRIA DA PEÇA</p><h2>${p.name}</h2><p>${p.story}</p><div class="data-row"><strong>Material</strong><span>${p.material}</span></div><div class="data-row"><strong>Produção</strong><span>${p.production}</span></div><div class="data-row"><strong>Artesã</strong><span>${p.artisan}</span></div><div class="data-row"><strong>Impacto</strong><span>${p.impact}</span></div><div class="data-row"><strong>Valor</strong><span>${money(p.price)}</span></div><button class="btn btn-dark full" onclick="addToCart('${p.id}'); closeModal()">Adicionar à sacola →</button></div></div>`;
  modal.classList.remove('hidden'); modal.setAttribute('aria-hidden','false');
}
function closeModal(){modal.classList.add('hidden');modal.setAttribute('aria-hidden','true');}
function openCart(){cartPanel.classList.add('open');cartPanel.setAttribute('aria-hidden','false');}
function closeCart(){cartPanel.classList.remove('open');cartPanel.setAttribute('aria-hidden','true');}
function addToCart(id){
  const p=products.find(x=>x.id===id); if(!p)return;
  const item=cart.find(x=>x.id===id); if(item)item.quantity++; else cart.push({...p,quantity:1});
  saveCart();renderCart();showToast(`${p.name} foi adicionada à sacola.`);
}
function changeQty(id,delta){const item=cart.find(x=>x.id===id);if(!item)return;item.quantity+=delta;if(item.quantity<=0)cart=cart.filter(x=>x.id!==id);saveCart();renderCart();}
function removeItem(id){cart=cart.filter(x=>x.id!==id);saveCart();renderCart();}
function renderCart(){
  const qty=cart.reduce((s,x)=>s+x.quantity,0); const total=cart.reduce((s,x)=>s+x.price*x.quantity,0);
  cartCount.textContent=qty;cartTotal.textContent=money(total);
  if(!cart.length){cartItems.innerHTML='<div class="cart-empty">Sua sacola está vazia. Escolha uma peça para começar.</div>';return;}
  cartItems.innerHTML=cart.map(x=>`<div class="cart-item"><h3>${x.name}</h3><p>${money(x.price)} por peça</p><div class="cart-row"><span class="qty">Quantidade: <button class="remove" onclick="changeQty('${x.id}',-1)">−</button> ${x.quantity} <button class="remove" onclick="changeQty('${x.id}',1)">+</button></span><button class="remove" onclick="removeItem('${x.id}')">Remover</button></div></div>`).join('');
}

function traceSearch(code){
  const clean=code.trim().toUpperCase(); const p=products.find(x=>x.id===clean); const box=$('#traceResult');
  if(!clean){box.classList.add('hidden');return;}
  box.classList.remove('hidden');
  if(p){box.innerHTML=`<strong>${p.id} • ${p.name}</strong><span>${p.material}. Produção: ${p.production}. Artesã: ${p.artisan}.</span>`;}
  else {box.innerHTML='<strong>Código não encontrado</strong><span>Experimente ECM-001, ECM-002, ECM-003 ou ECM-004.</span>';}
}

function searchProducts(term){
  const area=$('#searchResults');term=term.trim().toLowerCase();
  if(!term){area.innerHTML='';return;}
  const results=products.filter(p=>[p.id,p.name,p.material,p.artisan,p.category].join(' ').toLowerCase().includes(term));
  area.innerHTML=results.length ? results.map(p=>`<div class="search-result"><strong>${p.name}</strong> • ${money(p.price)} <button class="text-cta" onclick="closeSearch();showProduct('${p.id}')">ver peça →</button></div>`).join('') : '<div class="search-result">Nada encontrado. Tente outra palavra.</div>';
}
function closeSearch(){$('#searchOverlay').classList.add('hidden');}

$('.filter-btn.active').addEventListener('click',()=>renderProducts('todos'));
document.querySelectorAll('.filter-btn').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));btn.classList.add('active');renderProducts(btn.dataset.filter);}));
$('#openCart').addEventListener('click',openCart);$('#closeCart').addEventListener('click',closeCart);
$('#checkoutBtn').addEventListener('click',()=>{if(!cart.length){showToast('Adicione uma peça antes de continuar.');return;}showToast('Checkout demonstrativo: nenhum pagamento real é realizado.');});
$('#openSearch').addEventListener('click',()=>{$('#searchOverlay').classList.remove('hidden');$('#searchInput').focus();});$('#closeSearch').addEventListener('click',closeSearch);
$('#searchInput').addEventListener('input',e=>searchProducts(e.target.value));
$('#traceForm').addEventListener('submit',e=>{e.preventDefault();traceSearch($('#traceCode').value);});
$('#newsletterForm').addEventListener('submit',e=>{e.preventDefault();showToast('Cadastro realizado no protótipo. Obrigado!');e.target.reset();});

document.querySelectorAll('[data-close="productModal"]').forEach(el=>el.addEventListener('click',closeModal));
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeModal();closeCart();closeSearch();}});
$('#menuBtn').addEventListener('click',()=>$('#mainNav').classList.toggle('open'));
document.querySelectorAll('#mainNav a').forEach(a=>a.addEventListener('click',()=>$('#mainNav').classList.remove('open')));

renderProducts();renderCart();
