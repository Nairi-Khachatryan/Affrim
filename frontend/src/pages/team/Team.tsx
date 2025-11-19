import React from 'react';
import { useAppSelector } from '../../app/hooks';

export const Team: React.FC = () => {
  const user = useAppSelector((state) => state.user.user);

  console.log(user, 'user');

  const referralCode = user.referralCode;

  const referralLink = `${window.location.origin}/sign-up?ref=${referralCode}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralLink);
    alert('Referral link copied!');
  };

  return (
    <div>
      <p>Your referral link:</p>
      <input
        type="text"
        value={referralLink}
        readOnly
        style={{ width: '300px' }}
      />
      <button onClick={copyToClipboard}>Copy</button>
    </div>
  );
};
