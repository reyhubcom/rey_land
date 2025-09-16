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

             <script src="https://unpkg.com/@lottiefiles/dotlottie-wc@0.7.1/dist/dotlottie-wc.js" type="module"></script>
<dotlottie-wc src="https://lottie.host/7602cf98-e8e9-4457-a1d8-f1d0887e3c94/WGNOBJacdh.lottie" speed="0.5" style="width: 50px; height: 50px" mode="forward" loop autoplay></dotlottie-wc>
                    
             
            </div>
        </nav>
    );
};
