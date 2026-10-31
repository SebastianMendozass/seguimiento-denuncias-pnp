// Interacciones del prototipo. No se conecta a sistemas reales de la PNP.
const views=[...document.querySelectorAll('.view')], nav=[...document.querySelectorAll('nav button')];
function showView(id){views.forEach(v=>v.classList.toggle('hidden',v.id!==id));nav.forEach(b=>{const on=b.dataset.view===id;b.classList.toggle('active',on);if(on)b.setAttribute('aria-current','page');else b.removeAttribute('aria-current')});window.scrollTo({top:0,behavior:'smooth'});if(id==='result')document.getElementById('resultCode').textContent=document.getElementById('caseCode').value.trim().toUpperCase()||'DEN-2026-001284'}
nav.forEach(b=>b.addEventListener('click',()=>showView(b.dataset.view)));
document.getElementById('helpTop').addEventListener('click',()=>showView('help'));

const colorModes=[
 {id:'normal',label:'vista normal'},
 {id:'colorblind',label:'paleta apta para daltonismo'},
 {id:'contrast',label:'alto contraste'}
];
const colorModeButton=document.getElementById('colorMode');
function setColorMode(modeId){
 const mode=colorModes.find(item=>item.id===modeId)||colorModes[0];
 if(mode.id==='normal')document.body.removeAttribute('data-color-mode');else document.body.dataset.colorMode=mode.id;
 colorModeButton.setAttribute('aria-label',`Cambiar colores: ${mode.label}`);
 colorModeButton.title=`Modo actual: ${mode.label}. Pulsa para cambiar.`;
 localStorage.setItem('pnp-color-mode',mode.id);
}
setColorMode(localStorage.getItem('pnp-color-mode')||'normal');
colorModeButton.addEventListener('click',()=>{
 const current=document.body.dataset.colorMode||'normal';
 const next=colorModes[(colorModes.findIndex(item=>item.id===current)+1)%colorModes.length];
 setColorMode(next.id);
});

const voiceReader=document.getElementById('voiceReader');
voiceReader.addEventListener('click',()=>{
 if(!('speechSynthesis' in window)){voiceReader.setAttribute('title','La lectura por voz no está disponible en este navegador');return}
 if(speechSynthesis.speaking){speechSynthesis.cancel();voiceReader.setAttribute('aria-pressed','false');voiceReader.querySelector('span').textContent='Escuchar';return}
 const visibleView=document.querySelector('.view:not(.hidden)');
 const message=new SpeechSynthesisUtterance(visibleView.innerText);
 message.lang='es-PE';message.rate=.95;
 message.addEventListener('end',()=>{voiceReader.setAttribute('aria-pressed','false');voiceReader.querySelector('span').textContent='Escuchar'});
 speechSynthesis.speak(message);voiceReader.setAttribute('aria-pressed','true');voiceReader.querySelector('span').textContent='Detener';
});

const codeInput=document.getElementById('caseCode'),error=document.getElementById('errorText');
function lookup(){const val=codeInput.value.trim().toUpperCase();error.classList.add('hidden');if(!val){error.textContent='Escribe el código de denuncia para continuar.';error.classList.remove('hidden');codeInput.focus();return}if(!['DEN-2026-001284','D2024-0005678','2024-0005678'].includes(val)){error.textContent='No encontramos una denuncia con ese código de demostración. Revisa las letras, números y guiones de tu constancia e inténtalo de nuevo.';error.classList.remove('hidden');codeInput.focus();return}showView('result')}
document.getElementById('lookupForm').addEventListener('submit',e=>{e.preventDefault();lookup()});
document.getElementById('sampleBtn').addEventListener('click',()=>{codeInput.value='DEN-2026-001284';showView('result')});
document.getElementById('newLookup').addEventListener('click',()=>{showView('home');codeInput.value='';error.classList.add('hidden');codeInput.focus()});
document.getElementById('printCase').addEventListener('click',()=>window.print());

const evidenceTabs=[['tabEvidence','panelEvidence'],['tabPericia','panelPericia'],['tabHistory','panelHistory']];
evidenceTabs.forEach(([tabId,panelId])=>document.getElementById(tabId).addEventListener('click',()=>{
 evidenceTabs.forEach(([tid,pid])=>{const active=tid===tabId;document.getElementById(tid).setAttribute('aria-selected',String(active));document.getElementById(pid).classList.toggle('hidden',!active)});
}));
document.getElementById('viewEvidence').addEventListener('click',e=>{
 const preview=document.getElementById('evidencePreview');
 const open=preview.classList.toggle('hidden');
 e.currentTarget.setAttribute('aria-expanded',String(!open));
 e.currentTarget.lastChild.textContent=open?'Ver imagen':'Ocultar imagen';
});
document.getElementById('downloadEvidence').addEventListener('click',()=>{
 const file=new Blob(['Evidencia ficticia de demostración. No corresponde a un expediente real.'],{type:'text/plain'});
 const url=URL.createObjectURL(file);
 const link=document.createElement('a');
 link.href=url;link.download='evidencia-demostracion.txt';link.click();
 URL.revokeObjectURL(url);
});
const chat=document.getElementById('liveChat'),chatMessages=document.getElementById('chatMessages');
function addChatBubble(author,text,citizen=false){
 const bubble=document.createElement('div');
 bubble.className='chat-bubble'+(citizen?' citizen':'');
 const name=document.createElement('strong');
 name.textContent=author;
 const content=document.createElement('span');
 content.textContent=text;
 bubble.append(name,content);chatMessages.appendChild(bubble);
 chatMessages.scrollTop=chatMessages.scrollHeight;
}
document.getElementById('contactForm').addEventListener('submit',e=>{
 e.preventDefault();
 const topic=document.getElementById('contactTopic').value;
 const message=document.getElementById('contactMessage').value.trim();
 const feedback=document.getElementById('contactFeedback');
 if(!topic||!message){feedback.textContent='Selecciona un motivo y escribe tu mensaje para continuar.';feedback.classList.remove('hidden');return}
 e.currentTarget.classList.add('hidden');
 chat.classList.remove('hidden');
 addChatBubble('Tú',`${topic}: ${message}`,true);
 setTimeout(()=>addChatBubble('Suboficial Juan Mendoza','He recibido tu consulta. Estoy revisando la información disponible del expediente para orientarte.'),700);
 document.getElementById('chatMessage').focus();
});
document.getElementById('chatForm').addEventListener('submit',e=>{
 e.preventDefault();
 const input=document.getElementById('chatMessage'),message=input.value.trim();
 if(!message)return;
 addChatBubble('Tú',message,true);input.value='';
 setTimeout(()=>addChatBubble('Suboficial Juan Mendoza','Gracias por la información. La tendré en cuenta para responder tu consulta.'),700);
});
document.getElementById('callOfficer').addEventListener('click',()=>{
 const feedback=document.getElementById('callFeedback');
 feedback.textContent='La llamada es una función de demostración y no se conectará con un número real.';
 feedback.classList.remove('hidden');
});

let font=16;document.getElementById('larger').addEventListener('click',()=>{font=Math.min(32,font+2);document.documentElement.style.setProperty('--base',font+'px')});document.getElementById('smaller').addEventListener('click',()=>{font=Math.max(12,font-2);document.documentElement.style.setProperty('--base',font+'px')});
function searchTerms(){const q=document.getElementById('glossarySearch').value.toLocaleLowerCase('es').trim();let count=0;document.querySelectorAll('#glossary article').forEach(a=>{const match=!q||(a.textContent+' '+a.dataset.term).toLocaleLowerCase('es').includes(q);a.classList.toggle('hidden',!match);if(match)count++});document.getElementById('noTerms').classList.toggle('hidden',count>0)}
document.getElementById('searchGlossary').addEventListener('click',searchTerms);document.getElementById('glossarySearch').addEventListener('input',searchTerms);document.getElementById('glossarySearch').addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();searchTerms()}});
