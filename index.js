import{a as q,S as $,i as h}from"./assets/vendor-Dy2ZTtfi.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();async function y(e,a=1){const r=new URLSearchParams({key:"51330331-9209d844650666afb5a4e1e7c",q:`${e}`,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:a}),{data:s}=await q.get(`https://pixabay.com/api/?${r}`);return s}let d=null;function p(e){const a=document.querySelector(".gallery"),r=e.map(({webformatURL:s,largeImageURL:t,tags:o,likes:n,views:v,comments:w,downloads:S})=>`<li class="card">            
                <a href="${t}" class="largeImage">
                    <img src="${s}" class="webFormat" alt="${o}" />
                </a>                        
                <div class="container-lable">
                    <div class="label">
                        <h3 class="headrLable">Likes</h3>
                        <p class="textLable">${n}</p>
                    </div>
                    <div class="label">
                        <h3 class="headrLable">Views</h3>
                        <p class="textLable">${v}</p>
                    </div>
                    <div class="label">
                        <h3 class="headrLable">Comments</h3>
                        <p class="textLable">${w}</p>
                    </div>
                    <div class="label">
                        <h3 class="headrLable">Downloads</h3>
                        <p class="textLable">${S}</p>
                    </div>
                </div>            
        </li>`).join("");a?a.insertAdjacentHTML("beforeend",r):alert("Елемент галереї не знайдено в DOM"),d?d.refresh():d=new $(".card a",{captionsData:"alt",captionDelay:250})}function m(){const e=document.querySelector(".gallery");e&&(e.innerHTML="")}function g(){const e=document.querySelector(".loader");e&&e.classList.remove("hidden")}function b(){const e=document.querySelector(".loader");e&&e.classList.add("hidden")}function L(){const e=document.querySelector(".load-button");e&&e.classList.remove("load-more-hidden")}function l(){const e=document.querySelector(".load-button");e&&e.classList.add("load-more-hidden")}const x=document.querySelector(".form"),u=document.querySelector(".gallery"),M=document.querySelector(".load-button");let c="",i=1,f=0;const B=15;x.addEventListener("submit",async e=>{e.preventDefault();const a=document.querySelector('input[name="search-text"]');if(c=a.value.trim(),i=1,l(),!c.trim())return m(),l(),i=1,a.value="";m(),g();try{const{hits:r=[],totalHits:s=0}=await y(c,i);if(f=Math.ceil(s/B),!r.length){h.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}if(r.length&&(p(r),L()),i===f)return l(),h.warning({position:"topRight",message:"We're sorry, but you've reached the end of search results."})}catch(r){l(),console.error("Помилка:",r)}finally{b()}e.target.reset()});M.addEventListener("click",async function(){g(),l(),i++;try{const{hits:e=[],totalHits:a=0}=await y(c,i);e.length&&p(e);let r;if(u&&u.children[0]){r=u.children[0];const s=r.getBoundingClientRect().height;window.scrollBy({top:s*2,left:0,behavior:"smooth"})}if(i===f)return l(),h.warning({position:"topRight",message:"We're sorry, but you've reached the end of search results."});L()}catch(e){l(),console.error(e.message)}finally{b()}});
//# sourceMappingURL=index.js.map
