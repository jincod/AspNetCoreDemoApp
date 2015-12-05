const handleErrors = (response) => {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}
fetch('/api/values')
  .then(handleErrors)
  .then(response => response.json())
  .then((result) => {
    var items = result.map((item) => '<li class="list-group-item">' + item + '</li>');
    document.querySelector('.js-result').innerHTML = items.join('');
  })
  .catch((err) => alert(err));