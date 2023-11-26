import React, { useContext, useEffect, useState } from "react";
import Header from "../components/common/Header";
import Nav from "../components/common/Nav";
import Top from "../components/common/Top";
import Grid from "../components/common/Grid";
import List from "../components/common/List";
import axios from "axios";
import DetailsContex from "../contex/DetailsContex";
import Loader from "../components/common/Loader";

const Starships = () => {
  const [grid, setgrid] = useState(true);
  const [starships, setStarships] = useState([]);
  const [filter, setFilter] = useState([]);
  const [isLoader, setIsLoader] = useState(false);

  const { search, setSearch, menu, setMenu } = useContext(DetailsContex);
  const list = ["Name", "Model", "Price", ""];
  useEffect(() => {
    setIsLoader(true);
    setSearch("");
    axios
      .get("https://swapi.dev/api/starships")
      .then((res) => {
        setStarships(res.data.results);
        setFilter(res.data.results);
        setIsLoader(false);
      })
      .catch(() => console.log("error"));
  }, []);

  useEffect(() => {
    if (search) {
      const filter = starships.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
      setFilter(filter);
    } else {
      setFilter(starships);
    }
  }, [search, starships]);
  return (
    <div>
      <Header />
      <div>
        <div className="full-container">
          <div className="first">
            <Nav ship={starships} />
          </div>
          {menu && <Nav setMenu={setMenu} ship={starships} />}
          {isLoader ? (
            <Loader />
          ) : (
            <div className="second">
              <div className="container">
                <Top grid={grid} setgrid={setgrid} title="Starship" />
                {grid ? (
                  <div className="grid-contain">
                    {filter.map((ship, index) => (
                      <Grid ship={ship} index={index + 1} />
                    ))}
                  </div>
                ) : (
                  <table>
                    <tr className="table-header">
                      {list.map((item) => (
                        <th>{item}</th>
                      ))}
                    </tr>
                    {filter.map((ship, index) => (
                      <List ship={ship} index={index + 1} />
                    ))}
                  </table>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Starships;
