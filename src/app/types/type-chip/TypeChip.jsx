import TYPE_COLORS from "./colors"

const TypeChip = ({ type }) => {
  return (
    <span
      className="typeChip"
      style={{
        "--color": TYPE_COLORS[type],
      }}
    >
      {type}
    </span>
  )
}

export default TypeChip
