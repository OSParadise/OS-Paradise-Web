import { useEffect, useState } from "react";
import { GetGroupMembers } from "../API/WiseOldManApi";
import MemberCard from "../Components/Members/MemberCard";
import Pagination from "../Components/Pagination";
import { IPlayer } from "../Interfaces";

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
        paddingTop: "30px",
        textAlign: "left",
      }}
    >
      <legend style={{ textAlign: "left", color: "#FFF", paddingTop: "20px" }}>
        Members ({players.length}){" "}
        <span role="img" aria-label="women holding hands">
          👭
        </span>
      </legend>
      {players && players.length > 0 && (
        <Pagination
          data={players}
          RenderComponent={MemberCard}
          pageLimit={5}
          dataLimit={5}
        />
      )}
    </div>
  );
}

export default Members;
