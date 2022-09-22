function modify() {
  const title = document.getElementById('title').value;
  const content = document.getElementById('content').value;
  const type = document.getElementById('type');
  const sort = type.options[type.selectedIndex].value;
  const period = document.getElementById('period').value;
  const goal = document.getElementById('goal').value;

  axios
    .put('/update', {
      title,
      content,
      sort,
      period,
      goal,
    })

    .then((res) => {
      div.innerText = res.data.title;
      div.innerText = res.data.content;
      div.innerText = res.data.sort;
      div.innerText = res.data.period;
      div.innerText = res.data.goal;
    });

  fetch('/usage').then(function () {
    window.location = 'http://localhost:3000/usage';
  });
}
