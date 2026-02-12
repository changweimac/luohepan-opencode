import { motion } from 'framer-motion'
import { ArrowRight, TrendingUp, CheckCircle2 } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Cases = () => {
  const { t } = useTranslation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const cases = [
    {
      key: 'case1',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800',
    },
    {
      key: 'case2',
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800',
    },
    {
      key: 'case3',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800',
    },
  ]

  return (
    <section id="cases" className="py-24 bg-primary-900" ref={ref}>
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
              {t('cases.subtitle')}
            </span>
            <div className="w-8 h-[2px] bg-accent-gold" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            {t('cases.title')}
          </h2>
          <p className="text-neutral-300 text-lg">
            {t('cases.description')}
          </p>
        </motion.div>

        {/* Cases Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((caseItem, index) => (
            <motion.div
              key={caseItem.key}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group bg-primary-800 rounded-sm overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={caseItem.image}
                  alt={t(`cases.items.${caseItem.key}.title`)}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900 via-primary-900/50 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-accent-gold text-primary-900 text-xs font-semibold rounded-sm">
                    {t(`cases.items.${caseItem.key}.category`)}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-serif text-xl font-bold text-white mb-3 group-hover:text-accent-gold transition-colors">
                  {t(`cases.items.${caseItem.key}.title`)}
                </h3>
                <p className="text-neutral-400 text-sm mb-4 leading-relaxed">
                  {t(`cases.items.${caseItem.key}.description`)}
                </p>
                <div className="flex items-center gap-2 text-accent-gold text-sm font-medium">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{t(`cases.items.${caseItem.key}.result`)}</span>
                </div>
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
          <a href="#contact" className="btn-primary inline-flex items-center gap-2 group">
            {t('cases.cta')}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Cases
