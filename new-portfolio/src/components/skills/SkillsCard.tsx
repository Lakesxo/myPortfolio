interface SkillsCardProps {
  icon: React.ReactNode;
  name: string;
}

const SkillsCard: React.FunctionComponent<SkillsCardProps> = ({
  icon,
  name,
}) => {
  return (
    <div className="flex-skill">
      <div className="icon">{icon}</div>
      <p className="skillName">{name}</p>
    </div>
  );
};

export default SkillsCard;
