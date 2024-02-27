/* src: https://github.com/facebook/docusaurus/blob/v3.1.1/packages/docusaurus-theme-classic/src/theme/DocCard/index.tsx */

import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import {
  findFirstSidebarItemLink,
  useDocById,
} from "@docusaurus/theme-common/internal";
import { usePluralForm } from "@docusaurus/theme-common";
import isInternalUrl from "@docusaurus/isInternalUrl";
import { translate } from "@docusaurus/Translate";

import Heading from "@theme/Heading";
import styles from "./styles.module.css";

function useCategoryItemsPlural() {
  const { selectMessage } = usePluralForm();
  return (count) =>
    selectMessage(
      count,
      translate(
        {
          message: "{count} items",
          id: "theme.docs.DocCard.categoryDescription.plurals",
          description:
            "The default description for a category card in the generated index about how many items this category includes",
        },
        { count }
      )
    );
}

function CardContainer({ href, children }) {
  return (
    <Link
      href={href}
      className={clsx("card padding--lg", styles.cardContainer)}
    >
      {children}
    </Link>
  );
}

function CardLayout({ href, icon, title, description, image, dates }) {
  return (
    <CardContainer href={href}>
      {image && (
        <div>
          <img height={"60px"} src={image} />
        </div>
      )}
      {title && (
        <Heading
          as="h2"
          className={clsx("text--truncate", styles.cardTitle)}
          title={title}
        >
          {icon} {title}
        </Heading>
      )}
      {description && (
        <p
          className={clsx("text--truncate", styles.cardDescription)}
          title={description}
        >
          {description}
        </p>
      )}
      {dates && (
        <p className={clsx("text--truncate", styles.cardDates)} title={dates}>
          {dates}
        </p>
      )}
    </CardContainer>
  );
}

function CardCategory({ item }) {
  const href = findFirstSidebarItemLink(item);
  const categoryItemsPlural = useCategoryItemsPlural();

  // Unexpected: categories that don't have a link have been filtered upfront
  if (!href) {
    return null;
  }
  const title = item.customProps?.hideTitle ? "" : item.label;
  return (
    <CardLayout
      href={href}
      icon="🗃️"
      image={item.customProps?.image}
      title={title}
      description={item.description ?? categoryItemsPlural(item.items.length)}
    />
  );
}

function CardLink({ item }) {
  const doc = useDocById(item.docId ?? undefined);
  const title = item.customProps?.hideTitle ? "" : item.label;
  return (
    <CardLayout
      href={item.href}
      image={item.customProps?.image}
      title={title}
      description={item.description ?? doc?.description}
      dates={item.customProps?.dates}
    />
  );
}

export default function DocCard({ item }) {
  switch (item.type) {
    case "link":
      return <CardLink item={item} />;
    case "category":
      return <CardCategory item={item} />;
    default:
      throw new Error(`unknown item type ${JSON.stringify(item)}`);
  }
}
