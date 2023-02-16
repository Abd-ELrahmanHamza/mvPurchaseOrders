// Import bootstrap components
import Accordion from "react-bootstrap/Accordion";

// Import components
import OrderDetails from "../OrderDetails/OrderDetails";
import OrderMetaInfo from "../OrderMetaInfo/OrderMetaInfo";

// Import styled components
import { AccordionHeader, AccordionBody } from "./CardItems.styled";

// Import data
import { data } from "../../Data/data";

const CardItems = () => {
  return (
    <Accordion>
      {data["mvPurchaseOrders"].map((item, index) => (
        <Accordion.Item key={item["PurchaseOrderId"]} eventKey={`${index}`}>
          <AccordionHeader>
            {item["PurchaseOrderTypeAbbreviation"]} - {item["PurchaseOrderNo"]}
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
