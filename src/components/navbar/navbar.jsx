import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

import * as Styled from "./styled";
export const Navbar = () => {
  const router = useRouter();

  const getNavIndex = () => {
    switch (router.pathname) {
      case "/calendar":
        return 0;
      case "/stats":
        return 1;
      case "/":
        return 2;
      case "/training":
        return 1;
      case "/settings":
        return 1;
    }
  };

  const [navIndex, setNavIndex] = useState(getNavIndex());

  return (
    <Styled.Navbar index={navIndex}>
      <ul>
        <li
          className={router.pathname === "/app/calendar" ? "active" : ""}
          onClick={() => setNavIndex(0)}
        >
          <Link href="/calendar" className="link">
            <div className="icon">
              <Image
                className="nav-icon"
                src="/assets/calendar-solid.svg"
                alt="calendar-logo"
                width={20}
                height={20}
                priority
              />
            </div>
            <span>CALENDAR</span>
          </Link>
        </li>
        <li
          className={router.pathname === "/app/stats" ? "active" : ""}
          onClick={() => setNavIndex(1)}
        >
          <Link href="/app/stats" className="link">
            <div className="icon">
              <Image
                className="nav-icon"
                src="/assets/chart-line-solid.svg"
                alt="calendar-logo"
                width={20}
                height={20}
                priority
              />
            </div>
            <span>STATS</span>
          </Link>
        </li>
        <li
          className={router.pathname === "/app" ? "active" : ""}
          onClick={() => setNavIndex(2)}
        >
          <Link href="/app/" className="link">
            <div className="icon">
              <Image
                className="nav-icon"
                src="/assets/house-solid.svg"
                alt="calendar-logo"
                width={20}
                height={20}
                priority
              />
            </div>
            <span></span>
          </Link>
        </li>
        <li
          className={router.pathname === "/app/training" ? "active" : ""}
          onClick={() => setNavIndex(3)}
        >
          <Link href="/app/training" className="link">
            <div className="icon">
              <Image
                className="nav-icon"
                src="/assets/dumbbell-solid.svg"
                alt="dumbbell-logo"
                width={20}
                height={20}
                priority
              />
            </div>
            <span>TRAINING</span>
          </Link>
        </li>
        <li
          className={router.pathname === "/app/settings" ? "active" : ""}
          onClick={() => setNavIndex(4)}
        >
          <Link href="/app/settings" className="link">
            <div className="icon">
              <Image
                className="nav-icon"
                src="/assets/gear-solid.svg"
                alt="gear-logo"
                width={20}
                height={20}
                priority
              />
            </div>
            <span>SETTINGS</span>
          </Link>
        </li>
        <div className="indicator"></div>
      </ul>
    </Styled.Navbar>
  );
};
