import React, { useState } from "react";
import Header from "../components/Header";
import { data } from "../db";
import { Link, useParams } from "react-router-dom";
import {
  CardCollection,
  CardContainer,
  CardOverlay,
  CardContent,
} from "../styles/Card.styles";
import User from "./User";

const Detail = () => {
  const [mouseOut, setMouseOut] = useState(true);
  const [mousePosition, setMousePosition] = useState([0, 0]);
  let rotateY = 0.05 * mousePosition[0] - 20;
  let rotateX = 0.05 * mousePosition[1] - 20;
  const params = useParams();

  return (
    <>
      <Header />
      <CardCollection>
        {data.map((data, index) => (
          <CardContainer
            style={
              mouseOut
                ? {
                    transform: `perspective(1000px) rotateY(0deg) rotateX(0deg)`,
                  }
                : {
                    transform: `perspective(1000px) rotateY(${rotateY}deg) rotateX(${rotateX}deg)`,
                  }
            }
            key={index}
            onMouseMove={(e) => {
              setMouseOut(false);
              setMousePosition([e.clientX, e.clientY]);
              // console.log(mousePosition);
              // console.log(rotateX, rotateY);
            }}
            onMouseOut={(e) => {
              setMouseOut(true);
            }}
          >
            {index === parseInt(params.id) ? (
              <Link to={`/detail`}>
                <CardOverlay
                  style={
                    mouseOut
                      ? {
                          backgroundPosition: `${
                            mousePosition[0] / 3 + mousePosition[1] / 3
                          }%`,
                          filter: `opacity(0)`,
                        }
                      : {
                          backgroundPosition: `${
                            mousePosition[0] / 3 + mousePosition[1] / 3
                          }%`,
                        }
                  }
                ></CardOverlay>

                <User></User>
              </Link>
            ) : (
              <Link to={`/detail/${index}`}>
                <CardOverlay
                  style={
                    mouseOut
                      ? {
                          backgroundPosition: `${
                            mousePosition[0] / 3 + mousePosition[1] / 3
                          }%`,
                          filter: `opacity(0)`,
                        }
                      : {
                          backgroundPosition: `${
                            mousePosition[0] / 3 + mousePosition[1] / 3
                          }%`,
                        }
                  }
                ></CardOverlay>
                <CardContent>{data.name}</CardContent>
              </Link>
            )}
          </CardContainer>
        ))}
      </CardCollection>
    </>
  );
};

export default Detail;
