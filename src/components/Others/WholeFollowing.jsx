import styles from "./otherStyle.module.scss";
// import UserTweetList from "../User/UserTweetList";
import { ReactComponent as Arrow } from "../../assets/image/left-arrow.svg";
import { ReactComponent as FollowARed } from "../../assets/image/FollowA.svg";
import { ReactComponent as FollowBBlack } from "../../assets/image/FllowerB.svg";
import { ReactComponent as FollowBRed } from "../../assets/image/itemFollowAblack.svg";
import { ReactComponent as FollowABlack } from "../../assets/image/itemFollowBred.svg";
import MainFollowingItem from "./MainFollowingItem";
import MainFollowItem from "./MainFollowItem";
import { Link } from "react-router-dom";
import UserProfileNew from "./UserProfileNew";
import StickOption from "./StickOption";
import TwitForm from "../Home/TwitForm";
import ReplyList from "../../common/Reply/ReplyList";
import UserEditModal from "./UserEditModal";
import LikeForm from "../Home/LikeForm";
import { useState } from "react";

const WholeFollowing = () => {
 

  return (
    <>
      <div className={styles.container}>  
        <MainFollowingItem />
        <MainFollowingItem />
        <MainFollowingItem />
        <MainFollowingItem />
        <MainFollowingItem />
        <MainFollowingItem />
        <MainFollowingItem />
        <MainFollowingItem />
        <MainFollowingItem />
        <MainFollowingItem />
        <MainFollowingItem />
        <MainFollowingItem />
        <MainFollowingItem />
        <MainFollowingItem />
        <MainFollowingItem />
        <MainFollowingItem />
        <MainFollowingItem />
      </div>
    </>
  );
};

export default WholeFollowing;
