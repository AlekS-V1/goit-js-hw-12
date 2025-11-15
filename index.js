import{a as $,S as x,i as m}from"./assets/vendor-Dy2ZTtfi.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function r(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(t){if(t.ep)return;t.ep=!0;const a=r(t);fetch(t.href,a)}})();async function p(e,o=1){const r=new URLSearchParams({key:"51330331-9209d844650666afb5a4e1e7c",q:`${e}`,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:o}),{data:s}=await $.get(`https://pixabay.com/api/?${r}`);return s}let h=null;function g(e){const o=document.querySelector(".gallery"),r=e.map(({webformatURL:s,largeImageURL:t,tags:a,likes:c,views:S,comments:q,downloads:w})=>`<li class="card">            
                <a href="${t}" class="largeImage">
                    <img src="${s}" class="webFormat" alt="${a}" />
                </a>                        
                <div class="container-lable">
                    <div class="label">
                        <h3 class="headrLable">Likes</h3>
                        <p class="textLable">${c}</p>
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
        </li>`).join("");o?o.insertAdjacentHTML("beforeend",r):alert("Елемент галереї не знайдено в DOM"),h?h.refresh():h=new x(".card a",{captionsData:"alt",captionDelay:250})}function y(){const e=document.querySelector(".gallery");e&&(e.innerHTML="")}function b(){const e=document.querySelector(".loader");e&&e.classList.remove("hidden")}function n(){const e=document.querySelector(".loader");e&&e.classList.add("hidden")}function L(){const e=document.querySelector(".load-button");e&&e.classList.remove("load-more-hidden")}function l(){const e=document.querySelector(".load-button");e&&e.classList.add("load-more-hidden")}const M=document.querySelector(".form"),f=document.querySelector(".gallery"),B=document.querySelector(".load-button");let d="",i=1,u=0;const v=15;M.addEventListener("submit",async e=>{e.preventDefault();const o=document.querySelector('input[name="search-text"]');if(d=o.value.trim(),i=1,l(),!d.trim())return y(),l(),i=1,o.value="";y(),b();try{const{hits:r=[],totalHits:s=0}=await p(d,i);if(!r.length){m.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}if(r.length&&(g(r),L()),u=Math.ceil(s/v),i===u)return l(),n(),m.error({position:"topRight",message:"We're sorry, but you've reached the end of search results."})}catch(r){l(),n(),console.error("Помилка:",r)}finally{n()}e.target.reset()});B.addEventListener("click",async function(){b(),l(),i++;try{const{hits:e=[],totalHits:o=0}=await p(d,i);u=Math.ceil(o/v),e.length&&g(e);let r;if(f&&f.children[0]){r=f.children[0];const s=r.getBoundingClientRect().height;window.scrollBy({top:s*2,left:0,behavior:"smooth"})}if(i===u)return l(),n(),m.error({position:"topRight",message:"We're sorry, but you've reached the end of search results."});L()}catch(e){l(),n(),console.log(e.message)}n()});
//# sourceMappingURL=index.js.map
