/* src: https://github.com/facebook/docusaurus/blob/v3.9.2/packages/docusaurus-theme-classic/src/theme/DocCategoryGeneratedIndexPage/index.tsx */
import React from 'react';
import { PageMetadata } from '@docusaurus/theme-common';
import { useCurrentSidebarCategory } from '@docusaurus/plugin-content-docs/client';
import DocCardList from '@theme/DocCardList';
import DocPaginator from '@theme/DocPaginator';
import DocVersionBanner from '@theme/DocVersionBanner';
import DocVersionBadge from '@theme/DocVersionBadge';
import DocBreadcrumbs from '@theme/DocBreadcrumbs';
import Heading from '@theme/Heading';
import { useAddDuration } from '@site/src/components/duration';

function DocCategoryGeneratedIndexPageContent({ categoryGeneratedIndex }) {
	const category = useCurrentSidebarCategory();
	const addDuration = useAddDuration();
	const dates = addDuration(category.customProps?.dates);
	return (
		<div className="generated-index-page">
			<DocVersionBanner />
			<DocBreadcrumbs />
			<DocVersionBadge />
			<header>
				{category.customProps?.image ? (
					<img
						loading="lazy"
						src={category.customProps.image}
						alt={category.label}
						height="100px"
					/>
				) : (
					<Heading as="h1" className="generated-index-title">
						{categoryGeneratedIndex.title}
					</Heading>
				)}
				{category.customProps?.image && dates && <Heading as="h2">{dates}</Heading>}
				{categoryGeneratedIndex.description && <p>{categoryGeneratedIndex.description}</p>}
			</header>
			<article className="margin-top--lg">
				<DocCardList items={category.items} />
			</article>
			<footer className="margin-top--md">
				<DocPaginator
					previous={categoryGeneratedIndex.navigation.previous}
					next={categoryGeneratedIndex.navigation.next}
				/>
			</footer>
		</div>
	);
}

export default function DocCategoryGeneratedIndexPage(props) {
	return (
		<>
			<PageMetadata
				title={props.categoryGeneratedIndex.title}
				description={props.categoryGeneratedIndex.description}
				keywords={props.categoryGeneratedIndex.keywords}
			/>
			<DocCategoryGeneratedIndexPageContent {...props} />
		</>
	);
}
