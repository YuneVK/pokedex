const ButtonLink = ({ children, ...props }) => {
  return (
    <a className="buttonLink" {...props}>
      {children}
    </a>
  )
}

export default ButtonLink
