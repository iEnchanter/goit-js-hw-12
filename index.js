import{a as L,S as b,i as l}from"./assets/vendor-CrlV4O_2.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const w="https://pixabay.com/api/",S="50364226-d4960ed7ef7ef1013eeb128c9";async function q(t,o){const a={key:S,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:15};return(await L.get(w,{params:a})).data}const f=document.querySelector(".gallery"),m=document.querySelector(".loader"),p=document.querySelector(".load-more"),B=new b(".gallery a");function P(t){const o=t.map(({webformatURL:a,largeImageURL:i,tags:e,likes:r,views:n,comments:g,downloads:v})=>`
                <li class="gallery-item">
                    <a href="${i}">
                        <img class="img" src="${a}" alt="${e}" />
                    </a>
                    <div class="info">
                        <div class="info-item">
                            <p class="label">Likes:</p>
                            <p class="value">${r}</p>
                        </div>
                        <div class="info-item">
                            <p class="label">Views:</p>
                            <p class="value">${n}</p>
                        </div>
                        <div class="info-item">
                            <p class="label">Comments:</p>
                            <p class="value">${g}</p>
                        </div>
                        <div class="info-item">
                            <p class="label">Downloads:</p>
                            <p class="value">${v}</p>
                        </div>
                    </div>
                </li>
            `).join("");f.insertAdjacentHTML("beforeend",o),B.refresh()}function E(){f.innerHTML=""}function y(){m.classList.remove("hidden")}function d(){m.classList.add("hidden")}function M(){p.classList.remove("hidden")}function $(){p.classList.add("hidden")}const O=document.querySelector(".form"),x=document.getElementById("search-text"),H=document.querySelector(".load-more");let c="",s=1,u=0;O.addEventListener("submit",async t=>{if(t.preventDefault(),c=x.value.trim(),!c){l.warning({title:"Oops",message:"Please enter a search term."});return}s=1,E(),y(),await h()});H.addEventListener("click",async()=>{s+=1,await h()});async function h(){y();try{const t=await q(c,s);if(t.hits.length===0&&s===1){l.info({message:"No images found. Try another query."}),d();return}P(t.hits),u=t.totalHits;const o=Math.ceil(u/15);s<o?M():($(),l.info({message:"We're sorry, but you've reached the end of search results."})),s>1&&I()}catch(t){console.error(t),l.error({message:"Sorry, there are no images matching your search query. Please try again!"})}finally{d()}}function I(){const{height:t}=document.querySelector(".gallery .gallery-item").getBoundingClientRect();window.scrollBy({top:t*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
