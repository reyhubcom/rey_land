import { type FC } from "react";
import * as S from "./styled";
import { Logo } from "@components/Logo";
import { Container } from "@components/Container";

export const Footer: FC = () => {
    return (
        <footer
            className="py-12 md:py-16 border-t border-tertiary border-opacity-50"
            data-animate
        >
            <Container>
                <S.FooterCols>
                    <div className="max-w-md">
                        <div className="mb-3">
                            <Logo />
                        </div>
                        <p className="text-primary opacity-50">
                          Fast crypto exchange the average time for exchange is about 2 minutes. You can track the crypto swap progress on the exchange page.
                        </p>
                    </div>
                    <div>
                        <h6 className="text-white font-medium mb-1">Stake Now</h6>
                        <ul>
                            <li className="mb-1">
                                <a
                                    href="https://linktr.ee/reystaking"
                                    className="text-primary opacity-50 hover:opacity-100 transition duration-150 ease-in-out"
                                >
                                    Eigen Layer
                                </a>
                            </li>
                            <li className="mb-1">
                                <a
                                    href="https://linktr.ee/reystaking"
                                    className="text-primary opacity-50 hover:opacity-100 transition duration-150 ease-in-out"
                                >
                                    BNB Chain
                                </a>
                            </li>
                            <li className="mb-1">
                                <a
                                    href="https://linktr.ee/reystaking"
                                    className="text-primary opacity-50 hover:opacity-100 transition duration-150 ease-in-out"
                                >
                                    SKALE
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h6 className="text-white font-medium mb-1">
                            Product Links
                        </h6>
                        <ul>
                            <li className="mb-1">
                                <a
                                    href="https://linktr.ee/reystaking"
                                    className="text-primary opacity-50 hover:opacity-100 transition duration-150 ease-in-out"
                                >
                                    Staking
                                </a>
                            </li>
                            <li className="mb-1">
                                <a
                                    href="https://linktr.ee/reystaking"
                                    className="text-primary opacity-50 hover:opacity-100 transition duration-150 ease-in-out"
                                >
                                    Bridge
                                </a>
                            </li>
                            <li className="mb-1">
                                <a
                                    href="https://linktr.ee/reystaking"
                                    className="text-primary opacity-50 hover:opacity-100 transition duration-150 ease-in-out"
                                >
                                    Rey Shop
                                </a>
                            </li>
                        </ul>
                    </div>
                </S.FooterCols>
                <div className="md:flex md:items-center md:justify-between">
                    <div className="text-primary opacity-50 text-sm mr-4">
                        &copy; 2025 Saka.Exchange All Rights Reserved.
                    </div>
                </div>
            </Container>
        </footer>
    );
};
