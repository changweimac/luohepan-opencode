import { motion } from 'framer-motion'
import { Linkedin, Mail } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Team = () => {
  const { t } = useTranslation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const team = [
    {
      key: 'member1',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600',
    },
    {
      key: 'member2',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600',
    },
    {
      key: 'member3',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=600',
    },
    {
      key: 'member4',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600',
    },
  ]

  return (
    <section id="team" className="py-24 bg-white" ref={ref}>
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
              {t('team.subtitle')}
            </span>
            <div className="w-8 h-[2px] bg-accent-gold" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary-900 mb-6">
            {t('team.title')}
          </h2>
          <p className="text-neutral-600 text-lg">
            {t('team.description')}
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.key}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden mb-6">
                <div className="aspect-[3/4] overflow-hidden bg-primary-100">
                  <img
                    src={member.image}
                    alt={t(`team.members.${member.key}.name`)}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                {/* Overlay */}
                <div className="absolute inset-0 bg-primary-900/0 group-hover:bg-primary-900/40 transition-all duration-500 flex items-end justify-center opacity-0 group-hover:opacity-100">
                  <div className="flex gap-4 mb-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <a
                      href="#"
                      className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-accent-gold transition-colors"
                    >
                      <Linkedin className="w-5 h-5 text-primary-900" />
                    </a>
                    <a
                      href="#contact"
                      className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-accent-gold transition-colors"
                    >
                      <Mail className="w-5 h-5 text-primary-900" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="text-center">
                <h3 className="font-serif text-xl font-bold text-primary-900 mb-1">
                  {t(`team.members.${member.key}.name`)}
                </h3>
                <p className="text-accent-gold font-medium text-sm mb-2">
                  {t(`team.members.${member.key}.title`)}
                </p>
                <p className="text-neutral-500 text-xs mb-3">
                  {t(`team.members.${member.key}.specialty`)}
                </p>
                <p className="text-neutral-400 text-xs italic">
                  {t(`team.members.${member.key}.education`)}
                </p>
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
            {t('team.cta')}
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Team
