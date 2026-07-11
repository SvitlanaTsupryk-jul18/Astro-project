// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	output: 'static',
	site: 'https://SvitlanaTsupryk-jul18.github.io',
	base: '/Astro-project',
	vite: {
		css: {
			devSourcemap: true,
		},
	},
    fonts: [{
        provider: fontProviders.google(),
        name: "JetBrains Mono",
        cssVariable: "--font-jetbrains-mono",
        weights: [300, 700],
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
