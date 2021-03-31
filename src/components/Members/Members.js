import React, { useContext, useState, Fragment, useEffect, useRef } from 'react';
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import styles from "./Members.module.css";
import BlogHeader from "../SectionHeader/BlogHeader";
import { MemberCard } from "./MemberCard";

const Members = ({ city }) => {
  const { topMembers } = city;

  return (
    <div className={styles.wrapper}>
      <BlogHeader label="Top members to meet" />
      <div className={styles.grid}>
        <div className={styles.empty}/>
        {(topMembers || []).slice(0, 2).map((memberData) => (
          <MemberCard
            key={memberData.id}
            memberData={memberData}
          />
        ))}
        <div className={styles.flipcard}>
          <div className={styles.flipcardInner}>
            <div className={styles.flipcardFront}>
              <FiPlus className={styles.joinIcon} />
            </div>
            <button type="button" className={styles.flipcardBack}>
              <Link to="/signup" className={styles.joinAnchor}>
                Join us
              </Link>
            </button>
          </div>
        </div>
        {(topMembers || []).slice(2, 5).map((memberData) => (
          <MemberCard
            key={memberData.id}
            memberData={memberData}
          />
        ))}
        <div />
      </div>
    </div>
  );
};

export default Members;
