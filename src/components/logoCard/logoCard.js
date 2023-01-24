import Image from "next/image"
import * as Styled from './styled'

export const LogoCard = ()=>{
    return (
        <Styled.LogoCard>
            <Image
            src="/FITSYNC.svg"
            alt="app-logo"
            width={150}
            height={150}
            priority
            />
        </Styled.LogoCard>
    )
}