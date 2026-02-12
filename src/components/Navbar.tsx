import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Globe, Phone } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { t, i18n } = useTranslation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleLanguage = () => {
    const newLang = i18n.language === 'zh-CN' ? 'en-US' : 'zh-CN'
    i18n.changeLanguage(newLang)
  }

  const navLinks = [
    { name: t('nav.home'), href: '#home' },
    { name: t('nav.services'), href: '#services' },
    { name: t('nav.team'), href: '#team' },
    { name: t('nav.cases'), href: '#cases' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.contact'), href: '#contact' },
  ]

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-primary-900/95 backdrop-blur-md shadow-lg py-3' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="section-padding">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-3">
              <div className="w-12 h-12 bg-accent-gold rounded-sm flex items-center justify-center">
                <span className="text-primary-900 font-serif font-bold text-xl">洛</span>
              </div>
              <div className="hidden sm:block">
                <h1 className={`font-serif font-semibold text-lg leading-tight transition-colors ${
                  isScrolled ? 'text-white' : 'text-white'
                }`}>
                  洛河畔律所
                </h1>
                <p className={`text-xs transition-colors ${
                  isScrolled ? 'text-neutral-300' : 'text-neutral-200'
                }`}>
                  Luohepan Law
                </p>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-accent-gold ${
                    isScrolled ? 'text-neutral-200' : 'text-white'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-4">
              {/* Language Switcher */}
              <button
                onClick={toggleLanguage}
                className={`flex items-center gap-2 px-3 py-2 rounded-sm transition-colors ${
                  isScrolled 
                    ? 'text-neutral-200 hover:text-accent-gold' 
                    : 'text-white hover:text-accent-gold'
                }`}
              >
                <Globe className="w-4 h-4" />
                <span className="text-sm font-medium">
                  {i18n.language === 'zh-CN' ? 'EN' : '中'}
                </span>
              </button>

              {/* CTA Button */}
              <a
                href="#contact"
                className="hidden md:flex items-center gap-2 btn-primary"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm">{t('nav.consultation')}</span>
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`lg:hidden p-2 transition-colors ${
                  isScrolled ? 'text-white' : 'text-white'
                }`}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-primary-900/98 backdrop-blur-md" onClick={() => setIsMobileMenuOpen(false)} />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="absolute right-0 top-0 h-full w-80 bg-primary-800 shadow-2xl"
            >
              <div className="p-8 pt-24">
                <div className="flex flex-col gap-6">
                  {navLinks.map((link, index) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-xl font-serif text-white hover:text-accent-gold transition-colors"
                    >
                      {link.name}
                    </motion.a>
                  ))}
                </div>
                <motion.a
                  href="#contact"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="btn-primary w-full text-center mt-10 block"
                >
                  {t('nav.consultation')}
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
