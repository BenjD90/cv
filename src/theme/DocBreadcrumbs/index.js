/* src: https://github.com/facebook/docusaurus/blob/v3.9.2/packages/docusaurus-theme-classic/src/theme/DocBreadcrumbs/index.tsx */
import React from 'react';
import clsx from 'clsx';
import { ThemeClassNames } from '@docusaurus/theme-common';
import { useSidebarBreadcrumbs } from '@docusaurus/plugin-content-docs/client';
import { useHomePageRoute } from '@docusaurus/theme-common/internal';
import { translate } from '@docusaurus/Translate';
import Link from '@docusaurus/Link';
import HomeBreadcrumbItem from '@theme/DocBreadcrumbs/Items/Home';
import DocBreadcrumbsStructuredData from '@theme/DocBreadcrumbs/StructuredData';

function BreadcrumbsItemLink({ children, href, isLast }) {
	const className = 'breadcrumbs__link';
	if (isLast) {
		return <span className={className}>{children}</span>;
	}
	return href ? (
		<Link className={className} href={href}>
			<span>{children}</span>
		</Link>
	) : (
		<span className={className}>{children}</span>
	);
}

function BreadcrumbsItem({ children, active }) {
	return (
		<li
			className={clsx('breadcrumbs__item', {
				'breadcrumbs__item--active': active,
			})}
		>
			{children}
		</li>
	);
}

export default function DocBreadcrumbs() {
	const breadcrumbs = useSidebarBreadcrumbs();
	const homePageRoute = useHomePageRoute();
	if (!breadcrumbs) {
		return null;
	}
	return (
		<>
			<DocBreadcrumbsStructuredData breadcrumbs={breadcrumbs} />
			<nav
				className={clsx(ThemeClassNames.docs.docBreadcrumbs, 'breadcrumbsContainer')}
				aria-label={translate({
					id: 'theme.docs.breadcrumbs.navAriaLabel',
					message: 'Breadcrumbs',
					description: 'The ARIA label for the breadcrumbs',
				})}
			>
				<ul className="breadcrumbs">
					{homePageRoute && <HomeBreadcrumbItem />}
					{breadcrumbs.map((item, idx) => {
						const isLast = idx === breadcrumbs.length - 1;
						const href = item.type === 'category' && item.linkUnlisted ? undefined : item.href;
						// the label is already written in the logo, only show the image
						const showOnlyImage =
							item.type === 'category' && item.customProps?.image && item.customProps?.hideTitle;
						return (
							<BreadcrumbsItem key={idx} active={isLast}>
								<BreadcrumbsItemLink href={href} isLast={isLast}>
									{showOnlyImage ? (
										<img
											loading="lazy"
											src={item.customProps.image}
											alt={item.label}
											height="27px"
										/>
									) : (
										item.label
									)}
								</BreadcrumbsItemLink>
							</BreadcrumbsItem>
						);
					})}
				</ul>
			</nav>
		</>
	);
}
