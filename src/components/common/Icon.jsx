function Icon({ name }) {
  return (
    <svg className="icon">
      <use href={`#${name}`}></use>
    </svg>
  );
}

export default Icon;
