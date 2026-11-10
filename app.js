const $=s=>document.querySelector(s);const $$=s=>document.querySelectorAll(s);
let user=localStorage.getItem('bu_user')||'', mode='login', chars=JSON.parse(localStorage.getItem('bu_chars')||'[]'), active=localStorage.getItem('bu_active')||'';
if(!chars.length){chars=['Vinnie Cruze'];localStorage.setItem('bu_chars',JSON.stringify(chars));}
const SERVER_IP='62.171.167.126:7777';
function toast(t){let x=$('#toast');x.textContent=t;x.classList.add('show');setTimeout(()=>x.classList.remove('show'),2600)}
function showPage(p){['home','characters','news','profile'].forEach(x=>$('#'+x).classList.toggle('hidden',x!==p));$$('.nav').forEach(b=>b.classList.toggle('active',b.dataset.page===p));}
function refresh(){let logged=!!user;$('#auth').classList.toggle('hidden',logged);$('#app').classList.toggle('hidden',!logged);$('#topUser').textContent=user||'Gost igrač';$('#profileName').textContent=user;$('#profileHandle').textContent='@'+user;$('#profileAvatar').textContent=user.slice(0,2).toUpperCase();$('#profileCount').textContent=chars.length;$('#activeCharacter').textContent=active||'Nije izabran';$('#profileCharacter').textContent=active||'Nije izabran';renderChars();if(logged)showPage('home')}
function renderChars(){let list=$('#characterList');list.innerHTML='';if(!chars.length)list.innerHTML='<p class="muted">Još nemaš karaktere. Napravi svoj prvi karakter.</p>'; chars.forEach(c=>{let d=document.createElement('div');d.className='character'+(c===active?' selected':'');d.innerHTML='<div class="eyebrow">BU CHARACTER</div><h3></h3><p class="muted">Građanin · Demo profil</p><button class="primary">IZABERI</button>';d.querySelector('h3').textContent=c;d.querySelector('button').onclick=()=>{active=c;localStorage.setItem('bu_active',active);refresh();toast('Karakter je izabran')};list.append(d)})}
$$('[data-auth]').forEach(b=>b.onclick=()=>{mode=b.dataset.auth;$$('.tab').forEach(t=>t.classList.toggle('active',t===b));$('#authSubmit').textContent=mode==='login'?'PRIJAVI SE':'NAPRAVI NALOG'});
$('#authForm').onsubmit=e=>{e.preventDefault();let u=$('#username').value.trim();if(u.length<3)return toast('Korisničko ime mora imati najmanje 3 znaka');user=u;localStorage.setItem('bu_user',user);refresh();toast(mode==='login'?'Uspešna demo prijava':'Demo nalog je napravljen')};
$$('.nav').forEach(b=>b.onclick=()=>showPage(b.dataset.page));$$('[data-go]').forEach(b=>b.onclick=()=>showPage(b.dataset.go));
$('#characterForm').onsubmit=e=>{e.preventDefault();let n=$('#charName').value.trim();if(!n)return;if(chars.includes(n))return toast('Taj karakter već postoji');chars.push(n);localStorage.setItem('bu_chars',JSON.stringify(chars));$('#charName').value='';refresh();showPage('characters');toast('Karakter je kreiran')};
$('#play').onclick=()=>toast('Server '+SERVER_IP+' je podešen. Status i ulazak zahtevaju povezivanje sa multiplayer klijentom.');
$('#serverIp').style.cursor='pointer';$('#serverIp').title='Dodirni za kopiranje IP adrese';$('#serverIp').onclick=()=>{navigator.clipboard?.writeText(SERVER_IP);toast('IP adresa: '+SERVER_IP)};
$('#logout').onclick=()=>{user='';localStorage.removeItem('bu_user');refresh()};
$('#menu').onclick=()=>$('.sidebar').classList.toggle('open');
if('serviceWorker'in navigator)navigator.serviceWorker.register('sw.js').catch(()=>{});
refresh();
