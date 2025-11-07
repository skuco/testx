"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { translations } from "@/lib/translations"
import { CheckCircle2, Lightbulb, BookOpen, MessageSquare, Moon, Sun } from "lucide-react"

// Tool logo components
const PlaywrightLogo = () => (
  <img
    src="https://cdn.brandfetch.io/idpyc8TcWP/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1759069014905"
    alt="Playwright"
    className="w-40 h-40 object-contain filter brightness-110 hover:brightness-125 transition duration-300"
    style={{
      filter: "brightness(1.1) contrast(1.1) drop-shadow(0 0 8px rgba(34, 211, 238, 0.2))",
    }}
  />
)

const CypressIcon = () => (
  <img
    src="https://cdn.brandfetch.io/idIq_kF0rb/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1667565307270"
    alt="Cypress"
    className="w-40 h-40 object-contain filter brightness-110 hover:brightness-125 transition duration-300"
    style={{
      filter: "brightness(1.1) contrast(1.1) drop-shadow(0 0 8px rgba(34, 211, 238, 0.2))",
    }}
  />
)

const K6Icon = () => (
  <img
    src="https://cdn.brandfetch.io/idI__V61tX/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1756019727212"
    alt="K6"
    className="w-40 h-40 object-contain filter brightness-110 hover:brightness-125 transition duration-300"
    style={{
      filter: "brightness(1.1) contrast(1.1) drop-shadow(0 0 8px rgba(34, 211, 238, 0.2))",
    }}
  />
)

const SeleniumIcon = () => (
  <img
    src="https://cdn.brandfetch.io/id3uyOwT-S/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1759268542965"
    alt="Selenium"
    className="w-40 h-40 object-contain filter brightness-110 hover:brightness-125 transition duration-300"
    style={{
      filter: "brightness(1.1) contrast(1.1) drop-shadow(0 0 8px rgba(34, 211, 238, 0.2))",
    }}
  />
)

const RobotFrameworkIcon = () => (
  <img
    src="https://testautomationtools.dev/wp-content/uploads/2023/03/robot-framework-logo-square.png"
    alt="Robot Framework"
    className="w-40 h-40 object-contain filter brightness-110 hover:brightness-125 transition duration-300"
    style={{
      filter: "brightness(1.1) contrast(1.1) drop-shadow(0 0 8px rgba(34, 211, 238, 0.2))",
    }}
  />
)

const JMeterIcon = () => (
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/2/22/Apache_JMeter.png"
    alt="JMeter"
    className="w-40 h-40 object-contain filter brightness-110 hover:brightness-125 transition duration-300"
    style={{
      filter: "brightness(1.1) contrast(1.1) drop-shadow(0 0 8px rgba(34, 211, 238, 0.2))",
    }}
  />
)

export default function Home() {
  const [language, setLanguage] = useState<"en" | "sk">("en")
  const [theme, setTheme] = useState<"light" | "dark">("light")
  const [mounted, setMounted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as "en" | "sk" | null
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null
    setLanguage(savedLanguage || "en")
    setTheme(savedTheme || "light")
    setMounted(true)
  }, [])

  const t = translations[language]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    window.location.href = `mailto:info@testx.sk?subject=Consultation Request from ${formData.name}&body=${formData.message}`
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const toggleLanguage = () => {
    const newLang = language === "en" ? "sk" : "en"
    setLanguage(newLang)
    localStorage.setItem("language", newLang)
  }

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
  }

  if (!mounted) return null

  const bgClass = theme === "light" ? "bg-white" : "bg-zinc-950"
  const textClass = theme === "light" ? "text-zinc-900" : "text-white"
  const navBgClass = theme === "light" ? "bg-white/80" : "bg-zinc-950/80"
  const borderClass = theme === "light" ? "border-zinc-200" : "border-zinc-800"
  const cardBgClass = theme === "light" ? "bg-zinc-50" : "bg-zinc-900"
  const cardHoverBgClass = theme === "light" ? "hover:bg-white" : "hover:bg-zinc-800"
  const inputBgClass = theme === "light" ? "bg-white" : "bg-zinc-900"
  const inputBorderClass = theme === "light" ? "border-zinc-300" : "border-zinc-700"
  const secondaryTextClass = theme === "light" ? "text-zinc-600" : "text-zinc-400"
  const footerBgClass = theme === "light" ? "bg-zinc-100" : "bg-zinc-900"

  return (
    <div className={`min-h-screen ${bgClass} ${textClass}`}>
      {/* Navigation */}
      <nav className={`sticky top-0 z-50 ${navBgClass} backdrop-blur border-b ${borderClass}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-cyan-500 relative">
                <div className={`absolute inset-1 ${theme === "light" ? "bg-white" : "bg-zinc-950"}`} />
              </div>
              <span className="text-lg font-bold tracking-tight">TESTX</span>
            </div>

            <div className="hidden md:flex items-center gap-8">
              <a
                href="#services"
                className={`text-sm ${secondaryTextClass} hover:text-cyan-600 transition duration-300`}
              >
                {t.nav.services}
              </a>
              <a href="#tech" className={`text-sm ${secondaryTextClass} hover:text-cyan-600 transition duration-300`}>
                {t.nav.technology}
              </a>
              <a
                href="#contact"
                className={`text-sm ${secondaryTextClass} hover:text-cyan-600 transition duration-300`}
              >
                {t.nav.contact}
              </a>
              <a href="#about" className={`text-sm ${secondaryTextClass} hover:text-cyan-600 transition duration-300`}>
                {t.nav.about}
              </a>

              <button
                onClick={toggleTheme}
                className={`p-2 rounded border ${borderClass} hover:text-cyan-600 transition duration-300`}
                aria-label="Toggle theme"
              >
                {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
              </button>

              <button
                onClick={toggleLanguage}
                className={`text-xs font-semibold px-3 py-2 border ${borderClass} hover:border-cyan-600 rounded transition duration-300`}
              >
                {language === "en" ? "SK" : "EN"}
              </button>
            </div>

            {/* Mobile theme and language switcher */}
            <div className="md:hidden flex items-center gap-2">
              <button
                onClick={toggleTheme}
                className={`p-2 rounded border ${borderClass} hover:text-cyan-600 transition duration-300`}
                aria-label="Toggle theme"
              >
                {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
              </button>
              <button
                onClick={toggleLanguage}
                className={`text-xs font-semibold px-2 py-1 border ${borderClass} hover:border-cyan-600 rounded transition duration-300`}
              >
                {language === "en" ? "SK" : "EN"}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={`relative py-24 md:py-32 border-b ${borderClass}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight text-balance leading-tight">
                {t.hero.title}
              </h1>
              <p className={`text-lg ${secondaryTextClass} mb-8 text-balance leading-relaxed`}>{t.hero.description}</p>
              <Link href="mailto:info@testx.sk">
                <Button className="bg-cyan-600 hover:bg-cyan-700 text-white font-semibold px-8 py-3 text-base">
                  {t.hero.cta}
                </Button>
              </Link>
            </div>
            <div className="hidden md:flex items-center justify-center">
              <div
                className={`w-full aspect-square ${theme === "light" ? "bg-gradient-to-br from-cyan-100 to-blue-100 border-cyan-200" : "bg-gradient-to-br from-cyan-900 to-blue-900 border-cyan-800"} border rounded-2xl flex items-center justify-center`}
              >
                <div className="text-center">
                  <div className="text-6xl mb-4 text-cyan-600">{"</"}</div>
                  <p className={`${secondaryTextClass} font-mono text-sm`}>QA Testing Platform</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className={`py-24 border-b ${borderClass}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">{t.services.title}</h2>
          <p className={`${secondaryTextClass} mb-16 text-balance max-w-2xl`}>{t.services.description}</p>

          <div className="grid md:grid-cols-2 gap-8">
            {t.services.items.map((service, idx) => {
              const icons = [
                <CheckCircle2 key="icon-0" className="w-8 h-8 text-cyan-600" strokeWidth={1.5} />,
                <Lightbulb key="icon-1" className="w-8 h-8 text-cyan-600" strokeWidth={1.5} />,
                <BookOpen key="icon-2" className="w-8 h-8 text-cyan-600" strokeWidth={1.5} />,
                <MessageSquare key="icon-3" className="w-8 h-8 text-cyan-600" strokeWidth={1.5} />,
              ]
              return (
                <div
                  key={idx}
                  className={`group p-8 border ${borderClass} hover:border-cyan-400 transition duration-300 rounded-lg ${cardBgClass} ${cardHoverBgClass} cursor-pointer`}
                >
                  <div className="w-12 h-12 flex items-center justify-center mb-6 group-hover:scale-110 transition duration-300">
                    {icons[idx]}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className={`${secondaryTextClass} text-sm leading-relaxed`}>{service.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="tech" className={`py-24 border-b ${borderClass}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">{t.tech.title}</h2>
          <p className={`${secondaryTextClass} mb-16 text-balance max-w-2xl`}>{t.tech.description}</p>

          <div className="flex justify-center">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 w-full max-w-4xl">
              {[
                { name: "Playwright", Icon: PlaywrightLogo, href: "https://playwright.dev" },
                { name: "Cypress", Icon: CypressIcon, href: "https://www.cypress.io" },
                { name: "K6", Icon: K6Icon, href: "https://k6.io" },
                { name: "Selenium", Icon: SeleniumIcon, href: "https://www.selenium.dev" },
                { name: "Robot Framework", Icon: RobotFrameworkIcon, href: "https://robotframework.org" },
                { name: "JMeter", Icon: JMeterIcon, href: "https://jmeter.apache.org" },
              ].map((tech) => (
                <a
                  key={tech.name}
                  href={tech.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center p-8 md:p-12 border ${borderClass} hover:border-cyan-400 rounded-lg ${theme === "light" ? "bg-white hover:bg-zinc-50" : "bg-zinc-900 hover:bg-zinc-800"} transition duration-300 group min-h-64`}
                >
                  <div className="text-cyan-600 group-hover:scale-110 transition duration-300">
                    <tech.Icon />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-24 border-b ${borderClass}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">{t.contact.title}</h2>
          <p className={`${secondaryTextClass} mb-16 text-balance max-w-2xl`}>{t.contact.description}</p>

          <div className="max-w-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-3">
                  {t.contact.name}
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 ${inputBgClass} border ${inputBorderClass} hover:border-cyan-400 focus:border-cyan-600 focus:outline-none transition duration-300 rounded`}
                  placeholder={t.contact.namePlaceholder}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-3">
                  {t.contact.email}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 ${inputBgClass} border ${inputBorderClass} hover:border-cyan-400 focus:border-cyan-600 focus:outline-none transition duration-300 rounded`}
                  placeholder={t.contact.emailPlaceholder}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-3">
                  {t.contact.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className={`w-full px-4 py-3 ${inputBgClass} border ${inputBorderClass} hover:border-cyan-400 focus:border-cyan-600 focus:outline-none transition duration-300 rounded resize-none`}
                  placeholder={t.contact.messagePlaceholder}
                />
              </div>

              <Button type="submit" className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-3">
                {t.contact.send}
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`${footerBgClass} border-t ${borderClass} py-16`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3
                className={`text-sm font-semibold uppercase tracking-wider mb-6 ${theme === "light" ? "text-zinc-700" : "text-zinc-300"}`}
              >
                {t.footer.contactTitle}
              </h3>
              <div className={`space-y-3 text-sm ${secondaryTextClass}`}>
                <p>{t.footer.address}</p>
                <p>{t.footer.city}</p>
                <p>
                  <a href="tel:+421949184534" className="hover:text-cyan-600 transition">
                    +421 949 184 534
                  </a>
                </p>
                <p>
                  <a href="mailto:info@testx.sk" className="hover:text-cyan-600 transition">
                    info@testx.sk
                  </a>
                </p>
              </div>
            </div>

            <div>
              <h3
                className={`text-sm font-semibold uppercase tracking-wider mb-6 ${theme === "light" ? "text-zinc-700" : "text-zinc-300"}`}
              >
                {t.footer.aboutTitle}
              </h3>
              <p className={`text-sm ${secondaryTextClass} leading-relaxed`}>{t.footer.aboutText}</p>
            </div>

            <div>
              <h3
                className={`text-sm font-semibold uppercase tracking-wider mb-6 ${theme === "light" ? "text-zinc-700" : "text-zinc-300"}`}
              >
                {t.footer.hoursTitle}
              </h3>
              <div className={`space-y-2 text-sm ${secondaryTextClass}`}>
                <p>{t.footer.mondayFriday}</p>
                <p>{t.footer.weekend}</p>
                <p>{t.footer.available}</p>
              </div>
            </div>
          </div>

          <div className={`border-t ${borderClass} pt-8 text-center text-sm ${secondaryTextClass}`}>
            <p>{t.footer.copyright}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
