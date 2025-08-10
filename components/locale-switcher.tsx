"use client"

import { useState } from "react"
import { Globe } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { motion } from "framer-motion"

interface LocaleSwitcherProps {
  isMobile?: boolean;
}

export default function LocaleSwitcher({ isMobile = false }: LocaleSwitcherProps) {
  const [locale, setLocale] = useState("en") // Default locale

  const locales = [
    { code: "en", name: "English" },
    { code: "es", name: "Spanish" },
    { code: "fr", name: "Portuguese" },
    { code: "fr", name: "Italian" },
    { code: "fr", name: " French" },
  ]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size={isMobile ? "lg" : "icon"} className={isMobile ? "w-11/12 rounded-full" : "rounded-full"} aria-label="Select language">
          <Globe className={isMobile ? "h-6 w-6 mr-2" : "h-5 w-5"} />
          {isMobile && "Language"}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {locales.map((lang) => (
          <DropdownMenuItem key={lang.code} onClick={() => setLocale(lang.code)} aria-label={`Switch to ${lang.name}`}>
            {lang.name} {locale === lang.code && " (Current)"}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
