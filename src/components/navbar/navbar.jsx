import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

import * as Styled from "./styled";
export const Navbar = () => {
  const router = useRouter();
  const [navIndex, setNavIndex] = useState(0);
  return (
    <Styled.Navbar index={navIndex}>
      <ul>
        <li
          className={router.pathname === "/calendar" ? "active" : ""}
          onClick={() => setNavIndex(0)}
        >
          <Link href="/calendar" className="link">
            <div className="icon">
              <Image
                className="nav-icon"
                src="/assets/calendar-solid.svg"
                alt="calendar-logo"
                width={25}
                height={25}
                priority
              />
            </div>
            <span>Calendar</span>
          </Link>
        </li>
        <li
          className={router.pathname === "/stats" ? "active" : ""}
          onClick={() => setNavIndex(1)}
        >
          <Link href="/stats" className="link">
            <div className="icon">
              <Image
                className="nav-icon"
                src="/assets/chart-line-solid.svg"
                alt="calendar-logo"
                width={25}
                height={25}
                priority
              />
            </div>
            <span>Stats</span>
          </Link>
        </li>
        <li
          className={router.pathname === "/" ? "active" : ""}
          onClick={() => setNavIndex(2)}
        >
          <Link href="/" className="link">
            <div className="icon">
              <Image
                className="nav-icon"
                src="/assets/house-solid.svg"
                alt="calendar-logo"
                width={25}
                height={25}
                priority
              />
            </div>
            <span>Home</span>
          </Link>
        </li>
        <li
          className={router.pathname === "/training" ? "active" : ""}
          onClick={() => setNavIndex(3)}
        >
          <Link href="/training" className="link">
            <div className="icon">
              <Image
                className="nav-icon"
                src="/assets/dumbbell-solid.svg"
                alt="dumbbell-logo"
                width={25}
                height={25}
                priority
              />
            </div>
            <span>Training</span>
          </Link>
        </li>
        <li
          className={router.pathname === "/settings" ? "active" : ""}
          onClick={() => setNavIndex(4)}
        >
          <Link href="/settings" className="link">
            <div className="icon">
              <Image
                className="nav-icon"
                src="/assets/gear-solid.svg"
                alt="gear-logo"
                width={25}
                height={25}
                priority
              />
            </div>
            <span>Settings</span>
          </Link>
        </li>
        <div className="indicator"></div>
      </ul>
    </Styled.Navbar>
  );
};
