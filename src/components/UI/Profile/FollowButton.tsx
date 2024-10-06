import React, { useState } from 'react';
import { Button } from '@nextui-org/react';

const FollowButton = ({ isFollowing, onFollowToggle }) => {
  const [following, setFollowing] = useState(isFollowing);

  const handleFollowToggle = () => {
    setFollowing(!following);
    onFollowToggle(!following); // Call the parent component's function to update follow status
  };

  return (
    <Button
      auto
      color={following ? 'error' : 'gradient'}
      onClick={handleFollowToggle}
    >
      {following ? 'Unfollow' : 'Follow'}
    </Button>
  );
};

export default FollowButton;
