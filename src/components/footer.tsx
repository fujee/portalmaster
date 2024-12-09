import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useLang } from "../contexts/langContext"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import logo from "../media/logo.png"
import routes from "../utilities/routes"
import { Link } from "react-scroll"

import facebook from "../media/contact/facebook.svg";
import instagram from "../media/contact/instagram.svg";
import linkedin from "../media/contact/linkedin.svg";




export default function Footer() {
    const { t } = useLang()

    return <div className="bg-black dark:bg-pureBlack py-20">
        <div className="container mx-auto">
            <div className="px-10">
                <h3 className="text-3xl font-bold text-white text-center lg:text-start">{t('Повежите се са нама')}</h3>
                <div className="lg:flex justify-between items-center mt-5">
                    <div className="max-w-screen-md text-center lg:text-start">
                        <h6 className="text-white text-xl">{t('Партнер на вашем путу ка дигиталној трансформацији будућности.')}</h6>
                        <p className="text-white/80 mt-2">{t('Контактирајте нас данас како бисте добили детаљније информације или договорили бесплатну демонстрацију нашег система.')}</p>
                    </div>
                    <div className="mt-10 lg:mt-0">
                        <a href="mailto:portalmastersolutions@gmail.com"
                            className="block bg-primary text-white rounded-md py-2 px-6 text-base border-2 border-primary hover:bg-primary/30 max-w-sm mx-auto lg:mx-none"
                        >{t("Контактирај нас")}<FontAwesomeIcon icon={faArrowRight} className="ms-2" /></a>
                    </div>
                </div>
            </div>
            <div className="border-t-2 border-white/10 pt-20 mt-20">
                <div className="w-full grid grid-cols-1 lg:grid-cols-3 items-center">
                    <div className="mb-10 lg:mb-0">
                        <img src={logo} alt={t('Портал Мастер Лого')} className="mx-auto lg:mx-0" />
                        <p className="text-white/80 mt-7 text-center lg:text-start">{t('Портал на клик од вас – лако, безбедно и ефикасно.')}</p>
                    </div>
                    <div className="text-center mb-10 lg:mb-0">
                        {routes.filter(x => x.path !== 'home').map((item) => (
                            <Link
                                to={item.path}
                                smooth={true}
                                spy={true}
                                key={item.name}
                                duration={500}
                                className={`text-white text-center hover:text-primary duration-100 ease-in-out cursor-pointer block my-2`}
                            >
                                {t(item.name)}
                            </Link>
                        ))}
                    </div>
                    <div>
                        <div className="flex justify-start gap-5">
                            <a href="https://fon.bg.ac.rs" target="_blank"><img src={facebook}></img></a>
                            <a href="https://fon.bg.ac.rs" target="_blank"><img src={linkedin}></img></a>
                            <a href="https://fon.bg.ac.rs" target="_blank"><img src={instagram}></img></a>
                        </div>
                        <div className="mt-10">
                            <p className="text-white">{t("Телефон")}</p>
                            <p className="text-white/80"><a href="tel:+381645845484" className="text-white/80 hover:text-primary">+381645845484</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}