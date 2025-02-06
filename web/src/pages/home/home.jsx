import { useEffect, useState } from "react";
import { profile } from "../../services/api-service";

export default function Home() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    profile().then(setUser);
  }, []);

  return (
    <div>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
}
