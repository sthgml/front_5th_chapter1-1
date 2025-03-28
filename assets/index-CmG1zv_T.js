var h=Object.defineProperty;var b=(o,t,e)=>t in o?h(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var l=(o,t,e)=>b(o,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function e(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(n){if(n.ep)return;n.ep=!0;const a=e(n);fetch(n.href,a)}})();const u=(o,t)=>`
  <nav class="bg-white shadow-md p-2 sticky top-14">
    <ul class="flex justify-around">
      <li>
        <a data-path='/' href='/' class="${o==="/"?"text-blue-600 font-bold":"text-gray-600"}">
        홈
        </a>
      </li>
      <li>
        <a data-path='/profile' href='/profile' class=${o==="/profile"?"text-blue-600 font-bold":"text-gray-600"}>프로필</a></button></li>
      <li>
      <li>
        ${t.isLoggedIn()?p():f()}
      </li>
      </button>
    </li>
    </ul>
  </nav>
`,f=()=>`
  <a id="login" data-path='/login' href='/login' class="text-gray-600">로그인</a>
`,p=()=>`
  <a id="logout" data-path='/' href="/login" class="text-gray-600">로그아웃</a>
`,c=({currentPath:o,loginStore:t})=>`
  <div class="bg-gray-100 min-h-screen flex justify-center">
    <div class="max-w-md w-full">
      <header class="bg-blue-600 text-white p-4 sticky top-0">
        <h1 class="text-2xl font-bold">항해플러스</h1>
      </header>

      ${u(o,t)}

      <main class="p-4">
        <div class="mb-4 bg-white rounded-lg shadow p-4">
          <textarea class="w-full p-2 border rounded" placeholder="무슨 생각을 하고 계신가요?"></textarea>
          <button class="mt-2 bg-blue-600 text-white px-4 py-2 rounded">게시</button>
        </div>

        <div class="space-y-4">

          <div class="bg-white rounded-lg shadow p-4">
            <div class="flex items-center mb-2">
              <img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
              <div>
                <p class="font-bold">홍길동</p>
                <p class="text-sm text-gray-500">5분 전</p>
              </div>
            </div>
            <p>오늘 날씨가 정말 좋네요. 다들 좋은 하루 보내세요!</p>
            <div class="mt-2 flex justify-between text-gray-500">
              <button>좋아요</button>
              <button>댓글</button>
              <button>공유</button>
            </div>
          </div>

          <div class="bg-white rounded-lg shadow p-4">
            <div class="flex items-center mb-2">
              <img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
              <div>
                <p class="font-bold">김철수</p>
                <p class="text-sm text-gray-500">15분 전</p>
              </div>
            </div>
            <p>새로운 프로젝트를 시작했어요. 열심히 코딩 중입니다!</p>
            <div class="mt-2 flex justify-between text-gray-500">
              <button>좋아요</button>
              <button>댓글</button>
              <button>공유</button>
            </div>
          </div>

          <div class="bg-white rounded-lg shadow p-4">
            <div class="flex items-center mb-2">
              <img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
              <div>
                <p class="font-bold">이영희</p>
                <p class="text-sm text-gray-500">30분 전</p>
              </div>
            </div>
            <p>오늘 점심 메뉴 추천 받습니다. 뭐가 좋을까요?</p>
            <div class="mt-2 flex justify-between text-gray-500">
              <button>좋아요</button>
              <button>댓글</button>
              <button>공유</button>
            </div>
          </div>

          <div class="bg-white rounded-lg shadow p-4">
            <div class="flex items-center mb-2">
              <img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
              <div>
                <p class="font-bold">박민수</p>
                <p class="text-sm text-gray-500">1시간 전</p>
              </div>
            </div>
            <p>주말에 등산 가실 분 계신가요? 함께 가요!</p>
            <div class="mt-2 flex justify-between text-gray-500">
              <button>좋아요</button>
              <button>댓글</button>
              <button>공유</button>
            </div>
          </div>

          <div class="bg-white rounded-lg shadow p-4">
            <div class="flex items-center mb-2">
              <img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
              <div>
                <p class="font-bold">정수연</p>
                <p class="text-sm text-gray-500">2시간 전</p>
              </div>
            </div>
            <p>새로 나온 영화 재미있대요. 같이 보러 갈 사람?</p>
            <div class="mt-2 flex justify-between text-gray-500">
              <button>좋아요</button>
              <button>댓글</button>
              <button>공유</button>
            </div>
          </div>
        </div>
      </main>

      <footer class="bg-gray-200 p-4 text-center">
        <p>&copy; 2024 항해플러스. All rights reserved.</p>
      </footer>
    </div>
  </div>
`,m=({currentPath:o,loginStore:t})=>`
  <div id="root">
    <div class="bg-gray-100 min-h-screen flex justify-center">
      <div class="max-w-md w-full">
        <header class="bg-blue-600 text-white p-4 sticky top-0">
          <h1 class="text-2xl font-bold">항해플러스</h1>
        </header>

        ${u(o,t)}

        <main class="p-4">
          <div class="bg-white p-8 rounded-lg shadow-md">
            <h2 class="text-2xl font-bold text-center text-blue-600 mb-8">
              내 프로필
            </h2>
            <form id="profile-form">
              <div class="mb-4">
                <label
                  for="username"
                  class="block text-gray-700 text-sm font-bold mb-2"
                  >사용자 이름</label
                >
                <input
                  type="text"
                  id="username"
                  name="username"
                  value="${t.getUserInfo().username}"
                  class="w-full p-2 border rounded"
                />
              </div>
              <div class="mb-4">
                <label
                  for="email"
                  class="block text-gray-700 text-sm font-bold mb-2"
                  >이메일</label
                >
                <input
                  type="email"
                  id="email"
                  name="email"
                  value="${t.getUserInfo().email}"
                  class="w-full p-2 border rounded"
                />
              </div>
              <div class="mb-6">
                <label
                  for="bio"
                  class="block text-gray-700 text-sm font-bold mb-2"
                  >자기소개</label
                >
                <textarea
                  id="bio"
                  name="bio"
                  rows="4"
                  class="w-full p-2 border rounded"
                >
${t.getUserInfo().bio}</textarea>
              </div>
              <button
                id="update-button"
                type="submit"
                class="w-full bg-blue-600 text-white p-2 rounded font-bold"
              >
                프로필 업데이트
              </button>
            </form>
          </div>
        </main>

        <footer class="bg-gray-200 p-4 text-center">
          <p>&copy; 2024 항해플러스. All rights reserved.</p>
        </footer>
      </div>
    </div>
  </div>
`,g=()=>`
  <main class="bg-gray-100 flex items-center justify-center min-h-screen">
    <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <h1 class="text-2xl font-bold text-center text-blue-600 mb-8">항해플러스</h1>
      <form id="login-form">
        <div class="mb-4">
          <input id="username" name="username" type="text" placeholder="사용자 이름" class="w-full p-2 border rounded">
        </div>
        <div class="mb-6">
          <input type="password" name="password" placeholder="비밀번호" class="w-full p-2 border rounded">
        </div>
        <button id="login" data-path="/" type="submit" data-path="/" class="w-full bg-blue-600 text-white p-2 rounded font-bold">로그인</button>
      </form>
      <div class="mt-4 text-center">
        <a href="#" class="text-blue-600 text-sm">비밀번호를 잊으셨나요?</a>
      </div>
      <hr class="my-6">
      <div class="text-center">
        <button class="bg-green-500 text-white px-4 py-2 rounded font-bold">새 계정 만들기</button>
      </div>
    </div>
  </main>`,v=()=>`
  <main class="bg-gray-100 flex items-center justify-center min-h-screen">
    <div class="bg-white p-8 rounded-lg shadow-md w-full text-center" style="max-width: 480px">
      <h1 class="text-2xl font-bold text-blue-600 mb-4">항해플러스</h1>
      <p class="text-4xl font-bold text-gray-800 mb-4">404</p>
      <p class="text-xl text-gray-600 mb-8">페이지를 찾을 수 없습니다</p>
      <p class="text-gray-600 mb-8">
        요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
      </p>
      <a href="/" class="bg-blue-600 text-white px-4 py-2 rounded font-bold">
        홈으로 돌아가기
      </a>
    </div>
  </main>
`,x={"/":c,"":c,"/profile":m,"/login":g,"*":v};class i{constructor(t,e,s=""){l(this,"currentPath");l(this,"loginStore");l(this,"basePath");if(i.instance)return i.instance;i.instance=this,this.basePath=s,this.currentPath=window.location.pathname.replace(this.basePath,""),console.log(this.currentPath),console.log(this.basePath),this._routes=t,this.loginStore=e}addRoute(t,e){this._routes==null&&(this._routes[t]=e)}startDetect(){window.addEventListener("popstate",()=>{this.currentPath=window.location.pathname.replace(this.basePath,""),this.render()})}init(){this.startDetect(),this.render()}navigate(t){this.currentPath=t,t=this.basePath+t,window.history.pushState({path:t},"",t),window.dispatchEvent(new Event("popstate"))}needRedirect(t){const e=this.loginStore.isLoggedIn();if(t==="/profile"&&!e)return"/login";if(t==="/login"&&e)return"/"}render(){const t=this.needRedirect(this.currentPath);t!=null&&this.navigate(t);const s=this._handleRoute(this.currentPath)({currentPath:this.currentPath,loginStore:this.loginStore});this.attachDocument(s)}_handleRoute(t){return this._routes[t]||this._routes["*"]}attachDocument(t){const e=document.getElementById("root");e.innerHTML=t}}class w extends i{constructor(t,e,s){super(t,e,s),this.startDetectForHash()}startDetectForHash(){window.addEventListener("hashchange",()=>{window.location.href.length>=1&&(this.currentPath=window.location.hash.slice(1)||"/",console.log("hashchange",this.currentPath),this.render())})}}class r{constructor(){l(this,"userInfo",null);l(this,"key","user");if(r.instance)return r.instance;const t=localStorage.getItem(this.key);this.userInfo=JSON.parse(t),r.instance=this}getUserInfo(){return this.userInfo}setUserInfo(t){if(this.userInfo=t,t==null){localStorage.removeItem(this.key);return}localStorage.setItem(this.key,JSON.stringify(t))}isLoggedIn(){return this.userInfo!=null}}const y="/front_5th_chapter1-1";function P(){const o=new r,t=new w(x,o,y);t.init(),window.addEventListener("click",e=>{const s=e.target;if(s){if(s.dataset.path==null||s.id==="login")return;s.id==="logout"&&o.setUserInfo(null),t.navigate(s.dataset.path)}}),window.addEventListener("submit",e=>{if(e.target.id==="login-form"){const s=e.target.elements;o.setUserInfo({username:s.username.value,email:"",bio:""}),t.navigate("/")}if(e.target.id==="profile-form"){const s=e.target.elements;o.setUserInfo({username:s.username.value,email:s.email.value,bio:s.bio.value}),t.navigate("")}})}P();
