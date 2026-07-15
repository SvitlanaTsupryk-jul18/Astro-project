// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import compress from 'astro-compress';

// https://astro.build/config
export default defineConfig({
	output: 'static',
	site: 'https://SvitlanaTsupryk-jul18.github.io',
	base: '/Astro-project',
	// the dev toolbar's own modules 504 under astro 6.4.8 and spam the
	// console — the site itself is unaffected; re-enable after upgrading
	devToolbar: { enabled: false },
	// Minifies HTML/CSS/JS and runs SVGO over every SVG in the built dist/
	// output (inlined icons included). Only touches the production build,
	// never the dev server — keep it last so it compresses what every
	// other integration has already emitted.
	integrations: [compress()],
	vite: {
		css: {
			devSourcemap: true,
		},
	},
    fonts: [{
        provider: fontProviders.google(),
        name: "JetBrains Mono",
        cssVariable: "--font-jetbrains-mono",
        // the design uses 300/400/500/700 for mono text; without 400 and 500
        // those elements fall back to the nearest loaded weight (300) and render
        // too thin compared to Figma
        weights: [300, 400, 500, 700],
        subsets: ["cyrillic", "latin"],
      },
      {
        provider: fontProviders.local(),
        name: "Fixel Text",
        cssVariable: "--font-fixel-text",
        options: {
          variants: [
            { weight: 400, style: "normal", src: ["./src/assets/fonts/FixelText-Regular.woff2"] },
            { weight: 500, style: "normal", src: ["./src/assets/fonts/FixelText-Medium.woff2"] },
            { weight: 600, style: "normal", src: ["./src/assets/fonts/FixelText-SemiBold.woff2"] },
            { weight: 700, style: "normal", src: ["./src/assets/fonts/FixelText-Bold.woff2"] },
          ],
        },
      }],
},);
