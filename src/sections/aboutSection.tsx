import { useLang } from "../contexts/langContext"
import security from "../media/about/security.svg"
import securityDark from "../media/about/security-dark.svg"
import analitika from "../media/about/analitika.svg"
import analitikaDark from "../media/about/analitika-dark.svg"
import administracija from "../media/about/administracija.svg"
import administracijaDark from "../media/about/administracija-dark.svg"
import kvalitet from "../media/about/kvalitet.svg"
import kvalitetDark from "../media/about/kvalitet-dark.svg"
import { useTheme } from "../contexts/themeContext"
import { DARK_THEME } from "../types/theme"
import { Element } from "react-scroll"

export default function AboutSection() {
    const { t } = useLang()
    const { theme } = useTheme()

    return <Element name='about'>
        <div className="bg-transparent pt-24 pb-24">
            <div className="container mx-auto">
                <p className="text-primary font-semibold text-2xl relative after:content-[''] after:absolute after:block after:h-[4px] after:w-[100px] after:-bottom-4 after:left-0 after:bg-primary after:rounded-xl">{t('Зашто')} <em>Portal Master Solutions</em>?</p>
                <h2 className="mt-10 text-4xl font-bold text-black dark:text-white">{t('Технологија која подржава вашу визију образовања')}</h2>
                <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-20 mt-10 lg:after:content-[''] lg:after:w-[2px] lg:after:h-full lg:after:bg-black/20 lg:after:dark:bg-primary/20 lg:after:block lg:after:absolute lg:after:left-1/2 lg:after:-translate-x-1/2 lg:before:content-[''] lg:before:w-full lg:before:h-[2px] lg:before:absolute lg:before:bg-black/20 lg:before:dark:bg-primary/20 lg:before:top-1/2 lg:before:-translate-y-1/2">
                    <div className="">
                        <div className="flex justify-start items-center">
                            <img src={theme === DARK_THEME ? securityDark : security} alt={t('Сигурност')} className="me-4" />
                            <h3 className="text-2xl font-semibold text-secondary dark:text-white">{t('Сигурност на првом месту')}</h3>
                        </div>
                        <div className="mt-5">
                            <h5 className="text-base text-black/80 dark:text-white/80 font-semibold">{t("Централизована контрола")}</h5>
                            <p className="text-black/80 dark:text-white/80">{t('Сви налози и подаци су под строгом контролом, чиме се обезбеђује висок ниво сигурности и лако праћење активности.')}</p>
                        </div>
                        <div className="mt-5">
                            <h5 className="text-base text-black/80 dark:text-white/80 font-semibold">{t("Интеграција са државним и факултетским сервисима")}</h5>
                            <p className="text-black/80 dark:text-white/80">{t('Портал омогућава приступ административним функцијама преко државних сервиса, чиме се унапређује заштита података и смањује ризик од неовлашћеног приступа.')}</p>
                        </div>
                    </div>
                    <div className="">
                        <div className="flex justify-start items-center">
                            <img src={theme === DARK_THEME ? analitikaDark : analitika} alt={t('Аналитичка предност')} className="me-4" />
                            <h3 className="text-2xl font-semibold text-secondary dark:text-white">{t('Аналитичка предност')}</h3>
                        </div>
                        <div className="mt-5">
                            <h5 className="text-base text-black/80 dark:text-white/80 font-semibold">{t("Праћење активности корисника")}</h5>
                            <p className="text-black/80 dark:text-white/80">{t('Детаљни извештаји о коришћењу портала пружају увид у статистике, као што су број посета, најчитаније вести и корисничке интеракције.')}</p>
                        </div>
                        <div className="mt-5">
                            <h5 className="text-base text-black/80 dark:text-white/80 font-semibold">{t("Прецизни подаци за боље одлуке")}</h5>
                            <p className="text-black/80 dark:text-white/80">{t('Алат за анализу података омогућава вам да донесете информисане одлуке на основу извештаја о корисничком понашању.')}</p>
                        </div>
                    </div>
                    <div className="lg:pt-20">
                        <div className="flex justify-start items-center">
                            <img src={theme === DARK_THEME ? administracijaDark : administracija} alt={t('Јединствена администрација')} className="me-4" />
                            <h3 className="text-2xl font-semibold text-secondary dark:text-white">{t('Јединствена администрација')}</h3>
                        </div>
                        <div className="mt-5">
                            <h5 className="text-base text-black/80 dark:text-white/80 font-semibold">{t("Централизовано управљање садржајем")}</h5>
                            <p className="text-black/80 dark:text-white/80">{t('Једноставно и брзо објављивање и уређивање садржаја кроз једну платформу.')}</p>
                        </div>
                        <div className="mt-5">
                            <h5 className="text-base text-black/80 dark:text-white/80 font-semibold">{t("Аутоматска ажурирања")}</h5>
                            <p className="text-black/80 dark:text-white/80">{t('Све институције добијају најновије функције без потребе за додатним техничким прилагођавањем.')}</p>
                        </div>
                        <div className="mt-5">
                            <h5 className="text-base text-black/80 dark:text-white/80 font-semibold">{t("Повезивање различитих система")}</h5>
                            <p className="text-black/80 dark:text-white/80">{t('Омогућено је лако интегрисање са постојећим информационим системима институција, што додатно повећава ефикасност.')}</p>
                        </div>
                    </div>
                    <div className="lg:pt-20">
                        <div className="flex justify-start items-center">
                            <img src={theme === DARK_THEME ? kvalitetDark : kvalitet} alt={t('Квалитет и стандардизација')} className="me-4" />
                            <h3 className="text-2xl font-semibold text-secondary dark:text-white">{t('Квалитет и стандардизација')}</h3>
                        </div>
                        <div className="mt-5">
                            <h5 className="text-base text-black/80 dark:text-white/80 font-semibold">{t("Професионални дизајн")}</h5>
                            <p className="text-black/80 dark:text-white/80">{t('Креирајте визуелно атрактивне портале уз помоћ модерних шаблона и тема које осигуравају униформност и професионалан изглед.')}</p>
                        </div>
                        <div className="mt-5">
                            <h5 className="text-base text-black/80 dark:text-white/80 font-semibold">{t("Високи стандарди приступачности")}</h5>
                            <p className="text-black/80 dark:text-white/80">{t('Подршка за вишејезичност, аутоматско превођење са ћирилице на латиницу, као и прилагођени режими за бољу читљивост, попут црно-беле и инверзне теме.')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div></Element>
}