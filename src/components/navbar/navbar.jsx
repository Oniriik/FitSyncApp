import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import * as Styled from "./styled";
export const Navbar = () => {
  const router = useRouter();
  return (
    <Styled.Navbar>
      <ul>
        <li>
          <Link
            href="/calendar"
            className={`link ${
              router.pathname === "/calendar" ? "active" : ""
            }`}
          >
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
        <li>
          <Link
            href="/stats"
            className={`link ${router.pathname === "/stats" ? "active" : ""}`}
          >
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
        <li className="active">
          <Link
            href="/"
            className={`link ${router.pathname === "/" ? "active" : ""}`}
          >
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
        <li>
          <Link
            href="/training"
            className={`link ${
              router.pathname === "/training" ? "active" : ""
            }`}
          >
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
        <li>
          <Link
            href="/settings"
            className={`link ${
              router.pathname === "/settings" ? "active" : ""
            }`}
          >
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
