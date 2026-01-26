"use client"

import { AnimatePresence, motion } from "motion/react"
import { useEffect, useState } from "react"
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"

const socialIcons = [
    {
        href: "https://github.com/Dashzevge",
        label: "GitHub",
        Icon: FaGithub,
        className: "text-blue-500",
    },
    {
        href: "https://www.instagram.com/dashzevgebumchin/",
        label: "Instagram",
        Icon: FaInstagram,
        className: "text-pink-500",
    },
    {
        href: "https://www.linkedin.com/in/dash-bumchin",
        label: "LinkedIn",
        Icon: FaLinkedin,
        className: "text-[#0A66C2]",
    },
]

export default function PathMorphing() {
    const [iconIndex, setIconIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setIconIndex((prev) => (prev + 1) % socialIcons.length)
        }, 3300)

        return () => clearInterval(interval)
    }, [])

    const { href, label, Icon, className } = socialIcons[iconIndex]

    return (
        <div className="inline-flex items-center justify-center">
            <AnimatePresence mode="wait">
                <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="inline-flex items-center justify-center rounded-full border border-cyan-400/30 bg-neutral-900/70 p-3 shadow-md"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                    <Icon className={`h-6 w-6 ${className}`} />
                </motion.a>
            </AnimatePresence>
        </div>
    )
}

export function MotionIconLink({ href, label, Icon, className }) {
    return (
        <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="inline-flex items-center justify-center rounded-full border border-cyan-400/30 bg-neutral-900/70 p-2 shadow-md"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
        >
            <Icon className={`h-5 w-5 ${className}`} />
        </motion.a>
    )
}
