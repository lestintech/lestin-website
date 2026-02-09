import Lestin from "lestin";
import hljs from "highlight.js/lib/core";
import typescript from "highlight.js/lib/languages/typescript";
import xml from "highlight.js/lib/languages/xml";
import "highlight.js/styles/github-dark.css";

hljs.registerLanguage("typescript", typescript);
hljs.registerLanguage("xml", xml);
hljs.registerLanguage("jsx", xml);
hljs.registerLanguage("tsx", typescript);

export function highlightCode(element: HTMLElement) {
	element.querySelectorAll("pre code").forEach((block) => {
		hljs.highlightElement(block as HTMLElement);
	});
}

export function CodeBlock({ children, language = "typescript" }: { language?: string } & Lestin.BaseProps) {
	const pre = (
		<pre>
			<code class={`language-${language}`}>{children}</code>
		</pre>
	) as HTMLElement;

	hljs.highlightElement(pre.querySelector("code")!);
	return pre;
}
