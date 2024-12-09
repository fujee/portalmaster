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
                <div className="container mx-auto">
                    <p className="text-primary text-center font-semibold text-2xl relative after:content-[''] after:absolute after:block after:h-[4px] after:w-[100px] after:-bottom-4 after:left-1/2 after:-translate-x-1/2 after:bg-primary after:rounded-xl">{t('Често постављена питања')}</p>
                    <h2 className="mt-10 text-4xl font-bold text-black dark:text-white text-center">{t('Све што треба да знате о порталима...')}</h2>
                    <div className="mt-10">
                        <Disclosure as='div' className="py-5 border-b-2 border-secondary dark:border-white/80">
                            <DisclosureButton
                                as="div"
                                className="w-full flex justify-between cursor-pointer group">
                                <h6 className="text-2xl font-semibold text-black dark:text-white">{t("Шта је ")}<em>Portal Master Solutions</em>?</h6>
                                <FontAwesomeIcon icon={faPlusCircle} className="text-primary text-2xl block group-data-[open]:hidden" />
                                <FontAwesomeIcon icon={faMinusCircle} className="text-secondary dark:text-white text-2xl hidden group-data-[open]:block" />
                            </DisclosureButton>
                            <div className="overflow-hidden py-2">
                                <DisclosurePanel transition className="origin-top transition duration-200 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0">
                                    <p className="mt-4 text-black/80 dark:text-white/80">{t('Portal Master Solutions је централизовано решење за управљање порталима школа и факултета, омогућавајући стандардизацију, сигурност и лакше одржавање портала.')}</p>
                                </DisclosurePanel>
                            </div>
                        </Disclosure>
                        <Disclosure as='div' className="py-5 border-b-2 border-secondary dark:border-white/80">
                            <DisclosureButton
                                as="div"
                                className="w-full flex justify-between cursor-pointer group">
                                <h6 className="text-2xl font-semibold text-black dark:text-white">{t("Да ли се систем може прилагодити специфичним потребама факултета или школе?")}</h6>
                                <FontAwesomeIcon icon={faPlusCircle} className="text-primary text-2xl block group-data-[open]:hidden" />
                                <FontAwesomeIcon icon={faMinusCircle} className="text-secondary dark:text-white text-2xl hidden group-data-[open]:block" />
                            </DisclosureButton>
                            <DisclosurePanel>
                                <p className="mt-4 text-black/80 dark:text-white/80">{t('Да, систем је изузетно прилагодљив. Постоје различите теме, шаблони и могућности за прилагођавање како би најбоље одговарао специфичним потребама сваке институције.')}</p>
                            </DisclosurePanel>
                        </Disclosure>
                        <Disclosure as='div' className="py-5 border-b-2 border-secondary dark:border-white/80">
                            <DisclosureButton
                                as="div"
                                className="w-full flex justify-between cursor-pointer group">
                                <h6 className="text-2xl font-semibold text-black dark:text-white">{t("Како се одвија процес имплементације?")}</h6>
                                <FontAwesomeIcon icon={faPlusCircle} className="text-primary text-2xl block group-data-[open]:hidden" />
                                <FontAwesomeIcon icon={faMinusCircle} className="text-secondary dark:text-white text-2xl hidden group-data-[open]:block" />
                            </DisclosureButton>
                            <DisclosurePanel>
                                <p className="mt-4 text-black/80 dark:text-white/80">{t('Процес имплементације је брз и једноставан. Наш тим пружа подршку од иницијалне интеграције до обуке корисника, чиме се обезбеђује несметано и ефикасно покретање система.')}</p>
                            </DisclosurePanel>
                        </Disclosure>
                        <Disclosure as='div' className="py-5 border-b-2 border-secondary dark:border-white/80">
                            <DisclosureButton
                                as="div"
                                className="w-full flex justify-between cursor-pointer group">
                                <h6 className="text-2xl font-semibold text-black dark:text-white">{t("Да ли ")}<em>Portal Master Solutions</em>{t(" подржава више језика?")}</h6>
                                <FontAwesomeIcon icon={faPlusCircle} className="text-primary text-2xl block group-data-[open]:hidden" />
                                <FontAwesomeIcon icon={faMinusCircle} className="text-secondary dark:text-white text-2xl hidden group-data-[open]:block" />
                            </DisclosureButton>
                            <DisclosurePanel>
                                <p className="mt-4 text-black/80 dark:text-white/80">{t('Да, Portal Master Solutions подржава вишејезичност, укључујући аутоматско превођење ћирилице на латиницу, као и језике мањина за билингвалну наставу.')}</p>
                            </DisclosurePanel>
                        </Disclosure>
                        <Disclosure as='div' className="py-5">
                            <DisclosureButton
                                as="div"
                                className="w-full flex justify-between cursor-pointer group">
                                <h6 className="text-2xl font-semibold text-black dark:text-white">{t("Како се обрађују подаци о корисницима?")}</h6>
                                <FontAwesomeIcon icon={faPlusCircle} className="text-primary text-2xl block group-data-[open]:hidden" />
                                <FontAwesomeIcon icon={faMinusCircle} className="text-secondary dark:text-white text-2xl hidden group-data-[open]:block" />
                            </DisclosureButton>
                            <DisclosurePanel>
                                <p className="mt-4 text-black/80 dark:text-white/80">{t('Сигурност и заштита података су на првом месту. Подаци се чувају у складу са свим релевантним законима и регулативама о заштити приватности.')}</p>
                            </DisclosurePanel>
                        </Disclosure>
                    </div>
                </div>
            </div>
        </Element>
    );
}