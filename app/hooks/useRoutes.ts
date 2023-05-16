import { usePathname } from 'next/navigation';
import { HiChat } from 'react-icons/hi';
import { HiArrowLeftOnRectangle, HiUsers } from 'react-icons/hi2';
import { signOut } from 'next-auth/react';

import useConversation from './useConversation';
import { useMemo } from 'react';

const useRoutes = () => {
  const pathname = usePathname();
  const { conversationId } = useConversation();

  const routes = useMemo(
    () => [
      {
        label: 'Chat',
        herf: '/conversations',
        icon: HiChat,
        active: pathname === '/conversations' || !!conversationId,
      },
      {
        label: 'Users',
        herf: '/Users',
        icon: HiUsers,
        active: pathname === pathname || '/users',
      },
      {
        label: 'Logout',
        herf: '#',
        icon: HiArrowLeftOnRectangle,
        onClick: () => signOut(),
      },
    ],
    [pathname, conversationId]
  );
  return routes;
};

export default useRoutes;
