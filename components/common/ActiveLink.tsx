"use client";

import Link, { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';
import React, { ReactNode } from 'react';

interface ActiveLinkProps extends LinkProps {
  className?: string;
  activeClassName: string;
  children: ReactNode;
}

const ActiveLink: React.FC<ActiveLinkProps> = ({ href, className, activeClassName, children, ...props }) => {
  const pathname = usePathname();
  const isActive = pathname === href || pathname.startsWith(href as string);

  const combinedClassName = isActive ? `${className} ${activeClassName}`.trim() : className || '';

  return (
    <Link href={href} {...props} className={combinedClassName}>
      {children}
    </Link>
  );
};

export default ActiveLink;
