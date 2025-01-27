import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcumb";
import { faSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

import React, { Fragment } from "react";

type BreadcumbsProps = {
  breadcumbs: {
    title: string;
    href?: string;
  }[];
};

export const Breadcumbs = ({ breadcumbs }: BreadcumbsProps) => {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {breadcumbs?.map((breadcumb, index) => {
          let breadcumbItem = (
            <BreadcrumbPage>{breadcumb.title}</BreadcrumbPage>
          );

          if (breadcumb.href) {
            breadcumbItem = (
              <BreadcrumbLink asChild>
                <Link href={breadcumb.href} className="flex items-center gap-1">
                  {breadcumb.title}
                </Link>
              </BreadcrumbLink>
            );
          }
          return (
            <Fragment key={breadcumb.title}>
              <BreadcrumbItem>{breadcumbItem}</BreadcrumbItem>
              {index < breadcumbs?.length - 1 && (
                <BreadcrumbSeparator>
                  <FontAwesomeIcon icon={faSlash} className="h-4 w-4" />
                </BreadcrumbSeparator>
              )}
            </Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};
