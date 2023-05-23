import { User } from '@prisma/client';
import { FullConversationType } from '../types';
import { useSession } from 'next-auth/react';
import { useMemo } from 'react';

const useOtherUser = (
  conversation:
    | FullConversationType
    | {
        users: User[];
      }
) => {
  const session = useSession();

  const otherUser = useMemo(() => {
    const currentUserEmail = session?.data?.user?.email;

    const filteredUsers = conversation.users?.filter(
      (user) => user.email !== currentUserEmail
    );
    if (filteredUsers && filteredUsers.length > 0) {
      return filteredUsers[0];
    }
    return undefined;
  }, [session?.data?.user?.email, conversation.users]);
  return otherUser;
};
export default useOtherUser;
