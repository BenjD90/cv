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
	const isFirstMount = useRef(true);

	// Initialise the timeline once on mount; teardown on unmount.
	// Subsequent prop changes are handled by the update effect below.
	useEffect(() => {
		const initialItems = new DataSet(items);
		let timeline;

		if (groups && groups.length > 0) {
			const initialGroups = new DataSet(groups);
			timeline = new Timeline(containerRef.current, initialItems, initialGroups, options);
		} else {
			timeline = new Timeline(containerRef.current, initialItems, options);
		}

		timelineRef.current = timeline;

		events.forEach((event) => {
			const handler = eventHandlers[`${event}Handler`];
			if (handler) timeline.on(event, handler);
		});

		// ResizeObserver to ensure timeline resizes gracefully
		// vis-timeline sometimes struggles to adapt directly to container dimension changes
		const ro = new ResizeObserver(() => {
			if (timeline) {
				timeline.redraw();
			}
		});
		ro.observe(containerRef.current);

		// Docusaurus and lazy-loaded assets can cause unexpected layout shifts
		// shortly after mount. Force a few redraws to ensure vis-timeline isn't blank.
		const intervalId = setInterval(() => {
			if (timelineRef.current) {
				timelineRef.current.redraw();
			}
		}, 150);

		// Stop polling after ~1 second (when layout is definitely stable)
		const timerId = setTimeout(() => {
			clearInterval(intervalId);
		}, 1000);

		return () => {
			clearInterval(intervalId);
			clearTimeout(timerId);
			ro.disconnect();
			timeline.destroy();
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		if (isFirstMount.current) {
			isFirstMount.current = false;
			return;
		}

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

	return <div ref={containerRef} style={{ width: '100%', minHeight: options.height || '400px' }} />;
}
