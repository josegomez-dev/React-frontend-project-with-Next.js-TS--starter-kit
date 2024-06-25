// pages/onboarding.tsx

import styles from '@/app/assets/styles/Onboarding.module.css'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react'

const steps = [
  {
    title: "Welcome to the App!",
    description: "We're excited to have you. Let's get started with a quick tour.",
    imageUrl: "/catarsismusical-logo.png"
  },
  {
    title: "Personalize Your Profile",
    description: "Add some personal details to customize your profile.",
    imageUrl: "/catarsismusical-logo.png"
  },
  {
    title: "Explore Features",
    description: "Learn about the key features of our app to make the most out of it.",
    imageUrl: "/catarsismusical-logo.png"
  },
  {
    title: "Get Started!",
    description: "You're all set. Enjoy using the app and feel free to reach out if you need any help.",
    imageUrl: "/catarsismusical-logo.png"
  }
]

const Onboarding = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const router = useRouter()

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      // Navigate to the user's main dashboard or home after the final step
      router.push('/user')
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  return (
    <div className={styles['onboarding-container']}>
      <div className={styles['onboarding-card']}>
        <h1 className={styles['onboarding-header']}>
          {steps[currentStep].title}
        </h1>
        <div className={styles['onboarding-step']}>
          <p>{steps[currentStep].description}</p>
          {steps[currentStep].imageUrl && (
            <Image
              style={{ filter: 'invert(1) drop-shadow(0 0 0.3rem #ffffff70)' }}
              src={steps[currentStep].imageUrl}
              alt={steps[currentStep].title}
              width={350}
              height={350}
            />
          )}
        </div>
        <div className={styles['onboarding-navigation']}>
          {currentStep > 0 && (
            <button
              onClick={prevStep}
              className={`${styles['navigation-button']} ${styles['navigation-button-secondary']}`}
            >
              Back
            </button>
          )}
          <button
            onClick={nextStep}
            className={`${styles['navigation-button']} ${styles['navigation-button-primary']}`}
          >
            {currentStep < steps.length - 1 ? 'Next' : 'Finish'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Onboarding
