import { AppBar, AppBarType } from "@components/atoms/AppBar"
import { ReactNode } from "react"
import { Navigationbar } from "@components/atoms/Navigationbar";

interface AppBarTemplateProps {
    children: ReactNode;
    label?: string;
    variant : AppBarType;
    beforeUrl?: string;
    hasNav: boolean;
    onClickOption?: () => void;
}
const AppBarTemplate = ({children, label, variant, beforeUrl, hasNav, onClickOption }: AppBarTemplateProps) => {
    return (
        <>
            <AppBar label={label} variant={variant} beforeUrl={beforeUrl} onClickOption={onClickOption} />
            {children}
            {hasNav && <Navigationbar/>}
        </>
    )
}
export default AppBarTemplate