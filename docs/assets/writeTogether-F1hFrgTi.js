import"./modulepreload-polyfill-9p4a8sJU.js";/* empty css                 */import{g as u}from"./index-LZz_RBWS.js";const f=[["category"],null,["gender","age","maxMember"]],d={category:"project",title:"",description:"",date:"오늘",time:"오후 8:00",gender:"anyone",age:"anyone",maxMember:"noLimited"},i={title:{min:0,max:24,isValid:!1},description:{min:0,max:500,isValid:!1}};(function(){const t=document.querySelectorAll(".input");document.querySelector(".form").addEventListener("submit",n=>n.preventDefault()),t.forEach(n=>{const{min:r,max:l}=i[n.id],s=n.nextElementSibling.querySelector(".letter-count"),a=n.nextElementSibling.querySelector(".error-msg");s.textContent=`0/${l}`,a.textContent=`글자 수는 ${r+1}자 이상 ${l}자 이하로 작성해주세요.`})})();const y=document.querySelector("#approve");function x({currentTarget:e}){const t=e.nextElementSibling;e.checked?(t.classList.replace("bg-contents-content-tertiary","bg-secondary"),u.to("#approveHandle",{marginLeft:"auto",duration:.2})):(t.classList.replace("bg-secondary","bg-contents-content-tertiary"),u.to("#approveHandle",{marginLeft:0,duration:.2}))}y.addEventListener("change",x);let c=1;const b=document.querySelectorAll('button[id^="step"]'),h=document.querySelectorAll(".input");function S(e){const t=i[e.id].min,o=i[e.id].max,n=e.value.replace(/\s*/g,"").length,r=n>t&&n<=o;return i[e.id].isValid=r,r}function L(e){const{isValid:t}=i[e.id],o=e.nextElementSibling.querySelector(".error-msg"),n=e.nextElementSibling.querySelector(".letter-count");t?(e.classList.replace("border-red-500","border-contents-content-tertiary"),o.classList.replace("opacity-100","opacity-0"),n.classList.replace("text-red-500","text-contents-content-tertiary")):(e.classList.replace("border-contents-content-tertiary","border-red-500"),o.classList.replace("opacity-0","opacity-100"),n.classList.replace("text-contents-content-tertiary","text-red-500"))}function E(e){const{value:t}=e,o=e.nextElementSibling.querySelector(".letter-count"),n=o.textContent.split("/");n[0]=t.length,o.textContent=`${n[0]}/${n[1]}`}function C(e){const t=document.querySelector("#step2Next");S(e.target),L(e.target),E(e.target),i.title.isValid&&i.description.isValid?t.removeAttribute("disabled"):t.setAttribute("disabled","")}h.forEach(e=>{e.addEventListener("input",C)});function m(e){const t=f[e-1];t!==null&&t.forEach(o=>{const r=[...document.querySelectorAll(`input[name="${o}"]`)].find(l=>l.checked);d[o]=r.value})}function q(e){document.querySelectorAll(".input").forEach(({id:o,value:n})=>{d[o]=n})}function p(e,t){const o=t==="next"?e+1:e-1,n=document.querySelector(`#step${e}`),r=document.querySelector(`#step${o}`);n.classList.add("hidden"),r.classList.remove("hidden")}function v({currentTarget:e}){const{id:t}=e,o=t.slice(-4).toLowerCase();c===1||c===3?m(c):q(),o==="next"?(p(c,o),c+=1):(p(c,o),c-=1)}b.forEach(e=>{e.addEventListener("click",v)});const $=document.querySelector("#done");function A(e){if(c===3){m(c);const{category:t,title:o,description:n,date:r,time:l,age:s,gender:a,maxMember:g}=d;alert(`카테고리: ${t}
      제목 : ${o}
      소개 : ${n}
      날짜 : ${r}
      시간 : ${l}
      연령대 : ${s.replace(/\D/g,"")}
      성별 : ${a}
      최대 인원 : ${g.replace(/\D/g,"")}`),alert("게시글 등록이 완료되었습니다."),window.location.href="/src/pages/board/together.html"}}$.addEventListener("click",A);
