import { TransactionTable,  TransactionTableHeader,  TransactionTableHeaderTh,  TransactionTableBody,  TransactionTableRow,  TransactionTableCell } from "./Transaction.Styled"
import PropTypes from 'prop-types';
export const TransactionHistory = ({ items }) => {
    return (
      <TransactionTable>
        <TransactionTableHeader>
          <TransactionTableRow>
            <TransactionTableHeaderTh>Type</TransactionTableHeaderTh>
            <TransactionTableHeaderTh>Amount</TransactionTableHeaderTh>
            <TransactionTableHeaderTh>Currency</TransactionTableHeaderTh>
          </TransactionTableRow>
        </TransactionTableHeader>
        {items.map(({ id, type, amount, currency }) => (
          <TransactionTableBody key={id}>
            <TransactionTableRow>
              <TransactionTableCell>{type}</TransactionTableCell>
              <TransactionTableCell>{amount}</TransactionTableCell>
              <TransactionTableCell>{currency}</TransactionTableCell>
            </TransactionTableRow>
          </TransactionTableBody>
        ))}
      </TransactionTable>
    );
  }
  PropTypes.PropTypes = {
    items: PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.number.isRequired,
        currency: PropTypes.string.isRequired,
      })
    ),
  };