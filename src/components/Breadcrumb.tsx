import Link from "next/link";
import React from "react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  title: string;
  items?: BreadcrumbItem[];
}

export default function Breadcrumb({ title, items }: BreadcrumbProps) {
  // Default breadcrumb items: Home -> Current Page
  const breadcrumbItems: BreadcrumbItem[] = items || [
    { label: "Home", href: "/" },
    { label: title },
  ];

  return (
    <div
      className="gt-breadcrumb-wrapper bg-cover"
      style={{ backgroundImage: "url('/assets/img/breadcrumb-bg.jpg')" }}
    >
      <div className="container">
        <div className="gt-page-heading">
          <div className="gt-breadcrumb-sub-title">
            <h1 className="text-white wow fadeInUp" data-wow-delay=".3s">
              {title}
            </h1>
          </div>
          <ul className="gt-breadcrumb-items wow fadeInUp" data-wow-delay=".5s">
            {breadcrumbItems.map((item, index) => (
              <React.Fragment key={index}>
                <li>
                  {item.href ? (
                    <Link href={item.href}>{item.label}</Link>
                  ) : (
                    item.label
                  )}
                </li>
                {index < breadcrumbItems.length - 1 && (
                  <li>
                    <i className="fa-solid fa-chevron-right"></i>
                  </li>
                )}
              </React.Fragment>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
