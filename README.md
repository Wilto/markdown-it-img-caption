A little script to turn [useless `title` attributes](https://www.tpgi.com/html5-accessibility-chops-title-attribute-use-and-abuse/) on Markdown images into semantically meaningful `figcaption`s.

Install it with:

```shell
$ npm install Wilto/markdown-it-img-caption
```

I’m using it with Eleventy, to the tune of:

```javascript
const markdownIt = require('markdown-it');
const markdownCaption = require('@wilto/markdown-it-img-caption');

module.exports = function( eleventyConfig ) {
	eleventyConfig.setLibrary('md', markdownIt({
		html: true,
		breaks: true,
		linkify: true
	}).use( markdownCaption ));
}
```

A string following the filename in a Markdown image, like so, will normally bolt a `title` attribute onto the resulting `img`:

```markdown
![Screenshot of Firefox’s JavaScript console. Superimposed is a browser’s alert popup, reading “the page at matmarquis.com says ‘hi.’”](/img/Fig_1.2.png "Using `alert()` on a live website is the JavaScript equivalent of shouting “fire” in a crowded theatre: it isn’t illegal, but certainly isn’t going to win you any friends." 
```

Instead, this little script wraps the result in a `figure`, puts what would be `title` content into a `figcaption` with a unique ID, and adds an `aria-describedby` to the inner `img`. In this case, Eleventy then goes on to work its `eleventy-img` magic, and the result is:

```html
<figure>
	<picture>
		<source type="image/avif" srcset="/img/eh22A368im-1596.avif 1596w">
		<source type="image/webp" srcset="/img/eh22A368im-1596.webp 1596w">
		<img
			loading="lazy"
			decoding="async"
			src="/img/eh22A368im-1596.jpeg"
			alt="Screenshot of Firefox’s JavaScript console. Superimposed is a browser’s alert popup, reading “the page at matmarquis.com says ‘hi.’”"
			aria-describedby="id-5723238896968365"
			width="1596"
			height="864">
	</picture>
	<figcaption id="id-5723238896968365">
		Using `alert()` on a live website is the JavaScript equivalent of shouting “fire” in a crowded theatre: it isn’t illegal, but certainly isn’t going to win you any friends.
	</figcaption>
</figure>
```
