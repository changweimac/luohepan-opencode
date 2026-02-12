import { motion } from 'framer-motion'
import { ArrowRight, Scale, Building2, Globe2, Shield, Gavel, Home } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const Hero = () => {
  const { t } = useTranslation()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  }

  const stats = [
    { value: '8+', label: t('hero.stats.years') },
    { value: '500+', label: t('hero.stats.cases') },
    { value: '200+', label: t('hero.stats.clients') },
    { value: '30+', label: t('hero.stats.awards') },
  ]

  const services = [
    { icon: Building2, title: t('services.items.crossBorder.title') },
    { icon: Globe2, title: t('services.items.internationalTrade.title') },
    { icon: Shield, title: t('services.items.ip.title') },
    { icon: Scale, title: t('services.items.corporate.title') },
    { icon: Gavel, title: t('services.items.dispute.title') },
    { icon: Home, title: t('services.items.realestate.title') },
  ]

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center section-padding pt-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl"
        >
          {/* Tagline */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-12 h-[2px] bg-accent-gold" />
            <span className="text-accent-gold font-medium tracking-widest uppercase text-sm">
              {t('hero.tagline')}
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            variants={itemVariants}
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
          >
            {t('hero.title')}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-accent-gold font-serif mb-6"
          >
            {t('hero.subtitle')}
          </motion.p>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg text-neutral-300 max-w-2xl mb-10 leading-relaxed"
          >
            {t('hero.description')}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 mb-16"
          >
            <a href="#contact" className="btn-primary flex items-center gap-2 group">
              {t('hero.ctaPrimary')}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#services" className="btn-outline">
              {t('hero.ctaSecondary')}
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-white/10"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center md:text-left">
                <div className="text-3xl md:text-4xl font-serif font-bold text-accent-gold mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-neutral-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Service Cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-16 lg:mt-24"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {services.map((service, index) => (
              <motion.a
                key={index}
                href="#services"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-sm 
                         hover:bg-white/10 hover:border-accent-gold/50 transition-all duration-300
                         group cursor-pointer"
              >
                <service.icon className="w-8 h-8 text-accent-gold mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="text-white text-sm font-medium leading-tight">
                  {service.title}
                </h3>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
