import Bookmarks from "../components/bookmarks";
import PropTypes from "prop-types";

export default function Home() {
  return (
    <Bookmarks />
  );
}

Home.propTypes = {
  session    : PropTypes.object,
  setSession : PropTypes.func
};
