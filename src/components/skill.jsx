import React from 'react';
import Link from '@docusaurus/Link';

const skillUrlsBySkill = {
	'AngularJS': 'https://angularjs.org/',
	'Apache Kafka': 'https://kafka.apache.org/',
	'Architecture Micro Services': null,
	'Ava.js': 'https://github.com/avajs/ava-docs/blob/main/fr_FR/readme.md',
	'CodeCov': 'https://about.codecov.io/',
	'Confluence': 'https://www.atlassian.com/software/confluence',
	'Docker': 'https://www.docker.com/',
	'Eclipse': 'https://eclipseide.org/',
	'ElasticSearch': 'https://www.elastic.co/elasticsearch',
	'ES6': 'http://es6-features.org/',
	'Express.js': 'https://expressjs.com/',
	'Git': 'https://git-scm.com/',
	'GitHub Actions': 'https://github.com/features/actions',
	'GitHub': 'https://github.com/',
	'GitLab': 'https://about.gitlab.com/',
	'Gliffy': 'https://www.gliffy.com/',
	'Google Kubernetes Engine (GKE)': 'https://cloud.google.com/kubernetes-engine?hl=fr',
	'Google Sheet API': 'https://developers.google.com/sheets/api/guides/concepts',
	'Grafana': 'https://grafana.com/grafana/',
	'Helm': 'https://helm.sh/fr/',
	'JAVA 4': 'https://www.oracle.com/java/technologies/java-archive-javase-v14-downloads.html',
	'JAVA 6':
		'https://www.oracle.com/fr/java/technologies/javase-java-archive-javase6-downloads.html',
	'JAVA 8': 'https://www.java.com/fr/download/help/java8_fr.html',
	'JAVA Quartz': 'https://www.quartz-scheduler.org/',
	'JavaScript': null,
	'JIRA': 'https://www.atlassian.com/software/jira',
	'jQuery': 'https://jquery.com/',
	'JSON': null,
	'Kubernetes': 'https://kubernetes.io/fr/',
	'Linux': null,
	'Microsoft 365': 'https://www.office.com/',
	'Mirakl': 'https://www.mirakl.com/products/mirakl-marketplace-platform',
	'MongoDB': 'https://www.mongodb.com/',
	'Méthodes agiles': null,
	'Newman':
		'https://github.com/postmanlabs/newman?tab=readme-ov-file#newman-the-cli-companion-for-postman--',
	'Node.js': 'https://nodejs.org/en',
	'NPM': 'https://www.npmjs.com/',
	'PlantUML': 'https://plantuml.com/',
	'Playwright': 'https://playwright.dev/',
	'Postman': 'https://www.postman.com/',
	'Prometheus': 'https://prometheus.io/',
	'RabbitMQ': 'https://www.rabbitmq.com/',
	'REST': null,
	'SpringData': 'https://spring.io/projects/spring-data',
	'SpringMVC': 'https://docs.spring.io/spring-framework/reference/web/webmvc.html',
	'SVN': 'https://subversion.apache.org/',
	'TypeScript': 'https://www.typescriptlang.org/',
	'Yarn': 'https://classic.yarnpkg.com/en/docs',
	'PHP': 'https://www.php.net/',
	'MySQL Database': 'https://www.mysql.com/',
	'NotePad++': 'https://notepad-plus-plus.org/',
	'Kinect': 'https://fr.wikipedia.org/wiki/Kinect',
	'C#': 'https://learn.microsoft.com/fr-fr/dotnet/csharp/',
	'.Net 4': 'https://dotnet.microsoft.com/en-us/download/dotnet-framework/net40',
	'Java': 'https://www.java.com/fr/',
	'VHDL': 'https://fr.wikipedia.org/wiki/VHDL',
	'Adobe Photoshop': 'https://www.adobe.com/products/photoshop.html',
	'Angular': 'https://angular.io/',
};

export default function Skill({ name, highlight }) {
	if (skillUrlsBySkill[name]) {
		if (highlight) {
			return (
				<b>
					<Link to={skillUrlsBySkill[name]}>{name}</Link>
				</b>
			);
		} else {
			return <Link to={skillUrlsBySkill[name]}>{name}</Link>;
		}
	} else {
		if (highlight) {
			return <b>{name}</b>;
		} else {
			return name;
		}
	}
}
