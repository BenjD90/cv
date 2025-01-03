/* src: https://github.com/facebook/docusaurus/blob/v3.1.1/packages/docusaurus-theme-classic/src/theme/DocCardList/index.tsx */
import React from 'react';
import clsx from 'clsx';
import { useCurrentSidebarCategory, filterDocCardListItems } from '@docusaurus/theme-common';
import DocCard from './DocCard';

function DocCardListForCurrentSidebarCategory({ className }) {
	const category = useCurrentSidebarCategory();
	return <DocCardList items={category.items} className={className} />;
}

export default function DocCardList(props) {
	const { items, className } = props;
	if (!items) {
		return <DocCardListForCurrentSidebarCategory {...props} />;
	}
	const filteredItems = filterDocCardListItems(items);
	return (
		<section className={clsx('row', className)}>
			{filteredItems.map((item, index) => (
				<article key={index} className="col col--6 margin-bottom--lg">
					<DocCard item={item} />
				</article>
			))}
		</section>
	);
}
