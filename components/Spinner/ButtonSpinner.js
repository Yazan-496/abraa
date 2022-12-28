import Spinner from "react-bootstrap/Spinner"
const override = {
  display: "block",
  margin: "-3.5rem 0px 0px 13.5rem"
}
const overrideScale = {
  margin: "-3.5rem -3rem 0px 0rem"
}
export default function ButtonSpinner({ loading }) {
  return loading ? (
    <>
      <Spinner
        className="spinner-authorized"
        as="span"
        animation="grow"
        size="lg"
        role="status"
        aria-hidden="true"
      />
      <Spinner
        className="spinner-authorized2"
        as="span"
        animation="grow"
        size="lg"
        role="status"
        aria-hidden="true"
      />
      <Spinner
        className="spinner-authorized3"
        as="span"
        animation="grow"
        size="lg"
        role="status"
        aria-hidden="true"
      />
    </>
  ) : null
  // <Spinner className="position-absolute" style={{ left: 10 }} color="white" size="sm" type="grow" />
}
