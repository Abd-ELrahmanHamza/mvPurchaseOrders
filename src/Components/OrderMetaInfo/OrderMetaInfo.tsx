// Import bootstrap components
import ListGroup from "react-bootstrap/ListGroup";

// Import styled components
import { StyledListGroup, MetaTitle } from "./OrderMetaInfo.styled";

interface OrderMetaInfoProps {
  PurchaseOrderAddress: string;
  PurchaseOrderContactPerson: string;
  PurchaseOrderStatus: string;
}
const OrderMetaInfo = ({
  PurchaseOrderAddress,
  PurchaseOrderContactPerson,
  PurchaseOrderStatus,
}: OrderMetaInfoProps) => {
  return (
    <StyledListGroup variant="flush">
      <ListGroup.Item>
        <MetaTitle>Purchase address : </MetaTitle> {PurchaseOrderAddress}
      </ListGroup.Item>
      <ListGroup.Item>
        <MetaTitle>Contact : </MetaTitle>
        {PurchaseOrderContactPerson}
      </ListGroup.Item>
      <ListGroup.Item>
        <MetaTitle>Status : </MetaTitle>
        {PurchaseOrderStatus}
      </ListGroup.Item>
    </StyledListGroup>
  );
};

export default OrderMetaInfo;
