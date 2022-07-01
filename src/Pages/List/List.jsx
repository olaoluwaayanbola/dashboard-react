import "./List.scss";
import Sidebar from "../../Components/sidebar copy/Sidebar";
import Navbar from "../../Components/navbar copy/Navbar";
import Datatable from "../../Components/datatable/Datatable";

const List = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Datatable />
      </div>
    </div>
  );
};

export default List;
