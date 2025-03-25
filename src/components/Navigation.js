const Navigation = (path, loginStore) => {
  return `
  <nav class="bg-white shadow-md p-2 sticky top-14">
    <ul class="flex justify-around">
    <li><button data-path='/' class="${path === "/" ? "text-blue-600 font-bold" : "text-gray-600"}">홈</button></li>
    <li><button data-path='/profile' class=${path === "/profile" ? "text-blue-600 font-bold" : "text-gray-600"}>프로필</button></li>
      <li><button id="logout" data-path='/login' class="text-gray-600">${loginStore.isLoggedIn() ? "로그아웃" : "로그인"}</button></li>
    </ul>
  </nav>
`;
};

export default Navigation;
