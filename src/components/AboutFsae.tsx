'use client';
import { MdPublic, MdSchool, MdEngineering, MdOutlineGroup } from 'react-icons/md';
import { useLanguage } from '@/context/LanguageContext';

export default function AboutFsae() {
    const { t } = useLanguage();

    return (
        <>
            <section className="bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-white mb-4">
                            {t('fsae.title')}
                        </h2>
                        <div className="w-16 h-px bg-red-600 mx-auto mb-6"></div>
                        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                            {t('fsae.description')}
                        </p>
                        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mt-4">
                            {t('fsae.mission.description')}
                        </p>
                    </div>

                    {/* Objective */}
                    <div className="text-center mb-16">
                        <MdEngineering className="text-red-600 text-6xl mx-auto mb-4" />
                        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">{t('fsae.mission.title')}</h3>
                        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                            {t('fsae.mission.extended')}
                        </p>
                    </div>

                    {/* Competition & Team Development */}
                    <div className="text-center mb-16">
                        <MdOutlineGroup className="text-red-600 text-6xl mx-auto mb-4" />
                        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">{t('fsae.competition.title')}</h3>
                        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                            {t('fsae.competition.description')}
                        </p>
                    </div>

                    {/* Educational Impact */}
                    <div className="text-center mb-16">
                        <MdSchool className="text-red-600 text-6xl mx-auto mb-4" />
                        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">{t('fsae.education.title')}</h3>
                        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                            {t('fsae.education.description')}
                        </p>
                    </div>

                    {/* Global Reach & Career Impact */}
                    <div className="text-center mb-16">
                        <MdPublic className="text-red-600 text-6xl mx-auto mb-4" />
                        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">{t('fsae.global.title')}</h3>
                        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                            {t('fsae.global.description')}
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
