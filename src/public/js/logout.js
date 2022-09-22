function logout() {
  $.ajax({
    type: 'Get',
    url: 'http://localhost:3000/logout',
    data: {},
    dataType: 'text',
    success: function (res) {
      location.reload();
    },
  });
  const cookieParser = req;
  app.use(cookieParser());
  app.get('/logout', function (req, res) {
    return res.clearCookie('user').end();
  });
}
