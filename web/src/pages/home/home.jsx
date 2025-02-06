import { useEffect, useState } from "react";
import { login, profile } from "../../services/api-service";

export default function Home() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    login({ email: "user@example", password: "123456" }).then(() => {
      profile().then(setUser);
    });
  }, []);

  return (
    <div>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
}
