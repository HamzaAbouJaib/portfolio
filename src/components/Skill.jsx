export const Skill = ({ name }) => {
  return (
    <div className="flex items-baseline gap-1 text-xl">
      <i class="fa-solid text-blue-500">&#xf120;</i>
      <p className="text-slate-800">{name}</p>
    </div>
  );
};
