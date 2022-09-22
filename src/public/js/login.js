document.getElementById('loginBtn').addEventListener('click', () => {
  const getId = document.getElementById('id').value;
  const getPwd = document.getElementById('pwd').value;
  const data = [getId, getPwd];
  if (getId == '') {
    alert('아이디를 입력해주세요.');
  } else if (getPwd == '') {
    alert('비밀번호를 입력해주세요.');
  } else {
    axios
      .post('/login', {
        data,
      })
      .then((res) => console.log(res.data));
    window.location = '/';
  }
});
