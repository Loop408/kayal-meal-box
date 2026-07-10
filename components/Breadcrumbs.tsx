import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { StructuredData } from './StructuredData';

export function Breadcrumbs() {
  const pathname = usePathname();
  if (pathname === '/') return null;

  const paths = pathname.split('/').filter(Boolean);
  
  const breadcrumbListSchema = {
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: process.env.NEXT_PUBLIC_SITE_URL || 'https://kayalkerala.in',
      },
      ...paths.map((path, index) => {
        const url = `${process.env.NEXT_PUBLIC_SITE_URL || 'https://kayalkerala.in'}/${paths.slice(0, index + 1).join('/')}`;
        return {
          '@type': 'ListItem',
          position: index + 2,
          name: path.charAt(0).toUpperCase() + path.slice(1).replace(/-/g, ' '),
          item: url,
        };
      }),
    ],
  };

  return (
    <>
      <StructuredData type="BreadcrumbList" data={breadcrumbListSchema} />
      <nav aria-label="breadcrumb" className="text-sm text-gray-500 mb-4">
        <ol className="list-none p-0 inline-flex">
          <li className="flex items-center">
            <Link href="/" className="hover:text-[#1B5E20]">Home</Link>
          </li>
          {paths.map((path, index) => {
            const isLast = index === paths.length - 1;
            const href = `/${paths.slice(0, index + 1).join('/')}`;
            const label = path.charAt(0).toUpperCase() + path.slice(1).replace(/-/g, ' ');

            return (
              <li key={path} className="flex items-center">
                <span className="mx-2">/</span>
                {isLast ? (
                  <span className="text-gray-800" aria-current="page">{label}</span>
                ) : (
                  <Link href={href} className="hover:text-[#1B5E20]">
                    {label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
