import{a as f,S as h,i as m}from"./assets/vendor-Dy2ZTtfi.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function p(a){const r=new URLSearchParams({key:"51330331!-9209d844650666afb5a4e1e7c",q:`${a}`,image_type:"photo",orientation:"horizontal",safesearch:!0});return f.get(`https://pixabay.com/api/?${r}`).then(s=>s.data.hits).catch(s=>console.log(s.messege))}const i=document.querySelector(".gallery"),n=document.querySelector(".loader");function y(a){const r=a.map(({webformatURL:o,largeImageURL:e,tags:t,likes:l,views:c,comments:d,downloads:u})=>`<li class="card">            
                <a href="${e}" class="largeImage">
                    <img src="${o}" class="webFormat" alt="${t}" />
                </a>    
                      
                <div class="container-lable">
                    <div class="label">
                        <h3 class="headrLable">Likes</h3>
                        <p class="textLable">${l}</p>
                    </div>
                    <div class="label">
                        <h3 class="headrLable">Views</h3>
                        <p class="textLable">${c}</p>
                    </div>
                    <div class="label">
                        <h3 class="headrLable">Comments</h3>
                        <p class="textLable">${d}</p>
                    </div>
                    <div class="label">
                        <h3 class="headrLable">Downloads</h3>
                        <p class="textLable">${u}</p>
                    </div>
                </div>            
        </li>`).join("");i.innerHTML=r,new h(".largeImage",{captionsData:"alt",captionDelay:250}).refresh()}function g(){i.innerHTML=""}function L(){n.classList.remove("hidden")}function b(){n.classList.add("hidden")}const v=document.querySelector(".form");v.addEventListener("submit",a=>{a.preventDefault();const r=document.querySelector('input[name="search-text"]');if(r.value===" "||r.value==="  ")return a.preventDefault(),r.value="";const s=r.value.trim();g(),L(),p(s).then(o=>{if(o.length<=0)return m.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});y(o)}).finally(()=>{b()}),a.target.reset()});
//# sourceMappingURL=index.js.map
