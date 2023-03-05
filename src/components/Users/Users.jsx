import UserAlbums from 'components/UserAlbums/UserAlbums';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUsers, userAlbums } from 'redux/users/usersOperations';
import { isErrorSelector, isLoadingSelector } from 'redux/users/selectors';

export default function Users() {
  const [users, setUsers] = useState([]);
  const [albums, setAlbums] = useState([]);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const loading = useSelector(isLoadingSelector);
  const error = useSelector(isErrorSelector);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const res = await dispatch(getUsers());
        setUsers([...res.payload]);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function fetchAlbums(id) {
    try {
      const res = await dispatch(userAlbums(id));
      setOpen(true);
      setAlbums([...res.payload]);
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <>
      <ul>
        {users?.map(item => (
          <li key={item.id} id={item.id}>
            {item.name} <Link to={`/posts/${item.id}`}>to posts</Link>{' '}
            <button onClick={() => fetchAlbums(item.id)}>to albums</button>
          </li>
        ))}
      </ul>
      {loading && <p>load.....</p>}
      {error && <p>try later...</p>}
      <UserAlbums open={open} handleClose={handleClose} albums={albums} />
    </>
  );
}
