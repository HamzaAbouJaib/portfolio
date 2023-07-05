export const SkillSection = ({ skillType, skills }) => {
  return (
    <div>
      <h3 className="text-2xl my-4 font-semibold">{skillType}</h3>
      <div className="flex flex-wrap gap-10 w-full max-md:place-items-center">
        {skills.map((skill) => {
          const skillName = skill.split("-")[1];
          const skillIcon = skill.toLowerCase().replace(" ", "");
          return (
            <div className="flex flex-col justify-center items-center">
              <i
                className={`${skillIcon} text-primary text-[4rem] colored`}
                title={skillName}
              />
              <p className="mt-1">{skillName}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
