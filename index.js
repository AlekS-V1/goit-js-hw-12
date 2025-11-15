import{a as $,S as x,i as f}from"./assets/vendor-Dy2ZTtfi.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function r(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(t){if(t.ep)return;t.ep=!0;const a=r(t);fetch(t.href,a)}})();async function y(e,o=1){const r=new URLSearchParams({key:"51330331-9209d844650666afb5a4e1e7c",q:`${e}`,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:o}),{data:s}=await $.get(`https://pixabay.com/api/?${r}`);return s}let u=null;function p(e){const o=document.querySelector(".gallery"),r=e.map(({webformatURL:s,largeImageURL:t,tags:a,likes:n,views:S,comments:q,downloads:w})=>`<li class="card">            
                <a href="${t}" class="largeImage">
                    <img src="${s}" class="webFormat" alt="${a}" />
                </a>                        
                <div class="container-lable">
                    <div class="label">
                        <h3 class="headrLable">Likes</h3>
                        <p class="textLable">${n}</p>
                    </div>
                    <div class="label">
                        <h3 class="headrLable">Views</h3>
                        <p class="textLable">${S}</p>
                    </div>
                    <div class="label">
                        <h3 class="headrLable">Comments</h3>
                        <p class="textLable">${q}</p>
                    </div>
                    <div class="label">
                        <h3 class="headrLable">Downloads</h3>
                        <p class="textLable">${w}</p>
                    </div>
                </div>            
        </li>`).join("");o?o.insertAdjacentHTML("beforeend",r):alert("Елемент галереї не знайдено в DOM"),u?u.refresh():u=new x(".card a",{captionsData:"alt",captionDelay:250})}function m(){const e=document.querySelector(".gallery");e&&(e.innerHTML="")}function g(){const e=document.querySelector(".loader");e&&e.classList.remove("hidden")}function b(){const e=document.querySelector(".loader");e&&e.classList.add("hidden")}function L(){const e=document.querySelector(".load-button");e&&e.classList.remove("load-more-hidden")}function l(){const e=document.querySelector(".load-button");e&&e.classList.add("load-more-hidden")}const M=document.querySelector(".form"),h=document.querySelector(".gallery"),B=document.querySelector(".load-button");let c="",i=1,d=0;const v=15;M.addEventListener("submit",async e=>{e.preventDefault();const o=document.querySelector('input[name="search-text"]');if(c=o.value.trim(),i=1,l(),!c.trim())return m(),l(),i=1,o.value="";m(),g();try{const{hits:r=[],totalHits:s=0}=await y(c,i);if(d=Math.ceil(s/v),!r.length){f.errro({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}if(r.length&&(p(r),L()),i===d)return l(),f.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."})}catch(r){l(),console.error("Помилка:",r)}finally{b()}e.target.reset()});B.addEventListener("click",async function(){g(),l(),i++;try{const{hits:e=[],totalHits:o=0}=await y(c,i);d=Math.ceil(o/v),e.length&&p(e);let r;if(h&&h.children[0]){r=h.children[0];const s=r.getBoundingClientRect().height;window.scrollBy({top:s*2,left:0,behavior:"smooth"})}if(i===d)return l(),f.warning({position:"topRight",message:"We're sorry, but you've reached the end of search results."});L()}catch(e){l(),console.log(e.message)}finally{b()}});
//# sourceMappingURL=index.js.map
