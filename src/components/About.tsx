import { motion } from 'framer-motion'
import { Award, Shield, Globe2, Target, Sparkles } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const About = () => {
  const { t } = useTranslation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const values = [
    { key: 'professional', icon: Award },
    { key: 'integrity', icon: Shield },
    { key: 'global', icon: Globe2 },
  ]

  return (
    <section id="about" className="py-24 bg-white" ref={ref}>
      <div className="section-padding">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-[2px] bg-accent-gold" />
              <span className="text-accent-gold font-medium tracking-widest uppercase text-sm">
                {t('about.subtitle')}
              </span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary-900 mb-6">
              {t('about.title')}
            </h2>
            <p className="text-neutral-600 text-lg mb-8 leading-relaxed">
              {t('about.description')}
            </p>

            {/* Values */}
            <div className="space-y-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.key}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="flex gap-4"
                >
                  <div className="w-12 h-12 bg-accent-gold/10 rounded-sm flex items-center justify-center flex-shrink-0">
                    <value.icon className="w-6 h-6 text-accent-gold" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-primary-900 mb-1">
                      {t(`about.values.${value.key}.title`)}
                    </h3>
                    <p className="text-neutral-600 text-sm">
                      {t(`about.values.${value.key}.description`)}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Image & Philosophy */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Main Image */}
            <div className="relative mb-8">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800"
                alt="Law Firm"
                className="w-full h-80 object-cover rounded-sm"
              />
              <div className="absolute -bottom-6 -left-6 bg-accent-gold p-6 rounded-sm">
                <div className="text-4xl font-serif font-bold text-primary-900 mb-1">8+</div>
                <div className="text-primary-800 text-sm">年专业沉淀</div>
              </div>
            </div>

            {/* Service Philosophy */}
            <div className="bg-primary-900 p-6 rounded-sm mb-6">
              <h3 className="font-serif text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-accent-gold" />
                服务理念
              </h3>
              <p className="text-accent-gold text-lg font-medium leading-relaxed">
                "一言九鼎，成就所托；护佑财富，创造价值"
              </p>
            </div>

            {/* Work Style */}
            <div className="bg-neutral-50 p-6 rounded-sm">
              <h3 className="font-serif text-lg font-bold text-primary-900 mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-accent-gold" />
                作业风范
              </h3>
              <p className="text-neutral-600 text-lg font-medium leading-relaxed">
                "精益求精，战则必胜"
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
