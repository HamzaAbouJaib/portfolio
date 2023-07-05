export const Skill = ({ name }) => {
  return (
    <div className="flex items-baseline gap-1">
      <i class="fa-solid text-blue-500">&#xf120;</i>
      <p className="text-lg font-semibold text-slate-800">{name}</p>
    </div>
  );
};
