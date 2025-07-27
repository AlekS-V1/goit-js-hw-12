import{a as S,S as q,i as h}from"./assets/vendor-Dy2ZTtfi.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();async function m(t,o=1){const s=new URLSearchParams({key:"51330331!-9209d844650666afb5a4e1e7c",q:`${t}`,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:o}),{data:a}=await S.get(`https://pixabay.com/api/?${s}`);return console.log(a),a}const f=document.querySelector(".gallery"),p=document.querySelector(".loader");function g(t){const o=t.map(({webformatURL:a,largeImageURL:e,tags:r,likes:l,views:L,comments:v,downloads:w})=>`<li class="card">            
                <a href="${e}" class="largeImage">
                    <img src="${a}" class="webFormat" alt="${r}" />
                </a>                        
                <div class="container-lable">
                    <div class="label">
                        <h3 class="headrLable">Likes</h3>
                        <p class="textLable">${l}</p>
                    </div>
                    <div class="label">
                        <h3 class="headrLable">Views</h3>
                        <p class="textLable">${L}</p>
                    </div>
                    <div class="label">
                        <h3 class="headrLable">Comments</h3>
                        <p class="textLable">${v}</p>
                    </div>
                    <div class="label">
                        <h3 class="headrLable">Downloads</h3>
                        <p class="textLable">${w}</p>
                    </div>
                </div>            
        </li>`).join("");f.insertAdjacentHTML("beforeend",o),new q(".largeImage",{captionsData:"alt",captionDelay:250}).refresh()}function B(){f.innerHTML=""}function y(){p.classList.remove("hidden")}function c(){p.classList.add("hidden")}function b(){document.querySelector(".load-button").classList.replace("load-more-hidden","load-more")}function d(){document.querySelector(".load-button").classList.replace("load-more","load-more-hidden")}const u=document.querySelector(".form");let i="",n=1;const x=15,$=document.querySelector(".load-button");$.addEventListener("click",async function(){y(),d(),n++;try{const t=await m(i,n),o=Math.ceil(t.totalHits/x);g(t.hits);const a=document.querySelector(".card").getBoundingClientRect().height;if(window.scrollBy({left:0,top:a*2,behavior:"smooth"}),n===o)return d(),c(),h.error({position:"topRight",message:"We're sorry, but you've reached the end of search results."})}catch(t){console.log(t.message)}c(),b()});u.addEventListener("submit",t=>{t.preventDefault();const o=document.querySelector('input[name="search-text"]');if(n=1,o.value===" "||o.value==="  ")return t.preventDefault(),o.value="";i=o.value.trim(),B(),y(),m(i).then(s=>{if(s.length<=0)return h.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});g(s.hits),b();const a=u.getBoundingClientRect().height;window.scrollBy({left:0,top:a,behavior:"smooth"})}).catch(s=>console.log("Помилка:",s)).finally(()=>{c()}),t.target.reset()});
//# sourceMappingURL=index.js.map
