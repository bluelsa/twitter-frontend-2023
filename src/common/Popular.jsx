import styles from "../pages/HomeStyle.module.scss";
import PopularUser from "../components/Home/PopularUser";
import { getPopular } from "../api/user";
import { useState, useEffect } from 'react'

const Popular = () => {
  const [popularList, setPopularList] = useState(undefined);

  useEffect(() => {
    const getPopularListAsync = async () => {
      try {
        const popularList = await getPopular();
          setPopularList(popularList);
      } catch (error) {
        console.error(error);
      }
    };

    getPopularListAsync();
  }, []);

  return (
    <>
      {popularList ? (
        <div className={styles.rightColumn}>
          <div className={styles.popularList}>
            <div className={styles.popularTitle}>
              <div>推薦跟隨</div>
            </div>
            <div className={styles.usersWrapper}>
              {popularList.map((popular) => {
                return <PopularUser popular={popular}/>;
              })}
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Popular;
