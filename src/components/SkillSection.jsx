import noImage from "../resources/noImage.png";

export const SkillSection = ({ skillType, skills }) => {

  const abbrMap = {
    "AmazonWebServices": "AWS",
    "UnifiedModelingLanguage": "UML",
  }

  return (
    <div>
      <h3 className="text-2xl my-4 font-semibold">{skillType}</h3>
      <div className="flex flex-wrap gap-10 w-full max-md:place-items-center">
        {skills.map((skill) => {
          const skillName = abbrMap[skill.split("-")[1]] ? abbrMap[skill.split("-")[1]] : skill.split("-")[1];
          const skillIcon = skill.toLowerCase().replace(" ", "");
          return (
            <div className="flex flex-col justify-center items-center">
              {skill.split("-")[0] === "noImage" ? (
                <img src={noImage} className="h-8 w-8 md:h-12 md:w-12" title={skillName}/>
              ) : (
                <i
                  className={`${skillIcon} text-primary text-[2rem] md:text-[3rem] colored`}
                  title={skillName}
                />
              )}
              <p className="mt-1">{skillName}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
