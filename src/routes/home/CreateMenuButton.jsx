export const CreateMenuButton = ({ value, path }) => {
  return (<input
    type="submit"
    value={value}
    onClick={() => {
      window.location.pathname = path
    }}
    style={{
      margin: 16,
      border: 0,
      borderRadius: 24,
      padding: "16px 32px",
      fontSize: 40,
      backgroundColor: "#222",
      color: "white",
      cursor: "pointer"
    }}
  />)
}