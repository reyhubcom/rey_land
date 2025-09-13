import { Image } from "@static/images";
import type { FC } from "react";
/**
 * Logo is a text but if there is need to use img, add two img from <Image component
 * @import
 * @example
 * import { Image } from "@static/images";
 * <Image src="logo-light" alt="logo" data-theme-el="light" />
 * when is light
 * <Image src="logo-dark" alt="logo" data-theme-el="dark" />
 */
export const Logo: FC = () => {
    return (
        <div className="shrink-0 mr-4">
            {/* Logo */}
          <script src="https://unpkg.com/@lottiefiles/dotlottie-wc@0.7.1/dist/dotlottie-wc.js" type="module"></script>
<dotlottie-wc src="https://lottie.host/8814880b-6dfe-461e-83f9-5531fecf248e/jRFeIx3iu0.lottie" speed="0.5" style="width: 60px; height: 60px" mode="forward" loop autoplay></dotlottie-wc>
            </a>
        </div>
    );
};
