import { useEffect, useState } from "react";
import { GetGroupMembers } from "../API/WiseOldManApi";
import { IPlayer } from "../Interfaces";
import Pagination from "../Components/Pagination";
import MemberCard from "../Components/Members/MemberCard";

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
    >
      <legend style={{ textAlign: "left", color: "#FFF", paddingTop: "20px" }}>
        Members{" "}
        <span role="img" aria-label="women holding hands">
          👭
        </span>
      </legend>
      <Pagination
        data={players}
        RenderComponent={MemberCard}
        pageLimit={5}
        dataLimit={10}
      />
    </div>
  );
}

export default Members;
