import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useLang } from '../contexts/langContext';
import bgImg from '../media/hero-img.png'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Element } from 'react-scroll'


export default function HeroSection() {
    const { t } = useLang()
    return (
        <Element name='home'>
            <div className="min-h-screen relative">
                <img src={bgImg} alt='Hero Img' className='absolute w-full h-full object-cover z-0'></img>
                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-screen-md'>
                    <div className='block border-2 border-primary bg-white/10 z-10 py-2 px-4 rounded-md text-lg text-white w-fit mx-auto'>{t("Добродошли на Портал Мастер")}</div>
                    <h1 className='text-5xl text-white text-center mt-8 font-bold'>{t('Ваша платформа за ефикаснију будућност образовања')}</h1>
                    <p className='text-white text-center mt-10'>{t("Поједноставите администрацију, унапредите интеграцију и фокусирајте се на квалитет образовања. Portal Master Solutions нуди централизовано, сигурно и потпуно прилагодљиво решење креирано за образовне институције.")}</p>
                    <div className='flex justify-center items-center mt-20 gap-4'>
                        <a href='#' className='py-2 px-4 text-white bg-primary border-2 border-primary rounded-md hover:bg-primary/30 cursor-pointer ease-in-out duration-200'>{t("Започни сада")}</a>
                        <a href="#" className='py-2 px-4 text-white bg-transparent border-2 border-white rounded-md hover:bg-white/30 cursor-pointer ease-in-out duration-200'>{t("Сазнај више")} <FontAwesomeIcon icon={faArrowRight} className='ms-2' /></a>
                    </div>
                </div>
            </div>
        </Element>);
}