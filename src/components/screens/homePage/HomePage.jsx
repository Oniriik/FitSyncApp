import { UserCard } from "@/components/User";
import * as Styled from "./styled";
export const HomePage = () => {
  return (
    <Styled.HomePage>
      <UserCard />
      <Styled.DailyWorkout>
        <div className="header">
          <span className="title">TODAY&lsquo;S WORKOUT</span>
          <span className="program-name">Push v2 (force)</span>
        </div>
        <div className="body">
          <div className="summary">
            <span>Ex. 5</span>
            <span>Est. Time 1H36</span>
          </div>
          <button className="start-btn">Start now</button>
        </div>
      </Styled.DailyWorkout>
    </Styled.HomePage>
  );
};
