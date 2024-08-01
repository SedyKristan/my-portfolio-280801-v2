const AboutMeSection = ({ title, content }) => {
  return (
    <div className="flex flex-col items-start gap-2 self-stretch px-6">
      <h2>{title}</h2>
      <p dangerouslySetInnerHTML={{ __html: content }}></p>
    </div>
  );
};

export default AboutMeSection;
