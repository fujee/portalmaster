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
        <div id="about" className="bg-transparent pt-24 pb-24">
            <div className="container mx-auto px-5 lg:px-0">
                <p className="text-primary font-semibold text-2xl relative after:content-[''] after:absolute after:block after:h-[4px] after:w-[100px] after:-bottom-4 after:left-0 after:bg-primary after:rounded-xl">{t('Зашто')} <em>Портал Мастер</em>?</p>
                <h2 className="mt-10 text-4xl font-bold text-black dark:text-white">{t('Технологија која обликује дигиталну будућност')}</h2>
                <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-20 mt-10">
                    <div className="">
                        <div className="flex justify-start items-center">
                            <img src={theme === DARK_THEME ? kvalitetDark : kvalitet} alt={t('Универзална примена')} className="me-4" />
                            <h3 className="text-2xl font-semibold text-secondary dark:text-white">{t('Универзална примена')}</h3>
                        </div>
                        <div className="mt-5">
                            <h5 className="text-primary font-semibold">{t("Једна платформа за више портала")}</h5>
                            <p className="text-justify text-black/80 dark:text-white/80">{t('Портал Мастер омогућава централизовано креирање и управљање великим бројем портала. Компаније или друге организације могу брзо и лако покренути појединачне портале за продавнице, локалне канцеларије, школе, факултете, општине или друге институције.')}</p>
                        </div>
                        <div className="mt-5">
                            <h5 className="text-primary font-semibold">{t("Хостинг и домени као део решења")}</h5>
                            <p className="text-justify text-black/80 dark:text-white/80">{t('У оквиру Портал Мастер решења, укључени су и трошкови хостинга за све портале, чиме се елиминишу додатни оперативни издаци за организацију. Поред тога, корисницима који не желе да користе сопствене домене, нудимо могућност креирања поддомена за сваки специфични портал.')}</p>
                        </div>
                        {/* <div className="mt-5">
                            <h5 className="text-primary font-semibold">{t("Флексибилне могућности инфраструктуре")}</h5>
                            <p className="text-justify text-black/80 dark:text-white/80">{t('Платформа може бити хостована у cloud окружењима као што су Microsoft Azure или Oracle Cloud, али такође подржава и on-premise инсталације у складу са захтевима корисника, посебно у случајевима где је то неопходно због регулатива или посебних политика компаније.')}</p>
                        </div> */}
                    </div>
                    <div className="">
                        <div className="flex justify-start items-center">
                            <img src={theme === DARK_THEME ? kvalitetDark : kvalitet} alt={t('Унапређење корисничког искуства')} className="me-4" />
                            <h3 className="text-2xl font-semibold text-secondary dark:text-white">{t('Унапређење корисничког искуства')}</h3>
                        </div>
                        <div className="mt-5">
                            <h5 className="text-primary font-semibold">{t("Једноставно коришћење")}</h5>
                            <p className="text-justify text-black/80 dark:text-white/80">{t('Интуитивни интерфејс омогућава корисницима да лако управљају садржајем и приступају информацијама.')}</p>
                        </div>
                        <div className="mt-5">
                            <h5 className="text-primary font-semibold">{t("Подршка и обука")}</h5>
                            <p className="text-justify text-black/80 dark:text-white/80">{t('Нудимо техничку подршку и обуку како би сваки корисник могао максимално да искористи потенцијал платформе.')}</p>
                        </div>
                        <div className="mt-5">
                            <h5 className="text-primary font-semibold">{t("Прилагођеност различитим секторима")}</h5>
                            <p className="text-justify text-black/80 dark:text-white/80">{t('Без обзира на то да ли је у питању образовна институција, локална самоуправа или организација из приватног сектора, Портал Мастер нуди функционалности прилагођене специфичним захтевима корисника.')}</p>
                        </div>
                    </div>
                    <div className="">
                        <div className="flex justify-start items-center">
                            <img src={theme === DARK_THEME ? securityDark : security} alt={t('Сигурност')} className="me-4" />
                            <h3 className="text-2xl font-semibold text-secondary dark:text-white">{t('Сигурност на првом месту')}</h3>
                        </div>
                        <div className="mt-5">
                            <h5 className="text-primary font-semibold">{t("Централизовано управљање налозима")}</h5>
                            <p className="text-justify text-black/80 dark:text-white/80">{t('Сви налози, подаци и активности су под строгом контролом, чиме се обезбеђује висок ниво сигурности у раду.')}</p>
                        </div>
                        <div className="mt-5">
                            <h5 className="text-primary font-semibold">{t("Интеграција са постојећим системима")}</h5>
                            <p className="text-justify text-black/80 dark:text-white/80">{t('Платформа се може интегрисати са постојећим сервисима и инфраструктуром, чиме се обезбеђује заштита података и минимизирају ризици од неовлашћеног приступа.')}</p>
                        </div>
                        <div className="mt-5">
                            <h5 className="text-primary font-semibold">{t("Непрекидно унапређивање сигурности")}</h5>
                            <p className="text-justify text-black/80 dark:text-white/80">{t('Корисници платформе Портал Мастер не морају да брину о редовном ажурирању библиотека, усклађивању са најновијим стандардима или континуираном побољшању нивоа заштите. Наш тим стручњака централизовано одржава све портале, обезбеђујући највиши ниво сигурности и стабилности.')}</p>
                        </div>
                    </div>
                    <div className="">
                        <div className="flex justify-start items-center">
                            <img src={theme === DARK_THEME ? administracijaDark : administracija} alt={t('Јединствена администрација')} className="me-4" />
                            <h3 className="text-2xl font-semibold text-secondary dark:text-white">{t('Јединствена администрација')}</h3>
                        </div>
                        <div className="mt-5">
                            <h5 className="text-primary font-semibold">{t("Централизовано управљање садржајем")}</h5>
                            <p className="text-justify text-black/80 dark:text-white/80">{t('Управљање садржајем, структурама и корисничким правима кроз један интерфејс, уз могућност да сваки портал буде прилагођен специфичним потребама корисника.')}</p>
                        </div>
                        <div className="mt-5">
                            <h5 className="text-primary font-semibold">{t("Аутоматско ажурирање")}</h5>
                            <p className="text-justify text-black/80 dark:text-white/80">{t('Сви портали се аутоматски ажурирају најновијим функционалностима, без потребе за додатним техничким прилагођавањима или интервенцијама.')}</p>
                        </div>
                        <div className="mt-5">
                            <h5 className="text-primary font-semibold">{t("Лако управљање страницама и компонентама")}</h5>
                            <p className="text-justify text-black/80 dark:text-white/80">{t('Администратори могу додавати странице, дефинисати меније и уграђивати компоненте, попут вести, обавештења, календара или формулара, без потребе за техничким знањем.')}</p>
                        </div>
                    </div>
                    
                    <div className="">
                        <div className="flex justify-start items-center">
                            <img src={theme === DARK_THEME ? analitikaDark : analitika} alt={t('Аналитика за сваку потребу')} className="me-4" />
                            <h3 className="text-2xl font-semibold text-secondary dark:text-white">{t('Аналитика за сваку потребу')}</h3>
                        </div>
                        <div className="mt-5">
                            <h5 className="text-primary font-semibold">{t("Праћење активности и корисничке интеракције")}</h5>
                            <p className="text-justify text-black/80 dark:text-white/80">{t('Детаљни извештаји пружају увид у коришћење портала, попут најпосећенијих страница, учесталости приступања порталу и функционалности које се највише користе.')}</p>
                        </div>
                        <div className="mt-5">
                            <h5 className="text-primary font-semibold">{t("Прецизни подаци за боље одлуке")}</h5>
                            <p className="text-justify text-black/80 dark:text-white/80">{t('Интегрисани аналитички алати омогућавају доношење стратешких одлука заснованих на подацима, попут оптимизације и ефикасније организације садржаја.')}</p>
                        </div>
                    </div>
                    <div className="">
                        <div className="flex justify-start items-center">
                            <img src={theme === DARK_THEME ? kvalitetDark : kvalitet} alt={t('Квалитет и стандардизација')} className="me-4" />
                            <h3 className="text-2xl font-semibold text-secondary dark:text-white">{t('Квалитет и стандардизација')}</h3>
                        </div>
                        <div className="mt-5">
                            <h5 className="text-primary font-semibold">{t("Професионални дизајн")}</h5>
                            <p className="text-justify text-black/80 dark:text-white/80">{t('Креирање визуелно уједначених и професионално дизајнираних портала, са могућностима прилагођавања бренду и специфичним захтевима организације.')}</p>
                        </div>
                        <div className="mt-5">
                            <h5 className="text-primary font-semibold">{t("Високи стандарди приступачности")}</h5>
                            <p className="text-justify text-black/80 dark:text-white/80">{t('Подршка за вишејезичност, алати за аутоматско прилагођавање садржаја и опције за бољу читљивост, попут инверзних тема, осигуравају да портали буду доступни свима.')}</p>
                        </div>
                    </div>

                </div>
            </div>
        </div></Element>
}