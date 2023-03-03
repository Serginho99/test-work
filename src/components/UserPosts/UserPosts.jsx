import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { isErrorSelector, isLoadingSelector } from 'redux/users/selectors';
import { userPosts } from 'redux/users/usersOperations';

export default function UsersPosts() {
  const { id } = useParams();
  const [posts, setPosts] = useState([]);
  const dispatch = useDispatch();
  const loading = useSelector(isLoadingSelector);
  const error = useSelector(isErrorSelector);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await dispatch(userPosts(id));
        setPosts([...res.payload]);
        return res.payload;
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchPosts();
  }, [dispatch, id]);

  return (
    <>
      <Link to="/users">Go back</Link>
      <ul>
        {' '}
        {posts?.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
      {loading && <p>load.....</p>}
      {error && <p>try later...</p>}
    </>
  );
}
