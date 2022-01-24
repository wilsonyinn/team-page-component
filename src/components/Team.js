import SectionTitle from "./SectionTitle";
import TeamCard from "./TeamCard";

export default function Team() {
  const officerBoard = [
    {
      name: "John Smith",
      designation: "President",
    },
    {
      name: "John Smith",
      designation: "Vice President",
    },
    {
      name: "John Smith",
      designation: "Treasurer",
    },
    {
      name: "John Smith",
      designation: "Secretary",
    },
  ];
  const webDevTeam = [
    {
      name: "John Smith",
      designation: "Team Lead",
    },
    {
      name: "John Smith",
      designation: "Front-End",
    },
    {
      name: "John Smith",
      designation: "Back-End",
    },
    {
      name: "John Smith",
      designation: "Database",
    },
  ];
  const hackathonTeam = [
    {
      name: "John Smith",
      designation: "Team Lead",
    },
    {
      name: "John Smith",
      designation: "Member 1",
    },
    {
      name: "John Smith",
      designation: "Member 2",
    },
    {
      name: "John Smith",
      designation: "Member 3",
    },
  ];

  return (
    <div className="team container">
      <SectionTitle title="The Team" />
      <div>
        <div className="team-row-container">
          <h4>Officer Board</h4>
          <div className="team-row">
            {officerBoard.map((team, i) => (
              <TeamCard key={i} name={team.name} designation={team.designation} />
            ))}
          </div>
        </div>
        <div className="team-row-container">
          <h4>Web Development Team</h4>
          <div className="team-row">
            {webDevTeam.map((team, i) => (
              <TeamCard key={i} name={team.name} designation={team.designation} />
            ))}
          </div>
        </div>
        <div className="team-row-container">
          <h4>Hackathon Team</h4>
          <div className="team-row">
            {hackathonTeam.map((team, i) => (
              <TeamCard key={i} name={team.name} designation={team.designation} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
