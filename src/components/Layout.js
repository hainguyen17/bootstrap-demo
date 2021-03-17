import React from 'react';
import { Col, Row } from 'react-bootstrap';

const styles = {
  column: {
    border: '1px solid #ccc',
    height: '5rem'
  }
};
export const LayoutPage = () => (
  <>
    <Row>
      <Col style={styles.column} md={12}>
        12
      </Col>
    </Row>
    <Row>
      <Col style={styles.column} md={6} sm={12}>
        6 in desktop view, 12 in mobile view
      </Col>
      <Col style={styles.column} md={6} sm={12}>
        6 in desktop view, 12 in mobile view
      </Col>
    </Row>
  </>
);