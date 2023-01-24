import * as Styled from "./styled";
import Image from "next/image";
export const UserCard = () => {
  return (
    <>
      <Styled.UserCard>
        <Image
          className="avatar"
          src="/assets/data/profile-img.jpg"
          alt="avatar"
          width={100}
          height={100}
          priority
        />
        <div className="user-infos">
          <span className="user-alt">@xtimothe</span>
          <hr />
          <span className="user-bio">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            volutpat metus in interdum porttitor.
          </span>
        </div>
      </Styled.UserCard>
      <Styled.BestResult>
        <Image
          className="trophy"
          src="/assets/trophy-solid.svg"
          alt="avatar"
          width={20}
          height={20}
          priority
        />
        <span className="exo">Bench Press</span>
        <span className="weight">90 kl</span>
        <span className="rep">3 rep</span>
      </Styled.BestResult>
    </>
  );
};
