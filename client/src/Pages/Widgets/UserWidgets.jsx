import React from 'react'
import { useNavigate } from 'react-router-dom';

const UserWidgets = ({ userId, picturePath }) => {
  const [user, setUser] = useState(null)
  const { palette } = useTheme();
  const navigate = useNavigate()
  const token = useSelector((s) => s.token);
  const dark = palette.neutral.dark;
  const medium = palette.neutral.medium;
  const main = palette.background.main;
  const getUser = async () => {
    const res = await fetch(`${process.env.REACT_APP_SERVER}/user/get/${userId}`, {
      method: "GET",
      headers: { Authorizations: `Bearer ${token}` },
    })
    const data = await res.json();
    setUser(data);
  }
  useEffect(() => {
    getUser();
  }, [])
  
  return (
    <div>UserWidgets</div>
  )
}

export default UserWidgets