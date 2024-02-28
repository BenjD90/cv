// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: 'CV - Benjamin DANIEL',
	tagline: 'Ingénieur back-end',
	favicon: 'img/favicon.ico',

	// Set the production url of your site here
	url: 'https://benjd90.github.io/',
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: '/cv/',

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: 'BenjD90', // Usually your GitHub org/user name.
	projectName: 'cv', // Usually your repo name.

	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',

	// Even if you don't use internationalization, you can use this field to set
	// useful metadata like html lang. For example, if your site is Chinese, you
	// may want to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: 'fr',
		locales: ['fr'],
	},

	presets: [
		[
			'classic',
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					sidebarPath: './sidebars.js',
				},
				blog: false,
				// blog: {
				//   showReadingTime: true,
				// },
				theme: {
					customCss: './src/css/custom.css',
				},
				sitemap: {
					changefreq: 'weekly',
					priority: 0.5,
					filename: 'sitemap.xml',
				},
				gtag: {
					trackingID: 'GTM-TV5HCVD3',
					anonymizeIP: false,
				},
			}),
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			// Replace with your project's social card
			image: 'img/social-card.jpg',
			navbar: {
				title: 'Benjamin DANIEL',
				logo: {
					alt: 'Me',
					src: 'img/portrait-flipped-32.webp',
				},
				items: [
					{
						type: 'docSidebar',
						sidebarId: 'cvSidebar',
						position: 'left',
						label: 'CV',
					},
					// { to: "/blog", label: "Blog", position: "left" },
					{
						href: 'https://github.com/BenjD90/cv',
						label: 'GitHub',
						position: 'right',
					},
				],
			},
			footer: {
				links: [
					{
						label: 'Linkedin',
						href: 'https://www.linkedin.com/in/benjd90/',
					},
					{
						label: 'GitHub',
						href: 'https://github.com/BenjD90',
					},
					{
						label: 'Mail',
						href: 'mailto:benjamin.b.daniel+cv-online@gmail.com',
					},
				],
				copyright: `Copyright © ${new Date().getFullYear()} Benjamin DANIEL. Built with Docusaurus.`,
			},
			prism: {
				theme: prismThemes.github,
				darkTheme: prismThemes.dracula,
			},
		}),
};

export default config;
