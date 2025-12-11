import MenuItem from "./menu-item";

export default function MenuList({ list = [], depth = 0}) {
  return (
    <ul className="menu-list-container">
      {list && list.length
        ? list.map((listItem) => <MenuItem key={listItem.id} item={listItem} depth={depth} />)
        : null}
    </ul>
  );
}
