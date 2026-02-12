import { motion } from 'framer-motion'
import { Building2, Globe2, Shield, Scale, Gavel, Home, ArrowRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Services = () => {
  const { t } = useTranslation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const services = [
    {
      icon: Building2,
      key: 'crossBorder',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
    },
    {
      icon: Globe2,
      key: 'internationalTrade',
      image: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&q=80&w=800',
    },
    {
      icon: Shield,
      key: 'ip',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800',
    },
    {
      icon: Scale,
      key: 'corporate',
      image: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=800',
    },
    {
      icon: Gavel,
      key: 'dispute',
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800',
    },
    {
      icon: Home,
      key: 'realestate',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800',
    },
  ]

  return (
    <section id="services" className="py-24 bg-neutral-50" ref={ref}>
      <div className="section-padding">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-accent-gold" />
            <span className="text-accent-gold font-medium tracking-widest uppercase text-sm">
              {t('services.subtitle')}
            </span>
            <div className="w-8 h-[2px] bg-accent-gold" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary-900 mb-6">
            {t('services.title')}
          </h2>
          <p className="text-neutral-600 text-lg">
            {t('services.description')}
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.key}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={t(`services.items.${service.key}.title`)}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 bg-accent-gold rounded-sm flex items-center justify-center mb-2">
                    <service.icon className="w-6 h-6 text-primary-900" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-serif text-xl font-bold text-primary-900 mb-3 group-hover:text-accent-gold-dark transition-colors">
                  {t(`services.items.${service.key}.title`)}
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed mb-4">
                  {t(`services.items.${service.key}.description`)}
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-accent-gold font-medium text-sm hover:gap-3 transition-all"
                >
                  了解更多
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-12"
        >
          <a href="#contact" className="btn-outline">
            {t('services.cta')}
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
