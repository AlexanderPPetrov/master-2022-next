import NavBar from "../components/NavBar";
import {
  Container,
  Row,
  Col,
} from "react-bootstrap";
import Head from "next/head";

function DefaultLayout(props) {
    return (
        <>
          <Head>
            <title>Create Next App</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <NavBar/>
          <Container className="mt-5">
              <Row>
                <Col xs={12} md={props.right ? 8 : 12}>
                  {props.left}
                </Col>
                {props.right ? <Col xs={6} md={4}> {props.right} </Col> : null}
              </Row>
          </Container>
        </>
    );
  }

export default DefaultLayout;