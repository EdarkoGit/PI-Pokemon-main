export const inputStats = (onChangeDataCreate, dataCreate, err) => {
  const stats = ["hp", "attack", "defense", "speed", "height", "weight"];
  return stats.map((item) => (
    <div key={item} className="stats">
      <span>{item}</span>
      <input
        type="range"
        min="0"
        max="150"
        name={item}
        onChange={onChangeDataCreate}
        value={dataCreate[item]}
      />

      <span>{err[item] ? err[item] : dataCreate[item]}</span>
    </div>
  ));
};
