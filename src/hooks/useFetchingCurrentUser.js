import { useSelector } from 'react-redux';
import { selectIsFetchingCurrentUser } from 'redux/auth/selectors';

export const useFetchingCurrentUser = () => useSelector(selectIsFetchingCurrentUser);