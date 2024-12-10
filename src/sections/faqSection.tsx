import { Element } from "react-scroll";
import { useLang } from "../contexts/langContext";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinusCircle, faPlusCircle } from "@fortawesome/free-solid-svg-icons";


export default function FaqSection() {
    const { t } = useLang()

    return (
        <Element name="faq">
            <div className="py-24 bg-pureWhite dark:bg-faqBlack">
                <div className="container mx-auto px-5 lg:px-0">
                    <p className="text-primary text-center font-semibold text-xl lg:text-2xl relative after:content-[''] after:absolute after:block after:h-[4px] after:w-[100px] after:-bottom-4 after:left-1/2 after:-translate-x-1/2 after:bg-primary after:rounded-xl">{t('Често постављена питања')}</p>
                    <h2 className="mt-10 text-2xl lg:text-4xl font-bold text-black dark:text-white text-center">{t('Све што треба да знате о порталима...')}</h2>
                    <div className="mt-10">
                        <Disclosure as='div' className="py-5 border-b-2 border-secondary dark:border-white/80">
                            <DisclosureButton
                                as="div"
                                className="w-full flex justify-between cursor-pointer group pb-2">
                                <h6 className="text-lg lg:text-2xl font-semibold text-black dark:text-white">{t("Шта је Портал Мастер и како функционише?")}</h6>
                                <FontAwesomeIcon icon={faPlusCircle} className="text-primary text-2xl block group-data-[open]:hidden" />
                                <FontAwesomeIcon icon={faMinusCircle} className="text-secondary dark:text-white text-2xl hidden group-data-[open]:block" />
                            </DisclosureButton>
                            <div className="overflow-hidden py-2">
                                <DisclosurePanel transition className="origin-top transition duration-200 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0">
                                    <p className="mt-4 text-black/80 dark:text-white/80">{t('Портал Мастер је платформа која омогућава једноставну израду веб презентација и централизовано управљање независним, али сличним порталима. Наша платформа пружа јединствено решење које омогућава брзу израду персонализованих веб презентација, лако одржавање и ефикасно управљање. Било да су у питању јавне установе (на пример образовне институције) или компаније (на пример продајни објекти).')}</p>
                                </DisclosurePanel>
                            </div>
                        </Disclosure>
                        <Disclosure as='div' className="py-5 border-b-2 border-secondary dark:border-white/80">
                            <DisclosureButton
                                as="div"
                                className="w-full flex justify-between cursor-pointer group pb-2">
                                <h6 className="text-lg lg:text-2xl font-semibold text-black dark:text-white">{t("Да ли је потребно техничко предзнање за коришћење платформе?")}</h6>
                                <FontAwesomeIcon icon={faPlusCircle} className="text-primary text-2xl block group-data-[open]:hidden" />
                                <FontAwesomeIcon icon={faMinusCircle} className="text-secondary dark:text-white text-2xl hidden group-data-[open]:block" />
                            </DisclosureButton>
                            <div className="overflow-hidden py-2">
                                <DisclosurePanel transition className="origin-top transition duration-200 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0">
                                    <p className="mt-4 text-black/80 dark:text-white/80">{t('Не, Портал Мастер је осмишљен тако да омогући лако управљање садржајем без техничког предзнања. Платформа нуди интуитивни интерфејс и велики избор предефинисаних страница и компоненти, што је чини једноставном за употребу.')}</p>
                                </DisclosurePanel>
                            </div>
                        </Disclosure>
                        <Disclosure as='div' className="py-5 border-b-2 border-secondary dark:border-white/80">
                            <DisclosureButton
                                as="div"
                                className="w-full flex justify-between cursor-pointer group pb-2">
                                <h6 className="text-xl lg:text-2xl font-semibold text-black dark:text-white">{t("Може ли се платформа прилагодити специфичним потребама организације?")}</h6>
                                <FontAwesomeIcon icon={faPlusCircle} className="text-primary text-2xl block group-data-[open]:hidden" />
                                <FontAwesomeIcon icon={faMinusCircle} className="text-secondary dark:text-white text-2xl hidden group-data-[open]:block" />
                            </DisclosureButton>
                            <div className="overflow-hidden py-2">
                                <DisclosurePanel transition className="origin-top transition duration-200 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0">
                                    <p className="mt-4 text-black/80 dark:text-white/80">{t('Да, Портал Мастер се може прилагодити специфичним потребама ваше организације. Наш тим блиско сарађује са корисницима како би осигурао да платформа у потпуности подржи њихове захтеве и пословне процесе на најбољи могући начин.')}</p>
                                </DisclosurePanel>
                            </div>
                        </Disclosure>
                        <Disclosure as='div' className="py-5 border-b-2 border-secondary dark:border-white/80">
                            <DisclosureButton
                                as="div"
                                className="w-full flex justify-between cursor-pointer group pb-2">
                                <h6 className="text-xl lg:text-2xl font-semibold text-black dark:text-white">{t("Како се ажурирају портали?")}</h6>
                                <FontAwesomeIcon icon={faPlusCircle} className="text-primary text-2xl block group-data-[open]:hidden" />
                                <FontAwesomeIcon icon={faMinusCircle} className="text-secondary dark:text-white text-2xl hidden group-data-[open]:block" />
                            </DisclosureButton>
                            <div className="overflow-hidden py-2">
                                <DisclosurePanel transition className="origin-top transition duration-200 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0">
                                    <p className="mt-4 text-black/80 dark:text-white/80">{t('Портали се ажурирају аутоматски, путем централизованог система, што осигурава да увек имате приступ најновијим функционалностима и максималној сигурности, без потребе за техничким интервенцијама са ваше стране.')}</p>
                                </DisclosurePanel>
                            </div>
                        </Disclosure>

                        <Disclosure as='div' className="py-5 border-b-2 border-secondary dark:border-white/80">
                            <DisclosureButton
                                as="div"
                                className="w-full flex justify-between cursor-pointer group pb-2">
                                <h6 className="text-xl lg:text-2xl font-semibold text-black dark:text-white">{t("Да ли је могућа интеграција са постојећим системима?")}</h6>
                                <FontAwesomeIcon icon={faPlusCircle} className="text-primary text-2xl block group-data-[open]:hidden" />
                                <FontAwesomeIcon icon={faMinusCircle} className="text-secondary dark:text-white text-2xl hidden group-data-[open]:block" />
                            </DisclosureButton>
                            <div className="overflow-hidden py-2">
                                <DisclosurePanel transition className="origin-top transition duration-200 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0">
                                    <p className="mt-4 text-black/80 dark:text-white/80">{t('Да, Портал Мастер може да подржи интеграцију са постојећим системима који су од значаја за ваше пословање. ')}</p>
                                </DisclosurePanel>
                            </div>
                        </Disclosure>

                        <Disclosure as='div' className="py-5 border-b-2 border-secondary dark:border-white/80">
                            <DisclosureButton
                                as="div"
                                className="w-full flex justify-between cursor-pointer group pb-2">
                                <h6 className="text-xl lg:text-2xl font-semibold text-black dark:text-white">{t("Како се ажурирају портали?")}</h6>
                                <FontAwesomeIcon icon={faPlusCircle} className="text-primary text-2xl block group-data-[open]:hidden" />
                                <FontAwesomeIcon icon={faMinusCircle} className="text-secondary dark:text-white text-2xl hidden group-data-[open]:block" />
                            </DisclosureButton>
                            <div className="overflow-hidden py-2">
                                <DisclosurePanel transition className="origin-top transition duration-200 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0">
                                    <p className="mt-4 text-black/80 dark:text-white/80">{t('Портали се ажурирају аутоматски, путем централизованог система, што осигурава да увек имате приступ најновијим функционалностима и максималној сигурности, без потребе за техничким интервенцијама са ваше стране.')}</p>
                                </DisclosurePanel>
                            </div>
                        </Disclosure>

                        <Disclosure as='div' className="py-5 border-b-2 border-secondary dark:border-white/80">
                            <DisclosureButton
                                as="div"
                                className="w-full flex justify-between cursor-pointer group pb-2">
                                <h6 className="text-xl lg:text-2xl font-semibold text-black dark:text-white">{t("Како се гарантује сигурност података на платформи?")}</h6>
                                <FontAwesomeIcon icon={faPlusCircle} className="text-primary text-2xl block group-data-[open]:hidden" />
                                <FontAwesomeIcon icon={faMinusCircle} className="text-secondary dark:text-white text-2xl hidden group-data-[open]:block" />
                            </DisclosureButton>
                            <div className="overflow-hidden py-2">
                                <DisclosurePanel transition className="origin-top transition duration-200 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0">
                                    <p className="mt-4 text-black/80 dark:text-white/80">{t('Платформа обезбеђује заштиту података коришћењем најсавременијих сигурносних протокола, као што су криптовање, контрола приступа и редовно ажурирање сигурносних система. Ово осигурава висок ниво заштите и поузданости.')}</p>
                                </DisclosurePanel>
                            </div>
                        </Disclosure>

                        <Disclosure as='div' className="py-5 border-b-2 border-secondary dark:border-white/80">
                            <DisclosureButton
                                as="div"
                                className="w-full flex justify-between cursor-pointer group pb-2">
                                <h6 className="text-xl lg:text-2xl font-semibold text-black dark:text-white">{t("Која врста подршке је доступна корисницима?")}</h6>
                                <FontAwesomeIcon icon={faPlusCircle} className="text-primary text-2xl block group-data-[open]:hidden" />
                                <FontAwesomeIcon icon={faMinusCircle} className="text-secondary dark:text-white text-2xl hidden group-data-[open]:block" />
                            </DisclosureButton>
                            <div className="overflow-hidden py-2">
                                <DisclosurePanel transition className="origin-top transition duration-200 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0">
                                    <p className="mt-4 text-black/80 dark:text-white/80">{t('Пружамо свеобухватну подршку корисницима, укључујући техничку помоћ, обуку и детаљну документацију, како бисте максимално искористили могућности платформе.')}</p>
                                </DisclosurePanel>
                            </div>
                        </Disclosure>

                        <Disclosure as='div' className="py-5 border-b-2 border-secondary dark:border-white/80">
                            <DisclosureButton
                                as="div"
                                className="w-full flex justify-between cursor-pointer group pb-2">
                                <h6 className="text-xl lg:text-2xl font-semibold text-black dark:text-white">{t("Да ли су хостинг и домени део решења")}</h6>
                                <FontAwesomeIcon icon={faPlusCircle} className="text-primary text-2xl block group-data-[open]:hidden" />
                                <FontAwesomeIcon icon={faMinusCircle} className="text-secondary dark:text-white text-2xl hidden group-data-[open]:block" />
                            </DisclosureButton>
                            <div className="overflow-hidden py-2">
                                <DisclosurePanel transition className="origin-top transition duration-200 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0">
                                    <p className="mt-4 text-black/80 dark:text-white/80">{t('У оквиру цене укључени су и трошкови хостинга за све портале, чиме се елиминишу додатни оперативни издаци за организацију. Такође, корисницима који не желе да користе сопствене домене, нудимо могућност креирања поддомена за сваки специфични портал.')}</p>
                                </DisclosurePanel>
                            </div>
                        </Disclosure>


                        <Disclosure as='div' className="py-5">
                            <DisclosureButton
                                as="div"
                                className="w-full flex justify-between cursor-pointer group pb-2">
                                <h6 className="text-xl lg:text-2xl font-semibold text-black dark:text-white">{t("Како могу да добијем додатне информације о платформи?")}</h6>
                                <FontAwesomeIcon icon={faPlusCircle} className="text-primary text-2xl block group-data-[open]:hidden" />
                                <FontAwesomeIcon icon={faMinusCircle} className="text-secondary dark:text-white text-2xl hidden group-data-[open]:block" />
                            </DisclosureButton>
                            <div className="overflow-hidden py-2">
                                <DisclosurePanel transition className="origin-top transition duration-200 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0">
                                    <p className="mt-4 text-black/80 dark:text-white/80">{t('Контактирајте нас')} <a href="mailto:contact@portalmastersolutions.com" className="text-primary hover:text-secondary underline dark:hover:text-pureWhite">contact@portalmastersolutions.com</a></p>
                                </DisclosurePanel>
                            </div>
                        </Disclosure>
                    </div>
                </div>
            </div>
        </Element>
    );
}