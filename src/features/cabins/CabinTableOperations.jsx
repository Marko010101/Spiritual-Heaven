import TableOperations from "../../ui/TableOperations.jsx";
import Filter from "../../ui/Filter.jsx";
import SortBy from "../../ui/SortBy.jsx";
import { useMenuInfo } from "../../context/MenuContext.jsx";

function CabinTableOperations() {
  const { isMenuOpen } = useMenuInfo();

  return (
    <TableOperations isMenuOpen={isMenuOpen}>
      <Filter
        filterField="discount"
        options={[
          { value: "all", label: "All" },
          { value: "no-discount", label: "No discount" },
          { value: "with-discount", label: "With discount" },
        ]}
      />

      <SortBy
        options={[
          { value: "name-asc", label: "Sort by name (A-Z)" },
          { value: "name-desc", label: "Sort by name (Z-A)" },
          { value: "regularPrice-asc", label: "Price (low first" },
          { value: "regularPrice-desc", label: "Price (high first" },
          { value: "maxCapacity-asc", label: "Sort by capacity (low first)" },
          { value: "maxCapacity-desc", label: "Sort by capacity (high first)" },
        ]}
      />
    </TableOperations>
  );
}

export default CabinTableOperations;
