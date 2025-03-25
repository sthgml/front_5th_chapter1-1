const Navigation = (loginStore) => `
  <nav class="bg-white shadow-md p-2 sticky top-14">
    <ul class="flex justify-around">
      <li><button data-path='home' class="text-blue-600">홈</button></li>
      <li><button data-path='profile' class="text-gray-600">프로필</button></li>
      <li><button id="logout" data-path='login' class="text-gray-600">${loginStore.isLoggedIn() ? "로그아웃" : "로그인"}</button></li>
    </ul>
  </nav>
`;

export default Navigation;
