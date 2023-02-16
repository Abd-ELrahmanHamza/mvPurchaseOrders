import Table from "react-bootstrap/Table";

interface OrderDetailsProps {
  orderDetails: any;
}

const OrderDetails = ({ orderDetails }: OrderDetailsProps) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Product SKU</th>
          <th>Quantity Ordered</th>
          <th>Unit Price</th>
          <th>Total Amount</th>
        </tr>
      </thead>
      <tbody>
        {orderDetails.map((orderDetail: any, index: number) => {
          return (
            <tr>
              <td>{index + 1}</td>
              <td>{orderDetail.PurchaseOrderRowProductSKU}</td>
              <td>{orderDetail.PurchaseOrderRowQuantity}</td>
              <td>
                {orderDetail.PurchaseOrderRowUnitPriceWithoutTaxOrDiscount}
              </td>
              <td>{orderDetail.PurchaseOrderRowTotalAmount}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default OrderDetails;
