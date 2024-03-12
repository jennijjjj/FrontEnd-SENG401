import { Collapse } from 'reactstrap';

const DeleteDeity = () => {
  const headingStyle = {
    textAlign: 'center',
  };

  const flexcolumn = {
    display: "flex",
    flexDirection: "column",
    marginLeft: "20px", // Corrected property name to marginLeft
    alignItems: "center",
    textAlign: "center",
    gap: "20px",
    position: "absolute",
    top: "30%",
    paddingleft: "40%"
  };

  const labelStyle = {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    gap: "10px", // Adjust spacing between label and input
  };

  return (
    <form style={flexcolumn}>
      <div style={labelStyle}>
        <label htmlFor="name">Deity Name</label>
        <input type="text" id="name" name="name" />
      </div>
      <input type="button" value="Delete Deity" />
    </form>
  );
};

export default DeleteDeity;
