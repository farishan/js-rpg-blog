import { useRouter } from 'next/router'

export default function LocaleSwitcher() {
    const router = useRouter()
    const { locales, locale: activeLocale, pathname, asPath, query } = router
    const otherLocales = locales.filter((locale) => locale !== activeLocale)

    const changeLocale = (nextLocale) => {
        router.push({ pathname, query }, asPath, { locale: nextLocale })
    }

    return (
        <div>
            <span>Locale switcher:</span>
            <select className="ml-2 py-1 px-2 cursor-pointer" onChange={(e) => changeLocale(e.target.value)}>
                <option value={activeLocale}>{activeLocale}</option>
                {otherLocales.map((locale) => (
                    <option key={locale}>
                        {locale}
                    </option>
                ))}
            </select>
        </div>
    )
}