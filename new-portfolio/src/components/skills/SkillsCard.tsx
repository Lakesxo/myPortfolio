import AnimatedText from "../animatedText/AnimatedText";

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
      <AnimatedText text={name} className="skillName" once duration={0.03} />
    </div>
  );
};

export default SkillsCard;
