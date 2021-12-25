export const inputStats = (onChangeDataCreate, dataCreate, err) => {
  const stats = ["hp", "attack", "defense", "speed", "height", "weight"];
  return stats.map((item) => (
    <div key={item}>
      <h4>{item}</h4>
      <input
        type="range"
        min="0"
        max="150"
        name={item}
        className="stat"
        onChange={onChangeDataCreate}
        value={dataCreate[item]}
      />
      <span>{err[item] ? err[item] : null}</span>
    </div>
  ));
};
