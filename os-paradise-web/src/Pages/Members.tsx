import { useEffect, useState } from "react";
import { GetGroupMembers } from "../API/WiseOldManApi";
import { IPlayer } from "../Interfaces/IPlayer";

/**
 * Render component for the members list page.
 */
function Members() {
  const [players, setMembers] = useState<IPlayer[]>([]);

  useEffect(() => {
    const fetchPlayers = async () => {
      const data = await GetGroupMembers();
      setMembers(data);
    };

    fetchPlayers();
  }, []);

  return (
    <div
      style={{
        maxWidth: "96%",
        margin: "auto",
        paddingTop: "40px",
        textAlign: "left",
      }}
    ></div>
  );
}

export default Members;
