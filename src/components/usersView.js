import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPost } from '../features/users/userSlice';

const UsersView = () => {
  const data = useSelector(state => state.user);
  const { isLoading, error, posts } = data;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPost());
  }, [dispatch]);

  if (isLoading) {
    return <p>Please wait for a while data is loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!posts) {
    return null;
  }

  return (
    <div>
      {posts.results.map(user => {
        console.log(user);
        return (
          <ul key={user.login.uuid}>
            <li>{user.name.first}</li>
            <li>{user.name.last}</li>
          </ul>
        );
      })}
    </div>
  );
};

export default UsersView;