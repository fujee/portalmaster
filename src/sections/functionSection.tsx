import { useLang } from "../contexts/langContext"
import { Element } from "react-scroll"
import crmImg from "../media/functions/crm.png"
import crmFrame from "../media/functions/crm-frame.png"
import pretragaImg from '../media/functions/pretraga.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"

export default function FunctionSection() {
    const { t } = useLang()
    return <Element name='function'>
        <div className="py-24">
            <div className="container mx-auto">
                <p className="text-primary text-center font-semibold text-2xl relative after:content-[''] after:absolute after:block after:h-[4px] after:w-[100px] after:-bottom-4 after:left-1/2 after:-translate-x-1/2 after:bg-primary after:rounded-xl">{t('Кључне фунцкионалности')}</p>
                <h2 className="mt-10 text-4xl font-bold text-black dark:text-white text-center">{t('Олакшајте администрацију, фокусирајте се на образовање')}</h2>
                <p className="max-w-screen-lg mx-auto mt-5 text-center text-lg text-black/90 dark:text-white/90">{t('Поједноставите администрацију, унапредите интеграцију и фокусирајте се на квалитет образовања.')} <em>Portal Master Solutions</em> {t('нуди централизовано, сигурно и потпуно прилагодљиво решење креирано за образовне институције.')}</p>
                <div className="grid grid-cols-1 lg:grid-cols-8 lg:grid-rows-4 gap-6 mt-20">
                    <div className="lg:col-span-5 lg:row-span-1 border-2 rounded-xl h-[440px] border-navBorder dark:border-navBorderDark bg-pureWhite bg-custom_bg1 dark:bg-pureBlack  dark:bg-custom_bg1_dark p-10 relative">
                        <div>
                            <h5 className="text-2xl text-black font-bold dark:text-white">{t("Интегрисан CRM систем")}</h5>
                            <p className="mt-3 text-lg text-black/80 dark:text-white/80">{t('Централно управљање комуникацијом са корисницима за све школе и факултете.')}</p>
                        </div>
                        <div className="relative w-fit mx-auto">
                            <img src={crmImg} alt={t('crm')} className="" />
                            <img src={crmFrame} alt={t('crm frame')} className="absolute top-[36%] animate-custom-bounce w-[20%]" />
                        </div>
                    </div>
                    <div className="border-2 rounded-xl h-[440px] border-navBorder dark:border-navBorderDark p-10 bg-pureWhite dark:bg-pureBlack lg:col-span-3 lg:row-span-1">
                        <div>
                            <h5 className="text-2xl text-black font-bold dark:text-white">{t("Дистрибуција информација")}</h5>
                            <p className="mt-3 text-lg text-black/80 dark:text-white/80">{t('Ефикасна дистрибуција важних обавештења, правилника и упутстава кроз портале.')}</p>
                        </div>
                    </div>
                    <div className="border-2 rounded-xl h-[440px] border-navBorder dark:border-navBorderDark p-10 lg:col-span-4 lg:row-span-1 bg-pureWhite bg-custom_bg2 dark:bg-pureBlack dark:bg-custom_bg2_dark">
                        <div>
                            <h5 className="text-2xl text-black font-bold dark:text-white">{t("Централизовано одржавање глобалног садржаја")}</h5>
                            <p className="mt-3 text-lg text-black/80 dark:text-white/80">{t('Садржај је могуће ажурирати централизовано што се аутоматски рефлектује на свим порталима.')}</p>
                        </div>
                    </div>
                    <div className="border-2 rounded-xl h-[440px] border-navBorder dark:border-navBorderDark p-10 lg:col-span-4 lg:row-span-1 bg-pureWhite bg-custom_bg3 dark:bg-pureBlack dark:bg-custom_bg3_dark">
                        <div>
                            <h5 className="text-2xl text-black font-bold dark:text-white">{t("Једноставно додавање корисника")}</h5>
                            <p className="mt-3 text-lg text-black/80 dark:text-white/80">{t('Управљање корисничким налозима на нивоу целе мреже школа или факултета.')}</p>
                        </div>
                    </div>
                    <div className="border-2 rounded-xl h-[440px] border-navBorder dark:border-navBorderDark p-10 lg:col-span-3 lg:row-span-1 bg-pureWhite dark:bg-pureBlack">
                        <div>
                            <h5 className="text-2xl text-black font-bold dark:text-white">{t("Флексибилне теме и шаблони")}</h5>
                            <p className="mt-3 text-lg text-black/80 dark:text-white/80">{t('Избор између различитих тема за изглед портала у складу са потребама институције.')}</p>
                        </div>
                    </div>
                    <div className="border-2 rounded-xl h-[440px] border-navBorder dark:border-navBorderDark p-10 lg:col-span-5 lg:row-span-1 bg-pureWhite bg-custom_bg4 dark:bg-pureBlack dark:bg-custom_bg4_dark">
                        <div>
                            <h5 className="text-2xl text-black font-bold dark:text-white">{t("Компоненте за објављивање")}</h5>
                            <p className="mt-3 text-lg text-black/80 dark:text-white/80">{t('Додајте новости, галерије слика и документе са лакоћом.')}</p>
                        </div>
                    </div>
                    <div className="border-2 rounded-xl h-[440px] border-navBorder dark:border-navBorderDark p-10 lg:col-span-4 lg:row-span-1 bg-custom_bg5 dark:bg-pureBlack dark:bg-custom_bg5_dark">
                        <div>
                            <h5 className="text-2xl text-black font-bold dark:text-white">{t("Двојезичност и превод садржаја")}</h5>
                            <p className="mt-3 text-lg text-black/80 dark:text-white/80">{t('Аутоматски превод између ћирилице и латинице ради брже комуникације са различитим заједницама.')}</p>
                        </div>
                    </div>
                    <div className="border-2 rounded-xl h-[440px] border-navBorder dark:border-navBorderDark p-10 lg:col-span-4 lg:row-span-1 bg-pureWhite dark:bg-pureBlack">
                        <div>
                            <h5 className="text-2xl text-black font-bold dark:text-white">{t("Јединствена претрага")}</h5>
                            <p className="mt-3 text-lg text-black/80 dark:text-white/80">{t('Претражујте садржај свих школа и факултета из једног места за једноставнији приступ информацијама.')}</p>
                        </div>
                        <div className="relative w-fit mx-auto mt-16">
                            <img src={pretragaImg} alt={t('pretraga')} className="animate-pulse" />
                            <div className="absolute border-2 px-4 py-1 rounded-md border-secondary bg-pureWhite -top-5 -left-5 shadow-lg text-secondary">
                                <p>{t('Претражите школу...')}<FontAwesomeIcon icon={faMagnifyingGlass} className="ms-2 text-black" /></p>
                            </div>
                            <div className="absolute z-10 bg-primary px-4 py-2 rounded-md text-pureWhite shadow-xl -top-12 left-20 lg:left-28 ">
                                <p className="animate-typing overflow-hidden whitespace-nowrap border-r-2 border-r-white pr-5 text-sm lg:text-base">{t('ОШ "Бранислав Нушић"')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Element>
}