export default function markdownItCaption(md) {
	const original = md.renderer.rules.image;

	md.renderer.rules.image = (tokens, idx, options, env, self) => {
		const [src, alt, caption] = tokens[idx].attrs,
			id = 'id-' + performance.now().toString().replace(/\./gi, '');

		if (caption) {
			return `<figure><img src="${src[1]}" alt="${alt[1]}" id="${id}"><figcaption aria-describedby="${id}">${caption[1]}</figcaption></figure>`;
		}
		return original(tokens, idx, options, env, self);
	};
};
