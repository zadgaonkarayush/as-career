export interface ResumeData {
  personal: {
    name?: string
    title?: string
    phone?: string
    email?: string
    location?: string
    linkedin?: string
  }

  summary?: string

  experience: {
    role: string
    company: string
    location?: string
    startDate: string
    endDate: string
    points: string[]
  }[]

  education?: {
    degree: string
    institute: string
    location?: string
    startDate: string
    endDate: string
  }[]

  skills?: string[]
  certifications?: string[]
  achievements?: string[]
}
