import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import BrowserOnly from '@docusaurus/BrowserOnly';

import Heading from '@theme/Heading';
import styles from './index.module.css';
import VisTimeline from '../components/VisTimeline';
import { useHistory } from 'react-router-dom';

function HomepageHeader() {
	const { siteConfig } = useDocusaurusContext();
	return (
		<header className={clsx('hero hero--primary', styles.heroBanner)}>
			<div className="container">
				<img src={'/cv/img/portrait-400.webp'} alt="Photo de profil" />
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
						target="\_blank"
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
			end: '2014-01-01',
			content:
				'<img src="/cv/img/pages/formation/esiee.png" alt="esiee" height="27px" /> E.S.I.E.E. Paris',
			selectable: false,
			group: 'entreprises',
			link: '/cv/docs/formation/esiee',
		},
		{
			start: '2014-01-01',
			end: '2016-03-13',
			content: '<img src="/cv/img/pages/experiences/aubay.svg" alt="Aubay" height="27px" /> Aubay',
			selectable: false,
			group: 'entreprises',
			link: '/cv/docs/experiences/aubay',
		},
		{
			start: '2016-03-14',
			end: '2024-09-09',
			content: '<img src="/cv/img/pages/experiences/neo9.svg" alt="Neo9" height="27px" /> Neo9',
			selectable: false,
			group: 'entreprises',
			link: '/cv/docs/experiences/neo9',
		},
		{
			start: '2024-09-09',
			end: new Date(),
			content: '<img src="/cv/img/pages/experiences/bunji.svg" alt="Bunji" height="27px" /> Bunji',
			selectable: false,
			group: 'entreprises',
			link: '/cv/docs/experiences/bunji',
		},
		{
			start: '2014-01-01',
			end: '2014-09-01',
			content: 'BNP - Dév. Junior Java',
			group: 'projects',
			className: 'projects',
			link: '/cv/docs/experiences/aubay/ism',
		},
		{
			start: '2014-09-01',
			end: '2015-01-01',
			content: 'BNP - Dév. Junior JEE',
			group: 'projects',
			className: 'projects',
			link: '/cv/docs/experiences/aubay/swm',
		},
		{
			start: '2015-01-01',
			end: '2016-03-14',
			content: 'BNP - Lead Dév. JEE',
			group: 'projects',
			className: 'projects',
			link: '/cv/docs/experiences/aubay/ism-v2',
		},
		{
			start: '2016-03-14',
			end: '2016-10-01',
			content: 'SFR Réunion',
			group: 'projects',
			className: 'projects',
			link: '/cv/docs/experiences/neo9/srr',
		},
		{
			start: '2016-10-01',
			end: '2017-02-01',
			content: 'April',
			group: 'projects',
			className: 'projects',
			link: '/cv/docs/experiences/neo9/april',
		},
		{
			start: '2017-02-01',
			end: '2017-05-01',
			content: 'Rempart Vie',
			group: 'projects',
			className: 'projects',
			link: '/cv/docs/experiences/neo9/rempart-vie',
		},
		{
			start: '2017-05-01',
			end: '2018-03-01',
			content: 'Air Liquide',
			group: 'projects',
			className: 'projects',
			link: '/cv/docs/experiences/neo9/alehos',
		},
		{
			start: '2018-03-01',
			end: '2023-11-20',
			content: 'Projet Catalogue',
			group: 'projects',
			className: 'projects',
			link: '/cv/docs/experiences/neo9/catalogue',
		},
		{
			start: '2018-03-01',
			end: '2024-09-09',
			content: 'Contribution Open Source',
			group: 'projects',
			className: 'projects',
			link: '/cv/docs/experiences/neo9/oss',
		},
		{
			start: '2023-11-20',
			end: '2024-09-09',
			content: 'Peaksys',
			group: 'projects',
			className: 'projects',
			link: '/cv/docs/experiences/neo9/peaksys',
		},
		{
			start: '2024-09-09',
			end: new Date(),
			content: 'Bunji - Lead Dév. Back-end',
			group: 'projects',
			className: 'projects',
			link: '/cv/docs/experiences/bunji',
		},
		{
			start: '2017-02-01',
			end: new Date(),
			content:
				'<img src="/cv/img/skills/logos/small/ts.png" alt="TypeScript" title="TypeScript" />',
			className: 'techno',
			group: 'technos',
		},
		{
			start: '2016-01-01',
			end: '2023-11-20',
			content: '<img src="/cv/img/skills/logos/small/angular.png" alt="Angular" title="Angular" />',
			className: 'techno',
			group: 'technos',
		},
		{
			start: '2017-02-01',
			end: new Date(),
			content: '<img src="/cv/img/skills/logos/small/nodejs.png" alt="Node.js" title="Node.js" />',
			className: 'techno',
			group: 'technos',
		},
		{
			start: '2016-03-14',
			end: '2024-09-09',
			content: '<img src="/cv/img/skills/logos/small/mongodb.png" alt="MongoDB" title="MongoDB" />',
			className: 'techno',
			group: 'technos',
		},
		{
			start: '2024-09-09',
			end: new Date(),
			content:
				'<img src="/cv/img/skills/logos/small/postgresql.png" alt="PostgreSQL" title="PostgreSQL" />',
			className: 'techno',
			group: 'technos',
		},
		{
			start: '2017-10-01',
			end: '2024-09-09',
			content:
				'<img src="/cv/img/skills/logos/small/elasticsearch.png" alt="ElasticSearch" title="ElasticSearch" />',
			className: 'techno',
			group: 'technos',
		},
		{
			start: '2009-01-01',
			end: '2017-02-01',
			content: `
					<img src="/cv/img/skills/logos/small/java.png" alt="Java" title="Java" />
			`,
			className: 'techno',
			group: 'technos',
		},
		{
			start: '2013-01-01',
			end: '2017-02-01',
			content: `
					<img src="/cv/img/skills/logos/small/java-ee.png" alt="Java EE" title="Java EE" />
			`,
			className: 'techno',
			group: 'technos',
		},
		{
			start: '2014-09-01',
			end: '2017-02-01',
			content: `
					<img src="/cv/img/skills/logos/small/spring.png" alt="Spring" title="Spring" />
			`,
			className: 'techno',
			group: 'technos',
		},
		{
			start: '2016-03-14',
			end: new Date(),
			content: '<img src="/cv/img/skills/logos/small/git.png" alt="Git" title="Git" />',
			className: 'techno',
			group: 'technos',
		},
		{
			start: '2018-03-01',
			end: new Date(),
			content: '<img src="/cv/img/skills/logos/small/docker.png" alt="Docker" title="Docker" />',
			className: 'techno',
			group: 'technos',
		},
		{
			start: '2017-05-01',
			end: new Date(),
			content: '<img src="/cv/img/skills/logos/small/yarn.png" alt="Yarn" title="Yarn" />',
			className: 'techno',
			group: 'technos',
		},
		{
			start: '2026-07-01',
			end: new Date(),
			content: '<img src="/cv/img/skills/logos/small/pnpm.png" alt="pnpm" title="pnpm" />',
			className: 'techno',
			group: 'technos',
		},
		{
			start: '2007-12-01',
			end: new Date(),
			content: `<img src="/cv/img/skills/logos/small/html5.png" alt="HTML5" title="HTML5" /><img src="/cv/img/skills/logos/small/css3.png" alt="CSS3" title="CSS3" />`,
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
			let link = item.group === 'technos' ? '/cv/docs/skills' : item.link;
			history.push(link); // will change with future Docusaurus upgrade https://stackoverflow.com/questions/31079081/how-to-programmatically-navigate-using-react-router
		}
	};

	return (
		<Layout title="Accueil" description={siteConfig.tagline}>
			<HomepageHeader />
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
			<main></main>
		</Layout>
	);
}
