/* src: https://github.com/facebook/docusaurus/blob/v3.9.2/packages/docusaurus-theme-classic/src/theme/DocItem/Content/index.tsx */
import React from 'react';
import clsx from 'clsx';
import { ThemeClassNames } from '@docusaurus/theme-common';
import { useDoc, useSidebarBreadcrumbs } from '@docusaurus/plugin-content-docs/client';
import Heading from '@theme/Heading';
import MDXContent from '@theme/MDXContent';

function useSyntheticTitle() {
	const { metadata, frontMatter, contentTitle } = useDoc();
	const shouldRender = !frontMatter.hide_title && typeof contentTitle === 'undefined';
	if (!shouldRender) {
		return null;
	}
	return metadata.title;
}

// the image of the doc itself (sidebar_custom_props.image),
// or failing that, the image of the nearest enclosing category
function usePageImage() {
	const breadcrumbs = useSidebarBreadcrumbs();
	if (!breadcrumbs || breadcrumbs.length === 0) {
		return null;
	}
	const last = breadcrumbs[breadcrumbs.length - 1];
	if (last.type === 'link' && last.customProps?.image) {
		return last.customProps.image;
	}
	for (let i = breadcrumbs.length - 1; i >= 0; i--) {
		const item = breadcrumbs[i];
		if (item.type === 'category' && item.customProps?.image) {
			return item.customProps.image;
		}
	}
	return null;
}

export default function DocItemContent({ children }) {
	const syntheticTitle = useSyntheticTitle();
	const image = usePageImage();
	return (
		<div className={clsx(ThemeClassNames.docs.docMarkdown, 'markdown')}>
			{image && (
				<img loading="lazy" src={image} alt="" height="60px" className="doc-item-category-image" />
			)}
			{syntheticTitle && (
				<header>
					<Heading as="h1">{syntheticTitle}</Heading>
				</header>
			)}
			<MDXContent>{children}</MDXContent>
		</div>
	);
}
