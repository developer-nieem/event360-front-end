import { ReactNode } from "react";

type TChildren = {
    children : ReactNode
}

const Container = ({children} : TChildren) => {
    return (
        <div className="max-w-[1280px] mx-auto px-3">
            {children}
        </div>
    );
};

export default Container;