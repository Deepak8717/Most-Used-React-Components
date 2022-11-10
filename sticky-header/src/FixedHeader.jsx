import Nav from "./Nav";

const FixedHeader = ({ fixedHeader }) => {
  return (
    <div
      className="fixed-header"
      style={fixedHeader ? {} : { transform: "translateY(-80px)" }}
    >
      <Nav />
    </div>
  );
};
export default FixedHeader;
