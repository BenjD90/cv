import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import Heading from '@theme/Heading';
import styles from './index.module.css';
import Timeline from 'react-visjs-timeline';
import { useHistory } from 'react-router-dom';

function HomepageHeader() {
	const { siteConfig } = useDocusaurusContext();
	return (
		<header className={clsx('hero hero--primary', styles.heroBanner)}>
			<div className="container">
				<img src={'/cv/img/portrait-400.webp'} />
				<Heading as="h1" className="hero__title">
					Benjamin DANIEL
				</Heading>
				<p className="hero__subtitle">{siteConfig.tagline}</p>
				<div className={styles.buttons}>
					<Link className="button button--secondary button--lg" to="/docs/intro">
						Lire le CV
					</Link>
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
		height: '610px',
		stack: true,
		editable: false,
		showCurrentTime: false,
		zoomMin: oneDayInMs * 365 * 3,
		zoomMax: oneDayInMs * 365 * (2023 - 2008 + 1),
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
			content: '<img src="/cv/img/pages/formation/esiee.png" height="27px" /> E.S.I.E.E. Paris',
			selectable: false,
			group: 'entreprises',
			link: '/cv/docs/formation/esiee',
		},
		{
			start: '2014-01-01',
			end: '2016-03-13',
			content: '<img src="/cv/img/pages/experiences/aubay.svg" height="27px" /> Aubay',
			selectable: false,
			group: 'entreprises',
			link: '/cv/docs/experiences/aubay',
		},
		{
			start: '2016-03-14',
			end: new Date(),
			content: '<img src="/cv/img/pages/experiences/neo9.svg" height="27px" /> Neo9',
			selectable: false,
			group: 'entreprises',
			link: '/cv/docs/experiences/neo9',
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
			start: '2023-11-20',
			end: new Date(),
			content: 'Peaksys',
			group: 'projects',
			className: 'projects',
			link: '/cv/docs/experiences/neo9/peaksys',
		},
		{
			start: '2017-02-01',
			end: new Date(),
			content: '<img src="/cv/img/skills/logos/small/ts.png" />',
			className: 'techno',
			group: 'technos',
		},
		{
			start: '2016-01-01',
			end: new Date(),
			content: '<img src="/cv/img/skills/logos/small/angular.png" />',
			className: 'techno',
			group: 'technos',
		},
		{
			start: '2017-02-01',
			end: new Date(),
			content: '<img src="/cv/img/skills/logos/small/nodejs.png" />',
			className: 'techno',
			group: 'technos',
		},
		{
			start: '2016-03-14',
			end: new Date(),
			content: '<img src="/cv/img/skills/logos/small/mongodb.png" />',
			className: 'techno',
			group: 'technos',
		},
		{
			start: '2017-10-01',
			end: new Date(),
			content: '<img src="/cv/img/skills/logos/small/elasticsearch.png" />',
			className: 'techno',
			group: 'technos',
		},
		{
			start: '2009-01-01',
			end: '2017-02-01',
			content: `
					<img src="/cv/img/skills/logos/small/java.png" />
			`,
			className: 'techno',
			group: 'technos',
		},
		{
			start: '2013-01-01',
			end: '2017-02-01',
			content: `
					<img src="/cv/img/skills/logos/small/java-ee.png" />
			`,
			className: 'techno',
			group: 'technos',
		},
		{
			start: '2014-09-01',
			end: '2017-02-01',
			content: `
					<img src="/cv/img/skills/logos/small/spring.png" />
			`,
			className: 'techno',
			group: 'technos',
		},
		{
			start: '2016-03-14',
			end: new Date(),
			content: '<img src="/cv/img/skills/logos/small/git.png" />',
			className: 'techno',
			group: 'technos',
		},
		{
			start: '2018-03-01',
			end: new Date(),
			content: '<img src="/cv/img/skills/logos/small/docker.png" />',
			className: 'techno',
			group: 'technos',
		},
		{
			start: '2017-05-01',
			end: new Date(),
			content: '<img src="/cv/img/skills/logos/small/yarn.png" />',
			className: 'techno',
			group: 'technos',
		},
		{
			start: '2007-12-01',
			end: new Date(),
			content: `<img src="/cv/img/skills/logos/small/html5.png" /><img src="/cv/img/skills/logos/small/css3.png" />`,
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
			<div style={{ marginTop: '20px' }}>
				<Timeline options={options} items={items} groups={groups} clickHandler={clickHandler} />
			</div>
			<main></main>
		</Layout>
	);
}
