import user from "./Data/user";
import { Profile } from "./Profile/Profile";

import  {Statistics} from "./Statistic/Statistics";
import data from "./Data/data"

import { FriendList } from "./Friend/FriendList";
import friends from "./Data/friends"

import {TransactionHistory} from "./TransactionHistory/TransactionHistory"
import transactions from "./Data/transactions"

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>
<Statistics title="Upload stats" stats={data} />
<FriendList friends={friends} />
<TransactionHistory items={transactions} />;
    </div>
  );
};
