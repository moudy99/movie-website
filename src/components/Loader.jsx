import { DNA } from "react-loader-spinner";
import { RotatingLines } from "react-loader-spinner";
const Loader = () => (
  // <DNA
  //   visible={true}
  //   height="80"
  //   width="80"
  //   ariaLabel="dna-loading"
  //   wrapperStyle={{}}
  //   wrapperClass="dna-wrapper"
  // />

  <RotatingLines
    visible={true}
    height="96"
    width="96"
    color="#ffd900"
    strokeWidth="5"
    animationDuration="0.75"
    ariaLabel="rotating-lines-loading"
    wrapperStyle={{}}
    wrapperClass=""
  />
);

export default Loader;
