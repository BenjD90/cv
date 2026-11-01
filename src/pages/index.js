import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl, { useBaseUrlUtils } from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import BrowserOnly from '@docusaurus/BrowserOnly';

import Heading from '@theme/Heading';
import styles from './index.module.css';
import VisTimeline from '../components/VisTimeline';
import { useHistory } from '@docusaurus/router';

function HomepageHeader() {
	const { siteConfig } = useDocusaurusContext();
	const portraitUrl = useBaseUrl('/img/portrait-400.webp');
	return (
		<header className={clsx('hero hero--primary', styles.heroBanner)}>
			<div className="container">
				<img src={portraitUrl} alt="Photo de profil" />
				<Heading as="h1" className="hero__title">
					Benjamin DANIEL
				</Heading>
				<p className="hero__subtitle">{siteConfig.tagline}</p>
				<div className={styles.buttons}>
					<Link className="button button--secondary button--lg" to="/docs/intro">
						Lire le CV
					</Link>
					<a
						className="button button--secondary button--lg"
						target="_blank"
						rel="noopener noreferrer"
						download
						href={require('/CV-Benjamin-DANIEL.pdf').default}
					>
						📄 Télécharger le CV en PDF
					</a>
				</div>
			</div>
		</header>
	);
}

export default function Home() {
	const { siteConfig } = useDocusaurusContext();
	const history = useHistory();
	const { withBaseUrl } = useBaseUrlUtils();

	// vis-timeline renders the item contents as raw HTML: the image paths need the baseUrl
	const companyLogo = (src, alt) => `<img src="${withBaseUrl(src)}" alt="${alt}" height="27px" />`;
	const technoLogo = (img, alt) =>
		`<img src="${withBaseUrl(`/img/skills/logos/small/${img}.png`)}" alt="${alt}" title="${alt}" />`;

	const oneDayInMs = 1000 * 3600 * 24;

	// https://visjs.github.io/vis-timeline/docs/timeline/#Configuration_Options
	const options = {
		stack: true,
		editable: false,
		showCurrentTime: false,
		zoomMin: oneDayInMs * 365 * 3,
		zoomMax: oneDayInMs * 365 * (new Date().getFullYear() - 2008 + 1),
		end: new Date(Date.now() + oneDayInMs * 30),
		start: new Date('2008-09-01'),
		margin: {
			item: {
				horizontal: 0,
				vertical: 2,
			},
		},
	};

	const items = [
		{
			start: '2008-09-01',
			end: '2013-12-31',
			content: `${companyLogo('/img/pages/formation/small/esiee.png', 'ESIEE Paris')} ESIEE Paris`,
			selectable: false,
			group: 'entreprises',
			link: '/docs/formation/esiee',
		},
		{
			start: '2014-01-01',
			end: '2016-03-13',
			content: `${companyLogo('/img/pages/experiences/aubay.svg', 'Aubay')} Aubay`,
			selectable: false,
			group: 'entreprises',
			link: '/docs/experiences/aubay',
		},
		{
			start: '2016-03-14',
			end: '2024-09-09',
			content: `${companyLogo('/img/pages/experiences/neo9.svg', 'Neo9')} Neo9`,
			selectable: false,
			group: 'entreprises',
			link: '/docs/experiences/neo9',
		},
		{
			start: '2024-09-09',
			end: new Date(),
			content: `${companyLogo('/img/pages/experiences/bunji.svg', 'Bunji')} Bunji`,
			selectable: false,
			group: 'entreprises',
			link: '/docs/experiences/bunji',
		},
		{
			start: '2014-01-01',
			end: '2014-09-01',
			content: 'BNP - Dév. junior Java',
			group: 'projects',
			className: 'projects',
			link: '/docs/experiences/aubay/ism',
		},
		{
			start: '2014-09-01',
			end: '2015-01-01',
			content: 'BNP - Dév. junior Java EE',
			group: 'projects',
			className: 'projects',
			link: '/docs/experiences/aubay/swm',
		},
		{
			start: '2015-01-01',
			end: '2016-03-14',
			content: 'BNP - Lead dév. Java EE',
			group: 'projects',
			className: 'projects',
			link: '/docs/experiences/aubay/ism-v2',
		},
		{
			start: '2016-03-14',
			end: '2016-10-01',
			content: 'SFR Réunion',
			group: 'projects',
			className: 'projects',
			link: '/docs/experiences/neo9/srr',
		},
		{
			start: '2016-10-01',
			end: '2017-02-01',
			content: 'April',
			group: 'projects',
			className: 'projects',
			link: '/docs/experiences/neo9/april',
		},
		{
			start: '2017-02-01',
			end: '2017-05-01',
			content: 'Rempart Vie',
			group: 'projects',
			className: 'projects',
			link: '/docs/experiences/neo9/rempart-vie',
		},
		{
			start: '2017-05-01',
			end: '2018-03-01',
			content: 'Air Liquide',
			group: 'projects',
			className: 'projects',
			link: '/docs/experiences/neo9/alehos',
		},
		{
			start: '2018-03-01',
			end: '2023-11-20',
			content: 'Projet Catalogue',
			group: 'projects',
			className: 'projects',
			link: '/docs/experiences/neo9/catalogue',
		},
		{
			start: '2018-03-01',
			end: '2024-09-09',
			content: 'Contribution open source',
			group: 'projects',
			className: 'projects',
			link: '/docs/experiences/neo9/oss',
		},
		{
			start: '2023-11-20',
			end: '2024-09-09',
			content: 'Peaksys',
			group: 'projects',
			className: 'projects',
			link: '/docs/experiences/neo9/peaksys',
		},
		{
			start: '2024-09-09',
			end: new Date(),
			content: 'Bunji - Lead dév. back-end',
			group: 'projects',
			className: 'projects',
			link: '/docs/experiences/bunji',
		},
		{
			start: '2017-02-01',
			end: new Date(),
			content: technoLogo('ts', 'TypeScript'),
			className: 'techno',
			group: 'technos',
		},
		{
			start: '2016-01-01',
			end: '2017-02-01',
			content: technoLogo('angularjs', 'AngularJS'),
			className: 'techno',
			group: 'technos',
		},
		{
			start: '2017-02-01',
			end: '2023-11-20',
			content: technoLogo('angular', 'Angular'),
			className: 'techno',
			group: 'technos',
		},
		{
			start: '2016-10-01',
			end: new Date(),
			content: technoLogo('nodejs', 'Node.js'),
			className: 'techno',
			group: 'technos',
		},
		{
			start: '2016-03-14',
			end: '2024-09-09',
			content: technoLogo('mongodb', 'MongoDB'),
			className: 'techno',
			group: 'technos',
		},
		{
			start: '2024-09-09',
			end: new Date(),
			content: technoLogo('postgresql', 'PostgreSQL'),
			className: 'techno',
			group: 'technos',
		},
		{
			start: '2017-10-01',
			end: '2023-11-20',
			content: technoLogo('elasticsearch', 'Elasticsearch'),
			className: 'techno',
			group: 'technos',
		},
		{
			start: '2009-01-01',
			end: '2017-02-01',
			content: technoLogo('java', 'Java'),
			className: 'techno',
			group: 'technos',
		},
		{
			start: '2013-01-01',
			end: '2017-02-01',
			content: technoLogo('java-ee', 'Java EE'),
			className: 'techno',
			group: 'technos',
		},
		{
			start: '2014-09-01',
			end: '2017-02-01',
			content: technoLogo('spring', 'Spring'),
			className: 'techno',
			group: 'technos',
		},
		{
			start: '2014-01-01',
			end: new Date(),
			content: technoLogo('git', 'Git'),
			className: 'techno',
			group: 'technos',
		},
		{
			start: '2018-03-01',
			end: new Date(),
			content: technoLogo('docker', 'Docker'),
			className: 'techno',
			group: 'technos',
		},
		{
			start: '2017-05-01',
			end: new Date(),
			content: technoLogo('yarn', 'Yarn'),
			className: 'techno',
			group: 'technos',
		},
		{
			start: '2026-07-01',
			end: new Date(),
			content: technoLogo('pnpm', 'pnpm'),
			className: 'techno',
			group: 'technos',
		},
		{
			start: '2007-12-01',
			end: new Date(),
			content: technoLogo('html5', 'HTML5') + technoLogo('css3', 'CSS3'),
			className: 'techno',
			group: 'technos',
		},
	]
		.reverse()
		.map((item, index) => ({
			...item,
			id: index,
		}));
	const groups = [
		{
			id: 'entreprises',
			content: '',
		},
		{
			id: 'projects',
			content: 'Projets',
		},
		{
			id: 'technos',
			content: 'Technologies',
		},
	];

	const clickHandler = (e) => {
		if (e.item) {
			const item = items.find((i) => i.id === e.item);
			const link = item.group === 'technos' ? '/docs/skills' : item.link;
			history.push(withBaseUrl(link));
		}
	};

	return (
		<Layout title="Accueil" description={siteConfig.tagline}>
			<HomepageHeader />
			<main>
				<div style={{ marginTop: '20px', minHeight: '610px' }}>
					<BrowserOnly fallback={<div>Chargement de la timeline...</div>}>
						{() => (
							<VisTimeline
								options={options}
								items={items}
								groups={groups}
								clickHandler={clickHandler}
							/>
						)}
					</BrowserOnly>
				</div>
			</main>
		</Layout>
	);
}
