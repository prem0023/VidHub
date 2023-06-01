const SidebarItem = ({ item }) => {
  return (
    <div className="flex pl-10 items-center text-lg py-3 mx-2 w-64 rounded-lg hover:shadow-md hover:bg-gray-100">
      {item}
    </div>
  );
};

export default SidebarItem;
