import{a as b,S as w,i as l}from"./assets/vendor-CrlV4O_2.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}})();const S="https://pixabay.com/api/",q="50364226-d4960ed7ef7ef1013eeb128c9";async function B(t,r){const a={key:q,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:15};return(await b.get(S,{params:a})).data}const f=document.querySelector(".gallery"),m=document.querySelector(".loader"),p=document.querySelector(".load-more"),P=new w(".gallery a");function E(t){const r=t.map(({webformatURL:a,largeImageURL:i,tags:e,likes:o,views:n,comments:v,downloads:L})=>`
                <li class="gallery-item">
                    <a href="${i}">
                        <img class="img" src="${a}" alt="${e}" />
                    </a>
                    <div class="info">
                        <div class="info-item">
                            <p class="label">Likes:</p>
                            <p class="value">${o}</p>
                        </div>
                        <div class="info-item">
                            <p class="label">Views:</p>
                            <p class="value">${n}</p>
                        </div>
                        <div class="info-item">
                            <p class="label">Comments:</p>
                            <p class="value">${v}</p>
                        </div>
                        <div class="info-item">
                            <p class="label">Downloads:</p>
                            <p class="value">${L}</p>
                        </div>
                    </div>
                </li>
            `).join("");f.insertAdjacentHTML("beforeend",r),P.refresh()}function M(){f.innerHTML=""}function y(){m.classList.remove("hidden")}function d(){m.classList.add("hidden")}function $(){p.classList.remove("hidden")}function O(){p.classList.add("hidden")}const x=document.querySelector(".form"),H=document.getElementById("search-text"),h=document.querySelector(".load-more");let c="",s=1,u=0;x.addEventListener("submit",async t=>{if(t.preventDefault(),c=H.value.trim(),!c){l.warning({title:"Oops",message:"Please enter a search term."});return}s=1,M(),y(),await g()});h.addEventListener("click",async()=>{s+=1,await g()});async function g(){y();try{const t=await B(c,s);if(t.hits.length===0&&s===1){l.info({message:"No images found. Try another query."}),d();return}E(t.hits),u=t.totalHits;const r=Math.ceil(u/15);s<r?$():(O(),l.info({message:"We're sorry, but you've reached the end of search results."})),s>1&&I()}catch(t){console.error(t),l.error({message:"Sorry, there are no images matching your search query. Please try again!"})}finally{d()}}function I(){const{height:t}=document.querySelector(".gallery .gallery-item").getBoundingClientRect();window.scrollBy({top:t*2,behavior:"smooth"})}console.log(h.classList);
//# sourceMappingURL=index.js.map
