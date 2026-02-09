import { Iconify } from "./Iconify";
import { CodeBlock } from "./Code";
import HexImage from "../images/hex.svg";
import LestinLogo from "../images/lestin-logo.svg";

const app = (
	<div id="app">
		<div class="backBox">
			<img src={HexImage} alt="Hex background" />
		</div>

		<main>
			<div class="introBox">
				<div class="introLogoBox">
					<img class="introLogo" src={LestinLogo} alt="Lestin Logo" />
				</div>

				<div class="introTitleBox">
					<h1>Lestin</h1>
					<p>Vanilla JSX, nothing else.</p>
				</div>
			</div>

			<CodeBlock language="typescript">
				{`function HelloMessage({ name }) {
    return <div>Hello {name}</div>;
}

document.body.appendChild( <HelloMessage name="Taylor" /> );`}
			</CodeBlock>

			<div className="linkButtons">
				<a href="https://www.npmjs.com/package/lestin" className="linkButton npmButton" rel="noreferrer noopener">
					<Iconify icon="devicon:npm" />

					<div>
						<h5>View on NPM</h5>
						<p>lestin</p>
					</div>
				</a>

				<a href="https://github.com/movahhedi/lestin" className="linkButton githubButton" rel="noreferrer noopener">
					<Iconify icon="mdi:github" />

					<div>
						<h5>View on GitHub</h5>
						<p>movahhedi/lestin</p>
					</div>
				</a>
			</div>

			<article>
				<pre>
					{`Lestin has one job: Transform JSX codes to pure HTML elements using document.createElement().

Lestin is DOM-based. There's no virtual-DOM, and thus, no additional overhead. We can theoretically say its performance is ~equal to vanilla JS (it's just three functions). (Please contribute on testing Lestin performance).

Lestin adds less than 1KB gzipped to bundles, but reduces the project size much more than this, as it simplifies component and element creations by supporting JSX; Compared to React (~30KB) and Preact (~3KB).


You don't need to import Lestin in your scripts for JSX. TypeScript and Vite automatically import them upon build. This is due to setting lestin as the jsxImportSource in tsconfig.json. Although you may import it to use it's type declarations such as Lestin.PropsWithChildren.

Lestin uses Vite as its primarily supported bundler. Vite is extremely fast⚡️, and reliable.

Quick reminder: If you choose not to use JSX in your project, using Lestin does nothing, and you can safely remove it. But I really can't find a reason not to use JSX in new projects.
`}		</pre>
		</article>
		</main>
	</div>
);

document.body.appendChild(app);
