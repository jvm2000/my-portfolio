<script setup lang="ts">
type Experience = {
  title: string
  company: string
  duration: string
  description: string
  technologies: string[]
}

const experiences: Experience[] = [
  {
    title: 'WordPress Developer (Part-Time)',
    company: 'Rothbright',
    duration: 'Jan 2026 — Present',
    description: 'Developed, enhanced, fixed and deployed WordPress website themes and Shopify storefronts.',
    technologies: [
      'Avada',
      'Warehouse Theme',
      'Shopify'
    ]
  }, {
    title: 'Full-stack Developer',
    company: 'Carleads PH',
    duration: 'Nov 2025 — Dec 2025',
    description: 'Designed, built, and deployed the full system end-to-end. Crafted the UI and integrated form submissions directly into Google Sheets.',
    technologies: [
      'Laravel',
      'MySQL',
      'Vue 3',
      'Nuxt 3',
      'Google API'
    ]
  }, {
    title: 'WordPress Developer',
    company: 'Genashtim',
    duration: 'Sep 2025 — Jan 2026',
    description: 'Developed, enhanced, fixed, and deployed a range of WordPress websites.',
    technologies: [
      'DIVI',
      'Elementor'
    ]
  }, {
    title: 'Full-stack Developer',
    company: 'Restauro Legal Services',
    duration: 'Aug 2025 — Sep 2025',
    description: 'Owned the entire build: frontend, backend, hosted API and mailing services, and configured the production domain.',
    technologies: [
      'Laravel',
      'MySQL',
      'Vue 3',
      'Nuxt 3'
    ]
  }, {
    title: 'Frontend Developer',
    company: 'AguyIknow / Whitebelt',
    duration: 'Jan 2023 — Present',
    description: 'Maintained the AXIS website, shipped new frontend features to elevate the user experience, and ensured smooth integration of backend updates while preserving system stability and performance.',
    technologies: [
      'Vue 3',
      'Composition API',
      'JavaScript',
      'Tailwind CSS',
      'Laravel',
      'MySQL',
      'Nuxt 3'
    ]
  }, {
    title: 'Full-stack Developer',
    company: 'Paps Fitness Gym',
    duration: 'Nov 2024',
    description: 'Designed, developed, and maintained both the backend and user interface using PHP and native JavaScript — focused on functionality, efficiency, and a friendly experience.',
    technologies: [
      'JavaScript',
      'Tailwind CSS',
      'PHP'
    ]
  }, {
    title: 'Full-stack Developer',
    company: 'FitFinder',
    duration: 'Aug 2023 — Jan 2024',
    description: "Led the team's frontend and backend development, oversaw feature implementation, code quality, and system optimization. Managed code merging for seamless collaboration.",
    technologies: [
      'Laravel',
      'MySQL',
    ]
  }, {
    title: 'Video Editor (Personal)',
    company: 'fin — YouTube',
    duration: 'Feb 2016 — Apr 2025',
    description: "Produced gaming content for YouTube using Adobe Premiere Pro.",
    technologies: [
      'Adobe Premiere',
    ]
  }, {
    title: 'Video Editor (Personal)',
    company: 'goGame',
    duration: 'Sep 2022 — Jan 2023',
    description: "Edited advertising spots for a project using Adobe Premiere Pro.",
    technologies: [
      'Adobe Premiere',
    ]
  }
]
</script>

<template>
  <section id="experience" class="flex flex-col items-start space-y-12 w-full">
    <BaseAnchor label="02 - Experience" />

    <div class="flex flex-col items-start w-full">
      <BaseExperienceCard
        v-for="exp in experiences"
        :title="exp.title"
        :company="exp.company"
        :duration="exp.duration"
        :description="exp.description"
        :technologies="exp.technologies"
      />
    </div>
  </section>
</template>

<style scoped>
.font-fraunces {
  font-family: 'Fraunces', serif;
}
</style>