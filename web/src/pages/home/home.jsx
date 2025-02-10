import { useEffect, useState } from "react";
import { login, profile } from "../../services/api-service";
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    login({ email: "user@example", password: "123456" })
      .then(() => {
        profile()
          .then(setUser)
          .catch(() => navigate("/login"));
    });
  }, []);


  return (
    <div>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
}
