import React from "react";
import "../../css_sheet/global_theme.css";
import ModuleSelect from "../components/ModuleGroup/ModuleSelect";
import ModuleControllerHeader from "../components/ModuleController/ModuleControllerHeader";
import ModuleDataContextProvider from "../contexts/ModuleDataContext";
import { Container, Row, Col,Card } from "react-bootstrap";
import ModuleControllerTabs from "../components/ModuleController/ModuleControllerTabs";
import "../../css_sheet/dashboard.css";
import "../../css_sheet/notFromCode.css";
import ModuleDataDetail from "../components/ModuleData/ModuleDataDetail";
import ModuleContextProvider from "../contexts/ModuleContext";

const Dashboard = () => {
  return (
    <div className="dashBoard">
      <Container>
        <Row>
          <ModuleDataContextProvider>
            <ModuleContextProvider>
              <Col>
                <ModuleSelect />
              </Col>
              <Col xs={6}>
                <ModuleDataDetail />
              </Col>
              <Col>
              <Card>
                  <Card.Body>
                    <ModuleControllerHeader />
                    <ModuleControllerTabs />
                </Card.Body>
                </Card>
              </Col>
            </ModuleContextProvider>
          </ModuleDataContextProvider>
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;
