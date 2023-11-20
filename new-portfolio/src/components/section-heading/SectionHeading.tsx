import "./sectionHeading.scss";

interface SectionHeadingProps {
  sectionName: string;
}

const SectionHeading: React.FunctionComponent<SectionHeadingProps> = ({
  sectionName,
}) => {
  return (
    <div className="headingWrapper">
      <p className="headName">{sectionName}</p>
      <div className="headLine"></div>
    </div>
  );
};

export default SectionHeading;
