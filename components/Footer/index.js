"use client";

import { Fragment, useEffect, useState } from "react";
import { fetchFooterData } from "@/utils/fetchFooterData";
import Container from "../ui/Container";

const Footer = () => {
  const [filteredFooterData, setFilteredFooterData] = useState([]);

  useEffect(() => {
    const fetchAndProcessData = async () => {
      const footerData = await fetchFooterData();

      const filteredData = footerData.map((data) => {
        const filteredDetails = Object.entries(data.details)
          .filter(([key, value]) => {
            return Object.keys(value).some(
              (innerKey) =>
                typeof innerKey === "string" && value[innerKey].items
            );
          })
          .reduce((accumulator, [key, value]) => {
            accumulator[key] = value; // Build the new filtered object
            return accumulator;
          }, {});

        return filteredDetails;
      });

      setFilteredFooterData(filteredData);

      console.log("Filtered Footer Data:", filteredData);
    };

    fetchAndProcessData();
  }, []);

  console.log(filteredFooterData[0]);

  if (filteredFooterData.length === 0 || !filteredFooterData[0]) {
    return null;
  }

  return (
    <footer>
      <Container>
        {Object.entries(filteredFooterData[0]).map(([key, value]) => {
          return (
            <div key={key}>
              {Object.entries(value).map(([key, value]) => {
                return (
                  <Fragment key={key}>
                    <p>{key}</p>
                    <div>
                      {Array.isArray(value.items) ? (
                        Object.entries(value.items[0]).map(([key, value]) => {
                          return <p>{key}</p>;
                        })
                      ) : (
                        <div>
                          {Object.entries(value.items).map(([key, value]) => {
                            return <p>{key}</p>;
                          })}
                        </div>
                      )}
                    </div>
                  </Fragment>
                );
              })}
            </div>
          );
        })}
      </Container>
    </footer>
  );
};

export default Footer;
