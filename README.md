```
const markdownIt = require('markdown-it');
const markdownCaption = require('./util/caption');

module.exports = function( eleventyConfig ) {
	eleventyConfig.setLibrary('md', markdownIt({
		html: true,
		breaks: true,
		linkify: true
	}).use( markdownCaption ));
}
```

```
![Screenshot of Firefox’s JavaScript console. Superimposed is a browser’s alert popup, reading “the page at matmarquis.com says ‘hi.’”](/img/Fig_1.2.png "Using `alert()` on a live website is the JavaScript equivalent of shouting “fire” in a crowded theatre: it isn’t illegal, but certainly isn’t going to win you any friends." )
```

```
<figure>
	<picture>
		<source type="image/avif" srcset="/img/eh22A368im-1596.avif 1596w">
		<source type="image/webp" srcset="/img/eh22A368im-1596.webp 1596w">
		<img
			loading="lazy"
			decoding="async"
			src="/img/eh22A368im-1596.jpeg"
			alt="Screenshot of Firefox’s JavaScript console. Superimposed is a browser’s alert popup, reading “the page at matmarquis.com says ‘hi.’”"
			id="id-5723238896968365"
			width="1596"
			height="864">
	</picture>
	<figcaption aria-describedby="id-5723238896968365">
		Using `alert()` on a live website is the JavaScript equivalent of shouting “fire” in a crowded theatre: it isn’t illegal, but certainly isn’t going to win you any friends.
	</figcaption>
</figure>
```
