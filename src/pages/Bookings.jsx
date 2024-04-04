import Heading from "../ui/Heading";
import Row from "../ui/Row";
import BookingTable from "../features/bookings/BookingTable.jsx";
import BookingTableOperatins from "../features/bookings/BookingTableOperations.jsx";

function Bookings() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All bookings</Heading>
        <BookingTableOperatins />
      </Row>

      <BookingTable />
    </>
  );
}

export default Bookings;
