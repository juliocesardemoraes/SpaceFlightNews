/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import styles from "../../../styles/Posts.module.css";

import { Box, Button, Grid, Typography } from "@material-ui/core";
import { IFilter, FilterPossibilities } from "pages";

interface Iprops {
  search: string;
  order: IFilter;
}
/**
 * This component renders the posts
 * @param props Iprops
 * @returns {JSX.Element}
 */

const PostLoader = (props: Iprops) => {
  const [dataPaginated, setDataPaginated] = useState([]);
  const [counter, setCounter] = useState(1);
  const [isLoading, setLoading] = useState(false);

  const handleSeeMore = (data: any, button: boolean) => {
    if (data !== undefined) setDataPaginated(data.slice(0, 10 * counter));

    if (button === true) setCounter(counter + 1);
  };

  useEffect(() => {
    setLoading(true);
    fetch("api/articles")
      .then((res) => res.json())
      .then((data) => {
        let resultFilter = null;
        if (props?.order.filter !== FilterPossibilities.null) {
          data.message.sort(sortByDate);
        }
        if (props?.search !== "") {
          resultFilter = data.message.filter((item: any) =>
            item.title.toLowerCase().includes(props?.search.toLowerCase())
          );
        }

        if (resultFilter !== null && props?.search !== "") {
          handleSeeMore(resultFilter, false);
        } else {
          handleSeeMore(data.message, false);
        }
        setLoading(false);
      });

    const sortByDate = (a: any, b: any) => {
      let valuesToSort = { lower: 1, higher: -1 };
      if (props?.order.filter === FilterPossibilities.older) {
        valuesToSort = { lower: -1, higher: 1 };
      }
      if (a.publishedAt < b.publishedAt) {
        return valuesToSort.lower;
      }
      if (a.publishedAt > b.publishedAt) {
        return valuesToSort.higher;
      }
      return 0;
    };
  }, [props]);

  if (isLoading) return <p>Loading...</p>;
  if (!dataPaginated) return <p>No profile data</p>;

  // render data
  return (
    <>
      <Box className={styles.article}>
        {dataPaginated.map((item: any) => {
          return (
            <Grid container key={item.id} className={styles.article__grid}>
              <Grid item xs={6} className={styles.article__item__left}>
                <img
                  className={styles.article__photo}
                  src={item.imageUrl}
                  alt="space image"
                ></img>
              </Grid>
              <Grid item xs={4} className={styles.article__item__right}>
                <Typography
                  variant="h6"
                  className={styles.article__item__title}
                >
                  {item.title}
                </Typography>
                <Box className={styles.article__item__container}>
                  <Typography
                    variant="h6"
                    className={styles.article__item__date}
                  >
                    {item.publishedAt}
                  </Typography>
                  <Button
                    variant="contained"
                    className={styles.article__item__button}
                    href={item.url}
                    target="_blank"
                  >
                    Acessar
                  </Button>
                </Box>
                <p>{item.summary}</p>
                <Button
                  className={styles.article__seemore}
                  variant="contained"
                  href={"#"}
                  target="_blank"
                >
                  Veja mais
                </Button>
              </Grid>
            </Grid>
          );
        })}
        <Box className={styles.article__seemore__posts}>
          <Button
            onClick={() => handleSeeMore(dataPaginated, true)}
            className={styles.article__seemore__button}
          >
            Ver mais postagens
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default PostLoader;
