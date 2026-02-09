import { Iconify } from "./Iconify";
import { CodeBlock } from "./Code";

const app = (
	<div id="app">
		<div class="backBox">
			<img src="../images/hex.svg" alt="Hex background" />
		</div>

		<main>
			<div class="introBox">
				<div class="introLogoBox">
					<img class="introLogo" src="../images/lestin-logo.svg" alt="Lestin Logo" />
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
		</main>
	</div>
);

document.body.appendChild(app);
