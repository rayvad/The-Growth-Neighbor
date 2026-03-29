import { useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { CheckCircle2, Code2, LineChart, Smartphone, Mail, Phone, ArrowRight, Star, Zap, Layout, TrendingUp, Copy, Check } from 'lucide-react';

export default function App() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopy = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const slideUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  return (
    <div className="min-h-screen font-sans selection:bg-brand-blue/20 selection:text-brand-blue">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-panel-light border-b-0 border-x-0 rounded-none">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <svg width="48" height="48" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-md">
                <circle cx="50" cy="50" r="48" fill="#0B243B" stroke="white" strokeWidth="2"/>
                {/* Inner blue circle */}
                <path d="M 20 50 A 30 30 0 1 1 80 50 A 30 30 0 0 1 20 50" stroke="#1C75BC" strokeWidth="4" strokeDasharray="120 60" strokeLinecap="round" fill="none"/>
                {/* Website/Dashboard lines */}
                <rect x="35" y="35" width="25" height="25" rx="2" stroke="#1C75BC" strokeWidth="3" fill="none"/>
                <line x1="40" y1="42" x2="55" y2="42" stroke="#1C75BC" strokeWidth="2" strokeLinecap="round"/>
                <line x1="40" y1="48" x2="50" y2="48" stroke="#1C75BC" strokeWidth="2" strokeLinecap="round"/>
                <line x1="40" y1="54" x2="45" y2="54" stroke="#1C75BC" strokeWidth="2" strokeLinecap="round"/>
                {/* Green Arrow */}
                <path d="M25 65 L45 45 L55 55 L75 30" stroke="#39B54A" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                <polygon points="75,25 65,30 75,40" fill="#39B54A"/>
                {/* Plant */}
                <path d="M50 45 C50 30 40 20 40 20 C45 25 50 35 50 45 Z" fill="#39B54A"/>
                <path d="M50 45 C50 30 60 20 60 20 C55 25 50 35 50 45 Z" fill="#39B54A"/>
                <path d="M50 45 L50 25" stroke="#39B54A" strokeWidth="3" strokeLinecap="round"/>
              </svg>
              <div className="flex flex-col leading-none justify-center">
                <span className="font-display font-bold text-[22px] tracking-tight text-brand-green uppercase leading-tight">The Growth</span>
                <span className="font-display font-bold text-[15px] tracking-[0.15em] text-brand-blue uppercase leading-tight">Neighbor</span>
              </div>
            </div>
          </div>
          <a 
            href="#contact" 
            className="px-6 py-2.5 rounded-full bg-brand-blue text-white font-medium text-sm hover:bg-blue-600 transition-colors shadow-lg shadow-brand-blue/20"
          >
            Get Started
          </a>
        </div>
      </nav>

      <main className="pb-20">
        
        {/* Hero Section with Parallax */}
        <section className="relative pt-40 pb-32 px-6 overflow-hidden min-h-[90vh] flex items-center">
          {/* Subtle Parallax Background */}
          <motion.div 
            style={{ y: heroY, opacity: heroOpacity }}
            className="absolute inset-0 z-0 pointer-events-none"
          >
            <div className="absolute top-20 left-10 w-72 h-72 bg-brand-blue/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-green/5 rounded-full blur-3xl"></div>
          </motion.div>

          <div className="max-w-7xl mx-auto w-full relative z-10">
            <motion.div 
              className="max-w-4xl mx-auto text-center"
              initial="initial"
              animate="animate"
              variants={staggerContainer}
            >
              <motion.div variants={{ initial: { opacity: 0, scale: 0.9 }, animate: { opacity: 1, scale: 1 } }} transition={{ duration: 0.5 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-sm font-semibold text-blue-300 mb-8">
                <Zap className="w-4 h-4 fill-brand-blue text-brand-blue" />
                Premium Quality. Local Focus.
              </motion.div>
              
              <motion.h1 
                variants={{ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } }} transition={{ duration: 0.6 }}
                className="font-display text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.05] text-white mb-8"
              >
                Premium Web Design. <br/>
                <span className="text-brand-green relative whitespace-nowrap">
                  Unbeatable Affordability.
                  <svg className="absolute w-full h-3 -bottom-1 left-0 text-brand-green/30 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent" />
                  </svg>
                </span>
              </motion.h1>
              
              <motion.p variants={{ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } }} transition={{ duration: 0.6 }} className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
                Modern, high-speed, and attractive websites for small businesses without the massive agency price tag.
              </motion.p>
              
              <motion.div variants={{ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } }} transition={{ duration: 0.6 }} className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="#contact" className="w-full sm:w-auto px-8 py-4 rounded-full bg-brand-blue text-white font-semibold text-lg hover:bg-blue-600 transition-all shadow-xl shadow-brand-blue/30 hover:shadow-brand-blue/40 hover:-translate-y-1 flex items-center justify-center gap-2">
                  Get in touch with me <ArrowRight className="w-5 h-5" />
                </a>
                <a href="#standard" className="w-full sm:w-auto px-8 py-4 rounded-full bg-brand-dark/50 border-2 border-brand-dark text-white hover:border-brand-blue/50 hover:bg-brand-dark transition-all flex items-center justify-center">
                  See The Growth Standard
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* The Growth Standard (Comparison) */}
        <section id="standard" className="py-24 bg-brand-dark/30 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial="initial" whileInView="whileInView" viewport={{ once: true, margin: "-100px" }} variants={slideUp}
              className="text-center mb-16"
            >
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">The Growth Standard</h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">Why overpay an agency when you can get the exact same premium code, speed, and design for a fraction of the cost?</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Agency Card */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                className="bg-brand-dark/40 rounded-3xl p-10 border border-white/5 shadow-sm opacity-70 grayscale-[0.5]"
              >
                <div className="text-gray-500 font-semibold tracking-wider uppercase text-sm mb-2">Typical Agency</div>
                <div className="text-4xl font-display font-bold text-gray-500 mb-2">$500 - $800+</div>
                <div className="text-gray-500 text-sm font-medium mb-8">High markups & hidden fees</div>
                <ul className="space-y-5">
                  {[
                    "High overhead costs passed to you",
                    "Slow communication via account managers",
                    "Cookie-cutter templates",
                    "Hidden fees for basic SEO"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-400">
                      <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-gray-500 text-sm font-bold">✕</span>
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Our Card */}
              <motion.div 
                initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-brand-dark/80 rounded-3xl p-10 border-2 border-brand-blue shadow-2xl shadow-brand-blue/10 relative overflow-hidden hover-glow transition-all duration-300"
              >
                <div className="absolute top-0 right-0 bg-brand-blue text-white text-xs font-bold px-4 py-1 rounded-bl-xl uppercase tracking-wider">Best Value</div>
                <div className="text-brand-blue font-semibold tracking-wider uppercase text-sm mb-2">Our Price</div>
                <div className="text-5xl font-display font-bold text-white mb-2">$250</div>
                <div className="text-brand-green text-sm font-bold mb-8">Only $250 flat fee. No surprises.</div>
                <ul className="space-y-5">
                  {[
                    "Premium, hand-crafted code",
                    "Direct communication with the developer",
                    "Lightning-fast load speeds",
                    "Built-in on-page SEO optimization",
                    "Flawless mobile responsiveness"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-200 font-medium">
                      <CheckCircle2 className="w-6 h-6 text-brand-green shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Image Gallery (Recent Work) */}
        <section className="py-24 px-6 max-w-7xl mx-auto">
          <motion.div initial="initial" whileInView="whileInView" viewport={{ once: true }} variants={slideUp} className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">Recent Work</h2>
            <p className="text-xl text-gray-400">High-impact visuals for businesses that demand the best.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800", title: "Growth Analytics", desc: "Clean & Modern Dashboard" },
              { img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800", title: "Sleek Laptops", desc: "Tech Startup Landing Page" },
              { img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800", title: "Small Business Success", desc: "Local Retail E-commerce" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="group relative rounded-2xl overflow-hidden shadow-lg aspect-[4/3] bg-brand-dark/50"
              >
                <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-white font-display font-bold text-xl">{item.title}</h3>
                  <p className="text-blue-200 text-sm font-medium">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Services */}
        <section className="py-24 bg-brand-dark/30 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div initial="initial" whileInView="whileInView" viewport={{ once: true }} variants={slideUp} className="text-center mb-16">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">Core Services</h2>
              <p className="text-xl text-gray-400">Everything you need to grow your local business online.</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Layout className="w-10 h-10 text-brand-blue" />,
                  title: "Responsive Web Design",
                  desc: "Beautiful, fast-loading websites that look perfect on any device. Built to convert visitors into customers."
                },
                {
                  icon: <TrendingUp className="w-10 h-10 text-brand-green" />,
                  title: "SEO Optimization",
                  desc: "Climb the Google rankings. I implement technical SEO best practices so local customers can find you easily."
                },
                {
                  icon: <Smartphone className="w-10 h-10 text-brand-blue" />,
                  title: "Social Media Promotion",
                  desc: "Engaging strategies to build your audience, increase brand awareness, and drive traffic to your new site."
                }
              ].map((service, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.5 }}
                  whileHover={{ y: -8 }}
                  className="bg-brand-dark/40 rounded-3xl p-8 shadow-sm border border-white/5 hover:shadow-xl hover:shadow-brand-blue/10 transition-all duration-300"
                >
                  <div className="mb-6 p-4 bg-brand-blue/10 rounded-2xl inline-block">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{service.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Social Proof (Testimonials) */}
        <section className="py-24 px-6 max-w-7xl mx-auto">
          <motion.div initial="initial" whileInView="whileInView" viewport={{ once: true }} variants={slideUp} className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">High Quality, Low Cost.</h2>
            <p className="text-xl text-gray-400">Hear from businesses that made the switch.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "I was quoted a fortune for a site. The Growth Neighbor did it for a fraction of the cost, and it's actually better. Same quality, better service.",
                author: "Sarah J.",
                role: "Small Business Owner"
              },
              {
                quote: "The Growth Neighbor is the real deal. It looks like a Silicon Valley site but didn't break the bank.",
                author: "David L.",
                role: "Tech Startup"
              },
              {
                quote: "They delivered a clean, modern site that looks like it cost a fortune. Finally, someone who doesn't overcharge.",
                author: "Michael T.",
                role: "Contractor"
              }
            ].map((testimonial, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="bg-brand-dark/40 border border-white/5 shadow-lg shadow-black/40 rounded-3xl p-8 flex flex-col h-full relative"
              >
                <div className="absolute top-8 right-8 text-white/5">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.017 21L16.41 14.596H11.41V3H21.41V14.596L19.017 21H14.017ZM4.017 21L6.41 14.596H1.41V3H11.41V14.596L9.017 21H4.017Z" />
                  </svg>
                </div>
                <div className="flex gap-1 mb-6 relative z-10">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-brand-green text-brand-green" />
                  ))}
                </div>
                <p className="text-gray-300 font-medium text-lg italic mb-8 flex-grow relative z-10">"{testimonial.quote}"</p>
                <div className="relative z-10">
                  <div className="font-bold text-white text-lg">{testimonial.author}</div>
                  <div className="text-sm text-brand-blue font-medium">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-12 px-6 max-w-5xl mx-auto">
          <motion.div 
            initial="initial" whileInView="whileInView" viewport={{ once: true }} variants={slideUp}
            className="bg-brand-dark rounded-[3rem] p-10 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-brand-dark/30"
          >
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            
            <div className="relative z-10">
              <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-6">Ready to Grow?</h2>
              <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
                Stop overpaying for premium web design. Let's build your digital presence today for a flat fee of just $250.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <a 
                    href="mailto:rayanvadsariya15@gmail.com" 
                    className="flex items-center gap-3 px-8 py-5 rounded-full bg-brand-green text-white hover:bg-green-600 transition-colors w-full justify-center shadow-lg font-bold text-lg flex-1"
                  >
                    <Mail className="w-6 h-6" />
                    <span>rayanvadsariya15@gmail.com</span>
                  </a>
                  <button 
                    onClick={() => handleCopy('rayanvadsariya15@gmail.com', 'email')}
                    className="p-5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors shadow-lg flex-shrink-0"
                    aria-label="Copy email"
                  >
                    {copiedEmail ? <Check className="w-6 h-6 text-brand-green" /> : <Copy className="w-6 h-6" />}
                  </button>
                </div>
                
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <a 
                    href="tel:205-864-8814" 
                    className="flex items-center gap-3 px-8 py-5 rounded-full bg-brand-blue text-white hover:bg-blue-700 transition-colors w-full justify-center shadow-lg font-bold text-lg border border-blue-500 flex-1"
                  >
                    <Phone className="w-6 h-6" />
                    <span>205-864-8814</span>
                  </a>
                  <button 
                    onClick={() => handleCopy('205-864-8814', 'phone')}
                    className="p-5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors shadow-lg flex-shrink-0 border border-white/10"
                    aria-label="Copy phone number"
                  >
                    {copiedPhone ? <Check className="w-6 h-6 text-brand-green" /> : <Copy className="w-6 h-6" />}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-10 text-center text-gray-500 text-sm bg-brand-dark/20">
        <p className="font-medium">© {new Date().getFullYear()} The Growth Neighbor. All rights reserved.</p>
        <p className="mt-2 text-gray-400">Premium quality for a fraction of the cost.</p>
      </footer>
    </div>
  );
}
