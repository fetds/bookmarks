import PropTypes from "prop-types";

export default function Bookmarks({ items }) {
  if (!items) {
    return (
      <p className="text-center">Loading bookmarks&#8230;</p>
    );
  }

  if (items.length === 0) {
    return (
      <p className="text-center">No bookmarks.</p>
    );
  }

  return (
    <ul>
      {items.map(({ item, itemId }) => {
        const url = new URL(item.url);

        return (
          <li key={itemId}>
            <a href={url} rel="noreferrer" target="_blank" className="block p-2 mb-2 rounded hover:bg-gray-100">
              <div className="font-bold">{item.title} <span className="ml-2 text-sm font-normal text-gray-500">{url.host}</span></div>
              <p className="text-sm font-normal text-gray-800">{item.description}</p>
            </a>
          </li>
        );
      })}
    </ul>
  );
}

Bookmarks.propTypes = {
  items : PropTypes.arrayOf(PropTypes.shape({
    itemId : PropTypes.string,
    item   : PropTypes.shape({
      url         : PropTypes.string,
      title       : PropTypes.string,
      description : PropTypes.string
    })
  }))
};
