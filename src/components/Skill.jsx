export const Skill = ({ name }) => {
  return (
    <div className="flex items-baseline gap-1">
      <i className="fa-solid text-blue-500">&#xf120;</i>
      <p className="text-slate-800 dark:text-gray-300">{name}</p>
    </div>
  );
};
