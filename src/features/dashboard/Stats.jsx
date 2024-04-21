import { HiOutlineBriefcase, HiOutlineChartBar } from "react-icons/hi";
import Stat from "./Stat.jsx";
import { HiOutlineBanknotes, HiOutlineCalendarDays } from "react-icons/hi2";
import { formatCurrency } from "../../utils/helpers.js";
import styled from "styled-components";

function Stats({ bookings, confirmedStays, numDays, cabinCount }) {
  const StyledStats = styled.span`
    display: grid;
    grid-column: 1 /-1;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 2rem;
    @media (max-width: 992px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1.5rem;
    }
  `;

  // 1.
  const numBookings = bookings.length;

  // 2.
  const sales = bookings.reduce((acc, cur) => acc + cur.totalPrice, 0);

  // 3.
  const checkins = confirmedStays.length;

  // 4.
  const occupation =
    confirmedStays.reduce((acc, cur) => acc + cur.numNights, 0) /
    (numDays * cabinCount);
  // num checked in nights / all available nights (num days *  num cabins)

  return (
    <StyledStats>
      <Stat
        title="Bookings"
        color="blue"
        icon={<HiOutlineBriefcase />}
        value={numBookings}
      />
      <Stat
        title="Sales"
        color="green"
        icon={<HiOutlineBanknotes />}
        value={formatCurrency(sales)}
      />
      <Stat
        title="Check ins"
        color="indigo"
        icon={<HiOutlineCalendarDays />}
        value={checkins}
      />
      <Stat
        title="Occupancy rate"
        color="yellow"
        icon={<HiOutlineChartBar />}
        value={Math.round(occupation * 100) + "%"}
      />
    </StyledStats>
  );
}

export default Stats;
