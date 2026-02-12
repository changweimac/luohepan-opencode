import { motion } from 'framer-motion'
import { Quote, Star } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Testimonials = () => {
  const { t } = useTranslation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const testimonials = ['testimonial1', 'testimonial2', 'testimonial3']

  return (
    <section className="py-24 bg-neutral-100" ref={ref}>
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
              {t('testimonials.subtitle')}
            </span>
            <div className="w-8 h-[2px] bg-accent-gold" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary-900">
            {t('testimonials.title')}
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((key, index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-white p-8 rounded-sm shadow-sm relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8">
                <div className="w-10 h-10 bg-accent-gold rounded-full flex items-center justify-center">
                  <Quote className="w-5 h-5 text-primary-900" />
                </div>
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4 pt-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent-gold text-accent-gold" />
                ))}
              </div>

              {/* Content */}
              <p className="text-neutral-600 text-sm leading-relaxed mb-6 italic">
                "{t(`testimonials.items.${key}.content`)}"
              </p>

              {/* Author */}
              <div className="border-t border-neutral-100 pt-4">
                <p className="font-serif font-bold text-primary-900">
                  {t(`testimonials.items.${key}.author`)}
                </p>
                <p className="text-neutral-500 text-sm">
                  {t(`testimonials.items.${key}.position`)}
                </p>
                <p className="text-accent-gold text-xs">
                  {t(`testimonials.items.${key}.company`)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
