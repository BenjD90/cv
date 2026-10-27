import React from 'react';
import MDXComponents from '@theme-original/MDXComponents';
import { useAddDuration } from '@site/src/components/duration';

// Experience pages start with a blockquote whose first line is the period:
// "> mars 2025 - aujourd'hui" is rendered with its duration, other blockquotes are unchanged.
function Blockquote({ children, ...props }) {
	const addDuration = useAddDuration();
	const items = React.Children.toArray(children);
	const paragraphIndex = items.findIndex((item) => React.isValidElement(item));
	if (paragraphIndex !== -1) {
		const paragraph = items[paragraphIndex];
		const [firstLine, ...otherLines] = React.Children.toArray(paragraph.props.children);
		if (typeof firstLine === 'string') {
			items[paragraphIndex] = React.cloneElement(
				paragraph,
				{},
				addDuration(firstLine),
				...otherLines,
			);
		}
	}
	return <blockquote {...props}>{items}</blockquote>;
}

export default {
	...MDXComponents,
	blockquote: Blockquote,
};
