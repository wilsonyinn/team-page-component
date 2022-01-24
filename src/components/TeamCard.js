import userIcon from "../assets/user-profile-icon-2.png";

export default function TeamCard({ name, designation }) {
  return (
    <div className="team-card">
      <div className="icon-box">
        <img src={userIcon} alt="icon" />
      </div>
      <h5>{name}</h5>
      <h6>{designation}</h6>
    </div>
  );
}
