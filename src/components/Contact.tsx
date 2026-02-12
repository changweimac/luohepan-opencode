import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Contact = () => {
  const { t } = useTranslation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const contactInfo = [
    { key: 'address', icon: MapPin },
    { key: 'phone', icon: Phone },
    { key: 'email', icon: Mail },
    { key: 'hours', icon: Clock },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="py-24 bg-primary-900" ref={ref}>
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
              {t('contact.subtitle')}
            </span>
            <div className="w-8 h-[2px] bg-accent-gold" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            {t('contact.title')}
          </h2>
          <p className="text-neutral-300 text-lg">
            {t('contact.description')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-8"
          >
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.key}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-4"
              >
                <div className="w-12 h-12 bg-accent-gold/10 rounded-sm flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-accent-gold" />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">
                    {t(`contact.info.${item.key}.label`)}
                  </h3>
                  <p className="text-neutral-400 text-sm">
                    {t(`contact.info.${item.key}.value`)}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Map */}
            <div className="mt-8 h-48 bg-primary-800 rounded-sm overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3267.885085676926!2d113.7335!3d34.7705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35d6dd0f5c0b5d9d%3A0x5e5f5e5e5e5e5e5e!2sZhengzhou!5e0!3m2!1sen!2scn!4v1600000000000"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(100%) invert(92%)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="bg-white p-8 rounded-sm">
              <h3 className="font-serif text-2xl font-bold text-primary-900 mb-6">
                {t('contact.form.title')}
              </h3>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12"
                >
                  <CheckCircle2 className="w-16 h-16 text-green-500 mb-4" />
                  <p className="text-primary-900 font-medium text-lg">{t('contact.form.success')}</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">
                        {t('contact.form.name')} *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 border border-neutral-200 rounded-sm focus:outline-none focus:border-accent-gold transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">
                        {t('contact.form.email')} *
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 border border-neutral-200 rounded-sm focus:outline-none focus:border-accent-gold transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">
                        {t('contact.form.phone')}
                      </label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 border border-neutral-200 rounded-sm focus:outline-none focus:border-accent-gold transition-colors"
                        placeholder="+86 xxx xxxx xxxx"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">
                        {t('contact.form.company')}
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-neutral-200 rounded-sm focus:outline-none focus:border-accent-gold transition-colors"
                        placeholder="Company name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      {t('contact.form.service')}
                    </label>
                    <select className="w-full px-4 py-3 border border-neutral-200 rounded-sm focus:outline-none focus:border-accent-gold transition-colors bg-white">
                      <option value="">{t('contact.form.service')}</option>
                      <option value="investment">{t('services.items.crossBorder.title')}</option>
                      <option value="trade">{t('services.items.internationalTrade.title')}</option>
                      <option value="ip">{t('services.items.ip.title')}</option>
                      <option value="corporate">{t('services.items.corporate.title')}</option>
                      <option value="dispute">{t('services.items.dispute.title')}</option>
                      <option value="realestate">{t('services.items.realestate.title')}</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      {t('contact.form.message')} *
                    </label>
                    <textarea
                      required
                      rows={4}
                      className="w-full px-4 py-3 border border-neutral-200 rounded-sm focus:outline-none focus:border-accent-gold transition-colors resize-none"
                      placeholder="Please describe your legal needs..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    {t('contact.form.submit')}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
