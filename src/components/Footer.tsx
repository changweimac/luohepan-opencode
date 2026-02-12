import { motion } from 'framer-motion'
import { Linkedin, Twitter, Facebook, Instagram, ArrowUp } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const { t } = useTranslation()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const quickLinks = [
    { name: t('footer.links.services'), href: '#services' },
    { name: t('footer.links.team'), href: '#team' },
    { name: t('footer.links.cases'), href: '#cases' },
    { name: t('footer.links.about'), href: '#about' },
    { name: t('footer.links.contact'), href: '#contact' },
  ]

  const legalLinks = [
    { name: t('footer.legal.privacy'), href: '#' },
    { name: t('footer.legal.terms'), href: '#' },
    { name: t('footer.legal.disclaimer'), href: '#' },
  ]

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ]

  return (
    <footer className="bg-primary-900 border-t border-white/10">
      <div className="section-padding py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-accent-gold rounded-sm flex items-center justify-center">
                <span className="text-primary-900 font-serif font-bold text-xl">洛</span>
              </div>
              <div>
                <h3 className="font-serif font-semibold text-white text-lg">洛河畔律所</h3>
                <p className="text-neutral-400 text-xs">Luohepan Law Firm</p>
              </div>
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed mb-6">
              {t('footer.description')}
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-white/5 rounded-sm flex items-center justify-center hover:bg-accent-gold transition-colors group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-neutral-400 group-hover:text-primary-900 transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-bold text-white mb-6">{t('footer.links.services')}</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-neutral-400 text-sm hover:text-accent-gold transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Practice Areas */}
          <div>
            <h4 className="font-serif font-bold text-white mb-6">Practice Areas</h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-neutral-400 text-sm hover:text-accent-gold transition-colors">
                  {t('services.items.crossBorder.title')}
                </a>
              </li>
              <li>
                <a href="#services" className="text-neutral-400 text-sm hover:text-accent-gold transition-colors">
                  {t('services.items.internationalTrade.title')}
                </a>
              </li>
              <li>
                <a href="#services" className="text-neutral-400 text-sm hover:text-accent-gold transition-colors">
                  {t('services.items.ip.title')}
                </a>
              </li>
              <li>
                <a href="#services" className="text-neutral-400 text-sm hover:text-accent-gold transition-colors">
                  {t('services.items.corporate.title')}
                </a>
              </li>
              <li>
                <a href="#services" className="text-neutral-400 text-sm hover:text-accent-gold transition-colors">
                  {t('services.items.dispute.title')}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif font-bold text-white mb-6">{t('footer.links.contact')}</h4>
            <ul className="space-y-3 text-neutral-400 text-sm">
              <li>河南省洛阳市洛龙区滨河南路61号</li>
              <li>东方今典天汇中心15层</li>
              <li className="pt-2">15090166767</li>
              <li>contact@luohepan-law.com</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="section-padding py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-neutral-400 text-sm">
              {t('footer.copyright')}
            </p>
            <div className="flex items-center gap-6">
              {legalLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-neutral-400 text-sm hover:text-accent-gold transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 w-12 h-12 bg-accent-gold rounded-sm flex items-center justify-center shadow-lg hover:bg-accent-gold-light transition-colors z-40"
      >
        <ArrowUp className="w-5 h-5 text-primary-900" />
      </motion.button>
    </footer>
  )
}

export default Footer
