import { type FC } from "react";
import { Button } from "@components/Button";

export const Navigation: FC = () => {
    return (
        <nav className="md:flex  md:grow">
            {/* Desktop sign in links */}
            <div className="flex items-center justify-end flex-wrap grow">
                <Button link="/market" variant="secondary">
                    Market
                </Button>

               <Button variant="outlined" href="#outlined-buttons">
               Wallet
              </Button>
            </div>
        </nav>
    );
};
