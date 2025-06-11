fetch('post1.md')
  .then(res => res.text())
  .then(md => {
    const html = marked.parse(md);
    document.getElementById('contenido').innerHTML = html;
  })
  .catch(err => {
    document.getElementById('contenido').innerHTML = 'Error cargando el contenido.';
    console.error(err);
  });