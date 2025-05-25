import{a as m,S as f,i as l}from"./assets/vendor-DqUhfJqr.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const p="50364226-d4960ed7ef7ef1013eeb128c9",g="https://pixabay.com/api/";async function y(r){return(await m.get(g,{params:{key:p,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const c=document.querySelector(".gallery"),h=new f(".gallery a");function v(r){const s=r.map(({webformatURL:o,largeImageURL:a,tags:e,likes:t,views:i,comments:d,downloads:u})=>`
                <li class="gallery-item">
                    <a href="${a}">
                        <img class="img" src="${o}" alt="${e}" />
                    </a>
                    <div class="info">
                        <div class="info-item">
                            <p class="label">Likes:</p>
                            <p class="value">${t}</p>
                        </div>
                        <div class="info-item">
                            <p class="label">Views:</p>
                            <p class="value">${i}</p>
                        </div>
                        <div class="info-item">
                            <p class="label">Comments:</p>
                            <p class="value">${d}</p>
                        </div>
                        <div class="info-item">
                            <p class="label">Downloads:</p>
                            <p class="value">${u}</p>
                        </div>
                    </div>
                </li>
            `).join("");c.insertAdjacentHTML("beforeend",s),h.refresh()}function b(){c.innerHTML=""}function L(){const r=document.querySelector(".loader");r&&r.classList.remove("hidden")}function F(){const r=document.querySelector(".loader");r&&r.classList.add("hidden")}const n=document.querySelector(".form");n.addEventListener("submit",async r=>{r.preventDefault();const s=n.elements["search-text"].value.trim();if(!s){l.warning({title:"Oops",message:"Please enter a search term."});return}b(),L();try{const o=await y(s);o.hits.length===0?l.error({title:"",titleColor:"#FFFFFF",titleSize:"16px",backgroundColor:"#EF4040",iconUrl:"./img/bi_x-octagon.svg",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",color:"red",messageColor:"#FFFFFF",messageSize:"16px",closeOnEscape:!0,closeOnClick:!0,theme:"dark"}):v(o.hits)}catch{l.error({title:"Error",message:"Something went wrong. Please try again later.",iconUrl:"./img/bi_x-octagon.svg"})}finally{F()}});
//# sourceMappingURL=index.js.map
