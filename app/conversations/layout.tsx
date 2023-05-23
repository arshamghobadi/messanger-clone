import getConversations from '../action/getConversations';
import Sidebar from '../components/sidebar/Sidebar';
import ConversationsList from './components/ConversationsList';

export default async function conversationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const conversations = await getConversations();
  return (
    // @ts-expect-error
    <Sidebar>
      <div className="h-full">
        <ConversationsList initialItems={conversations} />
        {children}
      </div>
    </Sidebar>
  );
}
