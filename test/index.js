import test from 'ava';
import markdownIt from 'markdown-it'
import markdownItCaption from '../dist/index.mjs';

test('Control', t => {
	const md = markdownIt();
	const img = md.render( `[Alt attribute.](data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs= "Caption")` );

	console.log( img );
	t.pass();
});

test('Captioned', t => {
	const md = markdownIt({
		html: true,
		breaks: true,
		linkify: true
	}).use( markdownItCaption );

	const img = md.render( `[Alt attribute.](data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs= "Caption")` );

	console.log( img );
	t.pass();
});