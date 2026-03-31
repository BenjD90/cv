import { useEffect, useRef } from 'react';
import { DataSet, Timeline } from 'vis-timeline/standalone';
import 'vis-timeline/styles/vis-timeline-graph2d.min.css';

const events = [
	'currentTimeTick',
	'click',
	'contextmenu',
	'doubleClick',
	'groupDragged',
	'changed',
	'rangechange',
	'rangechanged',
	'select',
	'timechange',
	'timechanged',
	'mouseOver',
	'mouseMove',
	'itemover',
	'itemout',
];

export default function VisTimeline({
	items = [],
	groups = [],
	options = {},
	selection = [],
	customTimes = {},
	animate = true,
	currentTime,
	...eventHandlers
}) {
	const containerRef = useRef(null);
	const timelineRef = useRef(null);
	const customTimesRef = useRef({});

	// Initialise the timeline once on mount; teardown on unmount.
	// Subsequent prop changes are handled by the update effect below.
	useEffect(() => {
		const initialItems = new DataSet(items);
		const timeline = new Timeline(containerRef.current, initialItems, options);
		timelineRef.current = timeline;

		events.forEach((event) => {
			const handler = eventHandlers[`${event}Handler`];
			if (handler) timeline.on(event, handler);
		});

		return () => timeline.destroy();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		const timeline = timelineRef.current;
		if (!timeline) return;

		const timelineOptions = animate
			? (() => {
					const { start, end, ...rest } = options;
					timeline.setWindow(start, end, { animation: animate });
					return rest;
				})()
			: options;

		timeline.setOptions(timelineOptions);

		if (groups.length > 0) {
			const groupsDataset = new DataSet();
			groupsDataset.add(groups);
			timeline.setGroups(groupsDataset);
		}

		timeline.setItems(items);
		timeline.setSelection(selection);

		if (currentTime) {
			timeline.setCurrentTime(currentTime);
		}

		// Diff customTimes: add new, remove old, update existing
		const prevKeys = Object.keys(customTimesRef.current);
		const nextKeys = Object.keys(customTimes);
		prevKeys.filter((k) => !nextKeys.includes(k)).forEach((id) => timeline.removeCustomTime(id));
		nextKeys
			.filter((k) => !prevKeys.includes(k))
			.forEach((id) => timeline.addCustomTime(customTimes[id], id));
		nextKeys
			.filter((k) => prevKeys.includes(k))
			.forEach((id) => timeline.setCustomTime(customTimes[id], id));
		customTimesRef.current = customTimes;
	}, [items, groups, options, selection, customTimes, animate, currentTime]);

	return <div ref={containerRef} />;
}
