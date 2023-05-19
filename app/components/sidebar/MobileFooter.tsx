'use client';
import useConversation from '@/app/hooks/useConversation';
import useRoutes from '@/app/hooks/useRoutes';
import MobileItem from './MobileItem';
type Props = {};

const MobileFooter = (props: Props) => {
  const router = useRoutes();
  const { isOpen } = useConversation();

  if (isOpen) {
    return null;
  }
  return (
    <div
      className="fixed justify-between w-full bottom-0 z-40 flex
  items-center bg-white border-t-[1px] lg:hidden
  "
    >
      {router.map((route) => (
        <MobileItem
          key={route.herf}
          href={route.herf}
          active={!!route.active}
          icon={route.icon}
          onClick={route.onClick}
        />
      ))}
    </div>
  );
};

export default MobileFooter;
