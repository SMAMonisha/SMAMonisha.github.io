(function () {
  var grid = document.getElementById('blog-grid');
  if (!grid) return;

  fetch('blog/posts.json')
    .then(function (res) { return res.json(); })
    .then(function (posts) {
      // Sort by date descending
      posts.sort(function (a, b) {
        return new Date(b.date) - new Date(a.date);
      });

      grid.innerHTML = '';

      posts.forEach(function (post) {
        var card = document.createElement('a');
        card.href = 'blog/' + post.slug + '.html';
        card.className = 'blog-card';

        var date = new Date(post.date).toLocaleDateString('en-US', {
          year: 'numeric', month: 'long', day: 'numeric'
        });

        card.innerHTML =
          '<div class="card-meta">' + date + '</div>' +
          '<h3>' + post.title + '</h3>' +
          '<p>' + post.excerpt + '</p>' +
          (post.tags ? post.tags.map(function (t) {
            return '<span class="tag">' + t + '</span>';
          }).join('') : '');

        grid.appendChild(card);
      });
    })
    .catch(function () {
      grid.innerHTML = '<p>No blog posts yet. Check back soon!</p>';
    });
})();
