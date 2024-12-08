import { useLang } from "../contexts/langContext"
import { Element } from "react-scroll"


export default function FunctionSection() {
    const { t } = useLang()
    return <Element name='function'>
        <div className="py-24">
            <div className="container mx-auto">
                <p className="text-primary text-center font-semibold text-2xl relative after:content-[''] after:absolute after:block after:h-[4px] after:w-[100px] after:-bottom-4 after:left-1/2 after:-translate-x-1/2 after:bg-primary after:rounded-xl">{t('Кључне фунцкионалности')}</p>
                <h2 className="mt-10 text-3xl font-bold text-black dark:text-white text-center">{t('Олакшајте администрацију и усредсредите се на суштину свог пословања')}</h2>
                <p className="max-w-screen-lg mx-auto mt-5 text-center text-lg text-black/90 dark:text-white/90"><em>Портал Мастер</em> {t('нуди централизовано, сигурно и у потпуности прилагодљиво решење осмишљено да поједностави администрацију и омогући корисницима да се фокусирају на постизање кључних циљева.')}</p>
                <div className="grid grid-cols-1 lg:grid-cols-8 lg:grid-rows-4 gap-6 mt-20">
                    <div className="lg:col-span-5 lg:row-span-1 border-2 rounded-xl h-[440px] border-navBorder dark:border-navBorderDark bg-pureWhite bg-custom_bg1 dark:bg-pureBlack  dark:bg-custom_bg1_dark p-10">
                        <div>
                            <h5 className="text-2xl text-black font-bold dark:text-white">{t("Интегрисан CRM систем")}</h5>
                            <p className="text-justify mt-3 text-lg text-black/80 dark:text-white/80">{t('Централизовано управљање комуникацијом са корисницима омогућава лако праћење упита, слање обавештења и персонализовану интеракцију за све портале у мрежи.')}</p>
                        </div>
                    </div>
                    <div className="border-2 rounded-xl h-[440px] border-navBorder dark:border-navBorderDark p-10 bg-pureWhite dark:bg-pureBlack lg:col-span-3 lg:row-span-1">
                        <div>
                            <h5 className="text-2xl text-black font-bold dark:text-white">{t("Ефикасна дистрибуција информација")}</h5>
                            <p className="text-justify mt-3 text-lg text-black/80 dark:text-white/80">{t('Дистрибуција важних обавештења, различитих докумената и упутстава једним кликом, са могућношћу праћења ко је примио и прочитао садржај.')}</p>
                        </div>
                    </div>
                    <div className="border-2 rounded-xl h-[440px] border-navBorder dark:border-navBorderDark p-10 lg:col-span-4 lg:row-span-1 bg-pureWhite bg-custom_bg2 dark:bg-pureBlack dark:bg-custom_bg2_dark">
                        <div>
                            <h5 className="text-2xl text-black font-bold dark:text-white">{t("Централизовано одржавање садржаја")}</h5>
                            <p className="text-justify mt-3 text-lg text-black/80 dark:text-white/80">{t('Глобални садржај се ажурира са једног места и аутоматски се примењује на свим порталима, уз могућност локалних прилагођавања.')}</p>
                        </div>
                    </div>
                    <div className="border-2 rounded-xl h-[440px] border-navBorder dark:border-navBorderDark p-10 lg:col-span-4 lg:row-span-1 bg-pureWhite bg-custom_bg3 dark:bg-pureBlack dark:bg-custom_bg3_dark">
                        <div>
                            <h5 className="text-2xl text-black font-bold dark:text-white">{t("Једноставно управљање корисницима")}</h5>
                            <p className="text-justify mt-3 text-lg text-black/80 dark:text-white/80">{t('Додавање, уређивање и управљање корисничким налозима, са подршком за интеграцију са екстерним системима за идентификацију.')}</p>
                        </div>
                    </div>
                    <div className="border-2 rounded-xl h-[440px] border-navBorder dark:border-navBorderDark p-10 lg:col-span-3 lg:row-span-1 bg-pureWhite dark:bg-pureBlack">
                        <div>
                            <h5 className="text-2xl text-black font-bold dark:text-white">{t("Прилагодљиве теме и шаблони")}</h5>
                            <p className="text-justify mt-3 text-lg text-black/80 dark:text-white/80">{t('Одабир тема и шаблона уз могућност прилагођавања боја, логотипа и изгледа сваког портала.')}</p>
                        </div>
                    </div>
                    <div className="border-2 rounded-xl h-[440px] border-navBorder dark:border-navBorderDark p-10 lg:col-span-5 lg:row-span-1 bg-pureWhite bg-custom_bg4 dark:bg-pureBlack dark:bg-custom_bg4_dark">
                        <div>
                            <h5 className="text-2xl text-black font-bold dark:text-white">{t("Интуитивне компоненте")}</h5>
                            <p className="text-justify mt-3 text-lg text-black/80 dark:text-white/80">{t('Креирање страница са новостима, галеријама слика, документима и многих других, без потребе за програмским знањем.')}</p>
                        </div>
                    </div>
                    <div className="border-2 rounded-xl h-[440px] border-navBorder dark:border-navBorderDark p-10 lg:col-span-4 lg:row-span-1 bg-custom_bg5 dark:bg-pureBlack dark:bg-custom_bg5_dark">
                        <div>
                            <h5 className="text-2xl text-black font-bold dark:text-white">{t("Вишејезичност и аутоматски превод садржаја")}</h5>
                            <p className="text-justify mt-3 text-lg text-black/80 dark:text-white/80">{t('Аутоматски превод између ћирилице и латинице, уз интегрисану подршку за више језика.')}</p>
                        </div>
                    </div>
                    <div className="border-2 rounded-xl h-[440px] border-navBorder dark:border-navBorderDark p-10 lg:col-span-4 lg:row-span-1 bg-pureWhite dark:bg-pureBlack">
                        <div>
                            <h5 className="text-2xl text-black font-bold dark:text-white">{t("Напредна претрага")}</h5>
                            <p className="text-justify mt-3 text-lg text-black/80 dark:text-white/80">{t('Претраживање садржаја мреже портала са једног места, уз коришћење напредних филтера као што су категорије, кључне речи или временски опсег.')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Element>
}