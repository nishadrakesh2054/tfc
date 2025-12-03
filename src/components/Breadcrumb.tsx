import Link from "next/link";

interface BreadcrumbProps {
  title: string;
  currentPage: string;
}

export default function Breadcrumb({ title, currentPage }: BreadcrumbProps) {
  return (
    <div className="gt-breadcrumb-wrapper bg-cover" style={{ backgroundImage: "url('/assets/img/breadcrumb-bg.jpg')" }}>
      <div className="container">
        <div className="gt-page-heading">
          <div className="gt-breadcrumb-sub-title">
            <h1 className="text-white wow fadeInUp" data-wow-delay=".3s">{title}</h1>
          </div>
          <ul className="gt-breadcrumb-items wow fadeInUp" data-wow-delay=".5s">
            <li><Link href="/"> Home </Link></li>
            <li><i className="fa-solid fa-chevron-right"></i></li>
            <li>{currentPage}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

