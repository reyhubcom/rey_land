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
                           Blockdaemon's Validators provide a trusted, scalable, and secure solution for institutions looking to participate in Proof-of-Stake (PoS) networks.
                        </p>
                    </div>
                    <div>
                        <h6 className="text-white font-medium mb-1">Buy Crypto</h6>
                        <ul>
                            <li className="mb-1">
                                <a
                                    href="/"
                                    className="text-primary opacity-50 hover:opacity-100 transition duration-150 ease-in-out"
                                >
                                    Buy Btcoin [ BTC ]
                                </a>
                            </li>
                            <li className="mb-1">
                                <a
                                    href="/"
                                    className="text-primary opacity-50 hover:opacity-100 transition duration-150 ease-in-out"
                                >
                                    Buy Ethereum [ ETH ]
                                </a>
                            </li>
                            <li className="mb-1">
                                <a
                                    href="/"
                                    className="text-primary opacity-50 hover:opacity-100 transition duration-150 ease-in-out"
                                >
                                    Buy Cosmos [ ATOM ]
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
                        &copy; 2025 ReyHubc.com. All Rights Reserved.
                    </div>
                </div>
            </Container>
        </footer>
    );
};
