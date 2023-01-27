import Image from "next/image";
import * as Styled from "./styled";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

export const LogoCard = ({ size = 150 }) => {
  const router = useRouter();

  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/app");
    }
  }, [status]);
  return (
    <Styled.LogoCard size={size}>
      <Image
        src="/FITSYNC.svg"
        alt="app-logo"
        width={size * 0.75}
        height={size * 0.75}
        priority
      />
    </Styled.LogoCard>
  );
};
