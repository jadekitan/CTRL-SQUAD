'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import clsx from 'clsx';

const links = [
    { name: 'Dashboard', href: '/admin/dashboard', icon: '/dashboard-icon.png' },
    { name: 'Profile', href: '/admin/dashboard/profile', icon: '/profile.png' },
    { name: 'Appointments', href: '/admin/dashboard/appointments', icon: '/appointment.png' },
    { name: 'Settings', href: '/admin/dashboard/settings', icon: '/giftcard-icon.svg' },
    { name: 'Signout', href: '/dashboard/manage-admin', icon: '/admin-icon.svg' },
    
      ];

const Sidebar = () => {
    const pathname = usePathname();

    return (
     <div className="w-[20em] h-screen bg-gray-50 shadow-2xl">
        <div>
        <Image
            src="/logo.svg"
            alt="logo" 
            width={250}  
            height={150} 
            className="pl-8"
          />
        </div>

     {links.map((link) => {

        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              '',
              {
                'bg-sky-100 text-blue-600': pathname === link.href,
              },
            )}
          >
            <div className={clsx(
              'flex pl-8 items-center gap-4 mb-4 p-3 text-gray-800 text-md font-medium hover:bg-sky-100 hover:text-blue-700',
              {
                 'text-blue-600': pathname === link.href,
              },
            )}
            
            >
                <Image
                    src={link.icon}
                    alt={link.name + " Icon"} 
                    width={24}  
                    height={24} 
                    className="text-red-500"
                />
                <p className="">{link.name}</p>
            </div>    
          </Link>
        );
      })}


    </div>

    )
}

export default Sidebar;