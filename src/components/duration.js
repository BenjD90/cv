import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useIsBrowser from '@docusaurus/useIsBrowser';

const monthNames = [
	'janvier',
	'février',
	'mars',
	'avril',
	'mai',
	'juin',
	'juillet',
	'août',
	'septembre',
	'octobre',
	'novembre',
	'décembre',
];

function formatMonthCount(count) {
	const years = Math.floor(count / 12);
	const months = count % 12;
	const parts = [];
	if (years > 0) {
		parts.push(years > 1 ? `${years} ans` : '1 an');
	}
	if (months > 0) {
		parts.push(`${months} mois`);
	}
	return parts.join(' ');
}

// Returns a function turning "septembre 2024 - aujourd'hui" into
// "septembre 2024 - aujourd'hui · 2 ans 2 mois", start and end months included like the durations
// written on the other pages. Any other text is returned as is.
export function useAddDuration() {
	const { siteConfig } = useDocusaurusContext();
	const isBrowser = useIsBrowser();
	// the server render and the hydration use the build date so that the HTML matches,
	// then the browser renders again with the current date
	const now = isBrowser ? new Date() : new Date(siteConfig.customFields.buildDate);

	return (text) => {
		const match = typeof text === 'string' && /^(\S+) (\d{4}) - aujourd['’]hui$/.exec(text.trim());
		const startMonth = match ? monthNames.indexOf(match[1].toLowerCase()) : -1;
		if (startMonth === -1) {
			return text;
		}
		const count =
			(now.getUTCFullYear() - Number(match[2])) * 12 + now.getUTCMonth() - startMonth + 1;
		if (count < 1) {
			return text;
		}
		// keep the trailing line break of the first line of a blockquote
		const period = text.trimEnd();
		return `${period} · ${formatMonthCount(count)}${text.slice(period.length)}`;
	};
}
