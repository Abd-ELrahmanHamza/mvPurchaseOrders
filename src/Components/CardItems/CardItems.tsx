// Import bootstrap components
import Accordion from "react-bootstrap/Accordion";

// Import components
import OrderDetails from "../OrderDetails/OrderDetails";
import OrderMetaInfo from "../OrderMetaInfo/OrderMetaInfo";

// Import styled components
import { AccordionHeader, AccordionBody } from "./CardItems.styled";

// Import data
import { data } from "../../Data/data";

interface CardItemsProps {
  page: number;
}
const CardItems = ({ page }: CardItemsProps) => {
  return (
    <Accordion>
      {data["mvPurchaseOrders"]
        .slice((page - 1) * 10, (page - 1) * 10 + 10)
        .map((item, index) => (
          <Accordion.Item key={item["PurchaseOrderId"]} eventKey={`${index}`}>
            <AccordionHeader>
              {item["PurchaseOrderTypeAbbreviation"]} -{" "}
              {item["PurchaseOrderNo"]}
            </AccordionHeader>
            <AccordionBody>
              <OrderMetaInfo
                PurchaseOrderAddress={item["PurchaseOrderAddress"]}
                PurchaseOrderContactPerson={item["PurchaseOrderContactPerson"]}
                PurchaseOrderStatus={item["PurchaseOrderStatus"]}
              />

              <OrderDetails orderDetails={item["PurchaseOrderDetails"]} />
            </AccordionBody>
          </Accordion.Item>
        ))}
    </Accordion>
  );
};

export default CardItems;
