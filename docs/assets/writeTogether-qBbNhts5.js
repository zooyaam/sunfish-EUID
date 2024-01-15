import"./tailwind-hLRvZ190.js";import{c as h,g as m}from"./index-dUkrqALE.js";import{a as p,g as d}from"./getNode-pa7syr6m.js";import{p as a}from"./delay-L14dHocY.js";import{b as x,a as b}from"./Modal-LwrVZ11o.js";const y=[["category"],null,["gender","age","maxMember"]],s={type:"together",isOpen:!0,category:"프로젝트",title:"",description:"",date:new Date().toISOString(),gender:"누구나",isApproval:!1,maxMember:"제한없음",age:"모든 연령",members:[a.authStore.model.id],user:a.authStore.model.id},l={title:{min:0,max:24,isValid:!1},description:{min:0,max:500,isValid:!1}};(function(){if(!h())return;const t=p(".input");d(".form").addEventListener("submit",n=>n.preventDefault()),t.forEach(n=>{if(n.id==="date"){const r=new Date().toISOString(),i=new Date(r).getTime()+324e5;n.value=new Date(i).toISOString().slice(0,10),n.min=new Date().toISOString().slice(0,10)}else{const{min:r,max:i}=l[n.id],u=n.nextElementSibling.querySelector(".letter-count"),f=n.nextElementSibling.querySelector(".error-msg");u.textContent=`0/${i}`,f.textContent=`글자 수는 ${r+1}자 이상 ${i}자 이하로 작성해주세요.`}})})();const S=d("#approve");function E({currentTarget:e}){const t=e.nextElementSibling;e.checked?(t.classList.replace("bg-contents-content-tertiary","bg-secondary"),m.to("#approveHandle",{marginLeft:"auto",duration:.2}),s.isApproval=!0):(t.classList.replace("bg-secondary","bg-contents-content-tertiary"),m.to("#approveHandle",{marginLeft:0,duration:.2}),s.isApproval=!1)}S.addEventListener("change",E);let c=1;const v=p('button[id^="step"]'),L=p('.input[type="text"], textarea');function w(e){const t=l[e.id].min,o=l[e.id].max,n=e.value.replace(/\s*/g,"").length,r=n>t&&n<=o;return l[e.id].isValid=r,r}function C(e){const{isValid:t}=l[e.id],o=e.nextElementSibling.querySelector(".error-msg"),n=e.nextElementSibling.querySelector(".letter-count");t?(e.classList.replace("border-red-500","border-contents-content-tertiary"),o.classList.replace("opacity-100","opacity-0"),n.classList.replace("text-red-500","text-contents-content-tertiary")):(e.classList.replace("border-contents-content-tertiary","border-red-500"),o.classList.replace("opacity-0","opacity-100"),n.classList.replace("text-contents-content-tertiary","text-red-500"))}function k(e){const{value:t}=e,o=e.nextElementSibling.querySelector(".letter-count"),n=o.textContent.split("/");n[0]=t.length,o.textContent=`${n[0]}/${n[1]}`}function I(e){const t=d("#step2Next");w(e.target),C(e.target),k(e.target),l.title.isValid&&l.description.isValid?t.removeAttribute("disabled"):t.setAttribute("disabled","")}L.forEach(e=>{e.addEventListener("input",I)});function g(e){const t=y[e-1];t!==null&&t.forEach(o=>{const r=[...p(`input[name="${o}"]`)].find(i=>i.checked);s[o]=r.value})}function A(){p(".input").forEach(({id:t,value:o})=>{t==="date"?s[t]=new Date(o).toISOString():s[t]=o})}function O(e,t){const o=t==="next"?e+1:e-1,n=d(`#step${e}`),r=d(`#step${o}`);m.timeline().to(n,{x:t==="next"?-450:450,duration:.3,ease:"power2.inOut",clearProps:"all",onComplete(){r.classList.remove("hidden"),n.classList.add("hidden")}}).from(r,{x:t==="next"?450:-450,duration:.3,ease:"power2.inOut",clearProps:"all",onStart(){c=t==="next"?c+1:c-1}})}function V({currentTarget:e}){const{id:t}=e,o=t.slice(-4).toLowerCase();c===1||c===3?g(c):A(),O(c,o)}v.forEach(e=>{e.addEventListener("click",V)});const B=d("#done");function M(e){let t;const[o]=x("작성이 완료되었습니다.");return async n=>{if(o.showing(),c===3){g(c),s.age=s.age.slice(3),s.maxMember=s.maxMember.slice(9);try{const r=await a.collection("together").create(s);t=r.id;const i={originType:"together",originId:r.id,owner:a.authStore.model.id,members:[a.authStore.model.id],messageBox:JSON.stringify([])},u=await a.collection("chatroom").create(i);await a.collection("together").update(r.id,{chatroomId:u.id}),window.location.replace(`/src/pages/board/togetherView.html?id=${t}`)}catch{}}}}B.addEventListener("click",M());const $=d(".cancel");function D(){const e="❗ 정말 취소하시겠어요?",t="입력한 내용은 모두 사라집니다.<br />계속하시겠습니까?",o="아니오",n="예",[r,i,u]=b({title:e,desc:t,cancelText:o,goBackText:n});return i.addEventListener("click",()=>{r.closing()}),u.addEventListener("click",()=>{window.location.replace("/src/pages/board/together.html")}),()=>{r.showing()}}$.addEventListener("click",D());
