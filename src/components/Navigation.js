const Navigation = (path, loginStore) => {
  return /*html */ `
  <nav class="bg-white shadow-md p-2 sticky top-14">
    <ul class="flex justify-around">
      <li>
        <a data-path='/' href='/' class="${path === "/" ? "text-blue-600 font-bold" : "text-gray-600"}">
        홈
        </a>
      </li>
      <li>
        <a data-path='/profile' href='/profile' class=${path === "/profile" ? "text-blue-600 font-bold" : "text-gray-600"}>프로필</a></button></li>
      <li>
        <a id="logout" data-path='/login' href='/login' class="text-gray-600">${loginStore.isLoggedIn() ? "로그아웃" : "로그인"}
        </a>
      </button>
    </li>
    </ul>
  </nav>
`;
};

export default Navigation;
